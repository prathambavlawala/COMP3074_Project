// app/profile.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const [name, setName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const router = useRouter();

  const handleSave = () => {
    if (!name || !seatNumber) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    Alert.alert("Success", `Profile updated!\nName: ${name}\nSeat Number: ${seatNumber}`);
    router.push(`/order?name=${encodeURIComponent(name)}&seatNumber=${encodeURIComponent(seatNumber)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Name Input */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Seat Number Input */}
      <Text style={styles.label}>Seat Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your seat number"
        keyboardType="number-pad"
        value={seatNumber}
        onChangeText={setSeatNumber}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2c662d",
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 10,
    color: "#555",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#2c662d",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
