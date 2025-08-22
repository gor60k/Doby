import { SafeAreaView } from 'react-native';
import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { BlurView } from 'expo-blur';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, runOnJS } from 'react-native-reanimated';
import { useState } from 'react';

export default function RoleScreen() {
  type Button = {
    text: string;
    role: string;
  };

  const btns: Button[] = [
    { text: 'Я догситтер!', role: 'sitter' },
    { text: 'Я хозяин питомца!', role: 'owner' },
  ];

  const [selected, setSelected] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const widths = [useSharedValue(170), useSharedValue(170)];
  const offsets = [useSharedValue(0), useSharedValue(0)];

  const handlePress = (index: number) => {
    setSelected(btns[index].role);

    const isLeft = index === 0;
    const other = isLeft ? 1 : 0;

    // растягиваем выбранную по X
    widths[index].value = withSequence(
        withTiming(containerWidth, { duration: 400 }),
        withTiming(containerWidth, { duration: 0 })
    );

    // фиксируем позицию выбранной кнопки
    offsets[index].value = withTiming(isLeft ? 0 : -(170 + 14), { duration: 400 });

    // соседняя уезжает полностью
    offsets[other].value = withTiming(
        isLeft ? containerWidth : -containerWidth,
        { duration: 400 }
    );
  };

  const reset = () => {
    if (!selected) return;
    const index = btns.findIndex((b) => b.role === selected);
    const isLeft = index === 0;
    const other = isLeft ? 1 : 0;

    // шаг 1: возвращаем ширину активной и смещение
    widths[index].value = withTiming(170, { duration: 400 });
    offsets[index].value = withTiming(0, { duration: 400 });

    // шаг 2: возвращаем соседнюю
    offsets[other].value = withTiming(0, { duration: 400 }, () => {
      runOnJS(setSelected)(null);
    });
  };


  return (
      <SafeAreaView>
        <Box className="h-full">
          <Box className="w-full h-[350px]">
            <Image
                source={require('@/assets/images/role-screen.avif')}
                size="full"
                alt="image"
            />
          </Box>
          <Box className="px-6 h-1/2 border">
            <HStack
                className="h-[110px] gap-3.5 translate-y-[-50%] justify-between items-start"
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
            >
              {btns.map((btn, i) => {
                const animStyle = useAnimatedStyle(() => ({
                  width: widths[i].value,
                  transform: [{ translateX: offsets[i].value }],
                  alignSelf: "flex-start",
                  justifyContent: "flex-start",
                }));

                return (
                    <Animated.View
                        key={i}
                        style={[
                          animStyle,
                        ]}
                    >
                      <Pressable
                          className="w-full h-[110px]"
                          style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.05,
                            shadowRadius: 40,
                            elevation: 5,
                          }}
                          onPress={() => handlePress(i)}
                      >
                        <BlurView
                            intensity={55}
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.5)'
                            }}
                            className="w-full h-full p-[20px] rounded-[20px] overflow-hidden items-center justify-start "
                        >
                          <Text className="font-istok text-[24px]/[30px] text-center color-black">{btn.text}</Text>

                          {selected === btn.role && (
                              <Pressable
                                  onPress={reset}
                                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/30 items-center justify-center"
                              >
                                <Text className="text-white text-sm">×</Text>
                              </Pressable>
                          )}
                        </BlurView>
                      </Pressable>
                    </Animated.View>
                );
              })}
            </HStack>
          </Box>
        </Box>
      </SafeAreaView>
  );
}
