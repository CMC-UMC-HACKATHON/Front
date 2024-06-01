import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChallengeScreen from '../screens/ChallengeScreen';
import MissionScreen from '../screens/MissionScreen';
import MyScreen from '../screens/MyScreen';
import COLORS from '../styles/colors';
import {
  ActiveChallengeIcon,
  ActiveMissionIcon,
  InActiveChallengeIcon,
  InActiveMissionIcon,
} from './Icons';

const Tab = createBottomTabNavigator();

const mainRoutes = [
  {
    name: '챌린지',
    com: ChallengeScreen,
    inactiveIcon: <InActiveChallengeIcon />,
    activeIcon: <ActiveChallengeIcon />,
  },
  {
    name: '미션',
    com: MissionScreen,
    inactiveIcon: <InActiveMissionIcon />,
    activeIcon: <ActiveMissionIcon />,
  },
  {
    name: 'MY',
    com: MyScreen,
    inactiveIcon: <InActiveMissionIcon />,
    activeIcon: <ActiveMissionIcon />,
  },
];

const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 54,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 4,
        },
      }}>
      {mainRoutes.map(route => (
        <Tab.Screen
          key={`screen-${route.name}`}
          name={route.name}
          component={route.com}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? route.activeIcon : route.inactiveIcon;
            },
            tabBarLabel: ({focused}) => {
              switch (route.name) {
                case '챌린지':
                  return (
                    <Text
                      style={[styles.label, focused && styles.labelFocused]}>
                      챌린지
                    </Text>
                  );
                case '미션':
                  return (
                    <Text
                      style={[styles.label, focused && styles.labelFocused]}>
                      미션
                    </Text>
                  );
                case 'MY':
                  return (
                    <Text
                      style={[styles.label, focused && styles.labelFocused]}>
                      MY
                    </Text>
                  );
                default:
                  return '';
              }
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'Pretendard-Medium',
    color: COLORS.gray1,
  },
  labelFocused: {
    color: COLORS.purple1,
  },
});

export default NavigationBar;
