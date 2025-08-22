import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      this is all items page
      <Link href="/pages/add-items">
        <button className="bg-orange-600 px-3 py-2 rounded-lg text-white hover:cursor-pointer">
          add items
        </button>
      </Link>
    </div>
  );
};

export default page;
