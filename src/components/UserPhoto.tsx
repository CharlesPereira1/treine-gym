import React from 'react';
import { Image, IImageProps } from 'native-base';

type UserPhotoProps = IImageProps & {
  size: number;
};

export const UserPhoto: React.FC<UserPhotoProps> = ({ size, ...rest }) => {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...rest}
    />
  );
};
