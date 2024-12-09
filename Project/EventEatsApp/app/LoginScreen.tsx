import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isVendorLogin, setIsVendorLogin] = useState(false);

  const router = useRouter(); // Use router for navigation

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields to log in!");
      return;
    }

    Alert.alert("Success", "User login successful!");
    router.push("/MenuScreen"); // Navigate to MenuScreen for user login
  };

  const handleVendorLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields to log in!");
      return;
    }

    Alert.alert("Success", "Vendor login successful!");
    router.push("/vendor-home"); // Navigate to VendorHome for vendor login
  };

  const handleSignup = () => {
    if (!signupEmail || !signupPassword) {
      Alert.alert("Error", "Please fill in all fields to sign up!");
      return;
    }

    Alert.alert("Success", "Signup successful! You can now log in.");
    setSignupEmail("");
    setSignupPassword("");
    setIsSignup(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EventEats</Text>
      {isSignup ? (
        <>
          <Text style={styles.subtitle}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={signupEmail}
            onChangeText={setSignupEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={signupPassword}
            onChangeText={setSignupPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSignup(false)}>
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.subtitle}>{isVendorLogin ? "Vendor Login" : "User Login"}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={isVendorLogin ? handleVendorLogin : handleLogin}
          >
            <Text style={styles.buttonText}>
              {isVendorLogin ? "Vendor Login" : "User Login"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSignup(true)}>
            <Text style={styles.linkText}>Don't have an account? Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsVendorLogin(!isVendorLogin)}
            style={styles.vendorButton}
          >
            <Text style={styles.linkText}>
              {isVendorLogin ? "Switch to User Login" : "Switch to Vendor Login"}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#2c662d",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  vendorButton: {
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#2c662d",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
