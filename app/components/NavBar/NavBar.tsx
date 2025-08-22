// import Link from "next/link";
// import React from "react";

// const NavBar = () => {
//   const links = (
//     <>
//       <ul className="menu menu-horizontal px-1">
//         <Link href="/">
//           <li>Home</li>
//         </Link>
//         <Link href="/">
//           <li>Dashboard</li>
//         </Link>
//         <Link href="/">
//           <li>
//             Items
//             <ul className="p-2">
//                 <Link href="/"><li>Ice-Creame</li></Link>
//                 <Link href="/"><li>Pizza</li></Link>
//                 <Link href="/"><li>Burger</li></Link>
//                 <Link href="/"><li>Sandwich</li></Link>
//                 <Link href="/"><li>Soft Drink</li></Link>
//               </ul>
//           </li>
//         </Link>
//         <Link href="/">
//           <li>About</li>
//         </Link>
//       </ul>
//     </>
//   );

//   const authLinks = (
//     <>
//       <ul className="menu menu-horizontal px-1">
//         <Link href="/login">
//           <li>Login</li>
//         </Link>
//         <Link href="/register">
//           <li>Register</li>
//         </Link>
//       </ul>
//     </>
//   );
//   return (
//     <div className="bg-base-100 shadow-lg">
//       <div className="navbar max-w-7xl mx-auto">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">TastGo</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <div className="menu menu-horizontal px-1">{links}</div>
//         </div>
//         <div className="navbar-end">
//           <div className="hidden lg:flex">{authLinks}</div>
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Items</summary>
          <ul className="p-2 glass rounded-lg space-y-2 min-w-xs w-full">
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/pages/all-items">All Items</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/ice-cream">Ice Cream</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/pizza">Pizza</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/burger">Burger</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/sandwich">Sandwich</Link>
            </li>
            <li className="hover:bg-orange-600 hover:text-white rounded">
              <Link href="/drinks">Soft Drink</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="shadow-lg rounded-xl 
        bg-white/30 backdrop-blur-md  border border-white/20 z-50"
      >
        <div className="navbar max-w-7xl mx-auto px-4 py-3 justify-around">
          {/* Left */}
          <div>
            <div>
              <Link href="/" className="text-2xl font-bold text-orange-600">
                TastGo
              </Link>
            </div>
          </div>

          {/* Center (Desktop menu) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal gap-4 font-medium text-gray-800">
              {links}
            </ul>
          </div>

          {/* Right (Auth + Button) */}
          <div className="hidden lg:flex items-center gap-4">
            <ul className="menu menu-horizontal font-medium text-gray-800">
              {authLinks}
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/products"
              className="btn bg-orange-500 text-white border-none hover:bg-orange-600 rounded-full px-6"
            >
              Explore
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/40 backdrop-blur-md shadow-md border-t border-white/20"
        >
          <ul className="menu w-full p-4 flex flex-col gap-3 font-medium text-gray-800">
            {links}
            {authLinks}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
