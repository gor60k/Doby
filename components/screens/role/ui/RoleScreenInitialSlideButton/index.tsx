import { Text } from 'react-native'
import { BlurView } from 'expo-blur';
import { Box } from '@/components/ui/box';
import { Pressable } from '@/components/ui/pressable';
import React from 'react';
import { RoleScreenInitialSlideButtonType } from '@/components/screens/role/api/types';

interface IProps {
  index: number;
  button: RoleScreenInitialSlideButtonType,
  handlePress: (btn: RoleScreenInitialSlideButtonType) => void;
}

export default function ({index, button, handlePress}: IProps) {
    return (
        <Pressable
            key={index}
            className="flex-1 h-full"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.05,
              shadowRadius: 40,
              elevation: 5,
            }}
            onPress={() => handlePress(button)}
        >
          <BlurView
              intensity={55}
              tint="extraLight"
              className="w-full h-full justify-between items-center p-5 rounded-[20px] overflow-hidden"
          >
            <Box className="w-full items-start">
              <Text
                  className="text-[18px]/[22px] text-center color-black"
                  style={{
                    fontFamily: "IstokBold"
                  }}
              >
                {button.text}
              </Text>
            </Box>
            <Box className="w-full items-end">
              { button.icon }
            </Box>

          </BlurView>
        </Pressable>
    )
}