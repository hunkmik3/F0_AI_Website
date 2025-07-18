import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";

import bannerImg from "../../assets/banner.png"
import bannerClickAI from "../../assets/banner-clickai.png";
import bannerMoi from "../../assets/banner-moi.png";

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div className='bg-gradient-to-b from-white to-blue-50'>
            <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
                {/* left side */}
                <div className='lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight'>Nền tảng All-in-One để sử dụng</h1>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4' style={{background: 'linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Artificial Intelligence (AI)</h2>
                    <p className='text-lg text-gray-600 mb-6'>Các Model AI mới nhất ChatGPT 4.1, Gemini 2.5 Pro, Claude 4 Opus, Kling 2.0, ComfyUI, Deepseek v3, Grok 3, Minimax, Runway 4... và 500+ AI Apps đã sẵn sàng trên ClickAI. Khám phá cách tăng hiệu suất và sáng tạo không giới hạn của bạn trong kỷ nguyên AI 🚀</p>
                    <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-start'>
                        <button className='bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition'>
                            Khám phá ngay
                        </button>
                    </div>
                </div>

                {/* right side */}
                <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative'>
                    <div className="relative flex items-center justify-center w-full h-[320px] md:h-[400px]">
                        <div className="absolute w-[90%] h-[90%] rounded-full border-4 border-blue-200 opacity-70 animate-pulse"></div>
                        <img src={bannerMoi} alt="Banner Mới" className="relative w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection