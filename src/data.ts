// cakesData.ts

export type CakeSize = "6-inch" | "8-inch";

export type Cake = {
  id: number;
  name: string;
  unitPrice: number;
  image: string;
  description: string;
  availableSizes?: CakeSize[];
};

export const cakes: Cake[] = [
  {
    id: 0,
    image: "/assets/cakes/image-1.jpg",
    name: "Waffle with Berries",
    unitPrice: 6.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 1,
    image: "/assets/cakes/image-2.jpg",
    name: "Vanilla Bean Crème Brûlée",
    unitPrice: 7.0,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 2,
    image: "/assets/cakes/image-3.jpg",
    name: "Macaron Mix of Five",
    unitPrice: 8.0,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 3,
    image: "/assets/cakes/image-4.jpg",
    name: "Classic Tiramisu",
    unitPrice: 5.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 4,
    image: "/assets/cakes/image-5.jpg",
    name: "Pistachio Baklava",
    unitPrice: 4.0,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 5,
    image: "/assets/cakes/image-6.jpg",
    name: "Lemon Meringue Pie",
    unitPrice: 5.0,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 6,
    image: "/assets/cakes/image-7.jpg",
    name: "Red Velvet Cake",
    unitPrice: 4.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 7,
    image: "/assets/cakes/image-8.jpg",
    name: "Salted Caramel Brownie",
    unitPrice: 4.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 8,
    image: "/assets/cakes/image-9.jpg",
    name: "Vanilla Panna Cotta",
    unitPrice: 6.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 9,
    image: "/assets/cakes/image-10.jpg",
    name: "Vanilla Panna Cotta",
    unitPrice: 6.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 10,
    image: "/assets/cakes/image-11.jpg",
    name: "Vanilla Panna Cotta",
    unitPrice: 6.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
  {
    id: 11,
    image: "/assets/cakes/image-12.jpg",
    name: "Vanilla Panna Cotta",
    unitPrice: 6.5,
    description:
      'Please store at 0–4°C and consume within 24 hours for the best taste. Fruit decorations may vary depending on seasonal availability. Kindly inform us of any fruit allergies in advance. All cakes are made fresh daily — cancellations or changes are not allowed within 2 days of the delivery date. Available in 6" (serves 4–6, includes 1 utensil set) and 8" (serves 6–8, includes 1 utensil set).',
    availableSizes: ["6-inch", "8-inch"],
  },
];
