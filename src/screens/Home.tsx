import React from 'react';
import { Center, Text, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <VStack>
      <HomeHeader />
    </VStack>
  );
};
