import React, { useState } from 'react';
import { FlatList, VStack } from 'native-base';

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
    </VStack>
  );
};
