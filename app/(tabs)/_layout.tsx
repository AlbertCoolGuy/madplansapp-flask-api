import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import '../../global.css';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const iconColor = '#172225ff'
  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="Hjem"
        options={{
          title: 'Hjem',
          tabBarIcon: () => <Image
            source={require('@/assets/icons/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg')}
            style={{width: 26, height: 26, tintColor: iconColor}}
            contentFit='contain'
            />,
        }}
      />
      <Tabs.Screen
        name="tilbud"
        options={{
          title: 'Tilbud',
          tabBarIcon: () => <Image
            source={require('@/assets/icons/percent_discount_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg')} 
            style={{width: 26, height: 26, tintColor: iconColor}}
            contentFit='contain'
            />,
        }}
      />
      <Tabs.Screen
        name="ingredienser"
        options={{
          title: 'Ingredienser',
          tabBarIcon: () => <Image
            source={require('@/assets/icons/grocery_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg')} 
            style={{width: 26, height: 26, tintColor: iconColor}}
            contentFit='contain'
            />,
        }}
      />
    </Tabs>    
  );
}
