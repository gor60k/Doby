import { Text } from 'react-native';
import {Pressable} from 'react-native';
import { Href, Link } from 'expo-router';
import React from 'react';

interface PrimaryButtonProps {
  text: string;
  path: Href;
}

export default function PrimaryButton({ text, path,  }: PrimaryButtonProps) {
    return (
        <Link href={path} asChild>
          <Pressable
              className="w-full bg-background-basicYellow p-3 rounded-xl">
            <Text
                className="text-center color-white font-istok text-[24px]"
            >
              {text}
            </Text>
          </Pressable>
        </Link>
    )
}