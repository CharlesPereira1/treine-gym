import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Box, useTheme } from 'native-base';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Loading } from '@components/Loading';

import { useAuth } from '@hooks/auth';

export const Routes: React.FC = ({}) => {
  const { colors } = useTheme();
  const { user, isLoadingUserStorage } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  if (isLoadingUserStorage) {
    return <Loading />;
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
};
