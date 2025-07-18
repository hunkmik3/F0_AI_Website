import React from 'react';
import { FaMobileAlt, FaShieldAlt, FaUserFriends, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaMobileAlt className="text-blue-500 text-3xl mb-2" />,
    title: 'Đa nền tảng',
    desc: 'Sử dụng mọi lúc, mọi nơi trên web, mobile, tablet mà không cần cài đặt phức tạp.',
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-3xl mb-2" />,
    title: 'Bảo mật tuyệt đối',
    desc: 'Dữ liệu và thông tin của bạn luôn được bảo vệ với công nghệ bảo mật hiện đại.',
  },
  {
    icon: <FaUserFriends className="text-blue-500 text-3xl mb-2" />,
    title: 'Dễ sử dụng',
    desc: 'Giao diện thân thiện, thao tác đơn giản, ai cũng có thể làm chủ AI.',
  },
  {
    icon: <FaHeadset className="text-blue-500 text-3xl mb-2" />,
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn bất cứ lúc nào.',
  },
];

const FeatureSection = () => (
  <section className="w-full bg-blue-50 py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Lý do chọn <span className="text-blue-500">F0AI</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            {f.icon}
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection; 