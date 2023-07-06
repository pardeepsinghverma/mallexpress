import React from "react"
import { StyleSheet } from "react-native"

const common = StyleSheet.create({
  // Default styles
  D_Flex: {
    display: 'flex',
  },
  D_None: {},
  D_Block: {},

  FlexColumn: {
    flexDirection: 'column',
  },
  FlexRow: {
    flexDirection: 'row',
  },
  FlexWrap: {
    flexWrap: 'wrap',
  },
  FlexNoWrap: {
    flexWrap: 'nowrap',
  },
  FlexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  FlexNoWrapReverse: {
    flexWrap: 'nowrap-reverse',
  },
  AlignContent: {
    alignContent: 'center',
  },
  AlignContentStart: {
    alignContent: 'flex-start',
  },
  AlignContentEnd: {
    alignContent: 'flex-end',
  },
  AlignContentSpaceBetween: {
    alignContent: 'space-between',
  },
  AlignContentSpaceAround: {
    alignContent: 'space-around',
  },
  AlignContentSpaceEvenly: {
    alignContent: 'space-evenly',
  },
  AlignItems: {
    alignItems: 'center',
  },
  AlignItemsStart: {
    alignItems: 'flex-start',
  },
  AlignItemsEnd: {
    alignItems: 'flex-end',
  },
  AlignItemsStretch: {
    alignItems: 'stretch',
  },
  AlignItemsBaseline: {
    alignItems: 'baseline',
  },
  JustifyContentCenter: {
    justifyContent: 'center',
  },
  JustifyContentStart: {
    justifyContent: 'flex-start',
  },
  JustifyContentEnd: {
    justifyContent: 'flex-end',
  },
  JustifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  JustifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  JustifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },


  // Comtainers styles
  Container: {
    paddingTop: 26,
    paddingBottom: 14,
  },

  // Text styles
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SmallText: {
    fontSize: 12,
    fontWeight: 200,
  },
  MediumHeading: {
    fontSize: 16,
  },
  light: {
    fontWeight: '200',
  },
  Regular: {
    fontWeight: '400',
  },
  Medium: {
    fontWeight: '500',
  },
  Bold: {
    fontWeight: 'bold',
  },

  // Card styles
  CardsSlider: {
    height: 220,
    width: '100%',
  },
  ProductCard: {
    width: 160,
    height: 180,
    marginRight: 10,
  },

  // Link styles
  Link:{},


  // Button styles

  // Input styles

  // Image styles

  // Layout styles

})

export default common;