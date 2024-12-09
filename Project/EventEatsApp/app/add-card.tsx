// app/add-card.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function AddCard() {
  const router = useRouter();
  const { id, quantity, name, seatNumber } = useLocalSearchParams();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handleAddCard = () => {
    if (!cardNumber || !expiry || !cvv || !cardName) {
      Alert.alert("Error", "Please fill in all card details!");
      return;
    }

    Alert.alert("Card Added", "Your card has been added successfully.");
    router.push(
      `/checkout?id=${id}&quantity=${quantity}&name=${encodeURIComponent(name)}&seatNumber=${encodeURIComponent(seatNumber)}&cardAdded=true`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        value={cardName}
        onChangeText={setCardName}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChangeText={setExpiry}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="number-pad"
        value={cvv}
        onChangeText={setCvv}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#2c662d",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
