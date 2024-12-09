// Menu Model
const menuItems = [
    //{ id: 1, name: "Pizza", price: 12 },
    //{ id: 2, name: "Burger", price: 8 },
    //{ id: 3, name: "Sushi", price: 15 },
  { id: "1", name: "Burger", price: 10, image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" },
  { id: "2", name: "Pizza", price: 15, image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
  { id: "3", name: "Cake", price: 5, image: "https://i.postimg.cc/2S7cYMdj/ai-generated-chocolate-cake-slice-free-png.png" },
  { id: "4", name: "Coke", price: 5, image: "https://i.postimg.cc/tC1217hc/photo-1667204651371-5d4a65b8b5a9-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg" },
  { id: "5", name: "Hot-dog", price: 7, image: "https://i.postimg.cc/fWPvhZ6f/hot-dog-isolated-on-white-background-clipping-path-full-depth-of-field.jpg" },
  ];
  
  module.exports = {
    getAllMenuItems: () => {
      return menuItems;
    },
    findMenuItemById: (id) => {
      return menuItems.find((item) => item.id === parseInt(id));
    },
    updateMenuItemById: (id, updatedName) => {
      const menuItemIndex = menuItems.findIndex((item) => item.id === parseInt(id));
      if (menuItemIndex !== -1) {
        menuItems[menuItemIndex].name = updatedName;
        return menuItems[menuItemIndex];
      }
      return null;
    },
  };
  