import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-10 pb-4 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo + mô tả */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo-moi.png" alt="F0AI Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-gray-800">F0<span className="text-blue-500">AI</span></span>
          </div>
          <p className="text-sm mb-4">F0AI là nền tảng tổng hợp các công cụ AI tốt nhất & Cộng đồng dành cho người sử dụng AI. Nơi bạn có thể khám phá cách tận dụng tối đa sức mạnh của AI, kinh nghiệm từ chuyên gia và cộng đồng để phục vụ cho công việc và sáng tạo.</p>
          {/* Xóa DMCA badge và PROTECTED */}
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} F0AI Viet Nam. All rights reserved.</p>
        </div>
        {/* Sản phẩm dịch vụ */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="font-semibold mb-2">Sản phẩm dịch vụ</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-600">AI Trợ lý</a></li>
            <li><a href="#" className="hover:text-blue-600">AI Sáng tạo</a></li>
            <li><a href="#" className="hover:text-blue-600">Cộng đồng</a></li>
            <li><a href="#" className="hover:text-blue-600">Học viện</a></li>
          </ul>
        </div>
        {/* Chính sách điều khoản */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="font-semibold mb-2">Chính sách điều khoản</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-600">Quy chế hoạt động</a></li>
            <li><a href="#" className="hover:text-blue-600">Bảng giá dịch vụ</a></li>
            <li><a href="#" className="hover:text-blue-600">Hướng dẫn thanh toán</a></li>
            <li><a href="#" className="hover:text-blue-600">Chính sách bảo mật</a></li>
          </ul>
        </div>
        {/* Liên hệ */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="font-semibold mb-2">Liên hệ</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-600">Về chúng tôi</a></li>
            <li className="flex items-center gap-2"><span>✉️</span> <a href="mailto:support@f0ai.vn" className="hover:text-blue-600">support@f0ai.vn</a></li>
          </ul>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <span>© {new Date().getFullYear()} F0AI Viet Nam. All rights reserved.</span>
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i> <span className="sr-only">Facebook</span></a>
          <a href="#" className="hover:text-blue-600"><i className="fab fa-youtube"></i> <span className="sr-only">YouTube</span></a>
          <a href="#" className="hover:text-blue-600"><i className="fab fa-zalo"></i> <span className="sr-only">Zalo</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;