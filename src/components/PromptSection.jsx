import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const promptSuggestions = [
  'Tôi là người mới bắt đầu tìm hiểu sử dụng AI',
  'Tạo cho tôi một viral video đăng TikTok',
  'Tạo ra một thiết kế nội thất căn hộ',
  'Viết một bài luận 2000 từ về kỹ năng sống',
];

const popularAIs = [
  {
    name: 'KlingAI Prompter',
    desc: 'Trợ lý tạo Prompt Kling AI',
    icon: '/logo-moi.png',
    stats: '49.537',
    author: '@f0tech',
  },
  {
    name: 'ChatGPT 4o',
    desc: 'ChatGPT-4o là mô hình AI tiên tiến của OpenAI...',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg',
    stats: '16.067',
    author: '@f0tech',
  },
  {
    name: 'MJ Prompt Generator',
    desc: 'Tạo prompt tạo ảnh AI cho Midjourney...',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4dd.svg',
    stats: '6.396',
    author: '@f0tech',
  },
  {
    name: 'Gemini 2.5 Pro',
    desc: 'Gemini 2.5 Pro là mô hình AI đa phương thức...',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg',
    stats: '5.326',
    author: '@f0tech',
  },
  // Thêm các AI mới
  {
    name: 'ClickAI Assistant',
    desc: 'Tôi là trợ lý đa năng. Tôi được huấn luyện để đồng hành cùng bạn trong mọi lĩnh vực.',
    icon: '/logo-moi.png',
    stats: '48.604',
    author: '@f0tech',
  },
  {
    name: 'Google VEO 3 Prompter',
    desc: 'Bạn là một nhà làm phim điện ảnh quốc tế với hơn 1000 ý tưởng sáng tạo.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    stats: '8.102',
    author: '@f0tech',
  },
  {
    name: 'ChatGPT 4.1',
    desc: 'ChatGPT-4.1 là mô hình AI tiên tiến của OpenAI, có khả năng hiểu và tạo nội dung tự nhiên.',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg',
    stats: '6.350',
    author: '@f0tech',
  },
  {
    name: 'Thợ Viết Kịch Bản Video',
    desc: 'Biến ý tưởng nhàm chán của bạn trở thành kịch bản video hấp dẫn.',
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3ac.svg',
    stats: '3.404',
    author: '@f0tech',
  },
];

const PromptSection = () => {
  const [input, setInput] = useState('');
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Hãy hỏi điều gì đó để bắt đầu</h2>
        <div className="w-full flex items-center gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg shadow focus:outline-blue-400"
            placeholder='"Say hi" hoặc cho tôi biết bạn đang cần gì?'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow">
            <FaArrowUpRightFromSquare />
          </button>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {promptSuggestions.map((s, i) => (
            <button key={i} className="bg-gray-100 hover:bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 text-gray-700 text-base">
              {s} <FaArrowUpRightFromSquare className="text-xs" />
            </button>
          ))}
        </div>
        <p className="text-lg text-center text-gray-700 mb-8">
          Khám phá các <span className="text-blue-500 font-semibold">AI Trợ lý</span> của chúng tôi và xem cách có thể giúp bạn tận dụng sức mạnh của AI để thành công
        </p>
        <div className="w-full">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Phổ biến nhất</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularAIs.map((ai, i) => (
              <div key={i} className="flex flex-col items-start bg-white border border-gray-100 rounded-xl p-4 shadow transition hover:shadow-xl hover:border-blue-400 hover:scale-105 duration-200 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <img src={ai.icon} alt={ai.name} className="w-8 h-8 rounded-full" />
                  <span className="font-semibold text-gray-900">{ai.name}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{ai.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>👥 {ai.stats}</span>
                  <span>{ai.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptSection; 