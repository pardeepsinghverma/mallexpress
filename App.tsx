import React from 'react';
import ProductCards from './components/cards/ProductCards';
import ProductList from './components/list/ProductList';
import SectionTitle from './components/titles/SectionTitle';
import HomeBanner from './components/banners/HomeBanner'; 
import type { PropsWithChildren } from 'react';
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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, 
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={styles.ScrollView}>
        <HomeBanner />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Latest Products'} />
        <ProductCards />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Recomended For you'} />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ScrollView: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  }
})
export default App;
