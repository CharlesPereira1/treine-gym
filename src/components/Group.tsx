import React from 'react';
import { Text, Pressable, IPressableProps } from 'native-base';

type GroupProps = IPressableProps & {
  name: string;
  isActive: boolean;
};

export const Group: React.FC<GroupProps> = ({ name, isActive, ...rest }) => {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden" //esconder o texto se nao couber
      isPressed={isActive} //se tiver active o _pressed aplica o style
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color={isActive ? 'green.500' : 'gray.200'}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
