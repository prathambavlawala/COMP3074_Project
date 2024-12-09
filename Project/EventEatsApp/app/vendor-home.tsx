import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { useRouter } from "expo-router";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: "1", name: "Burger", price: 10, image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" },
  { id: "2", name: "Pizza", price: 15, image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
  { id: "3", name: "Cake", price: 5, image: "https://i.postimg.cc/2S7cYMdj/ai-generated-chocolate-cake-slice-free-png.png" },
  { id: "4", name: "Coke", price: 5, image: "https://i.postimg.cc/tC1217hc/photo-1667204651371-5d4a65b8b5a9-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg" },
  { id: "5", name: "Hot-dog", price: 7, image: "https://i.postimg.cc/fWPvhZ6f/hot-dog-isolated-on-white-background-clipping-path-full-depth-of-field.jpg" },
];

const analyticsData = {
  totalOrders: 123,
  totalRevenue: 1500,
  topItem: "Pizza",
};

const VendorHome: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Info", "You have been logged out.");
    router.push("/"); // Redirect to login screen
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.manageButton}
        onPress={() =>
          router.push({
            pathname: "/ManageItemScreen",
            params: {
              id: item.id,
              name: item.name,
              price: item.price.toString(),
              image: item.image,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Manage</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendor Dashboard</Text>

      <View style={styles.analyticsContainer}>
        <Text style={styles.analyticsTitle}>Analytics</Text>
        <Text style={styles.analyticsText}>Total Orders: {analyticsData.totalOrders}</Text>
        <Text style={styles.analyticsText}>Total Revenue: ${analyticsData.totalRevenue}</Text>
        <Text style={styles.analyticsText}>Top Item: {analyticsData.topItem}</Text>
      </View>

      <Text style={styles.subtitle}>Menu Items</Text>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.menuList}
      />

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", color: "#2c662d", textAlign: "center", marginBottom: 20 },
  analyticsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  analyticsTitle: { fontSize: 18, fontWeight: "bold", color: "#2c662d", marginBottom: 10 },
  analyticsText: { fontSize: 16, color: "#555", marginBottom: 5 },
  subtitle: { fontSize: 18, fontWeight: "bold", color: "#2c662d", marginBottom: 10 },
  menuList: { alignItems: "center" },
  menuItem: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    elevation: 3,
  },
  image: { width: 100, height: 100, marginBottom: 10, borderRadius: 10 },
  itemName: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  itemPrice: { fontSize: 14, color: "#555", marginBottom: 10 },
  manageButton: { backgroundColor: "#4a90e2", padding: 10, borderRadius: 5, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  button: { padding: 10, borderRadius: 5, width: "80%", alignItems: "center", marginVertical: 10 },
  logoutButton: { backgroundColor: "#d9534f", alignSelf: "center" },
});

export default VendorHome;
