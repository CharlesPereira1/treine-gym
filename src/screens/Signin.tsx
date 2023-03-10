import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthNavigationroutesProps } from '@routes/auth.routes';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { useAuth } from '@hooks/auth';
import { AppError } from '@utils/AppError';

type SigninProps = {
  email: string;
  password: string;
};

export const Signin: React.FC = ({}) => {
  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigationroutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninProps>();

  const handleNewAccount = () => {
    navigation.navigate('signUp');
  };

  const handleSignIn = async ({ email, password }: SigninProps) => {
    try {
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
    }
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

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleSubmit(handleSignIn)}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
