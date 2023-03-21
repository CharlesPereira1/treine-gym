import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Button } from '@components/Button';

import BodySVG from '@assets/body.svg';
import SeriesSVG from '@assets/series.svg';
import RepetitionsSVG from '@assets/repetitions.svg';

import { api } from '@services/api';

import { AppError } from '@utils/AppError';
import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { Loading } from '@components/Loading';

type RouteParamsProps = {
  exerciseId: string;
};

export const Exercise: React.FC = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);

  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const { exerciseId } = useRoute().params as RouteParamsProps;

  const toast = useToast();

  const handleGoBack = () => {
    goBack();
  };

  const fetchExerciseDetail = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`exercises/${exerciseId}`);

      console.log(
        `${api.defaults.baseURL}exercise/demo/${exercise.demo}`,
        exerciseId
      );

      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercício.';

      toast.show({ title, placement: 'top', bgColor: 'red.500' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExerciseDetail();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          {/*
           * flexShrink 1: impende que chegue o texto do lado para o canto
           */}
          <Heading
            color="gray.100"
            fontSize="lg"
            flexShrink={1}
            fontFamily="heading"
          >
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySVG />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        {isLoading ? (
          <Loading />
        ) : (
          <VStack p={8}>
            {/* overflow = hidden ( se nao couber arrondar escondendo partes fora do espaço) */}
            <Box rounded="lg" mb={3} overflow="hidden">
              <Image
                w="full"
                h={80}
                source={{
                  uri: `${api.defaults.baseURL}exercise/demo/${exercise.demo}`,
                }}
                alt="Nome do exercício"
                resizeMode="cover"
                rounded="lg"
              />
            </Box>

            <Box bg="gray.600" rounded="md" pb={4} px={4}>
              <HStack
                alignItems="center"
                justifyContent="space-around"
                mb={6}
                mt={5}
              >
                <HStack>
                  <SeriesSVG />
                  <Text color="gray.200" ml={2}>
                    {exercise.series} séries
                  </Text>
                </HStack>

                <HStack>
                  <RepetitionsSVG />
                  <Text color="gray.200" ml={2}>
                    {exercise.repetitions} repetições
                  </Text>
                </HStack>
              </HStack>

              <Button title="Marcar como realizado" />
            </Box>
          </VStack>
        )}
      </ScrollView>
    </VStack>
  );
};
