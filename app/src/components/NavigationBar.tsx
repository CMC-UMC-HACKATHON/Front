import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Challenge from '../screens/Challenge';

const Tab = createBottomTabNavigator();

// const activeChallengeIcon = require('../assets/svgs/activeChallengeIcon.svg');
// const inactiveChallengeIcon = require('../assets/svgs/inactiveChallengeIcon.svg');
// const activeMissionIcon = require('../assets/svgs/activeMissionIcon.svg');
// const inactiveMissionIcon = require('../assets/svgs/inactiveMissionIcon.svg');
// const activeMypageIcon = require('../assets/svgs/activeMypageIcon.svg');
// const inactiveMypageIcon = require('../assets/svgs/inactiveMypageIcon.svg');

const mainRoutes = [
  {
    name: '챌린지',
    com: Challenge,
    // inactiveIcon: inactiveChallengeIcon,
    // activeIcon: activeChallengeIcon,
  },
  {
    name: '미션',
    com: Challenge,
    // inactiveIcon: inactiveMissionIcon,
    // activeIcon: activeMissionIcon,
  },
  {
    name: 'MY',
    com: Challenge,
    // inactiveIcon: inactiveMypageIcon,
    // activeIcon: activeMypageIcon,
  },
];

const NavigationBar = () => {
  return (
    <Tab.Navigator>
      {mainRoutes.map(route => (
        <Tab.Screen
          key={`screen-${route.name}`}
          name={route.name}
          component={route.com}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                // <Image
                //   source={focused ? route.activeIcon : route.inactiveIcon}
                //   style={styles.icon}
                // />
                <Text>{route.namea}</Text>
              );
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
  icon: {height: 22, width: 22, marginTop: 6},
  label: {
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'Pretendard',
    color: '#ACB3BC',
  },
  labelFocused: {
    color: '#000000',
  },
});

export default NavigationBar;
