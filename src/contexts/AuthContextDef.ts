import { createContext } from 'react';
import { User, Investment } from '../data/users';

export interface AuthContextType {
  user: (User & { investments: Investment[] }) | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
