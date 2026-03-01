"use client";

// ======================================================
// TX VICE VAULT — NEXT LEVEL HEADER BUILD
// Single file: app/page.tsx
// Includes:
// • Animated Vault Logo
// • 21+ Badge
// • Hover Animations
// • Mobile Hamburger Menu
// ======================================================

import React, { useState, useEffect } from "react";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={styles.main}>
      <style>{animations}</style>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.brandWrap}>
          <VaultLogo />
          <div style={styles.logoText}>TX VICE VAULT</div>
          <div style={styles.badge}>21+</div>
        </div>

        {mobile ? (
          <>
            <div style={styles.hamburger} onClick={() => setOpen(!open)}>
              ☰
            </div>
            {open && (
              <div style={styles.mobileMenu}>
                <a href="#compliance" style={styles.mobileLink}>Compliance</a>
                <a href="#placement" style={styles.mobileLink}>Placement</a>
                <a href="#contact" style={styles.mobileLink}>Contact</a>
              </div>
            )}
          </>
        ) : (
          <nav style={styles.nav}>
            <a href="#compliance" style={styles.navLink}>Compliance</a>
            <a href="#placement" style={styles.navLink}>Placement</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Fort Worth’s Secure 21+ Vape Vending Partner
        </h1>

        <p style={styles.heroText}>
          TX Vice Vault is a Fort Worth-based operator placing and managing
          compliant vape vending machines exclusively inside verified 21+
          venues. No brokers. No out-of-state oversight. Just structured
          compliance and clean revenue.
        </p>

        <a href="#contact" style={styles.primaryBtn}>
          Request A Venue Review
        </a>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Compliance Built Into Every Machine
        </h2>
        <p style={styles.text}>
          Vape vending machines in Texas must operate inside strictly enforced
          21+ venues. TX Vice Vault installs only inside adult-only Fort Worth
          nightlife environments with structured oversight and operational
          compliance.
        </p>
      </section>

      {/* PLACEMENT */}
      <section id="placement" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Strategic Placement. Real Nightlife Presence.
        </h2>
        <ul style={styles.list}>
          <li>Stockyards entertainment venues</li>
          <li>West 7th district bars</li>
          <li>Sundance Square nightlife</li>
          <li>Private 21+ lounges</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Talk To A Local Operator</h2>

        <form style={styles.form}>
          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Venue Name" style={styles.input} />
          <input placeholder="Email Address" style={styles.input} />
          <textarea
            placeholder="Tell us about your venue"
            rows={5}
            style={styles.input}
          />
          <button type="submit" style={styles.primaryBtn}>
            Submit Placement Request
          </button>
        </form>
      </section>
    </main>
  );
}

function VaultLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="#22c55e" strokeWidth="6" fill="#0b0f14" className="vaultGlow" />
      <g className="vaultSpin">
        <line x1="50" y1="20" x2="50" y2="80" stroke="#22c55e" strokeWidth="4" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="#22c55e" strokeWidth="4" />
      </g>
      <circle cx="50" cy="50" r="10" fill="#22c55e" />
    </svg>
  );
}

const animations = `
  .vaultSpin {
    transform-origin: 50% 50%;
    animation: spin 12s linear infinite;
  }
  .vaultGlow {
    animation: pulse 3s ease-in-out infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0% { filter: drop-shadow(0 0 2px #22c55e); }
    50% { filter: drop-shadow(0 0 10px #22c55e); }
    100% { filter: drop-shadow(0 0 2px #22c55e); }
  }
`;

const styles = {
  main: {
    margin: 0,
    background: "#050507",
    color: "#f3f4f6",
    fontFamily: "Inter, sans-serif",
    minHeight: "100vh",
  },
  header: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "rgba(5,5,7,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    zIndex: 1000,
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoText: {
    fontWeight: 700,
    letterSpacing: 1,
  },
  badge: {
    background: "#a855f7",
    fontSize: 11,
    padding: "4px 8px",
    borderRadius: 20,
    fontWeight: 600,
  },
  nav: {
    display: "flex",
    gap: 24,
  },
  navLink: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: 14,
    transition: "all 0.2s ease",
  },
  hamburger: {
    fontSize: 26,
    cursor: "pointer",
  },
  mobileMenu: {
    position: "absolute",
    top: 70,
    right: 30,
    background: "#111217",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  mobileLink: {
    color: "#f3f4f6",
    textDecoration: "none",
  },
  hero: {
    padding: "180px 24px",
    textAlign: "center",
    maxWidth: 1100,
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: 56,
    marginBottom: 24,
  },
  heroText: {
    fontSize: 18,
    color: "#9ca3af",
    maxWidth: 750,
    margin: "0 auto 40px",
    lineHeight: 1.7,
  },
  section: {
    padding: "140px 24px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: 36,
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    color: "#9ca3af",
    lineHeight: 1.7,
  },
  list: {
    color: "#9ca3af",
    lineHeight: 1.8,
    paddingLeft: 20,
  },
  form: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  input: {
    padding: "14px 16px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111217",
    color: "#f3f4f6",
  },
  primaryBtn: {
    background: "linear-gradient(90deg,#22c55e,#a855f7)",
    color: "#000",
    padding: "14px 28px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
  },
};
