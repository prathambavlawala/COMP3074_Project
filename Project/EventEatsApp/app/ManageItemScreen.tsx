/*import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Switch } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const ManageItemScreen: React.FC = () => {
  const router = useRouter();
  const { id, name, price, description, available } = useLocalSearchParams(); // Passed data from the previous screen

  const [itemName, setItemName] = useState(name || "");
  const [itemPrice, setItemPrice] = useState(price ? parseFloat(price) : 0);
  const [itemDescription, setItemDescription] = useState(description || "");
  const [isAvailable, setIsAvailable] = useState(available === "true");

  const handleSave = () => {
    // Example save logic
    Alert.alert(
      "Success",
      `Item updated successfully:
      Name: ${itemName}
      Price: $${itemPrice.toFixed(2)}
      Description: ${itemDescription}
      Available: ${isAvailable ? "Yes" : "No"}`
    );

    // Navigate back to vendor home or previous screen
    router.push("/vendor-home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Item</Text>

      <Text style={styles.label}>Item Name</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        value={itemPrice.toString()}
        onChangeText={(text) => setItemPrice(parseFloat(text) || 0)}
        keyboardType="numeric"
        placeholder="Enter item price"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={itemDescription}
        onChangeText={setItemDescription}
        placeholder="Enter item description"
        multiline
        numberOfLines={4}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Available</Text>
        <Switch value={isAvailable} onValueChange={setIsAvailable} />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cancelButton, styles.button]}
        onPress={() => router.push("/vendor-home")}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};*/



//updating for backend
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Switch } from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";

const ManageItemScreen: React.FC = () => {
  const router = useRouter();
  const { id, name, price, description, available } = useLocalSearchParams();

  const [itemName, setItemName] = useState(name || "");
  const [itemPrice, setItemPrice] = useState(price ? parseFloat(price) : 0);
  const [itemDescription, setItemDescription] = useState(description || "");
  const [isAvailable, setIsAvailable] = useState(available === "true");

  const handleSave = () => {
    const updatedItem = {
      name: itemName,
      price: itemPrice,
      description: itemDescription,
      available: isAvailable,
    };

    axios
      .put(`http://localhost:5000/api/menu/${id}`, updatedItem)
      .then(() => {
        Alert.alert("Success", "Item updated successfully!");
        router.push("/vendor-home");
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        Alert.alert("Error", "Failed to update the item.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Item</Text>
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        style={styles.input}
        value={itemName.toString()}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        value={itemPrice.toString()}
        onChangeText={(text) => setItemPrice(parseFloat(text) || 0)}
        keyboardType="numeric"
        placeholder="Enter item price"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={itemDescription.toString()}
        onChangeText={setItemDescription}
        placeholder="Enter item description"
        multiline
        numberOfLines={4}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Available</Text>
        <Switch value={isAvailable} onValueChange={setIsAvailable} />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

// use this 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#2c662d", marginBottom: 20 },
  label: { fontSize: 16, color: "#333", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  textArea: { height: 100 },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default ManageItemScreen;
