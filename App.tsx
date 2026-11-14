import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <Text style={styles.name}>UnterSous</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  name: { color: "#172824", fontSize: 30, fontWeight: "700", letterSpacing: -0.8 },
});
