import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Styles from '../Styles';
import CommonCard from '../components/cards/CommonCard';
import getCovidData from '../services/API/functions/getCovidData';
import {useAppDispatch, useAppSelector} from '../services/redux';
import {updateData} from '../services/redux/reducers/DefaultReducer';
import CandleCharts from '../components/CandleCharts';

export default function HomeScreen() {
  const defaultState = useAppSelector(state => state.root.default);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCovidData('India');
        // Alert.alert('Success', 'Data fetched successfully');
        dispatch(updateData(data));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const results = defaultState.data;
  const country = defaultState.country;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.mainHeader}>
          <Image
            style={styles.mainHeaderImage}
            source={require('../assets/svgs/c19.png')}
          />
        </View>
        <View style={Styles.scrollViewContentContainer}>
          <CommonCard
            data={results?.global}
            countryName="World"
            containerStyle="#B1ECFF"
          />
          <CommonCard
            data={results?.country}
            countryName={'India'}
            containerStyle="#FFC692"
          />
          {/* <CandleCharts country={'India'} data={results?.timeline} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainHeaderImage: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    marginBottom: 0,
  },
});
