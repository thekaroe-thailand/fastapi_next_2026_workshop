'use client';

import Navbar from "@/components/Navbar";
import { ProductInterface } from "@/types/ProductInterface";
import { Plus, Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function POSPage() {
    const [products, setProudcts] = useState<ProductInterface[]>([]);
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
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
            <Navbar />

            <div className="flex h-[calc(100vh-64px)]">
                {/* Sidebar */}
                <div className="w-64 bg-white/70 backdrop-blur-md border-r border-gray-200
                    p-4 shadow-lg
                ">
                    <div className="space-y-6">
                        {/* Quick State */}
                        <div className="bg-linear-to-r from-indigo-600 to-purple-500 rounded-xl
                            p-4 text-white shadow-lg
                        ">
                            <h3 className="text-white font-semibold mb-3">วันนี้</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/80">ออเดอร์</span>
                                    <span className="tex-white font-medium">12</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/80">รายได้</span>
                                    <span className="tex-white font-medium">$1,250</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2">
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl">
                                สร้างออเดอร์ใหม่
                            </button>
                            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-xl">
                                ประวัติการขาย
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <div className="flex-1 p-6 overflow-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2 text-gray-700">ระบบขายอาหาร</h1>
                        <p className="text-gray-600">เลือกรายการเพื่อเพิ่มลงในคะกร้า</p>
                    </div>

                    {/* Search */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5
                                text-gray-500 z-10
                            " />
                            <input
                                placeholder="ค้นหาเมนูอาหาร..."
                                className="w-full pl-12 pr-4 py-3 backdrop-blur-md border rounded-xl
                                    bg-white/80 border-gray-300 text-gray-800
                                    focus:outline-none shadow-lg
                                "
                            />
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-4 gap-4">
                        {filterProducts.map((product) => (
                            <button key={product.id}
                                className="group backdrop-blur-md border rounded-2xl p-4
                                    hover:shadow-xl transition-all durtaion-300
                                    text-left transform hover:scale-105 shadow-lg
                                    bg-white/80 border-gray-300 hover:bg-white
                                    hover:border-indigo-300
                                ">
                                {/*
                                <img className="w-full h-32 object-cover rounded-xl mb-3
                                group-hover:scale-105" />
                                */}
                                <div className="w-full h-32 bg-linear-to-br from-indigo-100
                                to-purple-100 rounded-xl mb-3 flex items-center
                                justify-center">
                                    <ShoppingCart />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h3>
                                <div className="flex itesm-center justify-between">
                                    <p className="text-green-700 font-semibold">{product.price}</p>
                                    <div className="w-8 h-8 bg-linear-to-r from-indigo-500
                                    to-purple-500 rounded-full flex items-center justify-center
                                    text-white">
                                        <Plus className="w-4 h-4" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}