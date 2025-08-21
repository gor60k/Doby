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

export default function Home() {

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
      <SafeAreaView className="flex-1">
        <ImageBackground
            source={require('../assets/images/pes.jpg')}
            resizeMode="cover"
            className="flex-1"
        >
          <View className="flex-1 justify-end">
            {/* justify-end прижмёт содержимое вниз */}

            <Box className="box-border bg-white rounded-t-3xl p-6 gap-4 items-center justify-center">
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
                    borderColor: "#FFBC11"
                  }}
                  containerStyle={{
                    gap: 5,
                    marginTop: 10
                  }}
                  onPress={onPressPagination}
              />
              <Carousel
                  ref={ref}
                  loop={false}
                  width={width}
                  height={width / 2}
                  data={data}
                  onProgressChange={progress}
                  renderItem={({ item }) => (
                      <Card variant="ghost" className="items-center justify-center">
                        <Heading size="2xl" className="text-center mb-4 font-rubik">
                          {item.title}
                        </Heading>
                        <Text size="lg" className="text-center font-comfortaa">
                          {item.subtitle}
                        </Text>
                      </Card>
                  )}
              />

              <Link href="/tabs" asChild>
                <Pressable
                    className="w-full bg-background-basicYellow p-4 rounded-xl">
                  <Text size="xl" bold={true} className="font-rubik text-center color-white">Начать</Text>
                </Pressable>
              </Link>

            </Box>
          </View>
        </ImageBackground>
      </SafeAreaView>
  );
}
