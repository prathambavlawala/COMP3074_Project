// app/checkout.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const menuItems = [
  {
    id: "1",
    name: "Burger",
    price: 10,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
  },
  {
    id: "2",
    name: "Pizza",
    price: 15,
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
  },
  {
    id: "3",
    name: "Cake",
    price: 5,
    image: "https://i.postimg.cc/2S7cYMdj/ai-generated-chocolate-cake-slice-free-png.png",
  },
  {
    id: "4",
    name: "Coke",
    price: 5,
    image: "https://i.postimg.cc/tC1217hc/photo-1667204651371-5d4a65b8b5a9-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
  },
  {
    id: "5",
    name: "Hot-dog",
    price: 7,
    image: "https://i.postimg.cc/fWPvhZ6f/hot-dog-isolated-on-white-background-clipping-path-full-depth-of-field.jpg",
  },
];

export default function Checkout() {
  const { id, quantity, name, seatNumber, cardAdded } = useLocalSearchParams();
  const router = useRouter();

  const item = menuItems.find((menuItem) => menuItem.id === id);
  const qty = Number(quantity) || 1;
  const total = item ? item.price * qty : 0;
  const tax = total * 0.13; // Assuming 13% tax
  const finalAmount = total + tax;

  const handlePayment = () => {
    Alert.alert("Payment Successful", "Thank you for your purchase!");
    router.push(
      `/tracking?id=${item.id}&name=${encodeURIComponent(name)}&seatNumber=${encodeURIComponent(seatNumber)}`
    );
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        ${item.price.toFixed(2)} x {qty} quantity
      </Text>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>Name:</Text> {name}
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>Seat Number:</Text> {seatNumber}
        </Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: ${total.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Tax (13%): ${tax.toFixed(2)}</Text>
        <Text style={styles.summaryTextFinal}>Amount: ${finalAmount.toFixed(2)}</Text>
      </View>

      {cardAdded === "true" ? (
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addCardButton}
          onPress={() =>
            router.push(
              `/add-card?id=${item.id}&quantity=${qty}&name=${encodeURIComponent(name)}&seatNumber=${encodeURIComponent(seatNumber)}`
            )
          }
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          router.push(`/order?id=${item.id}&quantity=${qty}&name=${encodeURIComponent(name)}&seatNumber=${encodeURIComponent(seatNumber)}`)
        }
      >
        <Text style={styles.backButtonText}>Back to Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#2c662d" },

  itemImage: { width: 150, height: 150, marginBottom: 20, borderRadius: 10 },
  itemName: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#000" },
  itemPrice: { fontSize: 16, marginBottom: 20, color: "#555" },

  userInfo: { marginVertical: 20 },
  userInfoText: { fontSize: 16, color: "#555", marginBottom: 5 },
  boldText: { fontWeight: "bold", color: "#000" },

  summary: { marginVertical: 20, alignItems: "center" },
  summaryText: { fontSize: 16, marginBottom: 5, color: "#555" },
  summaryTextFinal: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#000" },

  payButton: {
    backgroundColor: "#2c662d",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  payButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  addCardButton: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  backButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
  },
  backButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
