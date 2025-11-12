import React from "react";

function Company() {
  const styles = {
    companyPage: {
      minHeight: "calc(100vh - 130px)",
    },
    companyHeader: {
      height: "300px",
      backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backgroundBlendMode: "darken",
      position: "relative",
    },
    overlay: {
      textAlign: "center",
      padding: "0 2rem",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    headerTitle: {
      color: "white",
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    headerText: {
      color: "white",
      fontSize: "1.2rem",
    },
    companyContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 2rem",
    },
    companySection: {
      marginBottom: "5rem",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "2rem",
      position: "relative",
    },
    afterLine: {
      content: "''",
      position: "absolute",
      bottom: "-10px",
      left: 0,
      width: "60px",
      height: "3px",
      backgroundColor: "#8eff00",
    },
    sectionContent: {
      display: "flex",
      gap: "3rem",
    },
    textColumn: {
      flex: 1,
    },
    paragraph: {
      marginBottom: "1.5rem",
      lineHeight: "1.6",
      color: "#555",
    },
    imageColumn: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      minHeight: "300px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px",
    },
    historyImage: {
      backgroundImage: "url('https://images.unsplash.com/photo-1554435493-93422e8d1c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
    },
    globalImage: {
      backgroundImage: "url('https://images.unsplash.com/photo-1529358245382-f0885eba96dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
    },
    innovationImage: {
      backgroundImage: "url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
    },
    altSectionContent: {
      display: "flex",
      gap: "3rem",
      flexDirection: "row-reverse",
    },
  };

  return (
    <div style={styles.companyPage}>
      <div style={styles.companyHeader}>
        <div style={styles.overlay}>
          <h1 style={styles.headerTitle}>About ZAHORANSKY</h1>
          <p style={styles.headerText}>A tradition of excellence since 1902</p>
        </div>
      </div>
      
      <div style={styles.companyContent}>
        <div style={styles.companySection}>
          <h2 style={styles.sectionTitle}>
            Our History
            <div style={styles.afterLine}></div>
          </h2>
          <div style={styles.sectionContent}>
            <div style={styles.textColumn}>
              <p style={styles.paragraph}>ZAHORANSKY has been a leader in manufacturing technology for over a century. Founded in 1902, our company has evolved from a small workshop to a global enterprise with production facilities across three continents.</p>
              <p style={styles.paragraph}>Our commitment to innovation and quality has remained unwavering throughout our journey, allowing us to consistently deliver cutting-edge solutions to our global customer base.</p>
            </div>
            <div style={{...styles.imageColumn, ...styles.historyImage}}></div>
          </div>
        </div>
        
        <div style={styles.companySection}>
          <h2 style={styles.sectionTitle}>
            Global Presence
            <div style={styles.afterLine}></div>
          </h2>
          <div style={styles.altSectionContent}>
            <div style={styles.textColumn}>
              <p style={styles.paragraph}>Today, ZAHORANSKY operates production facilities and sales offices in Germany, Spain, India, China, Japan, Brazil, and the United States, serving customers in over 70 countries worldwide.</p>
              <p style={styles.paragraph}>Our global footprint allows us to provide localized service while maintaining the consistent quality standards that have defined our brand for generations.</p>
            </div>
            <div style={{...styles.imageColumn, ...styles.globalImage}}></div>
          </div>
        </div>
        
        <div style={styles.companySection}>
          <h2 style={styles.sectionTitle}>
            Innovation & Sustainability
            <div style={styles.afterLine}></div>
          </h2>
          <div style={styles.sectionContent}>
            <div style={styles.textColumn}>
              <p style={styles.paragraph}>At ZAHORANSKY, we're committed to sustainable manufacturing practices and continuous innovation. Our R&D team works tirelessly to develop solutions that reduce environmental impact while improving production efficiency.</p>
              <p style={styles.paragraph}>From energy-efficient machines to waste-reducing processes, sustainability is integrated into every aspect of our business operations and product development.</p>
            </div>
            <div style={{...styles.imageColumn, ...styles.innovationImage}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
