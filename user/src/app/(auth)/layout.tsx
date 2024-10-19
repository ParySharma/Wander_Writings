'use client';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useRouter } from 'next/navigation';

const FlyPlane = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  font-size: 40px;
  animation: fly 20s infinite;

  @keyframes fly {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(500px, -50px);
    }
    40% {
      transform: translate(300px, 300px);
    }
    60% {
      transform: translate(500px, -100px);
    }
    80% {
      transform: translate(800px, 50px);
    }
    100% {
      transform: translate(900px, -200px);
    }
  }
`;

// Straight animation for train
const MoveTrain = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50px;
  font-size: 40px;
  animation: move 15s infinite linear;

  @keyframes move {
    0% {
      transform: translateX(10);
    }
    100% {
      transform: translateX(170vh);
    }
  }
`;

const StyledStack = styled(Stack)`
  background-image: url('/images/login_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <StyledStack>
      <FlyPlane>✈️</FlyPlane>
      <MoveTrain>🚃🚃🚃🚃🚃🚃</MoveTrain>
      <Box>{children}</Box>
    </StyledStack>
  );
}
