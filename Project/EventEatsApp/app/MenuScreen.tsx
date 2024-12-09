/*import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { useRouter } from "expo-router";

const menuItems = [
  { id: "1", name: "Burger", price: 10, image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" },
  { id: "2", name: "Pizza", price: 15, image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
  { id: "3", name: "Cake", price: 5, image: "https://i.postimg.cc/2S7cYMdj/ai-generated-chocolate-cake-slice-free-png.png" },
  { id: "4", name: "Coke", price: 5, image: "https://i.postimg.cc/tC1217hc/photo-1667204651371-5d4a65b8b5a9-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg" },
  { id: "5", name: "Hot-dog", price: 7, image: "https://i.postimg.cc/fWPvhZ6f/hot-dog-isolated-on-white-background-clipping-path-full-depth-of-field.jpg" },
];

export default function MenuScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Info", "You have been logged out.");
    router.push("/");
  };

  const handleOrderNow = (itemId: string) => {
    // Navigate to order.tsx with the item's id passed as a query parameter
    router.push(`/order?id=${itemId}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menuItems.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>

          {/* "Order Now" Button */
          /*<TouchableOpacity
            style={styles.orderButton}
            onPress={() => handleOrderNow(item.id)} // Handle navigation to order.tsx
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Logout Button */
      /*<TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}*/


//updated backend code 

import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { MenuContext } from "./MenuContext";

export default function MenuScreen() {
  const router = useRouter();
  const { menuItems } = useContext(MenuContext);

  const handleOrderNow = (itemId: string) => {
    router.push(`/order?id=${itemId}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menuItems.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() => handleOrderNow(item.id)}
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
//using the same style 
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    width: 250,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  itemName: {
    marginTop: 5,
  },
  itemPrice: {
    marginBottom: 5,
    color: "#555",
  },
  orderButton: {
    backgroundColor: "#28a745",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    width: 100,
  },
  logoutButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    width: 120,
  },
  buttonText: {
    color: "#fff",
  },
});
