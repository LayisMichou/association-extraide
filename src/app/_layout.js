import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Navigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#079DA6',
        tabBarInactiveTintColor: '#64748b',
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: '#eff6ff',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: styles.barre,
        tabBarItemStyle: styles.onglet,
        tabBarLabelStyle: styles.libelle,
      }}
    >
      {/* Onglet accueil */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Onglet avantages */}
      <Tabs.Screen
        name="avantages"
        options={{
          title: 'Avantages',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'gift' : 'gift-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Onglet contacts */}
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Onglet inscription */}
      <Tabs.Screen
        name="inscription"
        options={{
          title: 'Inscription',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'person-add' : 'person-add-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  barre: {
    backgroundColor: '#ffffff',
    borderTopColor: '#e2e8f0',
    borderTopWidth: 1,
    height: 65,
    paddingTop: 5,
    elevation: 8,
  },
  onglet: {
    marginHorizontal: 2,
  },
  libelle: {
    fontSize: 11,
    fontWeight: '600',
  },
});