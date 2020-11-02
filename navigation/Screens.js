import React from "react";
import MyTabBar from "../components/TabBar";
import { AuthContext } from "../screens/Context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import Splash from "../screens/Splash";
import SignUp from "../screens/SignUp";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import HomeDetails from "../screens/HomeDetails";
import Categories from "../screens/Categories";
import ProfileDetails from "../screens/ProfileDetails";
import ForgotPassword from "../screens/ForgotPassword";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Intro" component={Intro} />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
        }}
      />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} />
    </ProfileStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        showIcon: true,
        showLabel: false,
        lazyLoad: true,
        tabBarVisible: true,
        style: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          left: 50,
          right: 50,
          bottom: 20,
          height: 100,
        },
      }}
    >
      <Tabs.Screen name="home" component={HomeStackScreen} />
      <Tabs.Screen name="grid" component={Categories} />
      <Tabs.Screen name="search" component={Search} />
      <Tabs.Screen name="shopping-cart" component={Cart} />
      <Tabs.Screen name="user" component={ProfileStackScreen} />
    </Tabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);

export function Screens() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("token");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("token");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  });

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
