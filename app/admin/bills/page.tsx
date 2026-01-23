'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { CreditCard, Eye, Filter, RefreshCw, Search } from "lucide-react";

export default function BillPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-start gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 flex  items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-r from-indigo-500 to-purple-500
                            rounded-xl items-center justify-center flex text-white shadow-lg
                        ">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        จัดการบิลขาย
                    </h1>
                    <button className="px-6 py-3 bg-gray-600 rounded-xl text-white flex gap-3
                    items-center justify-center">
                        <RefreshCw className="w-5 h-5" />
                        รีเฟรส
                    </button>
                </div>

                {/* filter */}
                <div className="bg-white/90 backdrop-blur-md border border-gray-200
                    rounded-2xl p-4 mb-6 shadow-lg
                ">
                    <div className="flex items-center gap-2 mb-3">
                        <Filter className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">ตัวกรอง</span>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <select className="px-4 py-2 bg-white/80 border border-gray-400 rounded-md">
                            <option value="">สถานะทั้งหมด</option>
                            <option value="">รอดำเนินการ</option>
                            <option value="">ยืนยันแล้ว</option>
                            <option value="">กำลังเตรียม</option>
                            <option value="">เสร็จสิ้น</option>
                            <option value="">ยกลิก</option>
                        </select>
                        <select className="px-4 py-2 bg-white/80 border border-gray-400 rounded-md">
                            <option value="">การชำระเงินทั้งหมด</option>
                            <option value="">ยังไม่ชำระ</option>
                            <option value="">ชำระแล้ว</option>
                            <option value="">คืนเงินแล้ว</option>
                        </select>
                        <input className="px-4 py-2 bg-white/80 border border-gray-400 rounded-md"
                            type="date"
                            placeholder="วันที่เริ่มต้น"
                        />
                        <input className="px-4 py-2 bg-white/80 border border-gray-400 rounded-md"
                            type="date"
                            placeholder="วันที่สิ้นสุด"
                        />
                        <button className="px-4 py-2 bg-linear-to-r from-indigo-500 to-purple-500
                            text-white rounded-lg shadow-xl flex gap-2 justify-center items-center
                        ">
                            <Search className="w-5 h-5" />
                            ค้นหา
                        </button>
                    </div>
                </div>

                {/* Bills Table */}
                <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg
                    overflow-hidden
                ">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-right px-6 py-4">เลขที่</th>
                                    <th className="text-right px-6 py-4">โต้ะ</th>
                                    <th className="text-left px-6 py-4">รายการ</th>
                                    <th className="text-right px-6 py-4">ยอดรวม</th>
                                    <th className="text-left px-6 py-4">สถานะ</th>
                                    <th className="text-left px-6 py-4">การชำระ</th>
                                    <th className="text-center px-6 py-4">วันที่</th>
                                    <th className="text-center px-6 py-4">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {Array.from({ length: 20 }).map((_, index) => (
                                    <tr className="hover:bg-gray-200" key={index}>
                                        <td className="text-right px-6 py-4">{index + 1}</td>
                                        <td className="text-right px-6 py-4">3</td>
                                        <td className="text-left px-6 py-4">ยำมาม่าหมูสับ</td>
                                        <td className="text-right px-6 py-4">900</td>
                                        <td className="text-left px-6 py-4">ยืนยันแล้ว</td>
                                        <td className="text-left px-6 py-4">ชำระแล้ว</td>
                                        <td className="text-center px-6 py-4">1/1/2026 08.45</td>
                                        <td className="text-center px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="px-6 py-2 text-indigo-600 flex gap-1 border rounded-full
                                                hover:bg-indigo-600 hover:text-white shadow-lg
                                            ">
                                                    <Eye />
                                                    ดูใบเสร็จ
                                                </button>
                                                <button className="px-6 py-2 text-green-600 flex gap-2 border rounded-full
                                                hover:bg-green-600 hover:text-white shadow-lg
                                            ">
                                                    <CreditCard />
                                                    ชำระเงิน
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}