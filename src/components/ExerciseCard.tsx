import React from 'react';
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type ExeriseCardProps = TouchableOpacityProps & {};

export const ExeriseCard: React.FC<ExeriseCardProps> = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://blog.lionfitness.com.br/wp-content/uploads/2019/01/Blog-75-1.jpg',
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          marginRight={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" marginTop={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
};
