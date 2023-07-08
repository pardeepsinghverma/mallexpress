import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import common from '../../assets/style/common.jsx'
import darkmode from '../../assets/style/darkmode.jsx'
import lightmode from '../../assets/style/lightmode.jsx'

const SectionTitle = ({title, mode, link}:any) => {
  return (
    // <View style={[styles.Container, common.D_Flex, common.FlexRow, (link==='') ? common.AlignContentStart : common.AlignContentSpaceBetween]}>
    <View style={[styles.Container, common.D_Flex, common.FlexRow, link==='' ? common.JustifyContentStart : common.JustifyContentSpaceBetween]}>
      <Text style={[common.Heading, common.Bold, (mode==='dark') ? darkmode.Heading : lightmode.Heading]}>{title}</Text>
      <Text style={[common.Link, (mode==='dark') ? darkmode.Link : lightmode.Link]}>{link}</Text>
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