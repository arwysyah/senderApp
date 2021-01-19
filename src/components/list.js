import React, {memo, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dateFormats, formatNumber, api} from '../components/index';
import {styles} from '../styles/index';
const {
  secondContainer,
  greenColor,
  orangeColor,
  wrapper,
  wrapper1,
  SuccesCheck,
  pendingCheck,
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
                  <Icon name="arrow-right" size={21} />
                  <Text style={{fontWeight: 'bold'}}>
                    {beneficiary_bank.toUpperCase()}
                  </Text>
                </View>

                <Text>{beneficiary_name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text> Rp. {formatNumber(amount)}</Text>
                  <Text>{'\u2B24'}</Text>
                  <Text>{dateFormats(created_at)}</Text>
                </View>
              </View>
              <View style={status === 'SUCCESS' ? SuccesCheck : pendingCheck}>
                <Text style={{textAlign: 'center'}}>
                  {status == 'SUCCESS' ? (
                    <Text>Berhasil</Text>
                  ) : (
                    <Text>Menunggu</Text>
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
