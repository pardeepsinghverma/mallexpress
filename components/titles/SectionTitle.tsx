import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import common from '../style/common.jsx'
import darkmode from '../style/darkmode.jsx'
import lightmode from '../style/lightmode.jsx'

const SectionTitle = ({title, mode}:any) => {
  return (
    <View style={styles.Container}>
      <Text style={[common.Heading, (mode==='dark') ? darkmode.Heading : lightmode.Heading]}>{title}</Text>
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
  Container: {
    paddingTop: 26,
    paddingBottom: 14,
  },
})