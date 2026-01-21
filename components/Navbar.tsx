'use client';

import { BarChart, Home, Package, Receipt, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const navigation = [
        { name: 'หน้าแรก', href: '/', icon: Home },
        { name: 'ขายอาหาร', href: '/pos', icon: ShoppingCart },
    ]

    const adminNavigation = [
        { name: 'จัดาารอาหาร', href: '/admin/products', icon: Package },
        { name: 'จัดการบิล', href: '/admin/bills', icon: Receipt },
        { name: 'จัดการผู้ใช้งาน', href: '/admin/users', icon: User },
        { name: 'Dashboard', href: '/admin/dashboard', icon: BarChart },
    ]

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Logo */}
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/login" className="flex items-center gap-2">
                            <div className="
                            w-10 h-10 bg-linear-to-r from-indigo-600 to-purple-600
                            rounded-lg flex items-center justify-center shadow-lg
                        ">
                                <ShoppingCart className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-gray-900">Next POS</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-1">
                        {/* User Navigations */}
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="
                                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                                    text-gray-600 hover:bg-gray-50 hover:text-gray-900
                                "
                            >
                                <item.icon className="w-4 h-4"></item.icon>
                                {item.name}
                            </Link>
                        ))}

                        {/* Admin Navigations */}
                        {adminNavigation.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="
                                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                                    text-gray-600 hover:bg-gray-50 hover:text-gray-900
                                "
                            >
                                <item.icon className="w-4 h-4"></item.icon>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}