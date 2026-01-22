'use client';

import Navbar from "@/components/Navbar";
import { Package, Pencil, Plus, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { ProductInterface } from "@/types/ProductInterface";

export default function ProductPage() {
    const [filterProducts, setFilterProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        setFilterProducts([
            { id: 1, name: 'หมูยอ', price: 40, image_url: '' },
            { id: 2, name: 'ส้มตำ', price: 35, image_url: '' },
            { id: 3, name: 'กาแฟ', price: 20, image_url: '' },
            { id: 4, name: 'ไก่ย่าง', price: 80, image_url: '' },
            { id: 5, name: 'ลาบเป็ด', price: 40, image_url: '' },
            { id: 6, name: 'กุ้งแช่น้ำปลา', price: 60, image_url: '' },
            { id: 7, name: 'ไข่ดาว', price: 10, image_url: '' },
            { id: 8, name: 'ต้มแซ่บ', price: 60, image_url: '' },
            { id: 9, name: 'ซกเล็ก', price: 50, image_url: '' },
            { id: 10, name: 'หมู่ย่าง', price: 70, image_url: '' }
        ])
    }

    return (
        <div className="
            min-h-screen bg-linear-to-br from-indigo-50 via-white 
            to-purple-50">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-r from-indigo-500 
                        to-purple-500 rounded-xl flex items-center justify-center text-white">
                            <Package className="w-5 h-5" />
                        </div>
                        จัดการสินค้า
                    </h1>
                    <button className="px-6 py-3 bg-linear-to-r from-indigo-500 to-purple-500
                        text-white rounded-lg flex shadow-lg cursor-pointer
                        hover:from-indigo-600 hover:to-purple-600
                    ">
                        <Plus />
                        เพิ่มสินค้าใหม่
                    </button>
                </div>

                {/* search */}

                {/* product table */}
                <div>
                    <div>
                        <table className="w-full">
                            <thead className="bg-gray-200 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 w-50">รูปภาพ</th>
                                    <th className="px-6 py-4">ชื่อสินค้า</th>
                                    <th className="px-6 py-4 w-30 text-right">ราคา</th>
                                    <th className="px-6 py-4 w-20">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {filterProducts.map((product) =>
                                    <tr key={product.id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4"><Package /></td>
                                        <td className="px-6 py-4">{product.name}</td>
                                        <td className="px-6 py-4 text-right">{product.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="text-blue-600">
                                                    <Pencil />
                                                </button>
                                                <button className="text-red-600">
                                                    <Trash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}