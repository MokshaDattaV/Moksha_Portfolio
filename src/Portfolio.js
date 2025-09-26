import React from "react";

// Store images in the /public/ folder. For each image field: provide a filename (e.g., "/isro.png", "/oracle_genai.png", etc.)

const portfolioData = {
  name: "Moksha Datta Vadlamudi",
  email: "22211a67b7@bvrit.ac.in",
  phone: "+91 6300276690",
  linkedin: "https://linkedin.com/in/moksha-datta-vadlamudi",
  github: "https://github.com/MokshaDattaV",
  profileImage: "/profile.png",
  resumeLink: "/resume.pdf",
  internship: [
    {
      company: "NRSC, ISRO",
      companyImg: "/isro.webp", // Place image in public/
      role: "Project Intern",
      duration: "Feb - Apr 2025",
      desc: (
        <ul style={{ paddingLeft: 20 }}>
          <li>Developed and integrated a chatbot on the ISRO website</li>
          <li>Built deep learning models for detection of ocean oil spills from satellite imagery</li>
          <li>Worked with HPC systems for large-scale cloud data processing</li>
        </ul>
      )
    },
    {
      company: "AICTE, AWS",
      companyImg: "/aicte.webp", // Place image in public/
      role: "AI-ML Intern (Virtual)",
      duration: "Sep - Nov 2024",
      desc: (
        <ul style={{ paddingLeft: 20 }}>
          <li>Worked with SageMaker, S3, and EC2 in ML workflows</li>
          <li>Developed ML models using Python, SageMaker, scikit-learn</li>
        </ul>
      )
    }
  ],
  projects: [
    {
      title: "Your Water Footprint",
      link: "https://github.com/MokshaDattaV/WaterFootprint",
      image: "WaterFootprint.png",
      desc: (
        <ul style={{ paddingLeft: 20 }}>
          <li>Team lead: full MERN stack web app with React.js & RESTful API</li>
          <li>MongoDB schema for efficient water footprint calculation and tracking</li>
        </ul>
      )
    },
    {
      title: "Oil Spill Detection",
      link: "https://huggingface.co/spaces/MokshaDatta/oil_spill_detection_from_images",
      image: "/proj2.png",
      desc: (
        <ul style={{ paddingLeft: 20 }}>
          <li>Deep learning (UNet, DeepLabV3+) for SAR image oil spill analysis</li>
          <li>Deployed on Hugging Face Spaces with Streamlit UI</li>
          <li>Published paper (under review) at IEEE INGARSS with NRSC-ISRO scientists</li>
        </ul>
      )
    },
    {
      title: "NoteJipper (npnotes)",
      link: "https://npnotes.onrender.com/",
      image: "/proj3.png",
      desc: (
        <ul style={{ paddingLeft: 20 }}>
          <li>Modern note-taking app: clean UI, fast CRUD, live project</li>
          <li>Deployed on Render.com</li>
        </ul>
      )
    }
  ],
  certifications: [
    {
      title: "Oracle Certified Generative AI Professional",
      image: "/oracle_genai.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=09776A6E51585A6667A72865DA4F066234919BC11A1CFFE67C62A2C7BD28A5AB"
    },
    {
      title: "Oracle Certified Data Science Professional",
      image: "/oracle_datasci.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1BE39E9C1666D0018113CD6E54A9027122127C84DD07C665D43E96248CE73BE5"
    },
    {
      title: "Oracle Certified OCI Developer",
      image: "/oracle_oci.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CBDFD5F6EAA696EC08918DA57873EAC0CCB6FAEB6BAF39333542091C5E1C2F2D"
    },
    {
      title: "Interactive Web Design Certification - FreeCodeCamp",
      image: "/freecodecamp.png",
      link: ""
    }
  ],
  achievements: [
    "Winner - Datathon 2024, BVRIT",
    "Second Runner-up - Tech Savishkar 2025 (Vasavi College, National Hackathon)",
    "Director and Creator of 'Limbo' (award-winning shortfilm)",
  ],
  education: {
    college: "BVRIT, Narsapur, Telangana",
    degree: "B.Tech in CSE (Data Science)",
    cgpa: "8.75/10",
    years: "2022 – 2026"
  },
  skills: [
    "Java", "Python", "C", "JavaScript", "React JS", "Node JS", "MongoDB", "CSS", "HTML", "GitHub",
    "Agentic AI", "Generative AI", "Machine Learning", "Data Analysis & Visualization",
    "MySQL", "AWS S3/EC2", "Google Cloud", "Oracle Cloud",
    "Communication", "Problem Solving", "Critical Thinking", "Leadership", "Office Suite"
  ]
};

const styles = {
  body: {
    minHeight: "100vh",
    fontFamily: "Inter,sans-serif",
    background: "linear-gradient(120deg,#f6f1fe 0%,#e0f7fa 100%)",
    color: "#212136",
    margin: "0",
    padding: "0"
  },
  container: {
    maxWidth: "1000px",
    margin: "44px auto",
    padding: "32px 18px",
    background: "rgba(255,255,255,0.92)",
    borderRadius: "30px",
    boxShadow: "0 12px 40px #c3b2ffc7"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  profileImg: {
    width: 142,
    height: 142,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 2px 18px #a0b8ff7a",
    background: "#eceaff"
  },
  name: {
    fontSize: "2.6rem",
    margin: "14px 0 3px 0",
    fontWeight: 800,
    letterSpacing: "-1px"
  },
  details: {
    color: "#59529b",
    fontSize: "1.03rem",
    marginBottom: 7,
    textAlign: "center"
  },
  links: {
    fontSize: "1rem", margin: "4px 0", textAlign: "center"
  },
  link: {
    color: "#0ba5e5",
    fontWeight: 600,
    textDecoration: "none",
    margin: "0 9px"
  },
  resumeBtn: {
    margin: "17px 0 0 0",
    background: "linear-gradient(89deg, #0ba5e5 70%, #8532d0 100%)",
    color: "#fff",
    borderRadius: "17px",
    padding: "10px 32px",
    fontWeight: "800",
    fontSize: "1.07rem",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0 2px 18px #8432d033"
  },
  sectionHeader: {
    margin: "38px 0 17px 0",
    fontSize: "1.35rem",
    fontWeight: 800,
    color: "#7f23d2",
    textAlign: "center",
    textShadow: "0 1px 2px #8eb0ef35"
  },
  boxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(265px,1fr))",
    gap: "28px",
    marginTop: "14px",
    marginBottom: "8px"
  },
  box: {
    background: "linear-gradient(120deg,#fafbff 70%, #e0f7fa 100%)",
    borderRadius: "18px",
    boxShadow: "0 6px 20px #dec3ffb6",
    padding: "21px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  },
  iconImg: {
    width: 54,
    height: 54,
    objectFit: "contain",
    borderRadius: "12px",
    marginBottom: "9px",
    background: "#fff"
  },
  projImg: {
    width: "100%",
    maxWidth: "295px",
    height: "108px",
    objectFit: "cover",
    borderRadius: "11px",
    marginBottom: "10px",
    boxShadow: "0 2px 8px #e1daff50"
  },
  projTitle: {
    fontWeight: 700,
    fontSize: "1.08rem",
    margin: "8px 0 7px 0"
  },
  projDesc: { color: "#7b6eb8", fontSize: "0.98rem" },
  sublists: { textAlign: "left", lineHeight: "1.65", margin: "8px 0" },
  certContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  certLink: {
    color: "#2670ff",
    fontWeight: "700",
    fontSize: ".96rem",
    textDecoration: "underline"
  },
  pillContainer: { marginTop: "3px" },
  skill: {
    display: "inline-block",
    background: "linear-gradient(90deg, #f1ecfa 40%, #d4f1f9 100%)",
    color: "#713bd9",
    padding: "5px 15px",
    borderRadius: "18px",
    margin: "4px 7px 7px 0",
    fontSize: "0.91rem",
    fontWeight: "600"
  }
};

function Portfolio() {
  return (
    <div style={styles.body}>
      <main style={styles.container}>
        {/* Profile Section */}
        <div style={styles.center}>
          <img src={portfolioData.profileImage} alt="profile" style={styles.profileImg} />
          <h1 style={styles.name}>{portfolioData.name}</h1>
          <div style={styles.details}>
            <span>{portfolioData.email}</span> | <span>{portfolioData.phone}</span>
          </div>
          <div style={styles.links}>
            <a href={portfolioData.linkedin} style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={portfolioData.github} style={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <a href={portfolioData.resumeLink} style={styles.resumeBtn} target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>

        {/* Internship */}
        <div>
          <div style={styles.sectionHeader}>Internship Experience</div>
          <div style={styles.boxGrid}>
            {portfolioData.internship.map((i, idx) => (
              <div style={styles.box} key={idx}>
                {/* Internship image */}
                <img src={i.companyImg} alt={i.company} style={styles.iconImg} />
                <div style={{ fontWeight: "700", fontSize: "1.07rem" }}>{i.role}</div>
                <div style={{ color: "#7288bc", margin: "3px 0 7px 0", fontStyle: "italic" }}>
                  {i.company} &mdash; {i.duration}
                </div>
                <div style={styles.sublists}>{i.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div style={styles.sectionHeader}>Projects</div>
          <div style={styles.boxGrid}>
            {portfolioData.projects.map((proj, idx) => (
              <div style={styles.box} key={idx}>
                <img src={proj.image} style={styles.projImg} alt={proj.title} />
                <div style={styles.projTitle}>{proj.title}</div>
                <div style={styles.projDesc}>{proj.desc}</div>
                <a
                  style={styles.resumeBtn}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div style={styles.sectionHeader}>Certifications</div>
          <div style={styles.boxGrid}>
            {portfolioData.certifications.map((cert, idx) => (
              <div style={styles.box} key={idx}>
                <div style={styles.certContainer}>
                  <img src={cert.image} alt={cert.title} style={styles.iconImg} />
                  <div style={{ fontWeight: "600", fontSize: "1.01rem", textAlign: "center", margin: "8px 0 6px 0" }}>
                    {cert.title}
                  </div>
                  {cert.link
                    ? <a href={cert.link} style={styles.certLink} target="_blank" rel="noopener noreferrer">
                        Show Credential
                      </a>
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div style={styles.sectionHeader}>Achievements</div>
          <div style={styles.boxGrid}>
            <div style={styles.box}>
              <ul style={styles.sublists}>
                {portfolioData.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={styles.sectionHeader}>Education</div>
          <div style={styles.boxGrid}>
            <div style={styles.box}>
              <div style={{ fontWeight: "700", fontSize: "1.06rem" }}>{portfolioData.education.degree}</div>
              <div style={{ color: "#6f88b5", margin: "8px 0 7px 0" }}>
                {portfolioData.education.college}
              </div>
              <div>CGPA: {portfolioData.education.cgpa}</div>
              <div>{portfolioData.education.years}</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div style={styles.sectionHeader}>Skills</div>
          <div style={styles.boxGrid}>
            <div style={styles.box}>
              <div style={styles.pillContainer}>
                {portfolioData.skills.map((s, idx) => (
                  <span style={styles.skill} key={idx}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Portfolio;
