/*import React, { createContext, useState, ReactNode } from "react";

// Define a MenuItem type
interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Context Type
interface MenuContextType {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

// Create the context
export const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  setMenuItems: () => {},
});

// Context Provider
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "1", name: "Burger", price: 10, image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" },
    { id: "2", name: "Pizza", price: 15, image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
  ]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};*/





//updated backend code 
import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

// Define a MenuItem type
interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

// Context Type
interface MenuContextType {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

// Create the context
export const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  setMenuItems: () => {},
});

// Context Provider
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Fetch menu items from backend
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

  