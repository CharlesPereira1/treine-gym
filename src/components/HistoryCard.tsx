import React from 'react';
import { Center, Heading, HStack, Text, VStack } from 'native-base';

type HistoryCardProps = { title?: string };

export const HistoryCard: React.FC<HistoryCardProps> = ({ title }) => {
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
          Costas
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        08:23
      </Text>
    </HStack>
  );
};
