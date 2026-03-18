import React from 'react';

// --- Page 1 Component (Hero Section) ---
function PageHero() {
  const email = "nine.night2555@gmail.com";

  // Function to copy email to clipboard
  const copyToClipboard = async (emailToCopy) => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      alert("Email copied to clipboard!"); 
    } catch (err) {
      alert("Failed to copy email. Please try again.");
    }
  };

  // Inline styles for convenience in this example
  const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Gradient blue background
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    navBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      zIndex: 10,
    },
    navTitle: {
      fontSize: '2em',
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
    contentWrapper: {
      width: '60%',
    },
    greeting: {
      fontSize: '1.2em',
      color: '#8a49dd', // Original purple color
      marginBottom: '10px',
    },
    nameHeader: {
      fontSize: '4em',
      fontWeight: '900',
      marginBottom: '15px',
      lineHeight: '1.1',
    },
    highlight: {
      borderBottom: '8px solid rgba(255, 255, 255, 0.7)',
      paddingBottom: '5px',
    },
    description: {
      fontSize: '1.3em',
      marginBottom: '25px',
      opacity: 0.9,
    },
    socialLinks: {
      display: 'flex',
      gap: '20px',
      marginBottom: '35px',
    },
    socialIcon: {
      fontSize: '2.5em',
      color: 'white',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    letsGoButton: {
      padding: '15px 40px',
      fontSize: '1.2em',
      backgroundColor: '#8a49dd', // Original purple color
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(138, 73, 221, 0.4)',
      transition: 'transform 0.2s ease, background-color 0.3s ease',
    },
    heroImageWrapper: {
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroGif: {
      maxWidth: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.heroSection}>
      {/* --- Simple Navigation --- */}
      <div style={styles.navBar}>
        <div style={styles.navTitle}>Jetwit</div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <i className="bi bi-search social-icon fs-1"></i>
          <i className="bi bi-list fs-1 social-icon"></i>
        </div>
      </div>

      {/* --- Main Hero Content --- */}
      <div style={styles.contentWrapper}>
        <div style={styles.greeting}>Hi, My name is:</div>
        <h1 style={styles.nameHeader}>
          <span style={styles.highlight}>Jetwit</span> Srisuwan
        </h1>
        <p style={styles.description}>
          I am studying Computer Science at Phetchabun Rajabhat University.
          Passionate about building modern web applications.
        </p>

        <div style={styles.socialLinks}>
          <a
            href="#"
            className="social-link"
            onClick={(e) => {
              e.preventDefault(); 
              copyToClipboard(email);
            }}
          >
            <i className="bi bi-envelope fs-1" style={styles.socialIcon}></i>
          </a>
          <a href="https://www.facebook.com/share/15WfQEKjWS/" target="_blank" rel="noopener noreferrer" className="ms-4 social-link">
            <i className="bi bi-facebook fs-1" style={styles.socialIcon}></i>
          </a>
          <a href="https://www.instagram.com/_nine_night/" target="_blank" rel="noopener noreferrer" className="ms-4 social-link">
            <i className="bi bi-instagram fs-1" style={styles.socialIcon}></i>
          </a>
        </div>

        <button 
          style={styles.letsGoButton}
          onClick={() => document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth' })}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Let's Go!!!
        </button>
      </div>

      <div style={styles.heroImageWrapper}>
        <img src="/img/gif.gif" alt="Rocket GIF" style={styles.heroGif} />
      </div>
    </div>
  );
}

// --- Page 2 Component (Skills Section) ---
function PageSkills() {
  const skillsData = {
    languagesTools: [
      { name: 'HTML', logo: './img/html_logo.png' },
      { name: 'CSS', logo: './img/css_logo.png' },
      { name: 'JavaScript', logo: './img/javascropt_logo.png' },
      { name: 'Node.js', logo: './img/node_logo.png' },
      { name: 'PHP', logo: './img/php_logo.png' },
      { name: 'Vite', logo: './img/Vite.js.png' },
    ],
    frameworksLibraries: [
      { name: 'React', logo: './img/React.png' },
      { name: 'Laravel', logo: './img/Laravel.png' },
    ],
  };

  const styles = {
    skillsSection: {
      padding: '80px 10%',
      background: '#f8f9fa', // Light gray background
      color: '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    subHeader: {
      fontSize: '1.2em',
      color: '#8a49dd', // Theme purple color
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
    },
    mainHeader: {
      fontSize: '3.5em',
      fontWeight: 'bold',
      color: '#1a1a1a',
      marginBottom: '40px',
    },
    hr: {
      border: '0',
      borderTop: '3px solid #ddd',
      marginBottom: '40px',
    },
    description: {
      fontSize: '1.5em',
      marginBottom: '50px',
      color: '#555',
    },
    bold: {
      fontWeight: 'bold',
      color: '#1a1a1a',
    },
    categoryHeader: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      color: '#1a1a1a',
      marginBottom: '20px',
      marginTop: '40px',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '20px',
    },
    skillItem: {
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease, boxShadow 0.2s ease',
    },
    skillLogo: {
      maxWidth: '70%',
      height: 'auto',
      marginBottom: '10px',
    },
    skillName: {
      fontSize: '1em',
      fontWeight: 'bold',
      color: '#1a1a1a',
    },
  };

  const SkillGrid = ({ skills }) => (
    <div style={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div 
          key={index} 
          style={styles.skillItem}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
          }}
        >
          <img src={skill.logo} alt={skill.name} style={styles.skillLogo} />
          <p style={styles.skillName}>{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div id="skillsSection" style={styles.skillsSection}>
      <h3 style={styles.subHeader}>Expertise</h3>
      <h1 style={styles.mainHeader}>My Skills & Tools</h1>
      <hr style={styles.hr}/>
      <p style={styles.description}>
        I have a strong foundation in modern web development.
        I can create various websites and web applications using a modern stack including:
        <span style={styles.bold}> HTML, CSS, JavaScript,</span> and more.
      </p>

      <div style={styles.categoryHeader}>Languages And Tools</div>
      <SkillGrid skills={skillsData.languagesTools} />

      <div style={styles.categoryHeader}>Libraries And Frameworks</div>
      <SkillGrid skills={skillsData.frameworksLibraries} />
    </div>
  );
}

// --- Page 3 Component (Experience Section) ---
function PageExperience() {
  const projectsData = [
    {
      title: 'Project 1: Censorship System',
      image: './img/port_1.png',
      description: 'ระบบตรวจสอบคำต้องห้าม | Restricted word filtering system for user input.',
    },
    {
      title: 'Project 2: WordPress Functionality',
      image: './img/port_2.png',
      description: 'เขียนฟังก์ชั่น Wordpares | Developing custom functions and plugins for WordPress.',
    },
    {
      title: 'Project 3: User Dashboard',
      image: './img/port_1.png', // Using port_1 again for example
      description: 'ระบบตรวจสอบคำต้องห้าม | Full-stack user profile management system.',
    },
  ];

  const styles = {
    experienceSection: {
      padding: '80px 10%',
      background: '#2c3e50', // Original dark blue/gray color
      color: 'white',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    mainHeader: {
      fontSize: '3.5em',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    hr: {
      border: '0',
      borderTop: '3px solid rgba(255, 255, 255, 0.3)',
      marginBottom: '40px',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.2s ease',
    },
    cardHeader: {
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    cardTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 0,
    },
    cardBody: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    projectImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    cardFooter: {
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      fontSize: '1.1em',
      textAlign: 'center',
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.experienceSection}>
      <h1 style={styles.mainHeader}>Work Experience</h1>
      <hr style={styles.hr}/>

      <div style={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            style={styles.projectCard}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>{project.title}</h2>
            </div>
            <div style={styles.cardBody}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
            </div>
            <div style={styles.cardFooter}>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main App Component ---
function App() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <PageHero />
      <PageSkills />
      <PageExperience />
    </main>
  );
}

export default App;
