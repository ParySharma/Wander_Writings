import { Typography } from '@/styles/common';
import React from 'react';

const ModuleNameTitle = (props: any) => {
  return (
    <div>
      <Typography
        size={22}
        weight={500}
        color={'var(--body-text-color)'}
        mb={25}
      >
        {props?.title}
      </Typography>
    </div>
  );
};

export default ModuleNameTitle;
