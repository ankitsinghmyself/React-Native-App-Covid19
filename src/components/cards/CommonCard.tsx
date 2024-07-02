import React from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {Card, Title, Paragraph, Text} from 'react-native-paper';
import RowStackResult from '../RowStackResult';
import Layout from '../../Layout';

interface CountryInfo {
  flag: string;
}
const scale = Layout.fontScale;

const CommonCard: React.FC<any> = ({containerStyle, countryName, data}) => {
  return (
    <>
      <View
        style={[
          styles.countrySection,
          {
            backgroundColor: containerStyle || '#FFC692',
          },
        ]}>
        <View style={styles.countryHeader}>
          <Text style={styles.countrySectionTitle}>
            {countryName || 'Unknown Country'}:{' '}
          </Text>
        </View>
        <RowStackResult data={data} textColor="black" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  countrySection: {
    backgroundColor: '#FFC692',
    marginTop: 0,
    marginBottom: 20,
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  countryHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  countrySectionTitle: {
    textAlign: 'left',
    color: 'black',
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 18 * scale,
    fontFamily: 'Roboto',
  },
});

export default CommonCard;
