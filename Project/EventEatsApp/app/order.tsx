// app/order.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const menuItems = [
  {
    id: "1",
    name: "Burger",
    price: 10,
    description: "A delicious beef burger with lettuce and tomato.",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
  },
  {
    id: "2",
    name: "Pizza",
    price: 15,
    description: "Cheesy pepperoni pizza with extra toppings.",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
  },
  {
    id: "3",
    name: "Cake",
    price: 5,
    description: "A slice of moist chocolate cake.",
    image: "https://i.postimg.cc/2S7cYMdj/ai-generated-chocolate-cake-slice-free-png.png",
  },
  {
    id: "4",
    name: "Coke",
    price: 5,
    description: "A cane of chilled coke.",
    image: "https://i.postimg.cc/tC1217hc/photo-1667204651371-5d4a65b8b5a9-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
  },
  {
    id: "5",
    name: "Hot-dog",
    price: 5,
    description: "A classic sausage in a soft bun, topped with your favorite condiments.",
    image: "https://i.postimg.cc/fWPvhZ6f/hot-dog-isolated-on-white-background-clipping-path-full-depth-of-field.jpg",
  },
];

export default function Order() {
  const { id, quantity } = useLocalSearchParams();
  const router = useRouter();

  const [qty, setQty] = useState(() => {
    const parsedQty = Number(quantity);
    return isNaN(parsedQty) ? 1 : parsedQty;
  });

  const [name, setName] = useState(""); // New: Name input
  const [seatNumber, setSeatNumber] = useState(""); // New: Seat number input

  const item = menuItems.find((menuItem) => menuItem.id === id);
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item not found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/")}>
          <Text style={styles.backButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }



  
  const handleAddToCart = () => {
    if (!name || !seatNumber) {
      Alert.alert("Error", "Please provide your name and seat number.");
      return;
    }
    router.push(
      `/checkout?id=${item.id}&quantity=${qty}&name=${encodeURIComponent(
        name
      )}&seatNumber=${encodeURIComponent(seatNumber)}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Seat Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Seat Number"
        value={seatNumber}
        onChangeText={setSeatNumber}
        keyboardType="numeric"
      />

      {/* Quantity Selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQty((prevQty) => Math.max(1, prevQty - 1))}
        >
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{qty}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQty((prevQty) => prevQty + 1)}
        >
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/")}>
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#2c662d" },
  itemImage: { width: 200, height: 200, marginBottom: 20, borderRadius: 10 },
  itemName: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center", color: "#2c662d" },
  itemPrice: { fontSize: 20, marginBottom: 10, fontWeight: "bold", textAlign: "center", color: "#000" },
  itemDescription: { fontSize: 16, textAlign: "center", color: "#555", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    width: "80%",
    borderRadius: 5,
    textAlign: "center",
  },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  quantityButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityText: { fontSize: 20, fontWeight: "bold", color: "#000" },
  quantity: { fontSize: 18, fontWeight: "bold", marginHorizontal: 10 },
  addToCartButton: {
    backgroundColor: "#2c662d",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  addToCartText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  backButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
  },
  backButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
