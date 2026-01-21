'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from 'react-hot-toast';
import { ShoppingCart } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br
        from-blue-50 to-blue-100 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-15 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                            <ShoppingCart className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">POS Restaurant</h1>
                        <p className="text-gray-500 mt-1">เข้าสู่ระบบเพื่อใช้งาน</p>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                ชื่อผู้ใช้
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="input-field"
                                placeholder="กรอกชื่อผู้ใช้"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                รหัสผ่าน
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="input-field"
                                placeholder="กรอกรหัสผ่าน"
                            />
                        </div>

                        <button type="submit"
                            className="w-full bg-blue-600 text-white flex items-center justify-center py-2 gap-2 rounded-lg">
                            เข้าสู่ระบบ
                        </button>
                    </form>

                    {/* register link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ยังไม่มีบัญชีผู้ใช้?{' '}
                            <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                                สมัครสมาชิก
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
