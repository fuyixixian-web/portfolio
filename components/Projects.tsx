"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getAssetPath } from "@/lib/utils";

interface ProjectsProps {
  onNavigate?: (page: number) => void;
}

const videoWorks = [
  { title: "南昌治愈日记", type: "微电影", video: getAssetPath("/works/微电影《南昌治愈日记》.mp4") },
  { title: "我的想象力都去哪了", type: "微电影", video: getAssetPath("/works/微电影《我的想象力都去哪了》.mp4") },
  { title: "少年的你", type: "电影解析", video: getAssetPath("/works/电影解析《少年的你》.mp4") },
  { title: "活动报道", type: "新闻报道", video: getAssetPath("/works/活动报道类新闻.mp4") },
];

const mediaWorks = [
  { title: "热点小视频", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频.mp4") },
  { title: "热点小视频", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频2.mp4") },
  { title: "热点小视频", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频3.mp4") },
];

const mediaImages = [
  getAssetPath("/experiments/图片1.png"),
  getAssetPath("/experiments/图片2.png"),
  getAssetPath("/experiments/图片3.png"),
  getAssetPath("/experiments/图片4.png"),
];

export default function Projects({ onNavigate }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<"video" | "media">("video");

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

      <motion.button
        onClick={() => onNavigate?.(1)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-[200px] top-[100px] w-48 h-16 bg-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40 cursor-pointer"
      >
        <span className="text-3xl">✨</span>
        <p className="text-white font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>AI WORKS</p>
      </motion.button>

      {/* 第二行 */}
      <div className="absolute right-[450px] top-[190px] w-48 h-16 bg-white border-2 border-[#0055B3] rounded-2xl flex items-center justify-between px-4 shadow-xl z-40">
        <span className="text-3xl">📁</span>
        <p className="text-[#0055B3] font-black text-lg" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>PROJECT</p>
      </div>

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
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute right-20 top-20 w-[120px] h-[120px] z-10"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      <div className="relative max-w-7xl mx-auto px-16 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-8xl font-black text-[#0055B3] tracking-wide" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>PROJECT</h2>
          <h2 className="text-5xl font-light italic text-black mt-2" style={{ fontFamily: 'cursive' }}>& Works</h2>
        </motion.div>

        <div className="flex gap-6 mb-12">
          <button
            onClick={() => setActiveTab("video")}
            className={`text-2xl font-bold px-6 py-3 rounded-lg transition-all ${
              activeTab === "video" ? "bg-[#0055B3] text-white" : "bg-white text-black border-2 border-[#0055B3]"
            }`}
          >
            影像类作品
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`text-2xl font-bold px-6 py-3 rounded-lg transition-all ${
              activeTab === "media" ? "bg-[#0055B3] text-white" : "bg-white text-black border-2 border-[#0055B3]"
            }`}
          >
            新媒体运营
          </button>
        </div>

        {activeTab === "video" ? (
          <div className="grid grid-cols-2 gap-8">
            {videoWorks.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
              >
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3]">
                  <video src={work.video} className="w-full" controls />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-black">{work.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{work.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-12 pb-16">
            {/* 数据展示区 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0055B3] p-8 shadow-2xl rounded-lg"
            >
              <p className="text-lg font-bold text-white mb-6">
                负责热点小视频的选题、剪辑、文案撰写
              </p>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-4xl font-black text-white mb-1">200+</p>
                  <p className="text-sm text-white">视频产出</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">400+</p>
                  <p className="text-sm text-white">粉丝增长</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">13%</p>
                  <p className="text-sm text-white">活跃粉丝增长</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">39万</p>
                  <p className="text-sm text-white">最高播放量</p>
                </div>
              </div>
            </motion.div>

            {/* 拼贴式图片展示 */}
            <div className="grid grid-cols-5 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="col-span-3 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3]"
              >
                <img src={mediaImages[0]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="col-span-2 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3] mt-8"
              >
                <img src={mediaImages[1]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="col-span-2 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3] -mt-4"
              >
                <img src={mediaImages[2]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="col-span-3 bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-[#0055B3]"
              >
                <img src={mediaImages[3]} alt="运营数据" className="w-full" />
              </motion.div>
            </div>

            {/* 视频作品 */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {mediaWorks.map((work, idx) => (
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
        )}
      </div>
    </section>
  );
}
