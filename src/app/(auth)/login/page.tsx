'use client';
import { Form, Typography } from '@/styles/common';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useLayoutEffect } from 'react';
import Input from '@/components/Input';
import { Divider, Grid2 } from '@mui/material';
import ButtonStyled from '@/components/Button';
import { BUTTON_TYPE, BUTTON_VARIANT_TYPE } from '@/utils/constants';
import moment from 'moment';
import { useRouter } from 'next/navigation';

const StyledBox = styled(Box)`
  width: 350px;
  min-height: 450px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffffd1;
`;

const LoginPage = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    document.title = 'Wander Writing | Login';
  }, []);
  return (
    <div>
      <Typography size={24} weight={600} position='center' mb={24}>
        Welcome to the User App
      </Typography>
      <StyledBox>
        <Typography size={20} weight={600} position='center' mb={24}>
          Login
        </Typography>
        <Typography size={16} weight={400} mb={24}>
          Login to your account to continue using the app
        </Typography>
        <Form>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12 }}>
              <Input type='text' placeHolder='Username' />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Input type='password' placeHolder='Password' />
            </Grid2>
          </Grid2>
          <Box onClick={() => router.push('../forgot-Pass')}>
            <Typography size={14} weight={500} mt={10} position='right'>
              <a
                style={{
                  color: '#DC362E',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                // onClick={
                //   // () => router.push('../forgot-Pass')
                //   () => alert('Forgot Password?')
                // }
              >
                Forgot Password?
              </a>
            </Typography>
          </Box>
          <Box textAlign='center'>
            <ButtonStyled
              type={BUTTON_TYPE.SUBMIT}
              variant={BUTTON_VARIANT_TYPE.OUTLINED}
              text=' Login'
              mt={24}
              width='100%'
            />
            <Divider
              variant='middle'
              style={{
                marginTop: '16px',
                marginBottom: '16px',
                width: '90%',
              }}
            />
            <ButtonStyled
              type={BUTTON_TYPE.BUTTON}
              variant={BUTTON_VARIANT_TYPE.CONTAINED}
              text='Register'
              backgroundColor='var(--disable-button-color)'
              borderColor='var(--disable-button-color)'
              width='100%'
            />
          </Box>
        </Form>
        <Typography size={14} weight={400} mt={24} position='center'>
          Copyright ©{moment().format('YYYY')} WanderWritings. All Rights
          Reserved.
        </Typography>
      </StyledBox>
    </div>
  );
};

export default LoginPage;
