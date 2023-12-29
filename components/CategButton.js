import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

// DATA
import cafesData from "../Coffee.json";
import { COLORS, TYPO } from "../theme";

export default function CategButton({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(cafesData)[0]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {Object.keys(cafesData).map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategoryChange(category)}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  selectedCategory === category
                    ? COLORS.cappucino
                    : COLORS.white,
              },
            ]}
          >
            <Text
              style={{
                color:
                  selectedCategory === category ? COLORS.white : COLORS.black,
                fontSize: 16,
                fontFamily: TYPO.title,
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
});
