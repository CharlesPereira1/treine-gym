import React, { createContext, useContext, useEffect, useState } from 'react';

import { api } from '@services/api';

import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from '@storage/storageAuthToken';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '@storage/storageUser';

import { UserDTO } from '@dtos/UserDTO';

export type AuthContextData = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorage: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(true);

  const userAndTokenUpdate = async (userData: UserDTO, token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(userData);
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoadingUserStorage(true);

      const { data } = await api.post('sessions', { email, password });

      if (data.user && data.token) {
        await storageUserSave(data.user);
        await storageAuthTokenSave(data.token);

        userAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorage(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoadingUserStorage(true);

      setUser({} as UserDTO);

      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorage(false);
    }
  };

  const loadUserData = async () => {
    try {
      setIsLoadingUserStorage(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorage(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
