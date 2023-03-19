import React, { createContext, useContext, useState } from 'react';

import { api } from '@services/api';

import { UserDTO } from '@dtos/UserDTO';

export type AuthContextData = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post('sessions', { email, password });

      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
