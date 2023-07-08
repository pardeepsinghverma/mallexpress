import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { TextInput } from 'react-native'
import { faFilter, faMugSaucer, faSearch } from '@fortawesome/free-solid-svg-icons'

const TopNavigation = () => {
  return (
    <View style={styles.searchSection}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
      <FontAwesomeIcon style={styles.searchIcon} icon={ faSearch } />
      <TextInput
          style={styles.input}
          placeholder="User Nickname"
          underlineColorAndroid="transparent"
      />
      <FontAwesomeIcon style={styles.searchIcon} icon={ faFilter } />
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
    backgroundColor: '#00000040',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 16,
},
searchIcon: {
  padding: 2,
  size: 32,
  color: '#f4f4f4',
},
input: {
    flex: 1,
    padding: 10,
    color: '#f4f4f4',
},
})