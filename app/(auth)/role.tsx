import { Dimensions, SafeAreaView } from 'react-native';
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { BlurView } from "expo-blur";
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import React, { useRef, useState } from "react";
import { Heading } from '@/components/ui/heading';
import { Link } from 'expo-router';
import { VStack } from '@/components/ui/vstack';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const width = Dimensions.get("window").width;

type Button = {
  text: string;
  role: string;
  index: number;
};

const btns: Button[] = [
  { text: "Я догситтер!", role: "sitter", index: 0 },
  { text: "Я хозяин питомца!", role: "owner", index: 2 },
];

const sitterBenefits = [
  {
    text: 'Гибкий график',
    icon: <FontAwesome6 name="clock" size={24} color="#FFBC11" />
  },
  {
    text: 'Дополнительный доход',
    icon: <FontAwesome6 name="credit-card" size={24} color="#FFBC11" />
  },
  {
    text: 'Общение с питомцами',
    icon: <FontAwesome6 name="dog" size={24} color="#FFBC11" />
  },
]

const ownerBenefits = [
  {
    text: 'Надёжная забота',
    icon: <FontAwesome6 name="hand-holding-heart" size={24} color="#FFBC11" />
  },
  {
    text: 'Удобный поиск',
    icon: <FontAwesome6 name="location-dot" size={24} color="#FFBC11" />
  },
  {
    text: 'Спокойствие за любимца',
    icon: <FontAwesome6 name="shield-dog" size={24} color="#FFBC11" />
  },
]

export default function RoleScreen() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [selected, setSelected] = useState<string | null>(null);

  const handlePress = (btn: Button) => {
    setSelected(btn.role);
    carouselRef.current?.scrollTo({ index: btn.index, animated: true });
  };

  const reset = () => {
    setSelected(null);
    carouselRef.current?.scrollTo({ index: 1, animated: true }); // вернуться в центр
  };

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const renderSlide = (index: number) => {
    if (index === 1) {
      // центральный слайд — выбор роли
      return (
          <Box className="px-6 h-full items-start justify-start gap-6 pt-[79px] relative">
            <HStack className="h-[110px] gap-3.5 absolute inset-0 -top-[55px] items-center justify-center">
              {btns.map((btn, i) => (
                  <Pressable
                      key={i}
                      className="w-[170px] h-full"
                      style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.05,
                        shadowRadius: 40,
                        elevation: 5,
                      }}
                      onPress={() => handlePress(btn)}
                  >
                    <BlurView
                        intensity={55}
                        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                        className="w-full h-full p-[20px] rounded-[20px] overflow-hidden items-center justify-center"
                    >
                      <Text className="font-istok text-[24px]/[28px] text-center color-black">
                        {btn.text}
                      </Text>
                    </BlurView>
                  </Pressable>
              ))}
            </HStack>
            <Box className="gap-6">
              <Heading size="2xl" className="font-istok">
                Выберите статус!
              </Heading>
              <Text size="lg" className="font-comfortaa">
                Чтобы мы могли настроить приложение под ваши задачи, выберите свою роль. Если вы ищете надежного человека, который позаботится о вашем питомце — выбирайте Владельца питомца. Если хотите помогать другим и заботиться о животных — выбирайте Догситтера.
              </Text>
            </Box>
          </Box>
      );
    }

    if (index === 0) {
      // левый слайд (догситтер)
      return (
          <Box className="flex-1 items-center justify-center px-6">
            <BlurView
                intensity={55}
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                className="w-full p-[20px] rounded-[20px] overflow-hidden -translate-y-[55px]"
            >
              <Box className="gap-6">
                <Box className="flex-row justify-between items-center">
                  <Heading size="xl" className="font-istok">
                    Я догситтер!
                  </Heading>
                  <Pressable
                      onPress={reset}
                      className="px-6 py-1 bg-black/30 rounded-[10px]"
                  >
                    <Text className="text-white">Назад</Text>
                  </Pressable>
                </Box>
                <Text size="lg" className="font-comfortaa">
                  Вы выбираете роль Догситтера. Это значит, что владельцы питомцев смогут находить вас и доверять вам заботу о своих любимцах. Заполните свой профиль, расскажите о себе и начните принимать заявки.
                </Text>
                <VStack className="gap-3">
                  {sitterBenefits.map((item, i) => (
                      <Box key={i} className="flex-row justify-start items-center gap-3">
                        {item.icon}
                        <Text className="font-comfortaa">{item.text}</Text>
                      </Box>
                  ))}

                </VStack>
              </Box>

            </BlurView>
          </Box>
      );
    }

    if (index === 2) {
      // правый слайд (хозяин питомца)
      return (
          <Box className="flex-1 items-center justify-center px-6">
            <BlurView
                intensity={55}
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                className="w-full p-[20px] rounded-[20px] overflow-hidden -translate-y-[55px]"
            >
              <Box className="gap-6">
                <Box className="flex-row justify-between items-center gap-3">
                  <Heading size="xl" className="font-istok">
                    Я хозяин питомца!
                  </Heading>
                  <Pressable
                      onPress={reset}
                      className="px-6 py-1 bg-black/30 rounded-[10px]"
                  >
                    <Text className="text-white">Назад</Text>
                  </Pressable>
                </Box>
                <Text size="lg" className="font-comfortaa">
                  Вы выбираете роль Владельца питомца. Это позволит вам находить проверенных догситтеров, которые помогут, когда вам нужно оставить любимца на время. Создайте профиль питомца и выбирайте лучших помощников.
                </Text>
                <VStack className="gap-3">
                  {ownerBenefits.map((item, i) => (
                      <Box key={i} className="flex-row justify-start items-center gap-3">
                        {item.icon}
                        <Text className="font-comfortaa">{item.text}</Text>
                      </Box>
                  ))}

                </VStack>
              </Box>

            </BlurView>
          </Box>
      );
    }
  };

  return (
      <SafeAreaView className="flex-1">
        <Box className="flex-1 pb-6">
          <Box className="w-full h-[350px]">
            <Image
                source={require("@/assets/images/role-screen.avif")}
                size="full"
                alt="image"
            />
          </Box>
          <Box className="flex-1">
            <Carousel
                ref={carouselRef}
                width={width}
                data={[0, 1, 2]}
                defaultIndex={1}
                renderItem={({ index }) => renderSlide(index)}
                enabled={false}
                onSnapToItem={handleIndexChange}
                loop={false}
                style={{
                  overflow: "visible",
                }}
            />
          </Box>
          <Box className="px-6">
            <Link href="/tabs/(auth)/login" asChild>
              <Pressable
                  className={`w-full p-3 rounded-xl transition-all bg-background-basicYellow ${
                      currentIndex === 1
                          ? "opacity-5"
                          : "opacity-100"
                  }`}
                  disabled={currentIndex === 1}
              >
                <Text
                    size="2xl"
                    className="text-center font-istok color-white"
                >
                  Регистрация
                </Text>
              </Pressable>
            </Link>
          </Box>
        </Box>
      </SafeAreaView>
  );
}
