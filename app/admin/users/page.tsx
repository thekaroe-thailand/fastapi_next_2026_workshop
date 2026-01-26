'use client';

import Navbar from "@/components/Navbar";
import { Pencil, Search, Users } from "lucide-react";

export default function UserPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 
        via-white to-purple-50">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center
                    gap-3 mb-8
                ">
                    <div className="w-10 h-10 bg-linear-to-r from-indigo-500
                        to-purple-500 rounded-xl flex items-center justify-center
                    ">
                        <Users className="text-white" />
                    </div>
                    จัดการผู้ใช้งาน
                </h1>

                {/* search */}
                <div className="mb-6 max-w-md relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5
                        h-5 text-gray-500
                    " />
                    <input type="text" placeholder="ค้นหาชื่อ, อีเมล..."
                        className="w-full pl-12 pra-4 py-3 bg-white/80
                            border border-gray-400 rounded-xl shadow-lg
                        "
                    />
                </div>

                {/* Table */}
                <div className="bg-white/90 border border-gray-200 rounded-2xl
                    shadow-lg hover:shadow-xl overflow-hidden
                ">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b boorer-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left">ID</th>
                                <th className="px-6 py-4 text-left">ชื่อผู้ใช้</th>
                                <th className="px-6 py-4 text-left">ชื่อ นามสกุล</th>
                                <th className="px-6 py-4 text-left">อีเมล</th>
                                <th className="px-6 py-4 text-center">สิทธิ์</th>
                                <th className="px-6 py-4 text-center">สถานะ</th>
                                <th className="px-6 py-4 text-center">สร้างเมื่อ</th>
                                <th className="px-6 py-4 text-center">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {Array.from({ length: 20 }).map((_, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-left">{index + 1}</td>
                                    <td className="px-6 py-4 text-left">kob</td>
                                    <td className="px-6 py-4 text-left">tavon seesenpila</td>
                                    <td className="px-6 py-4 text-left">kob@mail.com</td>
                                    <td className="px-6 py-4 text-center">พนักงานขาย</td>
                                    <td className="px-6 py-4 text-center">ใช้งาน</td>
                                    <td className="px-6 py-4 text-center">26/1/2026</td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="p-2 text-indigo-600">
                                            <Pencil />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}