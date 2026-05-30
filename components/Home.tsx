"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface HomeProps {
  onNavigate?: (page: number) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="relative w-full h-screen bg-[#F4F5F7] overflow-hidden">
      {/* 顶部蓝色细条 */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#0055B3] z-50" />

      {/* 顶部标题区 - 居中 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-0 right-0 text-center z-40"
      >
        <h1 className="text-[70px] font-black leading-none tracking-wide text-[#0055B3]" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          HU YUXUAN'S HOME
        </h1>
        <p className="text-xl font-bold text-[#0055B3] mt-2 tracking-widest" style={{ letterSpacing: '0.15em' }}>
          WELCOME TO MY CREATIVE SPACE
        </p>
      </motion.div>

      {/* 左侧拼贴区域 - Y2K风格 */}
      {/* 克莱因蓝几何背景 - 大圆形 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute left-12 top-40 w-[380px] h-[380px] bg-[#0055B3] rounded-full z-10"
      />

      {/* 爆炸星装饰 - 左上 */}
      <motion.svg
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute left-0 top-32 w-[120px] h-[120px] z-15"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      {/* 爆炸星装饰 - 右下 */}
      <motion.svg
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute left-[320px] top-[520px] w-[100px] h-[100px] z-15"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      {/* 照片 - 带白色边框的抠图效果 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-24 top-48 w-[300px] z-20 bg-white p-2 shadow-2xl"
        style={{ transform: 'rotate(-2deg)' }}
      >
        <Image src={getAssetPath("/photos/21.jpg")} alt="胡宇萱" width={350} height={440} className="w-full object-cover" />
      </motion.div>

      {/* 自我介绍文字 - 语言框样式 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute left-[50px] top-[240px] z-40"
      >
        {/* 语言框主体 */}
        <div className="relative bg-white px-5 py-4 rounded-2xl shadow-xl border-2 border-black">
          <p className="text-sm text-black leading-relaxed whitespace-nowrap">
            你好，我叫<span className="font-bold">胡宇萱</span>，<br />
            你也可以叫我<span className="font-bold">福以仙</span>。<br />
            <span className="text-base">欢迎光临！✨</span>
          </p>
          {/* 语言框尾巴 - 指向右下方 */}
          <div className="absolute right-[-16px] bottom-[20px] w-0 h-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-black border-b-[12px] border-b-transparent" />
          <div className="absolute right-[-13px] bottom-[21px] w-0 h-0 border-t-[11px] border-t-transparent border-l-[14px] border-l-white border-b-[11px] border-b-transparent" />
        </div>
      </motion.div>

      {/* 右侧蓝色几何框架 */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 3 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute left-[480px] top-[200px] w-[320px] h-[300px] bg-[#0055B3] z-15"
        style={{ transform: 'rotate(3deg) skewY(-2deg)', clipPath: 'polygon(0 0, 100% 3%, 97% 100%, 0 97%)' }}
      />

      {/* 右侧照片 - 剪刀手JK照 */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[490px] top-[210px] w-[280px] z-20 shadow-2xl"
        style={{ transform: 'rotate(2deg)' }}
      >
        <Image src={getAssetPath("/photos/10.jpg")} alt="胡宇萱" width={350} height={440} className="w-full object-cover" />
      </motion.div>

      {/* ABOUT ME 圆形卡片 - 右下角缩小 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute right-[280px] bottom-24 w-[220px] h-[220px] bg-[#0055B3] rounded-full z-30 flex flex-col items-center justify-center text-white shadow-2xl"
      >
        <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>ABOUT ME</h2>
        <div className="flex gap-6 mb-3">
          <div className="text-center">
            <div className="text-3xl mb-1">📷</div>
            <p className="text-xs font-bold">影像</p>
            <p className="text-[10px]">Camera</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">🤖</div>
            <p className="text-xs font-bold">AI</p>
            <p className="text-[10px]">AIGC</p>
          </div>
        </div>
        <p className="text-[10px] font-bold text-center px-6">"A CREATIVE FUSION</p>
        <p className="text-[10px] font-bold text-center px-6">OF VISUALS & AI."</p>
      </motion.div>

      {/* 导航菜单 - 圆角矩形按钮 */}
      <motion.button
        onClick={() => onNavigate?.(1)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute right-[60px] top-[160px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-30 cursor-pointer"
      >
        <span className="text-3xl">✨</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>AI WORKS</p>
      </motion.button>

      <motion.button
        onClick={() => onNavigate?.(2)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-[140px] top-[250px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-30 cursor-pointer"
      >
        <span className="text-3xl">📁</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>PROJECT</p>
      </motion.button>

      <motion.button
        onClick={() => onNavigate?.(3)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute right-[80px] top-[340px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-30 cursor-pointer"
      >
        <span className="text-3xl">📧</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>CONTACT</p>
      </motion.button>

      {/* 条形码 LIMITED EDITION */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute right-8 bottom-8 z-25">
        <svg width="120" height="70" viewBox="0 0 120 70">
          <rect x="5" y="5" width="3" height="45" fill="black" />
          <rect x="10" y="5" width="2" height="45" fill="black" />
          <rect x="15" y="5" width="4" height="45" fill="black" />
          <rect x="22" y="5" width="2" height="45" fill="black" />
          <rect x="27" y="5" width="5" height="45" fill="black" />
          <rect x="35" y="5" width="3" height="45" fill="black" />
          <rect x="41" y="5" width="2" height="45" fill="black" />
          <rect x="46" y="5" width="4" height="45" fill="black" />
          <rect x="53" y="5" width="3" height="45" fill="black" />
          <rect x="59" y="5" width="2" height="45" fill="black" />
          <rect x="64" y="5" width="5" height="45" fill="black" />
          <rect x="72" y="5" width="3" height="45" fill="black" />
          <rect x="78" y="5" width="4" height="45" fill="black" />
          <rect x="85" y="5" width="2" height="45" fill="black" />
          <rect x="90" y="5" width="3" height="45" fill="black" />
          <rect x="96" y="5" width="5" height="45" fill="black" />
          <rect x="104" y="5" width="2" height="45" fill="black" />
          <rect x="109" y="5" width="4" height="45" fill="black" />
        </svg>
        <p className="text-[10px] font-black text-center mt-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>LIMITED EDITION</p>
      </motion.div>
    </section>
  );
}
