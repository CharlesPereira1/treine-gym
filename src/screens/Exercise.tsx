import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Button } from '@components/Button';

import BodySVG from '@assets/body.svg';
import SeriesSVG from '@assets/series.svg';
import RepetitionsSVG from '@assets/repetitions.svg';

type ExerciseProps = {};

export const Exercise: React.FC<ExerciseProps> = ({}) => {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    goBack();
  };

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
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySVG />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: 'https://blog.lionfitness.com.br/wp-content/uploads/2019/01/Blog-75-1.jpg',
            }}
            alt="Imagem do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

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
                  4 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSVG />
                <Text color="gray.200" ml={2}>
                  10/12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
