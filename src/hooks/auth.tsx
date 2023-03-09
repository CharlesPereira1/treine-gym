import { createContext, useContext, useState } from 'react';

import { UserDTO } from '@dtos/UserDTO';

export type AuthContextData = {
  user?: UserDTO;
  sigIn: (email: string, password: string) => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({});

  const sigIn = (email: string, password: string) => {
    setUser({
      email,
      password,
    });
  };

  return (
    <AuthContext.Provider value={{ sigIn }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
