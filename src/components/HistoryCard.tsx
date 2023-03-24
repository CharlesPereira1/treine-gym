import React from 'react';
import { Heading, HStack, Text, VStack } from 'native-base';

import { HistoryDTO } from '@dtos/HistoryDTO';

type HistoryCardProps = { data: HistoryDTO };

export const HistoryCard: React.FC<HistoryCardProps> = ({ data }) => {
  return (
    <HStack
      w="full"
      px={5}
      paddingY={4}
      marginBottom={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {data.group}
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {data.hours}
      </Text>
    </HStack>
  );
};
