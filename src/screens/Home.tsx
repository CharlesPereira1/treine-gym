import { Center, Text } from 'native-base';
import React from 'react';

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Center flex={1}>
      <Text color="white">Home</Text>
    </Center>
  );
};
