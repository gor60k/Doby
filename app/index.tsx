import React from "react";
import { SafeAreaView, Dimensions, View } from 'react-native';
import { Link } from "expo-router";
import { Box } from '@/components/ui/box';
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Card } from '@/components/ui/card';
import { ImageBackground } from '@/components/ui/image-background';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';

type Item = {
  title: string;
  subtitle: string;
}

const data: Item[] = [
  {
    title: 'Найдите проверенного ситтера',
    subtitle: 'Просмотрите анкеты и выберите того, кому доверите любимца.'
  },
  {
    title: 'Договоритесь в чате',
    subtitle: 'Обсудите все детали ухода прямо в приложении.'
  },
  {
    title: 'Оплатите безопасно',
    subtitle: 'Используйте надёжные встроенные платежи без риска.'
  },
];
const width = Dimensions.get("window").width;

export default function WelcomeScreen() {

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
      <SafeAreaView className="flex-1 bg-white">
        <ImageBackground
            source={require('../assets/images/pes.avif')}
            resizeMode="cover"
            className="flex-1"
        >
          <View className="flex-1 justify-end">

            <Box className="bg-white rounded-t-3xl p-6 pt-10 flex flex-col items-center">
              <View className="w-full">
                <Pagination.Basic
                    progress={progress}
                    data={data}
                    dotStyle={{
                      width: 25,
                      backgroundColor: "white",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#E0E0E1"
                    }}
                    activeDotStyle={{
                      backgroundColor: "#FFBC11",
                      borderRadius: 10,
                    }}
                    containerStyle={{
                      gap: 5,
                    }}
                    onPress={onPressPagination}
                />
              </View>
              <View className="w-full items-center justify-center">
                <Carousel
                    ref={ref}
                    loop={false}
                    width={width}
                    height={width / 2}
                    data={data}
                    onProgressChange={progress}
                    renderItem={({ item }) => (
                        <Card
                            variant="ghost"
                            className="items-center justify-center h-full"
                        >
                          <Heading
                              size="2xl"
                              className="text-center mb-4 font-istok"
                          >
                            {item.title}
                          </Heading>
                          <Text className="text-center font-comfortaa text-lg">
                            {item.subtitle}
                          </Text>
                        </Card>
                    )}
                />
              </View>
              <Link href="/tabs" asChild>
                <Pressable
                    className="w-full bg-background-basicYellow p-3 rounded-xl">
                  <Text
                      size="2xl"
                      className="text-center color-white font-istok"
                  >
                    Начать
                  </Text>
                </Pressable>
              </Link>
            </Box>

          </View>
        </ImageBackground>
      </SafeAreaView>
  );
}
