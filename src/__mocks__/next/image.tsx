// src/__mocks__/next/image.tsx
import React from 'react';

const NextImage = ({ src, alt, priority, ...props }: any) => {
  return <img src={src} alt={alt} {...props} />;
};

export default NextImage;
