"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getAssetPath } from "@/lib/utils";

const aiWorks = [
  { title: "AI电商短视频", video: getAssetPath("/experiments/AI_电商短视频.mp4") },
  { title: "AI数字人", video: getAssetPath("/experiments/AI_数字人.mp4") },
  { title: "AI颜值展示", video: getAssetPath("/experiments/AI_颜值展示1.mp4") },
  { title: "AI OOTD", video: getAssetPath("/experiments/AI_ootd展示.mp4") },
];

const mediaWorks = [
  { title: "社会新闻短视频", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频.mp4") },
  { title: "社会新闻短视频 2", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频2.mp4") },
  { title: "社会新闻短视频 3", video: getAssetPath("/experiments/新媒体运营_社会新闻短视频3.mp4") },
];

const mediaImages = [
  getAssetPath("/experiments/图片1.png"),
  getAssetPath("/experiments/图片2.png"),
  getAssetPath("/experiments/图片3.png"),
  getAssetPath("/experiments/图片4.png"),
];

export default function Experiments() {
  const [activeTab, setActiveTab] = useState<"ai" | "media">("ai");

  return (
    <section className="relative w-full h-screen overflow-y-auto">
      {/* 天空背景上半部分 */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-sky-light to-sky" />
      {/* 草地背景下半部分 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-grass-light to-grass" />

      {/* 荧光黄色顶部条 */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-neon-yellow flex items-center justify-between px-8 z-50">
        <span className="text-sm font-light">UGC CREATOR PORTFOLIO</span>
        <span className="text-sm font-light">2026</span>
      </div>

      {/* 3D文件夹装饰 */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-32 right-20 w-24 h-20 bg-blue-400/40 rounded-t-lg" />
        <div className="absolute bottom-32 left-20 w-28 h-22 bg-blue-400/40 rounded-t-lg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-16 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold mb-2">Experiments</h2>
          <h2 className="text-5xl font-light italic text-neon-yellow" style={{ fontFamily: 'cursive' }}>& Exploration</h2>
        </motion.div>

        <div className="flex gap-6 mb-12">
          <button
            onClick={() => setActiveTab("ai")}
            className={`text-lg font-light pb-2 border-b-2 transition-colors ${
              activeTab === "ai" ? "border-black text-black" : "border-transparent text-neutral-400"
            }`}
          >
            AI视频创作
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`text-lg font-light pb-2 border-b-2 transition-colors ${
              activeTab === "media" ? "border-black text-black" : "border-transparent text-neutral-400"
            }`}
          >
            新媒体运营
          </button>
        </div>

        {activeTab === "ai" ? (
          <div className="grid grid-cols-4 gap-6">
            {aiWorks.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <video src={work.video} className="w-full" controls preload="metadata" />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-light">{work.title}</p>
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
              className="bg-neon-yellow p-8 shadow-2xl"
            >
              <p className="text-lg font-light mb-6">
                负责热点小视频的选题、剪辑、文案撰写
              </p>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-4xl font-bold mb-1">200+</p>
                  <p className="text-sm">视频产出</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">400+</p>
                  <p className="text-sm">粉丝增长</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">13%</p>
                  <p className="text-sm">活跃粉丝增长</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">39万</p>
                  <p className="text-sm">最高播放量</p>
                </div>
              </div>
            </motion.div>

            {/* 拼贴式图片展示 */}
            <div className="grid grid-cols-5 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="col-span-3 bg-white rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <img src={mediaImages[0]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="col-span-2 bg-white rounded-lg shadow-2xl overflow-hidden mt-8"
              >
                <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <img src={mediaImages[1]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="col-span-2 bg-white rounded-lg shadow-2xl overflow-hidden -mt-4"
              >
                <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <img src={mediaImages[2]} alt="运营数据" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="col-span-3 bg-white rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
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
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <video src={work.video} className="w-full" controls preload="metadata" />
                    <div className="p-3 bg-white">
                      <p className="text-sm font-light">{work.title}</p>
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
