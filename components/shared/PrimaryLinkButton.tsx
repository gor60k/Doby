import { Text } from 'react-native';
import { Pressable } from '@/components/ui/pressable';
import { Href, Link } from 'expo-router';
import React from 'react';

interface PrimaryButtonProps {
  text: string;
  path: Href;
  disabled?: boolean;
}

export default function PrimaryLinkButton({ text, path, disabled }: PrimaryButtonProps) {
    return (
        <Link href={path} asChild>
          <Pressable
              className="w-full bg-background-basicYellow p-3 rounded-xl"
              disabled={disabled}
          >
            <Text
                className="text-center color-white font-comfortaa text-[24px]"
                style={{
                  fontFamily: "IstokBold"
                }}
            >
              {text}
            </Text>
          </Pressable>
        </Link>
    )
}