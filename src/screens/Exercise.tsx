import { Center, Text } from 'native-base';
import React from 'react';

type ExerciseProps = {};

export const Exercise: React.FC<ExerciseProps> = ({}) => {
  return (
    <Center flex={1}>
      <Text color="white">Exercise</Text>
    </Center>
  );
};
