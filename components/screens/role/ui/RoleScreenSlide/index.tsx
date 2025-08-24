import { Text, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Pressable } from '@/components/ui/pressable';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { RoleScreenSlideBenefit } from '@/components/screens/role/api/types';

interface IProps {
  benefits: RoleScreenSlideBenefit[],
  reset: () => void,
}

export default function ({benefits, reset}: IProps) {
    return (
        <Box className="flex-1 items-center justify-center px-6">
          <BlurView
              intensity={55}
              tint="extraLight"
              className="w-full p-[20px] rounded-[20px] overflow-hidden -translate-y-[55px]"
          >
            <Box className="gap-6">
              <Box className="flex-row justify-between items-center">
                <Heading
                    size="xl"
                    style={{
                      fontFamily: "IstokBold"
                    }}
                >
                  Я догситтер!
                </Heading>
                <Pressable
                    onPress={reset}
                    className="px-6 py-1 bg-[rgba(95,95,99,0.5)] rounded-[10px]"
                >
                  <Text
                      className="text-white"
                      style={{
                        fontFamily: "IstokBold"
                      }}
                  >
                    Назад
                  </Text>
                </Pressable>
              </Box>
              <ScrollView className="max-h-[200px]">
                <Text
                    style={{
                      fontFamily: "ComfortaaLight"
                    }}
                >
                  Вы выбираете роль Догситтера. Это значит, что владельцы питомцев смогут находить вас и доверять вам заботу о своих любимцах. Заполните свой профиль, расскажите о себе и начните принимать заявки.
                  Вы выбираете роль Догситтера. Это значит, что владельцы питомцев смогут находить вас и доверять вам заботу о своих любимцах. Заполните свой профиль, расскажите о себе и начните принимать заявки.
                </Text>
              </ScrollView>
              <VStack className="gap-3">
                {benefits.map((benefit, i) => (
                    <Box
                        key={i}
                        className="flex-row justify-start items-center gap-3"
                    >
                      {benefit.icon}
                      <Text
                          style={{
                            fontFamily: "ComfortaaLight"
                          }}
                      >
                        {benefit.text}
                      </Text>
                    </Box>
                ))}
              </VStack>
            </Box>
          </BlurView>
        </Box>
    )
}