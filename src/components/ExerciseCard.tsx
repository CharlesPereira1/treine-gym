import React from 'react';
import { HStack, Image } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ExeriseCardProps = TouchableOpacityProps & {};

export const ExeriseCard: React.FC<ExeriseCardProps> = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack>
        <Image
          source={{
            uri: 'https://blog.lionfitness.com.br/wp-content/uploads/2019/01/Blog-75-1.jpg',
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
        />
      </HStack>
    </TouchableOpacity>
  );
};
