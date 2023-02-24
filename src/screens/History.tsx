import { Center, Text } from 'native-base';
import React from 'react';

type HistoryProps = {};

export const History: React.FC<HistoryProps> = ({}) => {
  return (
    <Center flex={1}>
      <Text color="white">History</Text>
    </Center>
  );
};
