import React from 'react';
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
}

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Experienced AI Engineer with a passion for developing innovative machine learning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1BhmSlbU3HwW8dN2Qx7UAGGbhR5gonixD', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </button>
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1BhmSlbU3HwW8dN2Qx7UAGGbhR5gonixD/view?usp=sharing', '_blank')}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Show CV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Skills */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">ytaha8586@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">01554019655 / 01066965772</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Cairo, Egypt</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2">
            {/* Professional Experience */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <EducationItem key={index} education={edu} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg p-2 transition-colors duration-200">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {cert.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                      </a>
                    ) : (
                      <>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                          {cert.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="border-l-4 border-blue-600 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {experience.position}
        </h4>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          {experience.duration}
        </div>
      </div>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
        {experience.company} • {experience.location}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-3">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const EducationItem: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="border-l-4 border-green-500 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {education.degree}
        </h4>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          {education.year}
        </div>
      </div>
      <p className="text-green-600 dark:text-green-400 font-medium mb-2">
        {education.school} • {education.location}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        {education.description}
      </p>
    </div>
  );
};

// Sample data
const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "SQL", "Java", "JavaScript (Basic)", "C++ (Basic)", "R (Basic)"]
  },
  {
    name: "AI/ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "MLflow", "Git"]
  },
  {
    name: "Web Development",
    skills: ["React", "Node.js", "FastAPI", "MongoDB", "PostgreSQL"]
  }
];

const experiences: Experience[] = [
  {
    position: "AI Engineer & Research Developer",
    company: "Independent Research & Development",
    location: "Cairo, Egypt",
    duration: "2024 - Present",
    description: "Leading development of cutting-edge AI solutions with specialization in computer vision, medical imaging analysis, and natural language processing. Successfully delivered multiple production-ready AI systems including medical diagnostic tools, emotion recognition systems, and interactive data visualization platforms. Collaborated with healthcare professionals to implement AI-driven diagnostic assistance tools.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Gradio", "FastAPI", "Docker", "AWS", "Medical AI"]
  },
  {
    position: "Machine Learning Engineer",
    company: "AI Research & Development Projects",
    location: "Cairo, Egypt",
    duration: "2023 - 2024",
    description: "Designed and implemented advanced machine learning models for various applications including speech emotion recognition, image processing systems, and predictive analytics. Developed end-to-end ML pipelines from data preprocessing to model deployment. Published research findings and code implementations on Kaggle platform with significant community engagement.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "MLOps"]
  },
  {
    position: "Junior AI Developer",
    company: "Self-Directed Learning & Projects",
    location: "Cairo, Egypt",
    duration: "2022 - 2023",
    description: "Built foundational expertise in artificial intelligence and machine learning through intensive self-study and practical project development. Created multiple AI applications including image classification systems, data analysis tools, and interactive web applications. Gained proficiency in modern AI frameworks and development best practices.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "Data Analysis", "Web Development"]
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Cairo University",
    location: "Cairo, Egypt",
    year: "2020 - 2024",
    description: "Comprehensive study in computer science with focus on artificial intelligence, machine learning, and software engineering. Completed multiple AI projects and research initiatives."
  },
  {
    degree: "High School Diploma",
    school: "Local High School",
    location: "Cairo, Egypt",
    year: "2017 - 2020",
    description: "Strong foundation in mathematics and sciences, which provided the analytical thinking skills essential for AI and computer science studies."
  }
];

const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    url: "https://www.coursera.org/specializations/machine-learning"
  },
  {
    name: "Deep Learning with Python",
    issuer: "Online Learning Platform",
    date: "2022",
    url: "https://www.deeplearning.ai/"
  },
  {
    name: "Computer Vision Fundamentals",
    issuer: "Self-Study & Projects",
    date: "2021",
    url: "https://opencv.org/"
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "2022",
    url: "https://www.ibm.com/training/badge/python-for-data-science"
  }
];

export default Resume;