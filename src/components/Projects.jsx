import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [

  // first project section 
 {
  title: "Krishi Drishti",

  category: "AI + IoT + Web",

  featured: true,

  desc: "Smart agriculture platform combining IoT monitoring, AI-powered crop protection, weather forecasting, and market insights to help farmers improve productivity and decision making.",

  image: "public/krishidrishti.jpeg",

  tech: [
    "Python",
    "Firebase",
    "YOLOv5",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "REST APIs"
  ],

  github: "https://github.com/vikashkumarsingh21/KRISHI-DRISHTI",

  demo: "https://krishi-drishti.onrender.com/",

  status: "Completed",

  duration: "2 Months",

  team: "4 Members",

  role: "Team Lead & web & IOT",

  achievement: "2nd Runner-Up - INTELLIFY 3.0",

  highlights: [
    "AI Animal Detection",
    "Weather Forecasting",
    "Market Price Analytics",
    "Real-Time IoT Dashboard"
  ]
},
 
// second project section 
  {
  title: "JalMitra",

  category: "IoT + AI + Robotics",

  featured: true,

  desc: "An autonomous river cleaning robot designed to remove floating waste, monitor water quality, and support environmental sustainability using IoT sensors, AI-powered navigation, and a real-time monitoring dashboard.",

  image: "public/jalmitra.jpg",

  tech: [
    "Arduino",
    "ESP32",
    "IoT",
    "Firebase",
    "Python",
    "AI",
    "Sensors",
    "Web Dashboard"
  ],

  github: "https://github.com/vikashkumarsingh21/jalmitra",

  demo: "https://jal-mitraafrontend.onrender.com/",

  status: "Completed",

  duration: "3 Months",

  team: "4 Members",

  role: "Team Lead & AI Developer",

  achievement: "Smart India Hackathon Project",

  highlights: [
    "Autonomous Waste Collection",
    "Water Quality Monitoring",
    "Obstacle Detection System",
    "Real-Time IoT Dashboard",
    "Environmental Sustainability Solution"
  ]
},
// third project field
  {
  title: "🌐 Social Network Analyzer",

  category: "Graph Theory + Algorithms + Web Development",

  featured: true,

  desc: "A web-based social network analysis platform that visualizes user relationships using graph theory concepts, enabling network exploration, connectivity analysis, and relationship insights through interactive visualizations.",

  image: "public/Social Network Analyzer.jpg",

  tech: [
    "JavaScript",
    "HTML",
    "CSS",
    "Graph Theory",
    "Algorithms",
    "Data Visualization"
  ],

  github: "https://github.com/vikashkumarsingh21/Social-Network-Analyzer",

  demo: "#",

  status: "Completed",

  duration: "1 Month",

  team: "2 members",

  role: "Full Stack Developer",

  achievement: "Applied Graph Theory Concepts to Real-World Network Analysis",

  highlights: [
    "Interactive Network Visualization",
    "Graph Theory Algorithms",
    "Relationship Mapping",
    "Connectivity Analysis",
    "User Network Insights"
  ]
},
 // fourth project field 
  {
  title: "🎓 Placement Prediction System",

  category: "Machine Learning",

  featured: true,

  desc: "A machine learning application that predicts student placement outcomes based on academic performance and aptitude-related features using Logistic Regression. The project demonstrates the complete ML workflow from data preprocessing to model deployment.",

  image: "public/placement.jpg",

  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-Learn",
    "Logistic Regression",
    "Jupyter Notebook"
  ],

  github: "https://github.com/vikashkumarsingh21/placement-project-logistic-regression",

  demo: "#",

  status: "Completed",

  duration: "2 days`",

  team: "Individual Project",

  role: "Machine Learning Developer",

  achievement: "Implemented End-to-End Machine Learning Workflow",

  highlights: [
    "Data Preprocessing",
    "Exploratory Data Analysis",
    "Logistic Regression Model",
    "Data Visualization",
    "Model Evaluation",
    "Model Serialization using Pickle"
  ]
},
// fifth project field
  {
  title: "🌦 Weather Forecast Application",

  category: "Web Development + API Integration",

  featured: false,

  desc: "A responsive weather forecasting web application that provides real-time weather conditions, temperature, humidity, wind speed, and location-based forecasts using external weather APIs.",

  image: "public/wether.png",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "OpenWeather API"
  ],

  github: "https://github.com/vikashkumarsingh21/weather",

  live: "https://vikashkumarsingh21.github.io/weather/",

  status: "Completed",

  duration: "1 Week",

  team: "Individual Project",

  role: "Frontend Developer",

  achievement: "Integrated Real-Time Weather Data Using APIs",

  highlights: [
    "Real-Time Weather Updates",
    "Location-Based Forecasting",
    "API Integration",
    "Responsive User Interface",
    "Dynamic Data Rendering"
  ]
},
// sixth project field 
  {
  title: "📰 News Headlines Application",

  category: "Web Development + API Integration",

  featured: false,

  desc: "A dynamic news aggregation platform that fetches and displays real-time news articles from external news APIs, allowing users to explore the latest headlines across multiple categories through an intuitive interface.",

  image: "public/news.webp",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "News API"
  ],

  github: "https://github.com/vikashkumarsingh21/news-headlines",

  live: "https://vikashkumarsingh21.github.io/news-headlines/",

  status: "Completed",

  duration: "1 Week",

  team: "Individual Project",

  role: "Frontend Developer",

  achievement: "Implemented Real-Time News Fetching Using External APIs",

  highlights: [
    "Live News Updates",
    "Category-Based News Filtering",
    "REST API Integration",
    "Dynamic Content Rendering",
    "Responsive User Interface"
  ]
},
// seventh project field
{
  title: "🛒 Amazon Clone",

  category: "Frontend Web Development",

  featured: false,

  desc: "A responsive Amazon-inspired e-commerce interface built to practice modern frontend development concepts, responsive layouts, DOM manipulation, and interactive user experiences using HTML, CSS, and JavaScript.",

  image: "public/amazon.webp",

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Font Awesome"
  ],

  github: "https://github.com/vikashkumarsingh21/amazon-clone",

  live: "#",

  status: "Completed",

  duration: "1 Week",

  team: "Individual Project",

  role: "Frontend Developer",

  achievement: "Built a Fully Responsive E-Commerce UI Clone",

  highlights: [
    "Responsive Layout Design",
    "Amazon-Inspired User Interface",
    "Interactive Navigation Bar",
    "Search Functionality",
    "Mobile-Friendly Design",
    "DOM Manipulation with JavaScript"
  ]
},
  
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.image} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">

  {p.category && (
    <span className="project-category">
      {p.category}
    </span>
  )}

  <h3 className="project-heading">
    {p.title}
  </h3>

  <p className="project-desc">
    {p.desc}
  </p>

  <div className="project-meta">
    {p.role && (
      <p>
        <strong>Role:</strong> {p.role}
      </p>
    )}

    {p.duration && (
      <p>
        <strong>Duration:</strong> {p.duration}
      </p>
    )}

    {p.team && (
      <p>
        <strong>Team:</strong> {p.team}
      </p>
    )}
  </div>

  {p.achievement && (
    <div className="project-achievement">
      🏆 {p.achievement}
    </div>
  )}

  {p.highlights && (
    <div className="project-highlights">
      {p.highlights.map((item, i) => (
        <span key={i} className="highlight-badge">
          ✓ {item}
        </span>
      ))}
    </div>
  )}

  <div className="project-tech">
    {p.tech.map((t) => (
      <span key={t} className="tech-badge">
        {t}
      </span>
    ))}
  </div>

  <div className="project-links">
    <motion.a
      href={p.code || p.github}
      target="_blank"
      whileHover={{ scale: 1.08 }}
      className="code-btn"
    >
      <Github size={14} /> Code
    </motion.a>

    <motion.a
      href={p.live || p.demo}
      target="_blank"
      whileHover={{ scale: 1.08 }}
      className="live-btn"
    >
      <ExternalLink size={14} /> Live
    </motion.a>
  </div>

</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
