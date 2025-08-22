"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { create } from "domain";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

      const dataToSend = {
    ...formData,
    price: parseFloat(formData.price).toFixed(2),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: "admin",
  };

  console.log("Data to send:", dataToSend);

     try {
    const res = await fetch("http://localhost:5000/add-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!res.ok) {
      throw new Error("Failed to add product");
    }

    setLoading(false);
    alert("✅ Product Added Successfully!");
    setFormData({ name: "", description: "", price: "", image: "", category: "" });
  } catch (error) {
    console.error("Error while adding product:", error);
    setLoading(false);
    alert("❌ Failed to add product!");
  }
    setFormData({ name: "", description: "", price: "", image: "", category: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 p-6"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🍔 Add New Product
        </h2>

        {/* Name */}
        <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white/70 backdrop-blur-md rounded-lg focus:ring-2 focus:ring-orange-400"
            placeholder="e.g. Cheese Burger"
          />
        </motion.div>

        {/* Description */}
        <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full bg-white/70 backdrop-blur-md rounded-lg focus:ring-2 focus:ring-orange-400"
            placeholder="Short description..."
          ></textarea>
        </motion.div>

        {/* Price */}
        <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white/70 backdrop-blur-md rounded-lg focus:ring-2 focus:ring-orange-400"
            placeholder="10.99"
          />
        </motion.div>
        <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white/70 backdrop-blur-md rounded-lg focus:ring-2 focus:ring-orange-400"
            placeholder="burger, pizza, etc."
          />
        </motion.div>

        {/* Image URL */}
        <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white/70 backdrop-blur-md rounded-lg focus:ring-2 focus:ring-orange-400"
            placeholder="https://example.com/product.jpg"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="w-full btn bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
        >
          {loading ? "Adding..." : "Add Product"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default AddProductForm;
