import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import common from '../../../assets/style/common.jsx'
import darkmode from '../../../assets/style/darkmode.jsx'
import lightmode from '../../../assets/style/lightmode.jsx'

import { TextInput } from 'react-native'
import { faFilter, faMugSaucer, faSearch } from '@fortawesome/free-solid-svg-icons'

const TopNavigation = ({mode}:any) => {
  return (
    <View style={[styles.searchSection, (mode==='dark') ? darkmode.AscentBgColor : lightmode.AscentBgColor]}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
      <FontAwesomeIcon style={[styles.searchIcon, mode==='dark' ? darkmode.SmallHeading : lightmode.SmallHeading]} icon={ faSearch } />
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        style={[styles.input, mode === 'dark' ? darkmode.SmallHeading : lightmode.SmallHeading]}
        placeholderTextColor={mode === 'dark' ? darkmode.SmallHeading.color : lightmode.SmallHeading.color}
        placeholder="Search Here..."
        underlineColorAndroid="transparent"
      />
      <FontAwesomeIcon style={[styles.searchIcon, mode==='dark' ? darkmode.SmallHeading : lightmode.SmallHeading]} icon={ faFilter } />
    </View>
  )
}

export default TopNavigation

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  darksearchIcon: {
    padding: 10,
  },
  lightsearchIcon: {
    padding: 10,
  },
searchIcon: {
  padding: 2,
  size: 32,
},
input: {
  flex: 1,
  padding: 10,
},
})