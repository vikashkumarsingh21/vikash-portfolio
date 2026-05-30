import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Briefcase,
  Award,
  Rocket,
  Trophy,
  Medal,
} from "lucide-react";

import "./Certificates.css";

const CERTS = {
  featured: [
    {
      title: "Smart India Hackathon 2024",
      org: "Government of India",
      date: "2024",
      img: "/certs/sih-certificate.jpg",
    },

    {
      title: "Microsoft Azure AI Fundamentals",
      org: "Microsoft",
      date: "2026",
      img: "/certs/azure-ai.jpg",
    },

    {
      title: "PHP Website Development Internship",
      org: "SpaceECE India Foundation",
      date: "2026",
      img: "/certs/php-internship.jpg",
    },

    {
      title: "Deloitte Technology Job Simulation",
      org: "Deloitte",
      date: "2025",
      img: "/certs/deloitte-certificate.jpg",
    },

    {
      title: "Database Programming with SQL",
      org: "Oracle",
      date: "2025",
      img: "/certs/oracle-sql.jpg",
    },

    {
      title: "Prompt Engineering for Everyone",
      org: "IBM",
      date: "2025",
      img: "/certs/ibm-prompt-engineering.jpg",
    },
  ],

  internships: [
  {
    title: "PHP Website Development Internship",
    org: "SpaceECE India Foundation",
    date: "Feb 2026",
    duration: "64 Hours",
    description:
      "Worked on PHP, MySQL, REST APIs, backend development, database optimization, and web application development.",
    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "Backend Development"
    ],
    img: "/certs/php-internship.jpg"
  },

  {
    title: "Deloitte Technology Job Simulation",
    org: "Deloitte",
    date: "2025",
    duration: "Virtual Experience Program",
    description:
      "Completed industry-level tasks involving software development, coding, debugging, and business technology solutions.",
    skills: [
      "Problem Solving",
      "Software Development",
      "Technology Consulting",
      "Business Analysis"
    ],
    img: "/certs/deloitte.jpg"
  },

  {
    title: "Software Development Internship",
    org: "Geeks Kepler",
    date: "2025",
    duration: "Unstop Tech Fair",
    description:
      "Participated in software development internship activities focused on programming, project development, and technical problem solving.",
    skills: [
      "Software Development",
      "Programming",
      "Project Development",
      "Team Collaboration"
    ],
    img: "/certs/software-internship.jpg"
  },

  {
    title: "Python Developer Internship",
    org: "Geeks Kepler",
    date: "2025",
    duration: "Unstop Tech Fair",
    description:
      "Worked on Python programming concepts, automation tasks, and software development practices.",
    skills: [
      "Python",
      "Automation",
      "Programming",
      "Problem Solving"
    ],
    img: "/certs/python-internship.jpg"
  }
],

  certifications: [

  {
    title: "Microsoft Azure AI Fundamentals",
    org: "Microsoft",
    date: "Apr 2026",
    description:
      "Validated knowledge of Artificial Intelligence, Machine Learning concepts, Azure AI services, and responsible AI practices.",

    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Azure AI",
      "Cloud Computing"
    ],

    img: "/certs/azure-ai.jpg"
  },

  {
    title: "Prompt Engineering for Everyone",
    org: "IBM Skills Network",
    date: "Aug 2025",

    description:
      "Learned prompt engineering techniques, AI interaction strategies, and effective use of generative AI tools.",

    skills: [
      "Prompt Engineering",
      "Generative AI",
      "LLMs",
      "AI Productivity"
    ],

    img: "/certs/ibm-prompt.jpg"
  },

  {
    title: "Python 101 for Data Science",
    org: "IBM Skills Network",
    date: "Sep 2025",

    description:
      "Built foundational skills in Python programming, data analysis, and data science workflows.",

    skills: [
      "Python",
      "Data Science",
      "Programming",
      "Analytics"
    ],

    img: "/certs/python101.jpg"
  },

  {
    title: "Introduction to Python",
    org: "Infosys Springboard",
    date: "Nov 2025",

    description:
      "Covered Python fundamentals including variables, loops, functions, and object-oriented programming concepts.",

    skills: [
      "Python",
      "Programming",
      "OOP",
      "Problem Solving"
    ],

    img: "/certs/introduction-python.jpg"
  },

  {
    title: "Database Programming with SQL",
    org: "Oracle Academy",
    date: "Oct 2025",

    description:
      "Learned relational database concepts, SQL queries, joins, normalization, and database design.",

    skills: [
      "SQL",
      "Database Design",
      "Oracle",
      "DBMS"
    ],

    img: "/certs/oracle-sql.jpg"
  },

  {
    title: "Java Foundations",
    org: "Oracle Academy",
    date: "Apr 2026",

    description:
      "Developed understanding of Java programming, object-oriented concepts, and software development fundamentals.",

    skills: [
      "Java",
      "OOP",
      "Programming",
      "Software Development"
    ],

    img: "/certs/java-foundations.jpg"
  },

  {
    title: "C++ Essentials 1",
    org: "Cisco Networking Academy",
    date: "Apr 2025",

    description:
      "Learned core programming concepts, algorithms, data types, functions, and object-oriented programming in C++.",

    skills: [
      "C++",
      "Algorithms",
      "Programming",
      "Problem Solving"
    ],

    img: "/certs/cpp-essentials.jpg"
  },

  {
    title: "Design Thinking",
    org: "Infosys Springboard",
    date: "Sep 2025",

    description:
      "Learned user-centric problem solving, innovation processes, prototyping, and creative thinking methodologies.",

    skills: [
      "Design Thinking",
      "Innovation",
      "Problem Solving",
      "Creativity"
    ],

    img: "/certs/design-thinking.jpg"
  },

  {
    title: "Problem Solving Using Computational Thinking",
    org: "University of Michigan (Coursera)",
    date: "Sep 2025",

    description:
      "Applied computational thinking principles to break down complex problems and create efficient solutions.",

    skills: [
      "Computational Thinking",
      "Problem Solving",
      "Algorithms",
      "Logic"
    ],

    img: "/certs/computational-thinking.jpg"
  },

  {
    title: "ChatGPT for Everyone",
    org: "AI Learning Platform",
    date: "Jul 2025",

    description:
      "Explored practical applications of ChatGPT, AI-assisted workflows, and productivity enhancement techniques.",

    skills: [
      "ChatGPT",
      "AI Tools",
      "Prompting",
      "Productivity"
    ],

    img: "/certs/chatgpt.jpg"
  },

  {
    title: "Introduction to Retrieval Augmented Generation (RAG)",
    org: "IBM SkillsBuild",
    date: "Aug 2025",

    description:
      "Learned Retrieval Augmented Generation architecture, vector databases, embeddings, and modern AI application development.",

    skills: [
      "RAG",
      "Generative AI",
      "Vector Databases",
      "LLMs"
    ],

    img: "/certs/rag.jpg"
  }

],

  hackathons: [

  {
    title: "Smart India Hackathon 2024",

    org: "Government of India",

    date: "2024",

    description:
      "Participated in India's largest innovation competition, collaborating on real-world problem solving and technology-driven solutions.",

    skills: [
      "Innovation",
      "Problem Solving",
      "Teamwork",
      "Project Development"
    ],

    img: "/certs/sih.jpg"
  },

  {
    title: "INTELLIFY 3.0 Hackathon",

    org: "Marwadi University",

    date: "2025",

    description:
      "Developed an innovative technology solution and secured 2nd Runner-Up position among participating teams.",

    skills: [
      "AI",
      "IoT",
      "Presentation",
      "Leadership"
    ],

    achievement: "2nd Runner-Up",

    img: "/certs/intellify.jpg"
  },

  {
    title: "Sustain-A-Thon Hackathon",

    org: "Sharda University",

    date: "2025",

    description:
      "Participated in a sustainability-focused hackathon aimed at solving environmental and social challenges through technology.",

    skills: [
      "Sustainability",
      "Innovation",
      "Research",
      "Problem Solving"
    ],

    img: "/certs/sustainathon.jpg"
  },

  {
    title: "ByteVerse 7.0 Hackathon",

    org: "National Institute of Technology (NIT) Patna",

    date: "2025",

    description:
      "Represented Marwadi University as Team INNOVA8ER and participated in a national-level hackathon organized by NIT Patna.",

    skills: [
      "Competitive Programming",
      "Teamwork",
      "Innovation",
      "Technology"
    ],

    img: "/certs/byteverse.jpg"
  }

],

  competitions: [

  {
    title: "Samsung Galaxy AI Treasure Hunt",

    org: "Samsung",

    date: "2025",

    description:
      "Participated in Samsung Galaxy AI Treasure Hunt, exploring Artificial Intelligence concepts, problem solving, and technology-based challenges.",

    skills: [
      "Artificial Intelligence",
      "Problem Solving",
      "Innovation",
      "Technology"
    ],

    img: "/certs/samsung-ai.jpg"
  },

  {
    title: "Food Competition",

    org: "University Event",

    date: "2025",

    description:
      "Participated in a university-level food competition, demonstrating creativity, teamwork, and event participation.",

    skills: [
      "Creativity",
      "Teamwork",
      "Presentation",
      "Event Participation"
    ],

    achievement: "3rd Prize",

    img: "/certs/food-competition.jpg"
  },

  {
    title: "SOF Olympiad",

    org: "Science Olympiad Foundation",

    date: "2025",

    description:
      "Participated in a national-level academic competition focused on analytical thinking and problem-solving skills.",

    skills: [
      "Logical Thinking",
      "Problem Solving",
      "Academic Excellence"
    ],

    img: "/certs/sof.jpg"
  },

  {
    title: "AICT Aptitude Test",

    org: "AICT",

    date: "2025",

    description:
      "Completed aptitude and analytical assessment designed to evaluate reasoning, quantitative aptitude, and problem-solving ability.",

    skills: [
      "Reasoning",
      "Quantitative Aptitude",
      "Critical Thinking"
    ],

    img: "/certs/aict.jpg"
  }

],

  achievements: [

  {
    title: "INTELLIFY 3.0 - 2nd Runner-Up",

    org: "Marwadi University",

    date: "2025",

    description:
      "Secured 2nd Runner-Up position in INTELLIFY 3.0 by presenting an innovative AI and IoT based solution.",

    skills: [
      "Leadership",
      "Presentation",
      "AI",
      "Innovation"
    ],

    achievement: "🥈 2nd Runner-Up",

    img: "/certs/intellify-runnerup.jpg"
  },

  {
    title: "Hack The Mountains 5.0 Volunteer",

    org: "Marwadi University",

    date: "2024",

    description:
      "Contributed as a volunteer in managing hackathon operations, participant support, and event coordination.",

    skills: [
      "Event Management",
      "Leadership",
      "Teamwork",
      "Communication"
    ],

    img: "/certs/htm-volunteer.jpg"
  },

  {
    title: "INTELLIFY 2.0 Volunteer",

    org: "Marwadi University",

    date: "2024",

    description:
      "Supported the organization and successful execution of INTELLIFY 2.0 as a volunteer team member.",

    skills: [
      "Coordination",
      "Leadership",
      "Team Collaboration"
    ],

    img: "/certs/intellify-volunteer.jpg"
  },

  {
    title: "Robo Comp 4.0 Volunteer",

    org: "MU Fest 2025",

    date: "2025",

    description:
      "Assisted in organizing robotics competitions and managing participant activities during MU Fest 2025.",

    skills: [
      "Event Handling",
      "Teamwork",
      "Communication"
    ],

    img: "/certs/robocomp.jpg"
  },

  {
    title: "SHL Assessment Report",

    org: "SHL",

    date: "2025",

    description:
      "Successfully completed aptitude and cognitive assessment covering quantitative ability, English comprehension, and logical reasoning.",

    skills: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Communication"
    ],

    img: "/certs/shl.jpg"
  }

],
};

const tabs = [
  {
    id: "featured",
    label: "Featured",
    icon: <Star size={18} />,
  },

  {
    id: "internships",
    label: "Internships",
    icon: <Briefcase size={18} />,
  },

  {
    id: "certifications",
    label: "Certifications",
    icon: <Award size={18} />,
  },

  {
    id: "hackathons",
    label: "Hackathons",
    icon: <Rocket size={18} />,
  },

  {
    id: "competitions",
    label: "Competitions",
    icon: <Trophy size={18} />,
  },

  {
    id: "achievements",
    label: "Achievements",
    icon: <Medal size={18} />,
  },
];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("featured");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="cert-section">
      <div className="cert-wrapper">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cert-title">
            Certifications & Achievements
          </h2>

          <p className="cert-subtitle">
            A collection of certifications, internships,
            hackathons, competitions and achievements
            showcasing my technical journey.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="cert-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cert-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CERTIFICATE GRID */}
        <div className="certs-grid">

          {CERTS[activeTab]?.length === 0 ? (
            <div className="empty-state">
              <h3>No Certificates Added Yet</h3>
              <p>
                Certificates for this category will
                appear here.
              </p>
            </div>
          ) : (
            CERTS[activeTab].map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCert(cert)}
              >
                <img
  src={cert.img}
  alt={cert.title}
  className="cert-img"
/>

                <div className="cert-content">

  <div className="cert-top">

    <h3 className="cert-name">
      {cert.title}
    </h3>

    <span className="cert-date">
      {cert.date}
    </span>

  </div>

  <p className="cert-org">
    {cert.org}
  </p>

  {cert.description && (
    <p className="cert-description">
      {cert.description}
    </p>
  )}

  {cert.skills && (
    <div className="cert-skills">

      {cert.skills.map((skill, i) => (
        <span
          key={i}
          className="skill-badge"
        >
          {skill}
        </span>
      ))}

    </div>
  )}

  <button className="view-btn">
    View Certificate
  </button>

</div>
              </motion.div>
            ))
          )}

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="modal-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}