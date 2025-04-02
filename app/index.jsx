import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Suspense } from 'react';

import { useRouter } from 'expo-router';

export default function Index() {
        const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Model 3D</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/models");
        }}
      >
        <Text style={styles.textButton}>Colntinue</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    modelContainer: {
      flex: 1,
    },
    textContainer: {
      marginHorizontal: 24,
      gap: 4,
      marginVertical: 20,
    },
    textTitle: {
      fontFamily: "Inter-Bold",
      color: "white",
      fontSize: 18,
      textAlign: "center",
    },
    text: {
      fontFamily: "Inter-Light",
      color: "white",
      fontSize: 14,
      textAlign: "center",
    },
    button: {
      backgroundColor: "white",
      padding: 14,
      margin: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    textButton: {
      fontFamily: "Inter-Bold",
      color: "black",
      fontSize: 14,
    },
  });