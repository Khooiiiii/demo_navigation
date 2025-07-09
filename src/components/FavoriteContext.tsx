import React, { createContext, useContext } from 'react';
import { Alert } from 'react-native';

type FavoriteContextType = {
  onFavorite: (item: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export const useFavorite = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw new Error('useFavorite must be used within FavoriteProvider');
  return ctx;
};

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const onFavorite = (item: string) => {
    // Xử lý logic yêu thích ở đây (ví dụ: gọi API, cập nhật state, v.v.)
    Alert.alert('Yêu thích', `Đã yêu thích: ${item}`);
  };

  return (
    <FavoriteContext.Provider value={{ onFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
