'use client';

import Navbar from "@/components/Navbar";
import { BarChart3, DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white
            to-purple-50
        ">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-r from-indigo-500
                            to-purple-500 rounded-xl flex items-center
                            justify-center text-white
                        ">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        Dashboard
                    </h1>

                    {/* Date Range Filter */}
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-lg bg-slate-700 text-xl
                            text-slate-200 hover:bg-slate-300 hover:text-slate-700
                        ">
                            7 วัน
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-slate-700 text-xl
                            text-slate-200 hover:bg-slate-300 hover:text-slate-700
                        ">
                            30 วัน
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-slate-700 text-xl
                            text-slate-200 hover:bg-slate-300 hover:text-slate-700
                        ">
                            1 ปี
                        </button>
                    </div>
                </div>

                {/* Summary Card */}
                <div className="grid grid-cols-4 gap-5 mb-8">
                    <div className="group bg-white/90 border border-gray-200
                        rounded-2xl p-6 shadow-lg

                    ">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-indigo-100
                                to-purple-100 rounded-xl flex items-center
                                justify-center 
                            ">
                                <ShoppingCart className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex
                                items-center justify-center
                            ">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">ออเดอร์ทั้งหมด</p>
                        <p className="text-3xl font-bold bg-linear-to-r
                            from-indigo-600 to-purple-600 bg-clip-text text-transparent
                        ">999</p>
                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +12% จากเดือนที่แล้ว
                        </p>
                    </div>

                    <div className="group bg-white/90 border border-gray-200
                        rounded-2xl p-6 shadow-lg

                    ">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-green-100
                                to-emerald-100 rounded-xl flex items-center
                                justify-center 
                            ">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex
                                items-center justify-center
                            ">
                                <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">รายได้ทั้งหมด</p>
                        <p className="text-3xl font-bold bg-linear-to-r
                            from-green-600 to-stone-600 bg-clip-text text-transparent
                        ">500,000</p>
                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +8% จากเดือนที่แล้ว
                        </p>
                    </div>

                    <div className="group bg-white/90 border border-gray-200
                        rounded-2xl p-6 shadow-lg

                    ">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-purple-100
                                to-pink-100 rounded-xl flex items-center
                                justify-center 
                            ">
                                <Package className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex
                                items-center justify-center
                            ">
                                <TrendingUp className="w-4 h-4 text-orange-600" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">สินค้าทั้งหมด</p>
                        <p className="text-3xl font-bold bg-linear-to-r
                            from-orange-600 to-yellow-600 bg-clip-text text-transparent
                        ">200</p>
                    </div>

                    <div className="group bg-white/90 border border-gray-200
                        rounded-2xl p-6 shadow-lg

                    ">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-linear-to-br from-orange-100
                                to-red-100 rounded-xl flex items-center
                                justify-center 
                            ">
                                <DollarSign className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex
                                items-center justify-center
                            ">
                                <TrendingUp className="w-4 h-4 text-purple-600" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">ลูกค้าทั้งหมด</p>
                        <p className="text-3xl font-bold bg-linear-to-r
                            from-purple-600 to-indigo-600 bg-clip-text text-transparent
                        ">1,700</p>
                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +15% จากเดือนที่แล้ว
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Bar Chart */}
                    <div className="bg-white/90 border border-gray-200 runded-2xl p-6
                        shadow-lg
                    ">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <div className="w-8 h-8 bg-linear-to-r from-indigo-500
                                    to-purple-500 rounded-lg flex items-center
                                    justify-center
                                ">
                                    <BarChart3 className="w-4 h-4 text-white" />
                                </div>
                                ยอดขาย 7 วันล่าสุด
                            </h2>
                            <div className="bg-gray-200 px-4 py-1 rounded-full">
                                ประจำวัน
                            </div>
                        </div>
                        <div className="space-y-4">
                            {/* day 1 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">26/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '30%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 2 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">25/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '10%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 3 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">24/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '60%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 4 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">23/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '40%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 5 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">22/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '90%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 6 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">21/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '70%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>

                            {/* day 7 */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-20 text-sm text-gray-600">21/1/2026</div>
                                <div className="flex-1 bg-gray-100 rounded-lg h-8 relative
                                    overflow-hidden
                                ">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r
                                            from-indigo-500 to-purple-500
                                            rounded-lg
                                        "
                                        style={{ width: '45%' }}
                                    />
                                </div>
                                <div className="w-24 tex-right">
                                    <p className="text-sm font-bold text-gray-800">20,000</p>
                                    <p className="text-xs text-gray-500">700 Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}