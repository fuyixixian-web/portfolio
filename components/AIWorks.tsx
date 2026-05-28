"use client";

import { motion } from "framer-motion";

interface AIWorksProps {
  onNavigate?: (page: number) => void;
}

const aiWorks = [
  // 第一行
  { title: "AI创意产品展示", video: "/experiments/AI_创意产品展示.mp4" },
  { title: "AI创意产品展示 2", video: "/experiments/AI_创意产品展示2.mp4" },
  { title: "AI创意产品展示 3", video: "/experiments/AI_创意产品展示3.mp4" },
  // 第二行
  { title: "AI OOTD展示", video: "/experiments/AI_ootd展示.mp4" },
  { title: "AI颜值展示", video: "/experiments/AI_颜值展示1.mp4" },
  { title: "AI颜值展示 2", video: "/experiments/AI_颜值展示2.mp4" },
  // 第三行
  { title: "AI家具类产品短视频", video: "/experiments/AI_家具类产品短视频.mp4" },
  { title: "AI营养类产品短视频", video: "/experiments/AI_营养类产品短视频.mp4" },
  { title: "AI数字人", video: "/experiments/AI_数字人.mp4" },
];

export default function AIWorks({ onNavigate }: AIWorksProps) {
  return (
    <section className="relative w-full h-screen overflow-y-auto bg-[#F4F5F7]">
      {/* 顶部蓝色细条 */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#0055B3] z-50" />

      {/* 导航菜单 - 2x2网格布局 */}
      {/* 第一行 */}
      <motion.button
        onClick={() => onNavigate?.(0)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute right-[450px] top-[100px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40 cursor-pointer"
      >
        <span className="text-3xl">🏠</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>HOME</p>
      </motion.button>

      <div className="absolute right-[200px] top-[100px] w-48 h-16 bg-white border-2 border-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40">
        <span className="text-3xl">✨</span>
        <p className="text-[#0055B3] font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>AI WORKS</p>
      </div>

      {/* 第二行 */}
      <motion.button
        onClick={() => onNavigate?.(2)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute right-[450px] top-[190px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40 cursor-pointer"
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
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute right-[200px] top-[190px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40 cursor-pointer"
      >
        <span className="text-3xl">📧</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>CONTACT</p>
      </motion.button>

      {/* 装饰性爆炸星 */}
      <motion.svg
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute right-20 top-32 w-[100px] h-[100px] z-10"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      <div className="relative max-w-7xl mx-auto px-16 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <h2 className="text-8xl font-black text-[#0055B3] tracking-wide" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>AI WORKS</h2>
          <h2 className="text-6xl font-light italic text-black mt-2" style={{ fontFamily: 'cursive' }}>& Creations</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {aiWorks.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3]">
                <video src={work.video} className="w-full" controls preload="metadata" />
                <div className="p-3 bg-white">
                  <p className="text-sm font-bold text-black">{work.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
