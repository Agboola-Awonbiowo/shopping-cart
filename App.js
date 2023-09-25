import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import Badge from './components/Badge';
import CustomBackbtn from './components/CustomBackbtn';
import { COLORS } from './constants/colors';
import Account from './screens/Account';
import Cart from './screens/Cart';
import Details from './screens/Details';
import Home from './screens/Home';
import Menu from './screens/Menu';
import CartContextProvider, { CartContext } from './store/cart-context';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function AllTabs() {
  const cartCtx = useContext(CartContext);
  return (
    <BottomTabs.Navigator
      // initialRouteName="MenuScreen"
      screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.background },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MenuScreen"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartScreen"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="ios-basket-outline" color={color} size={size} />
              {cartCtx.ids.length > 0 && <Badge value={cartCtx.ids.length} />}
            </>
          ),
          headerLeft: () => <CustomBackbtn targetRoute="MenuScreen" />,
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CartContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AllTabs"
              component={AllTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={Details}
              options={{
                headerLeft: () => <CustomBackbtn targetRoute="MenuScreen" />,
                title: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContextProvider>
    </>
  );
}
