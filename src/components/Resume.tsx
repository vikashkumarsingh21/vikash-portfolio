import { motion } from "motion/react";
import "./Resume.css";

const resumes = [
  {
    title: "Web Development Resume",
    subtitle: "Frontend & Full Stack Development",
    icon: "💼",
    file: "/Vikash_WEB_Resume.pdf",
  },

  {
    title: "IoT Resume",
    subtitle: "Embedded Systems & Smart Automation",
    icon: "📡",
    file: "/Vikash_IOT_Resume.pdf",
  },

  {
    title: "AI / ML Resume",
    subtitle: "Artificial Intelligence & Machine Learning",
    icon: "🤖",
    file: "/Vikash_ML_Resume.pdf",
  },
];

export function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="resume-title"
        >
          My Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="resume-subtitle"
        >
          Choose the resume that best matches your interest.
        </motion.p>

        <div className="resume-grid">

          {resumes.map((resume, index) => (

            <motion.div
              key={index}
              className="resume-card-download"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >

              <div className="resume-icon">
                {resume.icon}
              </div>

              <h3>{resume.title}</h3>

              <p>{resume.subtitle}</p>

              <div className="resume-actions">

                <a
                  href={resume.file}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-view-btn"
                >
                  View Resume
                </a>

                <a
                  href={resume.file}
                  download
                  className="resume-download-btn"
                >
                  Download
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}