import React, { useState } from 'react';
import { ScrollView, VStack, Center, Skeleton } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';

type ProfileProps = {};

const PHOTO_SIZE = 33;

export const Profile: React.FC<ProfileProps> = ({}) => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/charlespereira1.png' }}
              alt="foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  );
};
