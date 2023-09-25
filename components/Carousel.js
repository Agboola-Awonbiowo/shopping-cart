import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get('window');
  const carouselWidth = 327;
  const carouselHeight = 328;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / carouselWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          { width: carouselWidth, height: carouselHeight },
        ]}
      >
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <View
              style={[
                styles.slide,
                { width: carouselWidth, height: carouselHeight },
              ]}
            >
              <Image source={item} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onScroll={(event) => handleScroll(event)}
          scrollEventThrottle={200}
        />
      </View>
      <View style={styles.indicatorContainer}>
        {items.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentIndex(index)}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  currentIndex === index ? COLORS.primary : 'gray',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 320,
    overflow: 'hidden',
    backgroundColor: COLORS.background,
    borderRadius: 16,
  },
  slide: {
    width: 327,
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  image: {
    width: 200,
    height: 300,
  },
});
