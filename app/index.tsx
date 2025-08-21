import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView>
      <Text>
        Welcome screen
      </Text>

      <Link href="/tabs/(auth)" asChild>
        <TouchableOpacity>
          <Text>Go to auth</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}
