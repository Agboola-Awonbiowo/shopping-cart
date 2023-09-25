import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { COLORS } from '../constants/colors';

const Account = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageWrapper}
              source={require('../assets/images/user.png')}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@yahoo.com</Text>
        </View>
        <View style={styles.accordionContainer}>
          <Accordion
            title="My Orders"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="My Favourites"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="Address Book"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="My Reviews & Ratings"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion title="PromoCode" content="123456" />
          <Accordion title="Wallet" content="$30000" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            details
            btnStyle={styles.plainBtn}
            textStyle={styles.plainBtnText}
          >
            Log out
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  profileContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
  },
  imageContainer: {},
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  accordionContainer: {
    marginTop: 50,
    marginHorizontal: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  plainBtn: {
    backgroundColor: 'white',
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginTop: 16,
  },
  plainBtnText: {
    color: COLORS.primary,
    fontSize: 16,
  },
});
