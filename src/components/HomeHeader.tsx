import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './UserPhoto';

import { useAuth } from '@hooks/auth';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

type HomeHeaderProps = {};

export const HomeHeader: React.FC<HomeHeaderProps> = ({}) => {
  const { user } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} paddingX={8} alignItems="center">
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        alt="Imagem do usuário"
        size={16}
        marginRight={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading
          color="gray.100"
          fontSize="md"
          fontFamily="heading"
          textTransform={'capitalize'}
        >
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
};
