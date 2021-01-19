import React from 'react';
import {View, Text, SafeAreaView,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatNumber,dateFormats} from '../components/index';
import {styles,orangeColor} from '../styles/index'
const{commonText,transaction,detailTrans,wrapper1,text,secondContainer,secondText}=styles
const Detail = ({route, navigation}) => {
    const {item}= route.params
  const {
    created_at,
    sender_bank,
    beneficiary_name,
    beneficiary_bank,
    status,
    unique_code,
    transaction_id,
    account_number,
    amount,
  } = item;

  return (
    <View>
      <SafeAreaView>
        <View style={{height: 20}} />
        <View style={transaction}>
          <Text style={{fontWeight: 'bold'}}>
            ID TRANSAKSI : #{transaction_id}
          </Text>
          <Icon size={21} name="content-copy" color={orangeColor} />
        </View>
        <View style={detailTrans}>
          <Text style={{fontWeight: 'bold'}}>DETAIL TRANSAKSI</Text>
          <Text style={{color: orangeColor, fontWeight: '300'}}>Tutup</Text>
        </View>
        <View style={{paddingHorizontal: 30, backgroundColor: 'white'}}>
          <View style={{height: 15}} />
          <View style={wrapper1}>
            <Text style={text}>{sender_bank.toUpperCase()}</Text>
            <Icon name="arrow-right" size={25} />
            <Text style={text}>{beneficiary_bank.toUpperCase()}</Text>
          </View>
          <View style={{height: 15}} />
          <View style={secondContainer}>
            <Text style={secondText}>{beneficiary_name}</Text>
            <Text style={secondText}>Nominal</Text>
          </View>

          <View style={secondContainer}>
            <Text style={commonText}>{account_number}</Text>
            <Text style={commonText}>Rp. {formatNumber(amount)}</Text>
          </View>
          <View style={{height: 25}} />
          <View style={secondContainer}>
            <Text style={secondText}>BERITA TRANSFER</Text>
            <Text style={secondText}>KODE UNIK</Text>
          </View>

          <View style={secondContainer}>
            {status === 'SUCCESS' ? (
              <Text style={commonText}>Berhasil</Text>
            ) : (
              <Text style={commonText}>Menunggu</Text>
            )}
            <Text style={commonText} />
            <Text style={commonText}>{unique_code}</Text>
          </View>
          <View style={commonText} />
          <View>
            <Text style={secondText}>WAKTU DIBUAT</Text>
            <Text style={commonText}>{dateFormats(created_at)}</Text>
          </View>
          <View style={{height: 25}} />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default Detail