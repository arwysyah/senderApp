import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import {styles, orangeColor, width} from '../styles/index';
import {List, api} from '../components/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
const {sort, searchBar, container, btnWrap,modal,btn,img} = styles;

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('');
  const [filterCheck, setFilter] = useState([
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ]);
  // const [error,setError] = useState(false)
  const [checkDefault, setDefault] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const getData = () => {
    axios.get(api).then((res) => {
      setData(Object.values(res.data));
    });
  };
  useEffect(() => {
    try {
      getData();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onRefresh = () => {
    setData([]);
    getData();
  };
  const filterData = data.filter((data) => {
    return (
      data.beneficiary_name.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
      data.beneficiary_bank.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
      data.sender_bank.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
      data.amount.toString().indexOf(text.toLowerCase()) !== -1
    );
  });

  const sortData = (key) => {
    setDefault(key);
    if (key === 0) {
      data.sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name));
    } else if (key === 1) {
      data.sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name));
    } else if (key === 2) {
      data.sort((a, b) => a.created_at > b.created_at);
    } else {
      data.sort((a, b) => b.created_at < b.created_at);
    }
    return filterData;
  };
  const renderItem = ({item}) => {
    return <List item={item} navigation={navigation} />;
  };
  return (
    <View style={container}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 10}}>
          <View style={searchBar}>
            <Icon name="search" size={30} style={{top: 20}} />
            <TextInput
              style={{backgroundColor: 'white', top: 5, height: 50}}
              onChangeText={setText}
              value={text}
              placeholder="Cari nama, bank atau nominal"
            />
            {isModalVisible === true && (
              <Modal isModalVisible={isModalVisible}>
                <View style={modal}>
                  {filterCheck.map((dataCheck, key) => {
                    return (
                      <View style={{width: width / 2}} key={key}>
                        {checkDefault === key ? (
                          <View style={{paddingBottom: 20}}>
                            <TouchableOpacity style={btn}>
                              <Image
                                style={img}
                                source={{
                                  uri: 'https://i.stack.imgur.com/OWcpX.png',
                                }}
                              />
                              <Text>{dataCheck}</Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <View style={{paddingBottom: 20}}>
                            <TouchableOpacity
                              onPress={() => sortData(key)}
                              style={btn}>
                              <Image
                                style={img}
                                source={{
                                  uri: 'https://i.stack.imgur.com/Kn8zA.png',
                                }}
                              />
                              <Text>{dataCheck}</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    );
                  })}
                  <View style={btnWrap}>
                    <Button title="Close" onPress={() => toggleModal()} />
                  </View>
                </View>
              </Modal>
            )}
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => toggleModal()}>
              <Text style={sort}>URUTKAN</Text>
              <Icon
                name="arrow-drop-down"
                size={25}
                color={orangeColor}
                style={{left: 40, top: 16}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {filterData.length > 0 ? (
            <FlatList
              style={{marginTop: 10}}
              showsVerticalScrollIndicator={true}
              data={filterData}
              refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              renderItem={renderItem}
              keyExtractor={(_, index) => 'item' + index}
            />
          ) : (
            <View style={{alignItems: 'center'}}>
              <Text>Data Not Found</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
