'use client';

import Navbar from "@/components/Navbar";
import { ProductInterface } from "@/types/ProductInterface";
import { Banknote, CreditCard, Plus, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function POSPage() {
    const [products, setProudcts] = useState<ProductInterface[]>([]);
    const [filterProducts, setFilterProducts] = useState<ProductInterface[]>([]);
    const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
    const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'credit_card'>('cash');
    const [amountReceived, setAmountReceived] = useState('');

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

    const total = 900;
    const change = amountReceived ? parseFloat(amountReceived) - total : 0;

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
                    <div className="grid grid-cols-3 gap-4">
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

                {/* card seciton */}
                <div className="w-96 backdrop-blur-md border flex flex-col shadow-lg
                    bg-white/80 border-l border-gray-200
                ">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold flex items-center gap-3
                            text-gray-800
                        ">
                            <div className="w-10 h-10 bg-linear-to-r
                                from-indigo-500 to-purple-500 text-white text-sm
                                px-3 py-1 rounded-full font-medium
                            ">
                                <ShoppingCart className="w-5 h-5 text-white" />
                            </div>
                            รายการสั่งซื้อ
                            <span className="bg-linear-to-r from-green-800
                                to-green-500 text-md text-white px-3 py-1
                                rounded-full font-medium
                            ">
                                8
                            </span>
                        </h2>
                    </div>

                    {/* Table Number */}
                    <div className="p-6 border-b border-gray-300">
                        <label>หมายเลขโต้ะ</label>
                        <input className="w-full px-4 py-3 backdrop-blur-md border
                            rounded-xl shadow-lg bg-white/80 border-gray-300
                            text-gray-800 focus:outline-none
                        " />
                    </div>

                    {/* Note */}
                    <div className="p-6 border-b border-gray-300">
                        <label>หมายเหตุ</label>
                        <input className="w-full px-4 py-3 backdrop-blur-md border
                            rounded-xl shadow-lg bg-white/80 border-gray-300
                            text-gray-800 focus:outline-none
                        " />
                    </div>

                    {/* Card Items */}


                    {/* Card Summary */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>ยอดรวม</span>
                                <span className="font-bold text-gray-800">
                                    900
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 px-4 py-2 bg-gray-200
                            border border-gray-300 rounded-xl">
                                ล้างตะกร้า
                            </button>
                            <button className="flex-1 px-4 py-3 bg-linear-to-r
                                from-indigo-500 to-purple-500 text-white
                                rounded-xl
                            "
                                onClick={() => setShowPaymentModal(true)}
                            >
                                ชำระเงิน
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center
                    justify-center z-50 p-4
                ">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">ชำระเงิน</h3>
                            <button
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => setShowPaymentModal(false)}
                            >
                                <X className="w-6 h-6"></X>
                            </button>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">ยอดที่ต้องชำระ</p>
                            <p className="text-3xl font-bold text-blue-600">900</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-700 mb-3">
                                วิธีการชำระเงิน
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    className="p-4 rounded-xl border-2 flex flex-col
                                        items-center gap-2 border-gray-300
                                        hover:border-gray-400
                                    "
                                    onClick={() => setPaymentMethod('cash')}
                                >
                                    <Banknote className="w-8 h-8 text-blue-600" />
                                    เงินสด
                                </button>
                                <button
                                    className="p-4 rounded-xl border-2 flex flex-col
                                        items-center gap-2 border-gray-300
                                        hover:border-gray-400
                                    "
                                    onClick={() => setPaymentMethod('credit_card')}>
                                    <CreditCard className="w-8 h-8 text-blue-400" />
                                    บัตรเครดิตร
                                </button>
                            </div>
                        </div>

                        {paymentMethod == 'cash' && (
                            <div className="pb-6">
                                <label className="block text-sm text-gray-700 mb-2">
                                    จำนวนเงินที่รับ
                                </label>
                                <input
                                    type="number"
                                    className="input-field text-lg"
                                    placeholder="0.00"
                                    value={amountReceived}
                                    onChange={(e) => setAmountReceived(e.target.value)}
                                />

                                {change > 0 ? (
                                    <p className="mt-2 text-green-600 text-2xl">เงินทอน: 999</p>
                                ) : (
                                    <p className="mt-2 text-red-600 text-2xl">เงินไม่พอ: -800</p>
                                )}

                                <button
                                    className="btn-primary w-full py-3 mt-5"
                                >
                                    ยืนยันการชำระเงิน
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}