"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type Item = {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  createdBy: string;
};

export default function ItemDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: Item) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!item) {
    return <p className="text-center mt-10">Item not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {item.name}
      </motion.h1>

      {/* Image (Next.js optimized) */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg relative w-full h-[400px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={item.image || "/fallback.png"} // ✅ fallback image if missing
          alt={item.name || "Item Image"} // ✅ alt text added
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-6 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {item.description}
      </motion.p>

      {/* Price + Button */}
      <motion.div
        className="mt-8 flex items-center justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="text-3xl font-semibold text-gray-900">
          ${item.price}
        </span>
        <motion.button
          className="bg-red-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:bg-red-700 transition"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Add to Cart - ${item.price}
        </motion.button>
      </motion.div>

      {/* Footer Info */}
      <motion.div
        className="mt-8 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>Category: {item.category}</p>
        <p>Added by: {item.createdBy}</p>
      </motion.div>
    </div>
  );
}
