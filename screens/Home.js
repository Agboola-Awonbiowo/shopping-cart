// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';
// import {
//   Dimensions,
//   FlatList,
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import asaro from '../assets/images/asaro.png';
// import donut from '../assets/images/donut.png';
// import eforiro from '../assets/images/eforiro.png';
// import suyaImage from '../assets/images/suya.png';
// import { COLORS } from '../constants/colors';

// const data = [
//   { id: '1', image: asaro, title: 'Yam Porridge', price: '99.9' },
//   { id: '2', image: eforiro, title: 'Eforiro', price: '49.9' },
//   { id: '3', image: donut, title: 'African Donut', price: '80.9' },
//   { id: '4', image: suyaImage, title: 'Chicken Stew', price: '70.9' },
// ];

// const Home = ({ navigation }) => {
//   const cardWidth = Dimensions.get('window').width - 80;
//   const itemWidth = cardWidth + 20;
//   function pressHandler() {
//     navigation.navigate('MenuScreen');
//   }
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <Image style={styles.image} source={item.image} resizeMode="contain" />
//         <View style={styles.textWrapper}>
//           <Text style={styles.cardTitle}>{item.title}</Text>
//           <Text style={styles.cardDescription}>{`£${item.price}`}</Text>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.textContainer}>
//         <View>
//           <Text style={styles.text}>Think,</Text>
//           <Text style={styles.text}>Buy,</Text>
//           <Text style={styles.boldText}>Grow.</Text>
//         </View>
//       </View>
//       <View>
//         <Pressable onPress={pressHandler}>
//           <View style={styles.viewMore}>
//             <Text>All Products</Text>
//             <Ionicons name="arrow-forward-outline" size={16} />
//           </View>
//         </Pressable>
//         <View>
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             snapToAlignment="start"
//             decelerationRate="fast"
//             snapToInterval={itemWidth}
//             contentContainerStyle={styles.carousel}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   boldText: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 30,
//   },
//   viewMore: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 18,
//     marginVertical: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
//   textWrapper: {
//     flexDirection: 'row',
//     gap: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   carousel: {
//     paddingRight: (Dimensions.get('window').width - 80) / 2,
//     paddingVertical: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     width: Dimensions.get('window').width - 80,
//     padding: 16,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     position: 'relative',
//     top: 2,
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: COLORS.primary,
//     fontWeight: '500',
//   },
// });

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import asaro from '../assets/images/asaro.png';
import donut from '../assets/images/donut.png';
import eforiro from '../assets/images/eforiro.png';
import suyaImage from '../assets/images/suya.png';
import { COLORS } from '../constants/colors';

const data = [
  { id: '1', image: asaro, title: 'Yam Porridge', price: '99.9' },
  { id: '2', image: eforiro, title: 'Eforiro', price: '49.9' },
  { id: '3', image: donut, title: 'African Donut', price: '80.9' },
  { id: '4', image: suyaImage, title: 'Chicken Stew', price: '70.9' },
];

const cardWidth = Dimensions.get('window').width - 80;
const itemWidth = cardWidth + 20;

const Home = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate('MenuScreen');
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} resizeMode="contain" />
        <View style={styles.textWrapper}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{`£${item.price}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.text}>Think,</Text>
            <Text style={styles.text}>Buy,</Text>
            <Text style={styles.boldText}>Grow.</Text>
          </View>
        </View>
        <Pressable onPress={pressHandler}>
          <View style={styles.viewMore}>
            <Text>All Products</Text>
            <Ionicons name="arrow-forward-outline" size={16} />
          </View>
        </Pressable>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={itemWidth}
            contentContainerStyle={styles.carousel}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 30, 
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
  },
  viewMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 20,
  },
  image: {
    width: cardWidth * 0.7,
    height: cardWidth * 0.7,
  },
  textWrapper: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  carousel: {
    paddingRight: (Dimensions.get('window').width - 80) / 2,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: cardWidth,
    padding: 16,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    position: 'relative',
    top: 2,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
});
