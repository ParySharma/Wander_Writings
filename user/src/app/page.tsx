'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push('../login');
  }, []);

  return;
};

export default LandingPage;
