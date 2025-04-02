import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { useRouter } from 'expo-router';
import { Test } from '../../../components/Test';

export default function index() {
    const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Model 3D</Text>
      <View style={{ width: 300, height: 300,backgroundColor:"red" }}> 
        <Canvas style={{ flex: 1 }}>
          <ambientLight />
          <Suspense fallback={null}>
            <Test />
          </Suspense>
        </Canvas>
      </View>
       <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.push("/");
              }}
            >
              <Text style={styles.textButton}>back</Text>
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