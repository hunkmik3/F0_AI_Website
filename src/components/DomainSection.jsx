import React from 'react';
import { FaGraduationCap, FaCode, FaChartLine, FaBook, FaQuestionCircle, FaPalette } from 'react-icons/fa';

const domains = [
  { name: 'Education', color: 'bg-green-300', icon: <FaBook className="text-2xl text-green-700" /> },
  { name: 'Programming', color: 'bg-pink-300', icon: <FaCode className="text-2xl text-pink-700" /> },
  { name: 'Marketing', color: 'bg-yellow-300', icon: <FaChartLine className="text-2xl text-yellow-700" /> },
  { name: 'Finance', color: 'bg-purple-300', icon: <FaChartLine className="text-2xl text-purple-700" /> },
  { name: '20+', color: 'bg-blue-100', icon: <span className="text-2xl text-blue-500 font-bold">20+</span> },
  { name: 'Design', color: 'bg-blue-100', icon: <FaPalette className="text-2xl text-blue-500" /> },
  { name: 'Hỏi đáp', color: 'bg-white border border-gray-200', icon: <FaQuestionCircle className="text-2xl text-blue-400" /> },
  { name: 'Học tập', color: 'bg-blue-100', icon: <FaGraduationCap className="text-2xl text-blue-500" /> },
  { name: 'Phân tích', color: 'bg-white border border-gray-200', icon: <FaChartLine className="text-2xl text-blue-400" /> },
];

const DomainSection = () => (
  <section className="w-full bg-white py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8">
      {/* Left */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-blue-500 font-semibold mb-2">AI Trợ lý 20+ lĩnh vực</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Nơi tìm thấy các AI Trợ lý được huấn luyện chuyên sâu cho nhiều lĩnh vực bởi chuyên gia</h2>
        <p className="text-gray-700 mb-6 max-w-lg">Chúng tôi cung cấp các AI Trợ lý được đào tạo sẵn bởi các chuyên gia đầu ngành cho hơn 20 lĩnh vực như: tài chính, kế toán, giáo viên, nội thất, thiết kế, đồ họa, sáng tạo video... giúp bạn tăng năng suất công việc và tiết kiệm rất nhiều thời gian để hoàn thành mục tiêu.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Tìm hiểu thêm →</button>
      </div>
      {/* Right */}
      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-lg p-8">
          {domains.map((d, i) => (
            <div key={i} className={`flex flex-col items-center justify-center rounded-xl h-20 w-20 ${d.color} ${d.color.includes('border') ? '' : 'shadow'} transition duration-200 cursor-pointer hover:shadow-xl hover:scale-105 hover:bg-opacity-80 group`}>
              {React.cloneElement(d.icon, { className: d.icon.props.className + ' group-hover:text-blue-700 group-hover:scale-110 transition' })}
              <span className="text-xs font-semibold mt-1 text-gray-700 text-center group-hover:text-blue-700 transition">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DomainSection; 