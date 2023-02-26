import React, { useState } from 'react';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExeriseCard } from '@components/ExerciseCard';

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  const [groups, setGroups] = useState([
    'costas',
    'biceps',
    'tríceps',
    'ombro',
    'perna',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Agaixamento terra',
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
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExeriseCard title={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
};
