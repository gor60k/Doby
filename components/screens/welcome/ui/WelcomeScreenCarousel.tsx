import { View, Text } from 'react-native';
import { Box } from '@/components/ui/box';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { useSharedValue } from 'react-native-reanimated';
import { WelcomeScreenCarouselItem } from '@/components/screens/welcome/api/types';

interface WelcomeScreenCarouselProps {
  data: WelcomeScreenCarouselItem[];
  width: number;
}


export default function WelcomeScreenCarousel({ data, width }: WelcomeScreenCarouselProps) {

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
      <Box className="flex flex-col items-center">
        <View className="w-full">
          <Pagination.Basic
              progress={progress}
              data={data}
              dotStyle={{
                width: 25,
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#E0E0E1',
              }}
              activeDotStyle={{
                backgroundColor: '#FFBC11',
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
      </Box>
  );
}