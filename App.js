import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Restaurants } from './api/Restaurants';

export default function App() {

  const [restaurants,setRestaurants] = useState(null)

  useEffect(() => {
    Restaurants().then(result => {
      console.log(result.data.message)
      setRestaurants(result.data.restaurants)
    })
  },[])

  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
