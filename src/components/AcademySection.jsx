import React from 'react';

const images = [
  '/images/academy1.jpg',
  '/images/academy2.jpg',
  '/images/academy3.jpg',
  '/images/academy4.jpg',
];

const AcademySection = () => (
  <section className="w-full bg-white py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8">
      {/* Left: Grid ảnh */}
      <div className="flex-1 grid grid-cols-2 gap-4 mb-8 md:mb-0">
        {images.map((img, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow">
            <img src={img} alt="academy" className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
      {/* Right: Text */}
      <div className="flex-1 md:pl-8 text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-blue-500 font-semibold mb-2">Khám phá tinh hoa của AI từ chỉ dẫn của chuyên gia</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Học viện AI</h2>
        <p className="text-gray-700 mb-6 max-w-lg">Chúng tôi cung cấp các khóa học về AI để giúp bạn học các kỹ năng sử dụng tối ưu sức mạnh của AI để thành công hơn trong công việc. Các chuyên gia của chúng tôi liên tục cập nhật các kiến thức và các khóa học cần thiết để sử dụng AI hiệu quả.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Khám phá ngay →</button>
      </div>
    </div>
  </section>
);

export default AcademySection; 