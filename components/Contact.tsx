"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#F4F5F7]">
      {/* 顶部蓝色细条 */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#0055B3] z-50" />

      {/* 装饰性爆炸星 */}
      <motion.svg
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute left-20 top-20 w-[120px] h-[120px] z-10"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      <motion.svg
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute right-20 bottom-20 w-[120px] h-[120px] z-10"
        viewBox="0 0 100 100"
      >
        <path d="M50,10 L55,40 L70,35 L60,50 L85,60 L60,65 L65,85 L50,70 L35,85 L40,65 L15,60 L40,50 L30,35 L45,40 Z" fill="#0055B3" />
      </motion.svg>

      <div className="relative h-full flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-[#0055B3] p-16">
            <h2 className="text-8xl font-black text-[#0055B3] tracking-wide mb-2" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>GET IN</h2>
            <h2 className="text-7xl font-black text-[#0055B3] tracking-wide mb-12" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>TOUCH</h2>

            <div className="space-y-6 text-black">
              <div>
                <p className="text-sm font-bold text-[#0055B3] mb-1">📧 Email</p>
                <p className="text-xl font-bold">2975068538@qq.com</p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0055B3] mb-1">📱 电话</p>
                <p className="text-xl font-bold">18170056289</p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0055B3] mb-1">💬 微信</p>
                <p className="text-xl font-bold">hu14569826</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 左侧晃动照片 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: [-5, 5, -5]
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          className="absolute left-[100px] top-[20px] w-[350px] z-20"
        >
          <Image src="/photos/4.png" alt="胡宇萱" width={350} height={450} className="w-full object-contain" />
        </motion.div>

        {/* 右侧晃动照片 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: [-5, 5, -5]
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          className="absolute right-[100px] w-[300px] z-20"
        >
          <Image src="/photos/12-transparent.png" alt="胡宇萱" width={300} height={400} className="w-full object-contain" />
        </motion.div>
      </div>
    </section>
  );
}
