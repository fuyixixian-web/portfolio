"use client";

import { motion } from "framer-motion";

const works = [
  { title: "南昌治愈日记", type: "微电影", video: "/works/微电影《南昌治愈日记》.mp4" },
  { title: "我的想象力都去哪了", type: "微电影", video: "/works/微电影《我的想象力都去哪了》.mp4" },
  { title: "少年的你", type: "电影解析", video: "/works/电影解析《少年的你》.mp4" },
  { title: "活动报道", type: "新闻报道", video: "/works/活动报道类新闻.mp4" },
];

export default function Works() {
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
          className="mb-16"
        >
          <h2 className="text-7xl font-bold mb-2">Content</h2>
          <h2 className="text-6xl font-light italic text-neon-yellow" style={{ fontFamily: 'cursive' }}>Style</h2>
        </motion.div>

        {/* 视频网格 */}
        <div className="grid grid-cols-2 gap-8">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <video src={work.video} className="w-full" controls />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-light">{work.title}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{work.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
