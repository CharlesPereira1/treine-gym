import React, { useState } from 'react';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  const [groups, setGroups] = useState([
    'costas',
    'biceps',
    'tríceps',
    'ombro',
    'perna',
  ]);
  const [groupSelected, setGroupSelected] = useState('costas');

  return (
    <VStack>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        marginY={10}
        maxH={10}
      />

      {/* flex={1} ? */}
      <VStack paddingX={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
