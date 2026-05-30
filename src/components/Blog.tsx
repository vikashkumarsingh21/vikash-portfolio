import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {

  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedBlog]);
  const blogPosts = [
  {
  title: "Building Krishi Drishti",
  category: "AI & IoT",
  image: "/blogs/krishi.jpeg",
  date: "May 2026",
  readTime: "8 min read",

  github:
    "https://github.com/yourusername/krishi-drishti",

  project:
    "https://krishidrishti.vercel.app",

  skills: [
    "React",
    "Firebase",
    "Python",
    "Machine Learning",
    "AI"
  ]
},

  {
  title: "My Smart India Hackathon Journey",

  category: "Hackathon",

  image: "/blogs/sih.jpg",

  date: "Apr 2026",

  readTime: "10 min read",

  excerpt:
    "Lessons, challenges and experiences from participating in Smart India Hackathon.",

  content: `
Smart India Hackathon was one of the biggest milestones of my journey.

During SIH I worked on:

• Problem Analysis
• Team Collaboration
• Hardware Integration
• Project Presentation
• Rapid Prototyping

The experience improved my confidence and technical skills significantly.

It taught me how real-world engineering problems are solved through teamwork and innovation.
`
},

  {
  title: "Building JalMitra River Cleaning Robot",

  category: "Robotics",

  image: "/blogs/jalmitra.jpg",

  date: "Mar 2026",

  readTime: "7 min read",

  excerpt:
    "Designing an autonomous river cleaning robot with IoT sensors and monitoring dashboard.",

  content: `
JalMitra is an autonomous river cleaning robot designed to remove floating waste from water bodies.

Main Features:

• IoT Monitoring
• Waste Detection
• Autonomous Navigation
• Real-time Dashboard

Technologies:

• Arduino
• ESP32
• Sensors
• IoT Dashboard

The goal is to support cleaner rivers and sustainable environmental practices.
`
}
];

  return (
    <section id="blog" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12"
        >
          Tech  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog & Insights</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              onClick={() => setSelectedBlog(post)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-white/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>


     {/* BLOG POPUP */}
{selectedBlog && (
  <div
    className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
    onClick={() => setSelectedBlog(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
relative
bg-[#0f172a]
w-full
max-w-5xl
max-h-[90vh]
rounded-3xl
overflow-hidden
border
border-white/10
shadow-2xl
flex
flex-col
lg:flex-row
"
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedBlog(null)}
        className="
          absolute
          top-4
          right-4
          z-50
          w-10
          h-10
          rounded-full
          bg-red-500
          hover:bg-red-600
          flex
          items-center
          justify-center
        "
      >
        <X size={18} />
      </button>

      {/* LEFT SIDE IMAGE */}
      <div className="lg:w-[45%] h-[280px] lg:h-auto bg-black">
        <img
  src={selectedBlog.image}
  alt={selectedBlog.title}
  className="
    w-full
    h-full
    object-cover
    object-center
  "
/>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div
  className="
    lg:w-[55%]
    p-8
    overflow-y-auto
    max-h-[90vh]
  "
>

        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            bg-purple-500/20
            text-purple-400
            text-sm
            mb-4
          "
        >
          {selectedBlog.category}
        </span>

        <h2 className="text-3xl font-bold mb-4">
          {selectedBlog.title}
        </h2>

        <div className="flex gap-6 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{selectedBlog.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{selectedBlog.readTime}</span>
          </div>
        </div>

        <div
          className="
            text-gray-300
            leading-8
            whitespace-pre-line
          "
        >
          {selectedBlog.content}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
  {selectedBlog.skills?.map((skill:any, i:number) => (
    <span
      key={i}
      className="
        px-3
        py-1
        rounded-full
        bg-purple-500/20
        text-purple-300
        text-sm
      "
    >
      {skill}
    </span>
  ))}
</div>

<div className="flex gap-4 mt-8">
  <button
    className="
      px-5
      py-3
      rounded-xl
      bg-purple-600
      hover:bg-purple-700
      transition
    "
  >
    View Project
  </button>

  <button
    className="
      px-5
      py-3
      rounded-xl
      border
      border-white/20
      hover:bg-white/10
      transition
    "
  >
    GitHub
  </button>
</div>

      </div>

    </div>
  </div>
)}
    </section>
  );
}