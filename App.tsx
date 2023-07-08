import React from 'react';
import ProductCards from './src/components/cards/ProductCards';
import ProductList from './src/components/list/ProductList';
import SectionTitle from './src/components/titles/SectionTitle';
import CategoryCards from './src/components/cards/CategoryCards';
import HomeBanner from './src/components/banners/HomeBanner'; 
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
import TopNavigation from './src/components/navigations/topNavigation/TopNavigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#FFFFFF", 
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView overScrollMode='never' style={styles.ScrollView}>
        <TopNavigation />
        <HomeBanner />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Shop by Categories'} link={'See All'} />
        <CategoryCards mode={isDarkMode ? 'dark' : 'light'}/>
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Latest Products'} />
        <ProductCards mode={isDarkMode ? 'dark' : 'light'} />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Recomended For you'} link={'See All'} />
        <ProductList mode={isDarkMode ? 'dark' : 'light'}/>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ScrollView: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontFamily: 'Roboto',
  }
})
export default App;
