import create from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  name: string;
  age: number;
};

export const useUserData = create<User>(
  persist(
    () => ({
      name: 'Vitor',
      age: 29,
    }),
    { name: 'useUserData' }
  )
);
