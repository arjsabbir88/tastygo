// import Link from "next/link";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       this is all items page
//       <Link href="/pages/add-items">
//         <button className="bg-orange-600 px-3 py-2 rounded-lg text-white hover:cursor-pointer">
//           add items
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default page;

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuPage = () => {
  interface Item {
    _id?: string; // jodi MongoDB use koro
    id: string; // jodi mock data use koro
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/items"); // change with your API
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  // Group by category
  const categories = [
    "ice-cream",
    "pizza",
    "burger",
    "sandwich",
    "soft-drinks",
  ];
  console.log("Fetched items:", items); // Debugging line to check fetched items
  const getItemsByCategory = (cat: any) =>
    items.filter((item) => item.category === cat);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        🍴 Our Delicious Menu
      </h1>

      {categories.map((cat, index) => (
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Category Title */}
          <h2 className="text-2xl font-semibold mb-6 capitalize text-orange-600">
            {cat.replace("-", " ")}
          </h2>

          {/* Horizontal Scroll / Slider */}
          <div className="flex gap-6 overflow-hidden pb-4 scrollbar-hide">
            {getItemsByCategory(cat).map((item) => (
              <Link key={item._id} href={`/pages/all-items/${item._id}`}>
                <motion.div
                  
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-[250px] bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/30 flex flex-col hover:cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold text-orange-600">
                      ${item.price}
                    </span>
                    <button className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600 rounded-full px-4">
                      Add +
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MenuPage;
