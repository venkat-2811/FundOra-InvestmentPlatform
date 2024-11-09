// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth-response';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const user = await this.userRepository.findOne({
      where: { email: loginInput.email },
    });

    if (!user || !(await bcrypt.compare(loginInput.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      user,
    };
  }

  async register(registerInput: RegisterInput): Promise<AuthResponse> {
    const existingUser = await this.userRepository.findOne({
      where: { email: registerInput.email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(registerInput.password, 10);
    const user = this.userRepository.create({
      ...registerInput,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      user,
    };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }
}