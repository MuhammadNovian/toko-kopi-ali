export type MenuItem = {
  name: string;
  category: "COFFEE" | "NON COFFEE" | "FOOD" | "PASTRY";
  description: string;
  price: string;
  image: string;
};

export const menu: MenuItem[] = [
  {
    name: "Kopi Susu Ali",
    category: "COFFEE",
    description: "Signature coffee with a smooth, creamy finish.",
    price: "Rp 18K",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Iced Latte",
    category: "COFFEE",
    description: "Bold espresso, chilled milk, zero unnecessary drama.",
    price: "Rp 22K",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Matcha Cream",
    category: "NON COFFEE",
    description: "Earthy matcha balanced with a soft creamy layer.",
    price: "Rp 24K",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Croissant Ali",
    category: "PASTRY",
    description: "Buttery, flaky and dangerously easy to finish.",
    price: "Rp 20K",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Chicken Sandwich",
    category: "FOOD",
    description: "A proper meal for people who forgot lunch existed.",
    price: "Rp 32K",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85"
  },
  {
    name: "Chocolate",
    category: "NON COFFEE",
    description: "Rich chocolate for non-coffee days.",
    price: "Rp 22K",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1000&q=85"
  }
];