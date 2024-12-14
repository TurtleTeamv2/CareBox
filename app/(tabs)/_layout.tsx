import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import MedKitSvg from '@/assets/images/svg/tab/MedKitSvg';
import AddCircleSvg from '@/assets/images/svg/tab/AddCircleSvg';
import CalendarSvg from '@/assets/images/svg/tab/CalendarSvg';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].pink,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].mainBlue, 
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].semiWhite,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 60,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          headerShown: false,
          tabBarIcon: ({ color }) => <MedKitSvg color={color} />,
        }} 
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two', 
          headerShown: false,
          tabBarIcon: ({ color }) => <AddCircleSvg color={color} />,
        }}
      />
       <Tabs.Screen
        name="CalendarScreen"  
        options={{
          title: 'Tab Two', 
          headerShown: false,
          tabBarIcon: ({ color }) => <CalendarSvg color={color} />,
        }}
      />
    </Tabs>
  );
}
