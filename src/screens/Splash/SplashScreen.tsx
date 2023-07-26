import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import common from '../../assets/style/common'
import darkmode from '../../assets/style/darkmode'
import lightmode from '../../assets/style/lightmode'

const SplashScreen = ({isDarkMode}:any) => {
  return (
      <View style={[styles.blackBg, styles.coverScreen]}>
      <Text style={[common.Heading, common.Bold, (isDarkMode) ? darkmode.Heading : lightmode.Heading, styles.texteCenter]}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    blackBg: {
        backgroundColor: 'black',
    },
    coverScreen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    texteCenter: {
        textAlign: 'center',
        display: 'flex',
    }
})