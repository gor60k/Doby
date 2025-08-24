import { Dimensions, SafeAreaView } from 'react-native';
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import React, { useRef, useState } from "react";
//Components and types imports
import RoleScreenInitialSlide from '@/components/screens/role/ui/RoleScreenInitialSlide';
import {
  RoleScreenInitialSlideButtons,
  RoleScreenSitterSlideBenefits,
  RoleScreenOwnerSlideBenefits
} from '@/components/screens/role/api/constants';
import RoleScreenSlide from '@/components/screens/role/ui/RoleScreenSlide';
import { RoleScreenInitialSlideButtonType } from '@/components/screens/role/api/types';
import PrimaryLinkButton from '@/components/shared/PrimaryLinkButton';

const width = Dimensions.get("window").width;

export default function RoleScreen() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  const handlePress = (btn: RoleScreenInitialSlideButtonType) => {
    setSelected(btn.role);
    carouselRef.current?.scrollTo({ index: btn.index, animated: true });
  };

  const reset = () => {
    setSelected(null);
    carouselRef.current?.scrollTo({ index: 1, animated: true });
  };

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      id: "sitter",
      component: (
          <RoleScreenSlide
              benefits={RoleScreenSitterSlideBenefits}
              reset={reset}
          />
      ),
    },
    {
      id: "initial",
      component: (
          <RoleScreenInitialSlide
              data={RoleScreenInitialSlideButtons}
              handlePress={handlePress}
          />
      ),
    },
    {
      id: "owner",
      component: (
          <RoleScreenSlide
              benefits={RoleScreenOwnerSlideBenefits}
              reset={reset}
          />
      ),
    },
  ];

  return (
      <SafeAreaView className="flex-1">
        <Box className="flex-1 pb-6">
          <Box className="flex-1 relative">
            <Image
                source={require("@/assets/images/role-screen.avif")}
                size="full"
                alt="image"
                className="absolute flex-1"
            />
          </Box>
          <Box className="flex-1">
            <Carousel
                ref={carouselRef}
                width={width}
                data={[0, 1, 2]}
                defaultIndex={1}
                renderItem={({ index }) => slides[index].component}
                enabled={false}
                onSnapToItem={handleIndexChange}
                loop={false}
                style={{
                  overflow: "visible",
                }}
            />
          </Box>
          <Box className="px-6">
            <PrimaryLinkButton
                text={"Регистрация"}
                path={"/(auth)/login"}
                disabled={currentIndex === 1}
            />
          </Box>
        </Box>
      </SafeAreaView>
  );
}
