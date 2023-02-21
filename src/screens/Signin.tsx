import { Center, Image, Text, VStack } from 'native-base';
import React from 'react';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

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
      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  );
};
