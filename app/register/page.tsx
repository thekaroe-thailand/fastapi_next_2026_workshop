'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from 'react-hot-toast';
import { ShoppingCart } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-15 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                            <ShoppingCart className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">สมัครสมาชิก</h1>
                        <p className="text-gray-500 mt-1">สร้างบัญชีใหม่เพื่อใช้งาน</p>
                    </div>

                    {/* Register Form */}
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                                ชื่อ-นามสกุล
                            </label>
                            <input
                                id="full_name"
                                name="full_name"
                                type="text"
                                className="input-field"
                                placeholder="กรอกชื่อ-นามสกุล (ไม่บังคับ)"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                อีเมล <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="input-field"
                                placeholder="กรอกอีเมล"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                ชื่อผู้ใช้ <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="input-field"
                                placeholder="กรอกชื่อผู้ใช้"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                รหัสผ่าน <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="password"
                                name="password"
                                type='password'
                                className="input-field"
                                placeholder="กรอกรหัสผ่าน (อย่างน้อย 6 ตัว)"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
                                ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="confirm_password"
                                name="confirm_password"
                                type='password'
                                className="input-field"
                                placeholder="กรอกรหัสผ่าน (อย่างน้อย 6 ตัว)"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full btn-primary py-3 flex items-center justify-center gap-2 mt-6"
                        >
                            สมัครสมาชิก
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        มีบัญชีอยู่แล้ว?{' '}
                        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                            เข้าสู่ระบบ
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

