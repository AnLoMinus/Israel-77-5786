// פונקציות לשינוי סגנונות התפילות
const styleThemes = {
  default: {
    textColor: "#ffe600",
    textShadow:
      "#0077ff 0 0 3px, #ff2a00 0 0 6px, #aa00ff 0 0 9px, #00c8ff 0 0 12px",
    blessingColor: "#ffd700",
    titleColor: "#ffd700",
    animation: "pulse 2s infinite",
  },
  classic: {
    textColor: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    blessingColor: "#ffd700",
    titleColor: "#ffd700",
    animation: "glow 3s infinite",
  },
  modern: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow:
      "0 0 10px rgba(0, 0, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.3), 0 0 30px rgba(0, 0, 255, 0.2)",
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "rainbow 4s infinite",
  },
  mystical: {
    textColor: "rgba(255, 255, 255, 0.95)",
    textShadow: `
      0 0 5px rgba(138, 43, 226, 0.8),
      0 0 10px rgba(138, 43, 226, 0.6),
      0 0 15px rgba(75, 0, 130, 0.5),
      0 0 20px rgba(138, 43, 226, 0.4),
      0 0 25px rgba(75, 0, 130, 0.3),
      0 0 30px rgba(138, 43, 226, 0.2),
      0 0 35px rgba(75, 0, 130, 0.1)
    `,
    blessingColor: "rgba(255, 255, 255, 0.95)",
    titleColor: "rgba(255, 255, 255, 0.95)",
    animation: "mysticFloat 5s infinite",
  },
  celestial: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(0, 191, 255, 0.6),
      0 0 30px rgba(0, 0, 255, 0.4),
      0 0 40px rgba(255, 255, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "celestialGlow 4s infinite",
  },
  ethereal: {
    textColor: "rgba(255, 255, 255, 0.85)",
    textShadow: `
      0 0 5px rgba(255, 255, 255, 0.7),
      0 0 10px rgba(255, 192, 203, 0.5),
      0 0 15px rgba(255, 255, 255, 0.3),
      0 0 20px rgba(255, 192, 203, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.85)",
    titleColor: "rgba(255, 255, 255, 0.85)",
    animation: "etherealFloat 6s infinite",
  },
  ancient: {
    textColor: "rgba(210, 180, 140, 0.9)",
    textShadow: `
      0 0 5px rgba(210, 180, 140, 0.8),
      0 0 10px rgba(139, 69, 19, 0.6),
      0 0 15px rgba(210, 180, 140, 0.4),
      0 0 20px rgba(139, 69, 19, 0.2)
    `,
    blessingColor: "rgba(210, 180, 140, 0.9)",
    titleColor: "rgba(210, 180, 140, 0.9)",
    animation: "ancientPulse 3s infinite",
  },
  divine: {
    textColor: "rgba(255, 255, 255, 0.95)",
    textShadow: `
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(255, 215, 0, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(255, 215, 0, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.95)",
    titleColor: "rgba(255, 255, 255, 0.95)",
    animation: "divineGlow 5s infinite",
  },
  aurora: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(0, 255, 255, 0.8),
      0 0 20px rgba(0, 255, 0, 0.6),
      0 0 30px rgba(255, 0, 255, 0.4),
      0 0 40px rgba(255, 255, 0, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "auroraGlow 6s infinite",
  },
  crystal: {
    textColor: "rgba(255, 255, 255, 0.95)",
    textShadow: `
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(0, 191, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(0, 191, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.95)",
    titleColor: "rgba(255, 255, 255, 0.95)",
    animation: "crystalShine 4s infinite",
  },
  cosmic: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 255, 0.8),
      0 0 20px rgba(0, 0, 255, 0.6),
      0 0 30px rgba(255, 0, 255, 0.4),
      0 0 40px rgba(0, 0, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "cosmicPulse 5s infinite",
  },
  dawn: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 165, 0, 0.8),
      0 0 20px rgba(255, 69, 0, 0.6),
      0 0 30px rgba(255, 165, 0, 0.4),
      0 0 40px rgba(255, 69, 0, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "dawnGlow 4s infinite",
  },
  dusk: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(75, 0, 130, 0.8),
      0 0 20px rgba(139, 0, 139, 0.6),
      0 0 30px rgba(75, 0, 130, 0.4),
      0 0 40px rgba(139, 0, 139, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "duskFloat 5s infinite",
  },
  emerald: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(0, 255, 0, 0.8),
      0 0 20px rgba(0, 128, 0, 0.6),
      0 0 30px rgba(0, 255, 0, 0.4),
      0 0 40px rgba(0, 128, 0, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "emeraldGlow 4s infinite",
  },
  fire: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 0, 0.8),
      0 0 20px rgba(255, 165, 0, 0.6),
      0 0 30px rgba(255, 0, 0, 0.4),
      0 0 40px rgba(255, 165, 0, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "fireFlicker 3s infinite",
  },
  frost: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(0, 255, 255, 0.8),
      0 0 20px rgba(0, 191, 255, 0.6),
      0 0 30px rgba(0, 255, 255, 0.4),
      0 0 40px rgba(0, 191, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "frostShine 4s infinite",
  },
  galaxy: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 255, 0.8),
      0 0 20px rgba(0, 0, 255, 0.6),
      0 0 30px rgba(255, 0, 255, 0.4),
      0 0 40px rgba(0, 0, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "galaxySpin 6s infinite",
  },
  harmony: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 192, 203, 0.8),
      0 0 20px rgba(0, 255, 255, 0.6),
      0 0 30px rgba(255, 192, 203, 0.4),
      0 0 40px rgba(0, 255, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "harmonyFloat 5s infinite",
  },
  iris: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(75, 0, 130, 0.8),
      0 0 20px rgba(0, 255, 255, 0.6),
      0 0 30px rgba(75, 0, 130, 0.4),
      0 0 40px rgba(0, 255, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "irisGlow 4s infinite",
  },
  jade: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(0, 255, 0, 0.8),
      0 0 20px rgba(0, 191, 255, 0.6),
      0 0 30px rgba(0, 255, 0, 0.4),
      0 0 40px rgba(0, 191, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "jadePulse 5s infinite",
  },
  koi: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 0, 0.8),
      0 0 20px rgba(0, 0, 255, 0.6),
      0 0 30px rgba(255, 0, 0, 0.4),
      0 0 40px rgba(0, 0, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "koiSwim 6s infinite",
  },
  lunar: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(192, 192, 192, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(192, 192, 192, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "lunarGlow 5s infinite",
  },
  mystic: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 255, 0.8),
      0 0 20px rgba(0, 255, 255, 0.6),
      0 0 30px rgba(255, 0, 255, 0.4),
      0 0 40px rgba(0, 255, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "mysticFloat 6s infinite",
  },
  nebula: {
    textColor: "rgba(255, 255, 255, 0.9)",
    textShadow: `
      0 0 10px rgba(255, 0, 255, 0.8),
      0 0 20px rgba(0, 0, 255, 0.6),
      0 0 30px rgba(255, 0, 255, 0.4),
      0 0 40px rgba(0, 0, 255, 0.2)
    `,
    blessingColor: "rgba(255, 255, 255, 0.9)",
    titleColor: "rgba(255, 255, 255, 0.9)",
    animation: "nebulaGlow 5s infinite",
  },
};

// פונקציה לשינוי הסגנון
function changeStyle(theme) {
  const style = styleThemes[theme];
  const prayerTexts = document.querySelectorAll(".prayer-text");
  const prayerBlessings = document.querySelectorAll(".prayer-blessing");
  const prayerTitles = document.querySelectorAll(
    ".prayer-content h3, .prayer-content h4"
  );
  const prayerContainers = document.querySelectorAll(".prayer-container");

  // הוספת אנימציות
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
    @keyframes glow {
      0% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }
      50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
      100% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
    @keyframes mysticFloat {
      0% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-5px) rotate(1deg); }
      50% { transform: translateY(0) rotate(0deg); }
      75% { transform: translateY(5px) rotate(-1deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    @keyframes celestialGlow {
      0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2); }
      50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(0, 191, 255, 0.6), 0 0 60px rgba(0, 0, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2); }
    }
    @keyframes etherealFloat {
      0% { transform: translateY(0) scale(1); opacity: 0.85; }
      25% { transform: translateY(-10px) scale(1.02); opacity: 1; }
      50% { transform: translateY(0) scale(1); opacity: 0.85; }
      75% { transform: translateY(10px) scale(0.98); opacity: 0.7; }
      100% { transform: translateY(0) scale(1); opacity: 0.85; }
    }
    @keyframes ancientPulse {
      0% { transform: scale(1) rotate(0deg); }
      25% { transform: scale(1.01) rotate(0.5deg); }
      50% { transform: scale(1) rotate(0deg); }
      75% { transform: scale(0.99) rotate(-0.5deg); }
      100% { transform: scale(1) rotate(0deg); }
    }
    @keyframes divineGlow {
      0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 215, 0, 0.2); }
      50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 215, 0, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 215, 0, 0.2); }
    }
    @keyframes auroraGlow {
      0% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 0, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(255, 255, 0, 0.2); }
      50% { text-shadow: 0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 255, 0, 0.4), 0 0 80px rgba(0, 255, 255, 0.2); }
      100% { text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 0, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(255, 255, 0, 0.2); }
    }
    @keyframes crystalShine {
      0% { transform: scale(1) rotate(0deg); text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
      50% { transform: scale(1.02) rotate(2deg); text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(0, 191, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 80px rgba(0, 191, 255, 0.2); }
      100% { transform: scale(1) rotate(0deg); text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
    }
    @keyframes cosmicPulse {
      0% { transform: scale(1); text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
      50% { transform: scale(1.05); text-shadow: 0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(0, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4), 0 0 80px rgba(0, 0, 255, 0.2); }
      100% { transform: scale(1); text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
    }
    @keyframes dawnGlow {
      0% { text-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 69, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.4), 0 0 40px rgba(255, 69, 0, 0.2); }
      50% { text-shadow: 0 0 20px rgba(255, 69, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.6), 0 0 60px rgba(255, 69, 0, 0.4), 0 0 80px rgba(255, 165, 0, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 69, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.4), 0 0 40px rgba(255, 69, 0, 0.2); }
    }
    @keyframes duskFloat {
      0% { transform: translateY(0); text-shadow: 0 0 10px rgba(75, 0, 130, 0.8), 0 0 20px rgba(139, 0, 139, 0.6), 0 0 30px rgba(75, 0, 130, 0.4), 0 0 40px rgba(139, 0, 139, 0.2); }
      50% { transform: translateY(-10px); text-shadow: 0 0 20px rgba(139, 0, 139, 0.8), 0 0 40px rgba(75, 0, 130, 0.6), 0 0 60px rgba(139, 0, 139, 0.4), 0 0 80px rgba(75, 0, 130, 0.2); }
      100% { transform: translateY(0); text-shadow: 0 0 10px rgba(75, 0, 130, 0.8), 0 0 20px rgba(139, 0, 139, 0.6), 0 0 30px rgba(75, 0, 130, 0.4), 0 0 40px rgba(139, 0, 139, 0.2); }
    }
    @keyframes emeraldGlow {
      0% { text-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 128, 0, 0.6), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 128, 0, 0.2); }
      50% { text-shadow: 0 0 20px rgba(0, 128, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.6), 0 0 60px rgba(0, 128, 0, 0.4), 0 0 80px rgba(0, 255, 0, 0.2); }
      100% { text-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 128, 0, 0.6), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 128, 0, 0.2); }
    }
    @keyframes fireFlicker {
      0% { text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 165, 0, 0.2); }
      25% { text-shadow: 0 0 15px rgba(255, 165, 0, 0.8), 0 0 25px rgba(255, 0, 0, 0.6), 0 0 35px rgba(255, 165, 0, 0.4), 0 0 45px rgba(255, 0, 0, 0.2); }
      50% { text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4), 0 0 50px rgba(255, 165, 0, 0.2); }
      75% { text-shadow: 0 0 15px rgba(255, 165, 0, 0.8), 0 0 25px rgba(255, 0, 0, 0.6), 0 0 35px rgba(255, 165, 0, 0.4), 0 0 45px rgba(255, 0, 0, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 165, 0, 0.2); }
    }
    @keyframes frostShine {
      0% { transform: scale(1); text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
      50% { transform: scale(1.02); text-shadow: 0 0 20px rgba(0, 191, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 191, 255, 0.4), 0 0 80px rgba(0, 255, 255, 0.2); }
      100% { transform: scale(1); text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
    }
    @keyframes galaxySpin {
      0% { transform: rotate(0deg); text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
      50% { transform: rotate(180deg); text-shadow: 0 0 20px rgba(0, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.6), 0 0 60px rgba(0, 0, 255, 0.4), 0 0 80px rgba(255, 0, 255, 0.2); }
      100% { transform: rotate(360deg); text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
    }
    @keyframes harmonyFloat {
      0% { transform: translateY(0) scale(1); text-shadow: 0 0 10px rgba(255, 192, 203, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(255, 192, 203, 0.4), 0 0 40px rgba(0, 255, 255, 0.2); }
      50% { transform: translateY(-10px) scale(1.02); text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 192, 203, 0.6), 0 0 60px rgba(0, 255, 255, 0.4), 0 0 80px rgba(255, 192, 203, 0.2); }
      100% { transform: translateY(0) scale(1); text-shadow: 0 0 10px rgba(255, 192, 203, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(255, 192, 203, 0.4), 0 0 40px rgba(0, 255, 255, 0.2); }
    }
    @keyframes irisGlow {
      0% { text-shadow: 0 0 10px rgba(75, 0, 130, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(75, 0, 130, 0.4), 0 0 40px rgba(0, 255, 255, 0.2); }
      50% { text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(75, 0, 130, 0.6), 0 0 60px rgba(0, 255, 255, 0.4), 0 0 80px rgba(75, 0, 130, 0.2); }
      100% { text-shadow: 0 0 10px rgba(75, 0, 130, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(75, 0, 130, 0.4), 0 0 40px rgba(0, 255, 255, 0.2); }
    }
    @keyframes jadePulse {
      0% { transform: scale(1); text-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
      50% { transform: scale(1.05); text-shadow: 0 0 20px rgba(0, 191, 255, 0.8), 0 0 40px rgba(0, 255, 0, 0.6), 0 0 60px rgba(0, 191, 255, 0.4), 0 0 80px rgba(0, 255, 0, 0.2); }
      100% { transform: scale(1); text-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 191, 255, 0.6), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 191, 255, 0.2); }
    }
    @keyframes koiSwim {
      0% { transform: translateX(0) rotate(0deg); text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
      50% { transform: translateX(10px) rotate(5deg); text-shadow: 0 0 20px rgba(0, 0, 255, 0.8), 0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(0, 0, 255, 0.4), 0 0 80px rgba(255, 0, 0, 0.2); }
      100% { transform: translateX(0) rotate(0deg); text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
    }
    @keyframes lunarGlow {
      0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(192, 192, 192, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(192, 192, 192, 0.2); }
      50% { text-shadow: 0 0 20px rgba(192, 192, 192, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(192, 192, 192, 0.4), 0 0 80px rgba(255, 255, 255, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(192, 192, 192, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(192, 192, 192, 0.2); }
    }
    @keyframes nebulaGlow {
      0% { text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
      50% { text-shadow: 0 0 20px rgba(0, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.6), 0 0 60px rgba(0, 0, 255, 0.4), 0 0 80px rgba(255, 0, 255, 0.2); }
      100% { text-shadow: 0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 0, 255, 0.2); }
    }
  `;
  document.head.appendChild(styleSheet);

  prayerTexts.forEach((text) => {
    text.style.color = style.textColor;
    text.style.textShadow = style.textShadow;
    text.style.animation = style.animation;
  });

  prayerBlessings.forEach((blessing) => {
    blessing.style.color = style.blessingColor;
    blessing.style.textShadow = style.textShadow;
    blessing.style.animation = style.animation;
  });

  prayerTitles.forEach((title) => {
    title.style.color = style.titleColor;
    title.style.textShadow = style.textShadow;
    title.style.animation = style.animation;
  });

  prayerContainers.forEach((container) => {
    container.style.animation = style.animation;
  });
}

// יצירת תפריט הניווט
function createStyleMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "style-menu";
  menuContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        padding: 15px;
        border-radius: 10px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: fadeIn 0.5s ease-in;
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);

  const title = document.createElement("h3");
  title.textContent = "בחר סגנון";
  title.style.cssText = `
        color: white;
        margin: 0 0 10px 0;
        font-size: 1.2rem;
        animation: pulse 2s infinite;
    `;
  menuContainer.appendChild(title);

  Object.keys(styleThemes).forEach((theme) => {
    const button = document.createElement("button");
    button.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    button.style.cssText = `
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            background: #005cbf;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
            animation: fadeIn 0.5s ease-in;
        `;
    button.onmouseover = () => {
      button.style.background = "#002e7a";
      button.style.transform = "scale(1.05)";
    };
    button.onmouseout = () => {
      button.style.background = "#005cbf";
      button.style.transform = "scale(1)";
    };
    button.onclick = () => changeStyle(theme);
    menuContainer.appendChild(button);
  });

  document.body.appendChild(menuContainer);
}

// הפעלת התפריט כאשר הדף נטען
document.addEventListener("DOMContentLoaded", createStyleMenu);
