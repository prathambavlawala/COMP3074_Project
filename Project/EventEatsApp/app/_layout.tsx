// app/_layout.tsx
/*import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        headerTitle: "EventEats",
        headerTintColor: "#333",
      }}
    />
  );
}
*/


import { Stack } from "expo-router";
import { MenuProvider } from "./MenuContext";

export default function Layout() {
  return (
    <MenuProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f8f8f8" },
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          headerTitle: "EventEats",
          headerTintColor: "#333",
        }}
      />
    </MenuProvider>
  );
}
