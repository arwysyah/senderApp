import React, {memo, useMemo} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dateFormats, formatNumber, api} from '../components/index';
import {styles} from '../styles/index';
const {
  secondContainer,
  greenColor,
  orangeColor,
  wrapper,
  wrapper1,
  succesCheck,
  pendingCheck,
  smallContainer
} = styles; //destructring object for not create object temporary reference
const List = ({item, navigation}) => {
  const {
    amount,
    created_at,
    sender_bank,
    beneficiary_name,
    beneficiary_bank,
    status,
  } = item;

  return (
    <View>
      <SafeAreaView>
        <View style={secondContainer}>
          <View style={status === 'SUCCESS' ? greenColor : orangeColor} />

          <TouchableOpacity
            style={{paddingRight: 13}}
            onPress={() =>
              navigation.navigate('Detail', {
                item,
              })
            }>
            <View style={wrapper}>
              <View>
                <View style={wrapper1}>
                  <Text style={{fontWeight: 'bold'}}>
                    {sender_bank.toUpperCase()}
                  </Text>
                  <Icon name="arrow-right" size={20} />
                  <Text style={{fontWeight: 'bold'}}>
                    {beneficiary_bank.toUpperCase()}
                  </Text>
                </View>
                {status == 'SUCCESS' ? (
                  <Text>{beneficiary_name}</Text>
                ) : (
                  <Text>- {beneficiary_name}</Text>
                )}

                <View
                  style={smallContainer}>
                  <Text> Rp. {formatNumber(amount)}</Text>
                  <Text style={{fontSize: 12, top: 2}}> ⬤ </Text>
                  <Text>{dateFormats(created_at)}</Text>
                </View>
              </View>
              <View style={status === 'SUCCESS' ? succesCheck : pendingCheck}>
                <Text style={{textAlign: 'center'}}>
                  {status == 'SUCCESS' ? (
                    <Text style={{color: 'white'}}>Berhasil</Text>
                  ) : (
                    <Text style={{color: 'black'}}>Pengecekan</Text>
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: 8}} />
      </SafeAreaView>
    </View>
  );
};

export default memo(List);
