import React from 'react';
import ProductCards from './src/components/cards/ProductCards';
import ProductList from './src/components/list/ProductList';
import SectionTitle from './src/components/titles/SectionTitle';
import CategoryCards from './src/components/cards/CategoryCards';
import HomeBanner from './src/components/banners/HomeBanner'; 
import type { PropsWithChildren } from 'react';
import darkmode from './src/assets/style/darkmode.jsx';
import lightmode from './src/assets/style/lightmode.jsx';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import TopNavigation from './src/components/navigations/topNavigation/TopNavigation';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/Splash/SplashScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={isDarkMode ? darkmode.PrimaryBgColor : lightmode.PrimaryBgColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={isDarkMode ? darkmode.PrimaryBgColor.backgroundColor : lightmode.PrimaryBgColor.backgroundColor}
        backgroundColor={isDarkMode ? darkmode.PrimaryBgColor.backgroundColor : lightmode.PrimaryBgColor.backgroundColor}
      />
      {/* <Home isDarkMode={isDarkMode} /> */}
      <SplashScreen isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

})
export default App;
