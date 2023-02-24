import { Center, Text } from 'native-base';
import React from 'react';

type ProfileProps = {};

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <Center flex={1}>
      <Text color="white">Profile</Text>
    </Center>
  );
};
