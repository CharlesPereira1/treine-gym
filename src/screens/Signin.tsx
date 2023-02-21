import { Image, VStack } from 'native-base';
import React from 'react';

import BackgroundImg from '@assets/background.png';

type SigninProps = {};

export const Signin: React.FC<SigninProps> = ({}) => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
};
