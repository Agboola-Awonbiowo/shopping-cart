import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const TextWithLimit = ({ text, limit }) => {
  const [showFullText, setShowFullText] = useState(false);
  const words = text.split(' ');

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View>
      <Text style={{lineHeight: 22}}>
        {showFullText ? text : words.slice(0, limit).join(' ')}
        {words.length > limit && (
          <Pressable onPress={toggleText}>
            <Text
              style={{ color: COLORS.primary}}
            >
              {showFullText ? ' View Less' : ' Read More'}
            </Text>
          </Pressable>
        )}
      </Text>
    </View>
  );
};

export default TextWithLimit;
