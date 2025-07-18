import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Vũ Minh Khoa',
    role: 'Luật sư',
    avatar: '/images/avatars/avatar1.png',
    quote: 'Việc sử dụng F0AI giúp tôi truy cập các tài liệu pháp lý và phân tích case law nhanh chóng. Điều này cho phép tôi chuẩn bị hồ sơ mạnh mẽ và chăm sóc khách hàng tốt hơn.',
    detail: '#',
  },
  {
    name: 'Ngô Thị Lan',
    role: 'Nhà thiết kế đồ họa',
    avatar: '/images/avatars/avatar2.png',
    quote: 'F0AI hỗ trợ tôi sáng tạo ra các mẫu thiết kế độc đáo và hiệu quả trong thời gian ngắn. Công cụ này thực sự là một trợ thủ đắc lực cho công việc của tôi.',
    detail: '#',
  },
  {
    name: 'Đỗ Văn Đức',
    role: 'Kỹ sư phần mềm',
    avatar: '/images/avatars/avatar3.png',
    quote: 'Tôi thường sử dụng F0AI để viết mã nhanh hơn và kiểm tra lỗi hiệu quả hơn. Điều này đã giúp tăng tốc dự án của tôi rất nhiều.',
    detail: '#',
  },
  {
    name: 'Lý Thị Bình',
    role: 'Nhà nghiên cứu thị trường',
    avatar: '/images/avatars/avatar4.png',
    quote: 'F0AI giúp tôi phân tích dữ liệu thị trường và xu hướng khách hàng một cách hiệu quả. Nhờ đó, tôi có thể đưa ra những chiến lược chính xác và phù hợp hơn.',
    detail: '#',
  },
  {
    name: 'Mạch Chí Bằng',
    role: 'MCB/AI',
    avatar: '/images/avatars/avatar5.png',
    quote: 'Tự động đăng sản phẩm 100% với nền tảng AI – Kiếm tiền khi đang nghỉ ngơi. Hướng dẫn sử dụng nền kết hợp với AI để tự động đăng sản phẩm lên các nền tảng mà không cần thao tác thủ công.',
    detail: '#',
  },
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(2); // card giữa

  const prev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Khám phá câu chuyện thành công<br />và trao quyền trong công việc với AI</h2>
        {/* Avatars trên cùng */}
        <div className="flex justify-center gap-4 mb-6">
          {testimonials.map((t, i) => (
            <img
              key={i}
              src={t.avatar}
              alt={t.name}
              className={`w-24 h-24 rounded-full object-cover border-4 transition-all duration-300 ${i === active ? 'border-blue-400 scale-110 z-10' : 'border-gray-200 opacity-40'} ${i === active ? '' : 'blur-[1px]'}`}
              style={{ zIndex: i === active ? 2 : 1 }}
            />
          ))}
        </div>
        {/* Slider card */}
        <div className="relative w-full flex justify-center items-center min-h-[220px]">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-blue-100 rounded-full p-2 shadow text-xl z-10">‹</button>
          {/* Hiển thị tất cả card, card active rõ nét, card khác mờ và nhỏ hơn */}
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                className={`absolute left-1/2 top-0 transform -translate-x-1/2 transition-all duration-500 max-w-md w-full mx-auto
                  ${isActive ? 'opacity-100 scale-100 z-20' : 'opacity-20 scale-90 z-0 pointer-events-none'}
                `}
                style={{
                  filter: isActive ? 'none' : 'blur(1px)',
                }}
              >
                <div className="p-6 rounded-xl shadow-lg bg-white">
                  <div className="mb-2 font-semibold text-gray-800">{t.name}</div>
                  <div className="mb-2 text-sm text-gray-500">{t.role}</div>
                  <div className="mb-4 text-gray-700">“{t.quote}”</div>
                  <a href={t.detail} className="text-blue-500 text-sm font-medium hover:underline">Chi tiết →</a>
                </div>
              </div>
            );
          })}
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-blue-100 rounded-full p-2 shadow text-xl z-10">›</button>
        </div>
        <p className="text-center text-gray-600 mt-10 mb-6 max-w-2xl">Khám phá các ứng dụng trên nền tảng F0AI và xem cách chúng tôi có thể giúp bạn tận dụng sức mạnh của AI để thành công trong kỷ nguyên mới.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Khám phá ngay →</button>
      </div>
    </section>
  );
};

export default TestimonialSlider; 