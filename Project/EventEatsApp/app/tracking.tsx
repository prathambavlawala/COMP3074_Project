import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const orderStatuses = [
  "Order Placed",
  "Preparing Your Food",
  "Out for Delivery",
  "Delivered",
];

export default function Tracking() {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState(0); // Start at the first status

  useEffect(() => {
    // Simulate status updates every 5 seconds
    const interval = setInterval(() => {
      setCurrentStatus((prevStatus) => {
        if (prevStatus < orderStatuses.length - 1) {
          return prevStatus + 1;
        }
        clearInterval(interval); // Stop updating after reaching "Delivered"
        return prevStatus;
      });
    }, 5000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Order</Text>
      <View style={styles.timeline}>
        {orderStatuses.map((status, index) => (
          <View key={index} style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                index <= currentStatus && styles.activeStatusDot,
              ]}
            />
            <Text
              style={[
                styles.statusText,
                index <= currentStatus && styles.activeStatusText,
              ]}
            >
              {status}
            </Text>
          </View>
        ))}
      </View>
      {currentStatus === orderStatuses.length - 1 && (
        <Text style={styles.successMessage}>
          Your order has been delivered! 🎉
        </Text>
      )}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#2c662d" },

  timeline: { width: "100%", marginTop: 20 },
  statusContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  statusDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  activeStatusDot: { backgroundColor: "#2c662d" },
  statusText: { fontSize: 16, color: "#aaa" },
  activeStatusText: { color: "#2c662d", fontWeight: "bold" },

  successMessage: { marginTop: 20, fontSize: 18, fontWeight: "bold", color: "#2c662d" },

  backButton: {
    backgroundColor: "#2c662d",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 30,
  },
  backButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
