"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { ComponentType } from 'react';

export function withAuth(Component: ComponentType) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();

    useEffect(() => {
      const { authToken } = parseCookies();

      if (!authToken) {
        router.push('/auth/login');
      }
    }, [router]);

    return <Component {...props} />;
  };
}
