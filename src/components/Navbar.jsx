import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { FaRobot, FaPalette, FaGlobeAsia, FaBookOpen, FaMagic, FaGlobe } from "react-icons/fa";

const Navbar = () => {

    const { user, logout } = useAuth();
    console.log(user)

    const handleLogOut = () => {
        logout();
    }

    return (
        <div className="navbar w-full bg-white px-5 fixed shadow-sm z-50">
            <div className="flex w-full items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo-moi.png" alt="Logo F0AI" className="w-10 h-10" />
                    <span className="text-2xl font-bold text-gray-800">F0<span className="text-blue-500">AI</span></span>
                </Link>
                {/* Menu */}
                <ul className="flex-1 flex items-center gap-6 justify-center ml-10">
                    <li className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer"><FaRobot /> AI Trợ lý</li>
                    <li className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer"><FaPalette /> AI Sáng tạo</li>
                    <li className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer"><FaGlobeAsia /> Cộng đồng</li>
                    <li className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer"><FaBookOpen /> Học viện</li>
                    <li className="flex items-center gap-1 text-gray-600 hover:text-blue-600 cursor-pointer"><FaMagic /> Studio</li>
                </ul>
                {/* Ngôn ngữ + Đăng nhập */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 text-gray-700"><FaGlobe /> VI</button>
                    <Link to="/login" className="border border-gray-300 px-4 py-1 rounded hover:bg-gray-100 text-gray-700">Đăng nhập</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar