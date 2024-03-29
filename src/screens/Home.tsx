import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Heading, HStack, Text, useToast, VStack } from 'native-base';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExeriseCard } from '@components/ExerciseCard';

import { AppError } from '@utils/AppError';
import { api } from '@services/api';

import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { Loading } from '@components/Loading';

export const Home: React.FC = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [groupSelected, setGroupSelected] = useState('antebraço');

  const toast = useToast();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = (exerciseId: string) => {
    navigation.navigate('exercise', { exerciseId });
  };

  const fetchGroups = async () => {
    try {
      const reponse = await api.get('groups');

      setGroups(reponse.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os grupos musculares.';

      toast.show({ title, placement: 'top', bgColor: 'red.500' });
    }
  };

  const fetchExercisesByGroups = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`exercises/bygroup/${groupSelected}`);

      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios.';

      toast.show({ title, placement: 'top', bgColor: 'red.500' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroups();
    }, [groupSelected])
  );

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
        minH={10}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <VStack paddingX={8}>
          <HStack justifyContent="space-between" mb={5}>
            <Heading color="gray.200" fontSize="md" fontFamily="heading">
              Exercícios
            </Heading>

            <Text color="gray.200" fontSize="sm">
              {exercises.length}
            </Text>
          </HStack>

          <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExeriseCard
                data={item}
                onPress={() => handleOpenExerciseDetails(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ paddingBottom: 20 }}
          />
        </VStack>
      )}
    </VStack>
  );
};
