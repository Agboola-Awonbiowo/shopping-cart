import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Accordion = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.textWrapper} onPress={toggleAccordion}>
        <Text>{title}</Text>
        <Ionicons name="chevron-down" size={16} />
      </Pressable>
      {!isCollapsed && (
        <View>
          <Text style={styles.content}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
    container:{
       borderTopWidth: 1,
       borderTopColor: COLORS.gray
    },
    textWrapper:{
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    content:{
        paddingBottom: 8,
        lineHeight: 22
    }
})
