import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';

const APIDemo = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getMovies();
  }, []);

  return (
    <>
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
      <Button
        title="Get Movies List"
        onPress={() => {
          getMovies();
        }}
      />
    </>
  );
};

export default APIDemo;
