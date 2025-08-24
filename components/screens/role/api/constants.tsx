import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  RoleScreenInitialSlideButtonType,
  RoleScreenSlideBenefit
} from '@/components/screens/role/api/types';

export const RoleScreenInitialSlideButtons: RoleScreenInitialSlideButtonType[] = [
  {
    index: 0,
    text: "Я догситтер!",
    role: "sitter",
    icon: <MaterialCommunityIcons name="dog-service" size={32} color="#5F5F63" />
  },
  {
    index: 2,
    text: "Я хозяин питомца!",
    role: "owner",
    icon: <MaterialCommunityIcons name="account-heart-outline" size={32} color="#5F5F63" />
  },
];

export const RoleScreenSitterSlideBenefits: RoleScreenSlideBenefit[] = [
  {
    text: 'Гибкий график',
    icon: <MaterialCommunityIcons name="clock-outline" size={24} color="#5F5F63" />
  },
  {
    text: 'Дополнительный доход',
    icon: <MaterialCommunityIcons name="credit-card-outline" size={24} color="#5F5F63" />
  },
  {
    text: 'Общение с питомцами',
    icon: <MaterialCommunityIcons name="dog" size={24} color="#5F5F63" />
  },
];

export const RoleScreenOwnerSlideBenefits: RoleScreenSlideBenefit[] = [
  {
    text: 'Надёжная забота',
    icon: <MaterialCommunityIcons name="hand-heart-outline" size={24} color="#5F5F63" />
  },
  {
    text: 'Удобный поиск',
    icon: <MaterialCommunityIcons name="account-search-outline" size={24} color="#5F5F63" />
  },
  {
    text: 'Спокойствие за любимца',
    icon: <MaterialCommunityIcons name="shield-check-outline" size={24} color="#5F5F63" />
  },
]