import { Text, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import React from 'react';
import { RoleScreenInitialSlideButtonType } from '@/components/screens/role/api/types';
import RoleScreenInitialSlideButton from '@/components/screens/role/ui/RoleScreenInitialSlideButton';

interface IProps {
  data: RoleScreenInitialSlideButtonType[],
  handlePress: (btn: RoleScreenInitialSlideButtonType) => void,
}

export default function ({data, handlePress}: IProps) {
  return (
      <Box className="w-full h-full relative flex-1 pt-[80px]">
        <HStack className="absolute w-full h-full max-h-[110px] items-center justify-center px-6 -top-[55px] "
                space="sm"
        >
          {data.map((btn, i) => (
              <RoleScreenInitialSlideButton
                  key={i}
                  index={i}
                  button={btn}
                  handlePress={handlePress}
              />
          ))}
        </HStack>
        <ScrollView className="gap-6 px-6 max-h-[250px]">
          <Heading
              size="2xl"
              style={{
                fontFamily: "IstokBold"
              }}
          >
            Выберите статус!
          </Heading>
          <Text
              style={{
                fontFamily: "ComfortaaLight"
              }}
          >
            Чтобы мы могли настроить приложение под ваши задачи, выберите свою роль. Если вы ищете надежного человека, который позаботится о вашем питомце — выбирайте Владельца питомца. Если хотите помогать другим и заботиться о животных — выбирайте Догситтера.
            Чтобы мы могли настроить приложение под ваши задачи, выберите свою роль. Если вы ищете надежного человека, который позаботится о вашем питомце — выбирайте Владельца питомца. Если хотите помогать другим и заботиться о животных — выбирайте Догситтера.
          </Text>
        </ScrollView>
      </Box>
  );
}