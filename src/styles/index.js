import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const TOP = 24;
const black = 'black';
const ITEM_WIDTH = (width / 1.4) * 0.76;
const ITEM_HEIGHT = (ITEM_WIDTH / 1.4) * 1.47;
const backgroundColor = '#FBFBFB';
const orangeColor = '#d17128';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 60,
  },
  img: {
    height: 20,
    width: 20,

  },
  btn: {
    flexDirection: 'row',
  },
  sort: {color: orangeColor, top: 20, left: 40},
  modal: {
    height: 400,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    left: -width * 0.05,
  },
  wrapper: {
    backgroundColor: 'white',
    width: width * 0.95,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: -8,
  },
  wrapper1: {
    flexDirection: 'row',

    width: width / 2,
  },
  btnWrap:{height: 20, top: width/4},
  greenColor: {
    backgroundColor: '#2aa854',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 15,
  },
  orangeColor: {
    backgroundColor: orangeColor,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 15,
  },
  SuccesCheck: {
    borderWidth: 2,
    width: 100,
    height: 30,
    borderRadius: 8,
    top: 15,
    borderColor: '#2aa854',
  },
  pendingCheck: {
    borderWidth: 2,
    width: 100,
    height: 30,
    borderRadius: 8,
    top: 15,
    borderColor: orangeColor,
  },
  transaction: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailTrans: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  wrapper1: {
    flexDirection: 'row',

    width: '50%',
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  secondText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  secWrapper: {paddingHorizontal: 30, backgroundColor: 'white'},
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonText: {
    fontSize: 18,
    color: 'black',
  },
});

export {
  styles,
  black,
  SIZE,
  spacing,
  width,
  height,
  TOP,
  HEIGHT,
  backgroundColor,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  orangeColor,
};
