import React from 'react';
import { Center, Text, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';

type HistoryProps = {};

export const History: React.FC<HistoryProps> = ({}) => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
    </VStack>
  );
};
