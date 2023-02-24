import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import { AuthNavigationroutesProps } from '@routes/auth.routes';

import { Input } from '@components/input';
import { Button } from '@components/button';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

type SigninProps = {};

export const Signin: React.FC<SigninProps> = ({}) => {
  const navigation = useNavigation<AuthNavigationroutesProps>();

  const handleNewAccount = () => {
    navigation.navigate('signUp');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
