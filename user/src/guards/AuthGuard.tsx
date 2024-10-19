'use client';

import { redirect } from 'next/navigation';

export const AuthGuard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // return redirect('./auth/login');

  return children;
};
