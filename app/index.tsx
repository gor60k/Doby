import React from "react";
import { SafeAreaView, Dimensions, View } from 'react-native';
import { Box } from '@/components/ui/box';
import { ImageBackground } from '@/components/ui/image-background';
import { WelcomeScreenCarouselItems } from '@/components/screens/welcome/api/constants';
import WelcomeScreenCarousel from '@/components/screens/welcome/ui/WelcomeScreenCarousel';
import PrimaryLinkButton from '@/components/shared/PrimaryLinkButton';

const width = Dimensions.get("window").width;

export default function WelcomeScreen() {
  return (
      <SafeAreaView className="flex-1 bg-white">
          <ImageBackground
              source={require('../assets/images/pes.avif')}
              resizeMode="cover"
              className="absolute top-0 left-0 right-0 h-full"
          />
          <View className="flex-1 justify-end">
            <Box className="bg-white rounded-t-3xl p-6 pt-10 flex flex-col items-center">
              <WelcomeScreenCarousel data={WelcomeScreenCarouselItems} width={width} />
              <PrimaryLinkButton
                  text={"Начать"}
                  path={"/role"}
              />
            </Box>
          </View>
      </SafeAreaView>
  );
}
