'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push('../login');
  }, []);

  return;
};

export default Page;
