import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import "./ExperienceEducation.css";

const experiences = [
  {
    role: "PHP Developer Intern",
    company: "SpaceECE India Foundation",
    duration: "Dec 2025 - Feb 2026",
    location: "Remote",

    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "Backend Development"
    ],

    achievements: [
      "Developed backend modules using PHP and MySQL",
      "Integrated REST APIs for data communication",
      "Optimized database queries for better performance",
      "Collaborated with development team on project deployment"
    ]
  },

  {
    role: "AI & Data Analytics Virtual Intern",
    company: "Deloitte",
    duration: "2025",
    location: "Remote",

    skills: [
      "Data Analytics",
      "Business Intelligence",
      "Artificial Intelligence",
      "Problem Solving"
    ],

    achievements: [
      "Completed Deloitte Virtual Internship Program",
      "Worked on AI and data analytics use cases",
      "Performed business problem-solving tasks",
      "Learned industry-level workflows and reporting"
    ]
  }
];

const education = [
  {
    degree: "B.Tech Artificial Intelligence & Machine Learning",

    institute: "Marwadi University, Rajkot",

    duration: "2024 - Present",

    score: "CGPA: 7.9 / 10",

    highlights: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Full Stack Development"
    ],

    achievements: [
      "Smart India Hackathon Participant",
      "Microsoft Azure AI Fundamentals Certified",
      "Patent Published",
      "Built 7+ Technical Projects"
    ]
  },

  {
    degree: "Higher Secondary (12th)",

    institute: "M.R.D.S College, Hajipur",

    duration: "2021 - 2023",

    score: "Science Stream"
  },

  {
    degree: "Secondary (10th)",

    institute: "St. Michael's High School, Hajipur",

    duration: "2021"
  }
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-title"
        >
          Experience & Education
        </motion.h2>

        <p className="experience-subtitle">
          Professional experience, internships, and academic journey that shaped
          my expertise in AI, Machine Learning, IoT, and Software Development.
        </p>

        {/* EXPERIENCE */}

        <div className="section-heading">
          <Briefcase size={28} />
          <h3>Experience</h3>
        </div>

        <div className="timeline-column">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h4>{item.role}</h4>

              <div className="timeline-company">
                {item.company}
              </div>

              <div className="experience-meta">
                <span>
                  <Calendar size={16} />
                  {item.duration}
                </span>

                <span>
                  <MapPin size={16} />
                  {item.location}
                </span>
              </div>

              <div className="skills-badges">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="achievement-section">
                <h5>Key Achievements</h5>

                <ul>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>
                      ✓ {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EDUCATION */}

        <div className="section-heading education-heading">
          <GraduationCap size={28} />
          <h3>Education</h3>
        </div>

        <div className="timeline-column">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h4>{item.degree}</h4>

              <div className="timeline-company">
                {item.institute}
              </div>

              <div className="experience-meta">
                <span>
                  <Calendar size={16} />
                  {item.duration}
                </span>
              </div>

              {item.score && (
                <p className="education-score">
                  {item.score}
                </p>
              )}

              {item.highlights && (
                <div className="skills-badges">
                  {item.highlights.map((skill, i) => (
                    <span key={i} className="skill-badge education-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.achievements && (
                <div className="achievement-section">
                  <h5>Highlights</h5>

                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>
                        ✓ {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}