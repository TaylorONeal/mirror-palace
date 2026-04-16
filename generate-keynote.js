const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Icon imports
const { FaBrain, FaUsers, FaChartLine, FaEye, FaClipboardList, FaCog,
        FaBookOpen, FaSearch, FaSync, FaGithub, FaCode, FaHeart,
        FaShieldAlt, FaLightbulb, FaCalendarCheck, FaArrowRight,
        FaStar, FaDatabase, FaUserCog, FaPuzzlePiece, FaRocket,
        FaBalanceScale, FaComments, FaFolderOpen, FaPlug,
        FaTelegram, FaMobileAlt, FaCloud, FaNetworkWired, FaRobot } = require("react-icons/fa");

// ─── COLOR PALETTE ───
const BG_DARK    = "0f0f23";
const BG_DARKER  = "1a1a2e";
const BG_CARD    = "16213e";
const TEAL       = "4ecdc4";
const CORAL      = "ff6b6b";
const GOLD       = "ffd93d";
const PURPLE     = "6c5ce7";
const WHITE      = "FFFFFF";
const LIGHT_GRAY = "c8c8d8";
const MID_GRAY   = "9999bb";
const DIM_GRAY   = "777799";

// ─── HELPERS ───
function renderIconSvg(IconComponent, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
}

async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = renderIconSvg(IconComponent, color, size);
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

// Factory functions for reusable styles (avoid pptxgenjs mutation bug)
const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.3 });
const makeCardShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.2 });

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Taylor O'Neal";
  pres.title = "Mirror Palace: Teaching AI Agents How You Work";

  // Pre-render all icons
  const icons = {};
  const iconMap = {
    brain: [FaBrain, TEAL], users: [FaUsers, CORAL], chart: [FaChartLine, GOLD],
    eye: [FaEye, PURPLE], clipboard: [FaClipboardList, TEAL], cog: [FaCog, CORAL],
    book: [FaBookOpen, GOLD], search: [FaSearch, TEAL], sync: [FaSync, PURPLE],
    github: [FaGithub, WHITE], code: [FaCode, TEAL], heart: [FaHeart, CORAL],
    shield: [FaShieldAlt, GOLD], lightbulb: [FaLightbulb, GOLD], calendar: [FaCalendarCheck, TEAL],
    arrow: [FaArrowRight, TEAL], star: [FaStar, GOLD], database: [FaDatabase, TEAL],
    userCog: [FaUserCog, PURPLE], puzzle: [FaPuzzlePiece, CORAL], rocket: [FaRocket, CORAL],
    balance: [FaBalanceScale, TEAL], comments: [FaComments, PURPLE], folder: [FaFolderOpen, GOLD],
    plug: [FaPlug, TEAL],
    telegram: [FaTelegram, TEAL],
    mobile: [FaMobileAlt, CORAL],
    cloud: [FaCloud, PURPLE],
    network: [FaNetworkWired, GOLD],
    robot: [FaRobot, TEAL],
  };
  for (const [key, [Comp, color]] of Object.entries(iconMap)) {
    icons[key] = await iconToBase64Png(Comp, "#" + color);
  }

  // ═══════════════════════════════════════════════════════════
  // SLIDE 1: TITLE
  // ═══════════════════════════════════════════════════════════
  let slide = pres.addSlide();
  slide.background = { color: BG_DARK };

  // Decorative top bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  // Subtle background accent shape
  slide.addShape(pres.shapes.OVAL, { x: 6.5, y: -1, w: 5, h: 5, fill: { color: TEAL, transparency: 92 } });
  slide.addShape(pres.shapes.OVAL, { x: -1.5, y: 3, w: 4, h: 4, fill: { color: PURPLE, transparency: 92 } });

  slide.addImage({ data: icons.brain, x: 4.5, y: 0.6, w: 1, h: 1 });
  slide.addText("MIRROR PALACE", {
    x: 0.5, y: 1.7, w: 9, h: 0.9, fontSize: 44, fontFace: "Arial Black",
    color: WHITE, align: "center", bold: true, charSpacing: 4, margin: 0
  });
  slide.addText("Teaching AI Agents How You Work", {
    x: 0.5, y: 2.6, w: 9, h: 0.6, fontSize: 22, fontFace: "Calibri",
    color: TEAL, align: "center", italic: true, margin: 0
  });

  // Divider line
  slide.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 3.4, w: 3, h: 0.03, fill: { color: TEAL, transparency: 50 } });

  slide.addText("Taylor O'Neal", {
    x: 0.5, y: 3.7, w: 9, h: 0.5, fontSize: 18, fontFace: "Calibri",
    color: LIGHT_GRAY, align: "center", margin: 0
  });
  slide.addText("A Cognitive Framework Toolkit", {
    x: 0.5, y: 4.3, w: 9, h: 0.4, fontSize: 14, fontFace: "Calibri",
    color: DIM_GRAY, align: "center", margin: 0
  });

  // Bottom accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.565, w: 10, h: 0.06, fill: { color: CORAL } });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 2: THE PROBLEM
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("THE PROBLEM", {
    x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });

  slide.addText([
    { text: "AI remembers your projects.", options: { fontSize: 28, color: WHITE, bold: true, breakLine: true } },
    { text: "It doesn't remember your patterns.", options: { fontSize: 28, color: CORAL, bold: true } }
  ], { x: 0.5, y: 1.0, w: 9, h: 1.5, fontFace: "Calibri", margin: 0 });

  // Two comparison cards - shifted up for bottom margin
  // Left card: What AI knows
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.6, w: 4, h: 2.2, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 2.6, w: 4, h: 0.06, fill: { color: MID_GRAY } });
  slide.addImage({ data: icons.clipboard, x: 1.0, y: 2.85, w: 0.35, h: 0.35 });
  slide.addText("PROJECT MEMORY", {
    x: 1.5, y: 2.8, w: 3, h: 0.4, fontSize: 13, fontFace: "Calibri",
    color: MID_GRAY, bold: true, charSpacing: 2, margin: 0
  });
  slide.addText([
    { text: "Tasks & deadlines", options: { breakLine: true } },
    { text: "Calendar events", options: { breakLine: true } },
    { text: "Code repositories", options: { breakLine: true } },
    { text: "Meeting notes", options: {} }
  ], { x: 1.0, y: 3.4, w: 3.5, h: 1.3, fontSize: 14, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0, lineSpacingMultiple: 1.5 });

  // Right card: What AI doesn't know
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 2.6, w: 4, h: 2.2, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 2.6, w: 4, h: 0.06, fill: { color: TEAL } });
  slide.addImage({ data: icons.brain, x: 5.6, y: 2.85, w: 0.35, h: 0.35 });
  slide.addText("SELF-KNOWLEDGE MEMORY", {
    x: 6.1, y: 2.8, w: 3, h: 0.4, fontSize: 13, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 2, margin: 0
  });
  slide.addText([
    { text: "Decision-making patterns", options: { breakLine: true } },
    { text: "Avoidance triggers", options: { breakLine: true } },
    { text: "Energy rhythms", options: { breakLine: true } },
    { text: "Relationship dynamics", options: {} }
  ], { x: 5.6, y: 3.4, w: 3.5, h: 1.3, fontSize: 14, fontFace: "Calibri", color: WHITE, margin: 0, lineSpacingMultiple: 1.5 });

  // Arrow between
  slide.addImage({ data: icons.arrow, x: 4.75, y: 3.45, w: 0.5, h: 0.5 });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 3: THE BET
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: GOLD } });

  slide.addText("THE BET", {
    x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, charSpacing: 6, margin: 0
  });

  // Big quote card
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.2, w: 8.4, h: 3.0, fill: { color: BG_CARD }, shadow: makeShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.2, w: 0.08, h: 3.0, fill: { color: GOLD } });

  slide.addText("An agent that understands HOW you operate can do more in a 3-minute briefing than a task manager does in a year.", {
    x: 1.3, y: 1.4, w: 7.5, h: 2.6, fontSize: 26, fontFace: "Calibri",
    color: WHITE, align: "left", valign: "middle", margin: 0, lineSpacingMultiple: 1.4
  });

  slide.addText("Not more data. Better interpretation.", {
    x: 1.3, y: 4.5, w: 7.5, h: 0.5, fontSize: 18, fontFace: "Calibri",
    color: GOLD, italic: true, margin: 0
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 4: WHAT MIRROR PALACE IS
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("WHAT MIRROR PALACE IS", {
    x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });

  slide.addText("A cognitive framework toolkit for AI agents", {
    x: 0.5, y: 0.85, w: 9, h: 0.5, fontSize: 20, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Four stat cards in a row
  const stats = [
    { num: "36", label: "Frameworks", color: TEAL, icon: icons.book },
    { num: "6", label: "Agent Archetypes", color: CORAL, icon: icons.userCog },
    { num: "10", label: "Life Domains", color: GOLD, icon: icons.chart },
    { num: "3", label: "Core Skills", color: PURPLE, icon: icons.cog },
  ];
  stats.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.1, h: 1.6, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 2.1, h: 0.05, fill: { color: s.color } });
    slide.addImage({ data: s.icon, x: x + 0.75, y: 1.9, w: 0.5, h: 0.5 });
    slide.addText(s.num, { x, y: 2.45, w: 2.1, h: 0.55, fontSize: 36, fontFace: "Arial Black", color: s.color, align: "center", bold: true, margin: 0 });
    slide.addText(s.label, { x, y: 2.9, w: 2.1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, align: "center", margin: 0 });
  });

  // Architecture diagram — simplified 4-layer visual
  const layers = [
    { label: "KNOWLEDGE", desc: "36 frameworks across 15 categories", color: TEAL },
    { label: "STATUS", desc: "10 life domains, people, decisions", color: CORAL },
    { label: "AGENTS", desc: "6 archetypes monitoring your data", color: PURPLE },
    { label: "ACTION", desc: "Scan, Setup, Create skills", color: GOLD },
  ];
  layers.forEach((l, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 3.7, w: 2.1, h: 1.4, fill: { color: l.color, transparency: 85 } });
    slide.addText(l.label, { x, y: 3.8, w: 2.1, h: 0.4, fontSize: 11, fontFace: "Calibri", color: l.color, bold: true, align: "center", charSpacing: 2, margin: 0 });
    slide.addText(l.desc, { x: x + 0.1, y: 4.2, w: 1.9, h: 0.7, fontSize: 10, fontFace: "Calibri", color: LIGHT_GRAY, align: "center", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 5: THE PHILOSOPHY
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE } });

  slide.addText("THE PHILOSOPHY", {
    x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 14, fontFace: "Calibri",
    color: PURPLE, bold: true, charSpacing: 6, margin: 0
  });

  // Pipeline: four stages with arrows
  const stages = [
    { label: "AWARENESS", desc: "Surface patterns. See what's actually happening.", color: TEAL, icon: icons.eye },
    { label: "CALM", desc: "Create space. Respond rather than react.", color: PURPLE, icon: icons.heart },
    { label: "INTEGRITY", desc: "Act in service of both yourself and others.", color: GOLD, icon: icons.balance },
    { label: "FULFILLMENT", desc: "Build a life worth living, not just understood.", color: CORAL, icon: icons.star },
  ];
  stages.forEach((s, i) => {
    const x = 0.3 + i * 2.45;
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.15, h: 2.6, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.3, w: 2.15, h: 0.05, fill: { color: s.color } });
    // Stage number
    slide.addText(String(i + 1), { x, y: 1.5, w: 2.15, h: 0.5, fontSize: 28, fontFace: "Arial Black", color: s.color, align: "center", bold: true, margin: 0 });
    slide.addImage({ data: s.icon, x: x + 0.82, y: 2.05, w: 0.5, h: 0.5 });
    slide.addText(s.label, { x, y: 2.6, w: 2.15, h: 0.35, fontSize: 13, fontFace: "Calibri", color: s.color, bold: true, align: "center", charSpacing: 2, margin: 0 });
    slide.addText(s.desc, { x: x + 0.15, y: 3.0, w: 1.85, h: 0.7, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, align: "center", margin: 0 });
  });

  // Connecting arrows between cards
  for (let i = 0; i < 3; i++) {
    const ax = 2.45 + i * 2.45;
    slide.addText("\u2192", { x: ax, y: 2.2, w: 0.3, h: 0.4, fontSize: 24, color: MID_GRAY, align: "center", margin: 0 });
  }

  slide.addText("The system never prescribes a vision of the good life. It helps you discover your own.", {
    x: 0.5, y: 4.3, w: 9, h: 0.6, fontSize: 14, fontFace: "Calibri",
    color: MID_GRAY, italic: true, align: "center", margin: 0
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 6: THE FRAMEWORK LIBRARY
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("THE FRAMEWORK LIBRARY", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("36 frameworks across 15 categories", {
    x: 0.5, y: 0.75, w: 9, h: 0.4, fontSize: 18, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Category grid - 3 columns x 5 rows
  const categories = [
    { name: "Decision-Making", count: "4", color: TEAL },
    { name: "Behavioral Psych", count: "6", color: CORAL },
    { name: "Cognitive Therapy", count: "3", color: PURPLE },
    { name: "Executive Function", count: "3", color: GOLD },
    { name: "Trauma Recovery", count: "6", color: CORAL },
    { name: "Self-Image", count: "4", color: TEAL },
    { name: "Coaching", count: "5", color: PURPLE },
    { name: "Influence Defense", count: "3", color: GOLD },
    { name: "Somatic", count: "2", color: CORAL },
    { name: "Epistemology", count: "3", color: TEAL },
    { name: "Pattern Detection", count: "2", color: PURPLE },
    { name: "Personality", count: "3", color: GOLD },
    { name: "Continuous Learning", count: "1", color: TEAL },
    { name: "Anti-Patterns", count: "1", color: CORAL },
    { name: "Integrated Practice", count: "1", color: PURPLE },
  ];
  categories.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.15;
    const y = 1.35 + row * 0.78;
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.95, h: 0.62, fill: { color: c.color, transparency: 88 } });
    slide.addText(c.name, { x: x + 0.15, y, w: 2.2, h: 0.62, fontSize: 11, fontFace: "Calibri", color: WHITE, valign: "middle", margin: 0 });
    slide.addText(c.count, { x: x + 2.2, y, w: 0.6, h: 0.62, fontSize: 16, fontFace: "Arial Black", color: c.color, align: "center", valign: "middle", bold: true, margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 7: FRAMEWORK DEEP DIVE
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: CORAL } });

  slide.addText("FRAMEWORK DEEP DIVE", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: CORAL, bold: true, charSpacing: 6, margin: 0
  });

  // Three example frameworks - compact layout
  const examples = [
    { name: "Regret Minimization", cat: "Decision-Making", desc: "Project yourself to age 80. Ask which decision you'd regret NOT making.", color: TEAL },
    { name: "Distortion Detection", cat: "Cognitive Therapy", desc: "Identifies cognitive distortions in real-time: catastrophizing, all-or-nothing, should-statements.", color: CORAL },
    { name: "Four-F Survival Types", cat: "Trauma Recovery", desc: "Maps stress responses to Fight, Flight, Freeze, or Fawn. Explains disproportionate reactions.", color: PURPLE },
  ];
  examples.forEach((e, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.92, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.07, h: 0.92, fill: { color: e.color } });
    slide.addText(e.name, { x: 0.85, y: y + 0.05, w: 4, h: 0.3, fontSize: 15, fontFace: "Calibri", color: e.color, bold: true, margin: 0 });
    slide.addText(e.cat, { x: 5.5, y: y + 0.05, w: 3.5, h: 0.3, fontSize: 10, fontFace: "Calibri", color: MID_GRAY, align: "right", margin: 0 });
    slide.addText(e.desc, { x: 0.85, y: y + 0.4, w: 8.3, h: 0.4, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0 });
  });

  // 4-file structure callout - positioned below cards with clear gap
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.85, fill: { color: TEAL, transparency: 90 } });
  slide.addText("Each framework has 4 files:", {
    x: 0.7, y: 4.45, w: 2.3, h: 0.75, fontSize: 12, fontFace: "Calibri", color: TEAL, bold: true, valign: "middle", margin: 0
  });
  const files = [
    { name: "theory.md", desc: "Deep explanation" },
    { name: "template.md", desc: "Fill-in worksheet" },
    { name: "agent-prompt.md", desc: "Agent snippet" },
    { name: "README.md", desc: "YAML metadata" },
  ];
  files.forEach((f, i) => {
    const x = 3.1 + i * 1.7;
    slide.addText(f.name, { x, y: 4.45, w: 1.5, h: 0.38, fontSize: 11, fontFace: "Consolas", color: WHITE, bold: true, margin: 0 });
    slide.addText(f.desc, { x, y: 4.8, w: 1.5, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MID_GRAY, margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 8: THE STATUS SYSTEM
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: GOLD } });

  slide.addText("THE STATUS SYSTEM", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("10 life domains with Red / Yellow / Green scoring", {
    x: 0.5, y: 0.75, w: 9, h: 0.4, fontSize: 18, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Domain grid - 2 columns x 5 rows
  const domains = [
    { name: "Money & Finances", prefix: "FIN", tracks: "Burn rate, runway, income" },
    { name: "Career & Work", prefix: "CAR", tracks: "Role type, stage, leverage" },
    { name: "Health & Fitness", prefix: "HLT", tracks: "Sleep, exercise, energy" },
    { name: "Fun & Recreation", prefix: "FUN", tracks: "Activity type, recharge" },
    { name: "Environment", prefix: "ENV", tracks: "Home, work, friction level" },
    { name: "Community", prefix: "COM", tracks: "Groups, role, belonging" },
    { name: "Family & Friends", prefix: "FAM", tracks: "Contact, reciprocity" },
    { name: "Partner & Love", prefix: "PAR", tracks: "Communication, growth" },
    { name: "Personal Growth", prefix: "GRO", tracks: "Format, integration level" },
    { name: "Spirituality", prefix: "SPR", tracks: "Practice, frequency, depth" },
  ];
  const domainColors = [CORAL, TEAL, GOLD, PURPLE, TEAL, CORAL, GOLD, PURPLE, TEAL, CORAL];
  domains.forEach((d, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.75;
    const y = 1.35 + row * 0.78;
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 0.63, fill: { color: BG_CARD } });
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 0.63, fill: { color: domainColors[i] } });
    slide.addText(d.prefix, { x: x + 0.2, y, w: 0.6, h: 0.63, fontSize: 11, fontFace: "Consolas", color: domainColors[i], bold: true, valign: "middle", margin: 0 });
    slide.addText(d.name, { x: x + 0.8, y, w: 1.8, h: 0.63, fontSize: 12, fontFace: "Calibri", color: WHITE, valign: "middle", bold: true, margin: 0 });
    slide.addText(d.tracks, { x: x + 2.6, y, w: 1.8, h: 0.63, fontSize: 10, fontFace: "Calibri", color: MID_GRAY, valign: "middle", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 9: PEOPLE & DECISIONS
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE } });

  slide.addText("PEOPLE & DECISIONS", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: PURPLE, bold: true, charSpacing: 6, margin: 0
  });

  // Left: People Records
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.3, h: 3.8, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.3, h: 0.05, fill: { color: CORAL } });
  slide.addImage({ data: icons.users, x: 0.8, y: 1.25, w: 0.35, h: 0.35 });
  slide.addText("PEOPLE RECORDS", {
    x: 1.3, y: 1.2, w: 3, h: 0.45, fontSize: 14, fontFace: "Calibri",
    color: CORAL, bold: true, valign: "middle", margin: 0
  });
  slide.addText("Every relationship tracked with:", {
    x: 0.8, y: 1.75, w: 3.8, h: 0.35, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0
  });
  const peopleFields = [
    { label: "Support %", desc: "How much they support you" },
    { label: "Challenge %", desc: "How much they push you" },
    { label: "Giving %", desc: "What you give back" },
    { label: "Needs Met", desc: "What they provide" },
    { label: "Needs Unmet", desc: "What's missing" },
  ];
  peopleFields.forEach((p, i) => {
    const y = 2.2 + i * 0.48;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y, w: 3.8, h: 0.38, fill: { color: CORAL, transparency: 92 } });
    slide.addText(p.label, { x: 1.0, y, w: 1.4, h: 0.38, fontSize: 11, fontFace: "Calibri", color: CORAL, bold: true, valign: "middle", margin: 0 });
    slide.addText(p.desc, { x: 2.4, y, w: 2.0, h: 0.38, fontSize: 10, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // Right: Decisions Ledger
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.3, h: 3.8, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.3, h: 0.05, fill: { color: GOLD } });
  slide.addImage({ data: icons.balance, x: 5.5, y: 1.25, w: 0.35, h: 0.35 });
  slide.addText("DECISIONS LEDGER", {
    x: 6.0, y: 1.2, w: 3, h: 0.45, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, valign: "middle", margin: 0
  });
  slide.addText("Every decision tracked with:", {
    x: 5.5, y: 1.75, w: 3.8, h: 0.35, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0
  });
  const decisionFields = [
    { label: "Status", desc: "Pending / Decided / Revisiting" },
    { label: "Reversibility", desc: "One-way door or two-way?" },
    { label: "Who's Affected", desc: "Stakeholder awareness" },
    { label: "Domain Links", desc: "Which life areas impacted" },
    { label: "Regret Check", desc: "Future self validation" },
  ];
  decisionFields.forEach((d, i) => {
    const y = 2.2 + i * 0.48;
    slide.addShape(pres.shapes.RECTANGLE, { x: 5.5, y, w: 3.8, h: 0.38, fill: { color: GOLD, transparency: 92 } });
    slide.addText(d.label, { x: 5.7, y, w: 1.4, h: 0.38, fontSize: 11, fontFace: "Calibri", color: GOLD, bold: true, valign: "middle", margin: 0 });
    slide.addText(d.desc, { x: 7.1, y, w: 2.0, h: 0.38, fontSize: 10, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 10: THE 6 AGENT ARCHETYPES
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("THE 6 AGENT ARCHETYPES", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });

  const agents = [
    { name: "The Mirror", voice: "Pattern detection across weeks. Like a letter from a friend who knows you deeply.", color: TEAL },
    { name: "The Briefer", voice: "\"3 things that matter today.\" Sharp chief of staff. State-paced intensity.", color: CORAL },
    { name: "The Tracker", voice: "\"You said X. You did Y.\" Terse, factual, no judgment. Tracks streaks & gaps.", color: GOLD },
    { name: "The Watcher", voice: "Monitors changes across repos, docs, status. Flags drift. Methodical completist.", color: PURPLE },
    { name: "The Strategist", voice: "Goal pipelines. Flags stalls. Asks \"who else does this matter to?\" Strategic, direct.", color: TEAL },
    { name: "The Operator", voice: "Domain-specific ops. Watches signals, drafts responses. Operational, brief.", color: CORAL },
  ];
  agents.forEach((a, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.15;
    const y = 1.05 + row * 2.15;
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.95, h: 1.95, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.95, h: 0.05, fill: { color: a.color } });
    slide.addText(a.name, { x: x + 0.15, y: y + 0.2, w: 2.65, h: 0.35, fontSize: 15, fontFace: "Calibri", color: a.color, bold: true, margin: 0 });
    slide.addText(a.voice, { x: x + 0.15, y: y + 0.6, w: 2.65, h: 1.15, fontSize: 10.5, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0, lineSpacingMultiple: 1.3 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 11: HOW IT LEARNS (THE SCAN SKILL)
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: GOLD } });

  slide.addText("HOW IT LEARNS", {
    x: 0.5, y: 0.3, w: 5, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("The Scan Skill", {
    x: 5, y: 0.3, w: 4.5, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: MID_GRAY, align: "right", margin: 0
  });

  // 4 input modes on left
  const inputs = [
    { label: "Documents", desc: "Journals, notes, plans", icon: icons.folder, color: TEAL },
    { label: "Conversation", desc: "Interactive interview", icon: icons.comments, color: CORAL },
    { label: "Connected Services", desc: "Email, Calendar, Slack", icon: icons.plug, color: GOLD },
    { label: "Repo Analysis", desc: "Existing config files", icon: icons.code, color: PURPLE },
  ];
  inputs.forEach((inp, i) => {
    const y = 1.1 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 3.5, h: 0.8, fill: { color: BG_CARD } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.06, h: 0.8, fill: { color: inp.color } });
    slide.addImage({ data: inp.icon, x: 0.75, y: y + 0.15, w: 0.4, h: 0.4 });
    slide.addText(inp.label, { x: 1.3, y: y + 0.05, w: 2.5, h: 0.35, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, margin: 0 });
    slide.addText(inp.desc, { x: 1.3, y: y + 0.38, w: 2.5, h: 0.3, fontSize: 10, fontFace: "Calibri", color: MID_GRAY, margin: 0 });
  });

  // Center: Scan Engine
  slide.addShape(pres.shapes.RECTANGLE, { x: 4.3, y: 1.8, w: 1.6, h: 1.8, fill: { color: GOLD, transparency: 85 } });
  slide.addImage({ data: icons.search, x: 4.8, y: 2.0, w: 0.6, h: 0.6 });
  slide.addText("SCAN", { x: 4.3, y: 2.65, w: 1.6, h: 0.35, fontSize: 13, fontFace: "Calibri", color: GOLD, bold: true, align: "center", charSpacing: 3, margin: 0 });
  slide.addText("Signal \u2192 Match", { x: 4.3, y: 2.95, w: 1.6, h: 0.3, fontSize: 9, fontFace: "Calibri", color: LIGHT_GRAY, align: "center", margin: 0 });

  // Right: Outputs
  const outputs = [
    { label: "Status domains populated", color: TEAL },
    { label: "People records created", color: CORAL },
    { label: "Personality profiles started", color: PURPLE },
    { label: "Framework recommendations", color: GOLD },
  ];
  outputs.forEach((o, i) => {
    const y = 1.2 + i * 0.95;
    slide.addShape(pres.shapes.RECTANGLE, { x: 6.2, y, w: 3.3, h: 0.7, fill: { color: o.color, transparency: 88 } });
    slide.addText(o.label, { x: 6.4, y, w: 3.0, h: 0.7, fontSize: 12, fontFace: "Calibri", color: WHITE, valign: "middle", margin: 0 });
  });

  // Arrows
  slide.addText("\u2192", { x: 4.0, y: 2.3, w: 0.35, h: 0.4, fontSize: 18, color: GOLD, align: "center", margin: 0 });
  slide.addText("\u2192", { x: 5.85, y: 2.3, w: 0.35, h: 0.4, fontSize: 18, color: GOLD, align: "center", margin: 0 });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 12: CONTINUOUS LEARNING LOOP
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE } });

  slide.addText("THE CONTINUOUS LEARNING LOOP", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: PURPLE, bold: true, charSpacing: 6, margin: 0
  });

  slide.addText("Every interaction is a data point", {
    x: 0.5, y: 0.85, w: 9, h: 0.45, fontSize: 22, fontFace: "Calibri",
    color: WHITE, margin: 0
  });

  // Three-step process: Propose -> Confirm -> Write
  const loopSteps = [
    { num: "1", label: "PROPOSE", desc: "System detects a signal in conversation and proposes a 1-line update to the relevant status domain, people record, or decision.", color: TEAL },
    { num: "2", label: "CONFIRM", desc: "User reviews with a simple yes/no. No forms, no friction. Skip if it doesn't resonate.", color: GOLD },
    { num: "3", label: "WRITE", desc: "System writes the update. Over weeks and months, builds a progressively richer model of who you are.", color: CORAL },
  ];
  loopSteps.forEach((s, i) => {
    const x = 0.4 + i * 3.15;
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.6, w: 2.95, h: 2.5, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y: 1.6, w: 2.95, h: 0.05, fill: { color: s.color } });
    slide.addText(s.num, { x, y: 1.8, w: 2.95, h: 0.5, fontSize: 30, fontFace: "Arial Black", color: s.color, align: "center", bold: true, margin: 0 });
    slide.addText(s.label, { x, y: 2.3, w: 2.95, h: 0.35, fontSize: 14, fontFace: "Calibri", color: s.color, bold: true, align: "center", charSpacing: 3, margin: 0 });
    slide.addText(s.desc, { x: x + 0.2, y: 2.75, w: 2.55, h: 1.15, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
  });

  // Connecting arrows
  for (let i = 0; i < 2; i++) {
    const ax = 3.35 + i * 3.15;
    slide.addText("\u2192", { x: ax, y: 2.5, w: 0.3, h: 0.4, fontSize: 24, color: MID_GRAY, align: "center", margin: 0 });
  }

  slide.addText("Low friction is mandatory. The system proposes. You confirm or skip.", {
    x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: MID_GRAY, italic: true, align: "center", margin: 0
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 13: WHAT MAKES THIS DIFFERENT
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("WHAT MAKES THIS DIFFERENT", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });

  // Comparison table
  const comparisons = [
    { trad: "Detect problems", mp: "Detect problems AND thriving" },
    { trad: "Track what others do for you", mp: "Track what you give AND receive" },
    { trad: "Always analyze", mp: "Read your state, back off when needed" },
    { trad: "Optimize endlessly", mp: "Know when enough is enough" },
    { trad: "Self-focused", mp: "Stakeholder-aware" },
    { trad: "Clarity as the goal", mp: "Clarity in service of a fulfilling life" },
  ];

  // Headers
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.3, h: 0.55, fill: { color: MID_GRAY, transparency: 80 } });
  slide.addText("TRADITIONAL APPROACH", { x: 0.5, y: 1.0, w: 4.3, h: 0.55, fontSize: 11, fontFace: "Calibri", color: MID_GRAY, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.3, h: 0.55, fill: { color: TEAL, transparency: 80 } });
  slide.addText("MIRROR PALACE", { x: 5.2, y: 1.0, w: 4.3, h: 0.55, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });

  comparisons.forEach((c, i) => {
    const y = 1.65 + i * 0.62;
    // Traditional
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.3, h: 0.52, fill: { color: BG_CARD } });
    slide.addText(c.trad, { x: 0.7, y, w: 4.0, h: 0.52, fontSize: 12, fontFace: "Calibri", color: MID_GRAY, valign: "middle", margin: 0 });
    // Mirror Palace
    slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y, w: 4.3, h: 0.52, fill: { color: TEAL, transparency: 90 } });
    slide.addText(c.mp, { x: 5.4, y, w: 4.0, h: 0.52, fontSize: 12, fontFace: "Calibri", color: WHITE, valign: "middle", bold: true, margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 14: THE DAILY PRACTICE
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: CORAL } });

  slide.addText("THE DAILY PRACTICE", {
    x: 0.5, y: 0.3, w: 5, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: CORAL, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("3 minutes / day", {
    x: 5, y: 0.3, w: 4.5, h: 0.5, fontSize: 18, fontFace: "Calibri",
    color: CORAL, align: "right", bold: true, margin: 0
  });

  const practices = [
    { name: "Morning Briefing", desc: "3 things that matter today. Leads with what's working. Adjusts intensity to your energy.", time: "60 sec", color: TEAL, icon: icons.lightbulb },
    { name: "Reflection", desc: "Quick evening review. What happened vs what was planned? What did you learn?", time: "45 sec", color: PURPLE, icon: icons.eye },
    { name: "Check-in", desc: "How are you actually doing? State read before analysis. Naming is sometimes enough.", time: "30 sec", color: GOLD, icon: icons.heart },
    { name: "Framework of the Day", desc: "One framework surfaced based on current patterns. Read the theory, apply the template.", time: "45 sec", color: CORAL, icon: icons.book },
  ];
  practices.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.75;
    const y = 1.1 + row * 2.05;
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.85, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 1.85, fill: { color: p.color } });
    slide.addImage({ data: p.icon, x: x + 0.25, y: y + 0.2, w: 0.4, h: 0.4 });
    slide.addText(p.name, { x: x + 0.8, y: y + 0.15, w: 2.5, h: 0.4, fontSize: 15, fontFace: "Calibri", color: p.color, bold: true, valign: "middle", margin: 0 });
    slide.addText(p.time, { x: x + 3.5, y: y + 0.15, w: 0.8, h: 0.4, fontSize: 11, fontFace: "Calibri", color: MID_GRAY, align: "right", valign: "middle", margin: 0 });
    slide.addText(p.desc, { x: x + 0.25, y: y + 0.7, w: 4.0, h: 0.95, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0, lineSpacingMultiple: 1.3 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 15: INTEGRATION
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("INTEGRATION", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("Works with Claude Code and OpenClaw", {
    x: 0.5, y: 0.75, w: 9, h: 0.4, fontSize: 18, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Your Repo box (left)
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 4.3, h: 3.3, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 4.3, h: 0.05, fill: { color: CORAL } });
  slide.addText("YOUR REPO", { x: 0.7, y: 1.7, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Calibri", color: CORAL, bold: true, margin: 0 });
  const repoItems = [
    { file: "AGENTS.md", desc: "references Mirror Palace" },
    { file: "CLAUDE.md", desc: "continuous learning hooks" },
    { file: "agents/", desc: "deployed archetypes" },
    { file: "memory/", desc: "agent memory store" },
  ];
  repoItems.forEach((item, i) => {
    const y = 2.3 + i * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: 3.9, h: 0.42, fill: { color: CORAL, transparency: 92 } });
    slide.addText([
      { text: item.file, options: { bold: true, color: WHITE, fontSize: 12 } },
      { text: "  " + item.desc, options: { color: LIGHT_GRAY, fontSize: 10 } }
    ], { x: 0.9, y, w: 3.6, h: 0.42, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // Bidirectional arrow - centered in the gap between cards (4.8 to 5.2)
  slide.addText("\u2194", { x: 4.65, y: 2.5, w: 0.7, h: 0.6, fontSize: 28, color: TEAL, align: "center", valign: "middle", margin: 0 });
  slide.addText("scan", { x: 4.65, y: 3.1, w: 0.7, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MID_GRAY, align: "center", margin: 0 });
  slide.addText("setup", { x: 4.65, y: 3.3, w: 0.7, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MID_GRAY, align: "center", margin: 0 });

  // Mirror Palace box (right)
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.5, w: 4.3, h: 3.3, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.5, w: 4.3, h: 0.05, fill: { color: TEAL } });
  slide.addText("MIRROR PALACE", { x: 5.4, y: 1.7, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Calibri", color: TEAL, bold: true, margin: 0 });
  const mpItems = [
    { file: "frameworks/", desc: "knowledge layer" },
    { file: "status/", desc: "your life data" },
    { file: "agents/", desc: "archetypes" },
    { file: "skills/", desc: "scan + setup + create" },
  ];
  mpItems.forEach((item, i) => {
    const y = 2.3 + i * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, { x: 5.4, y, w: 3.9, h: 0.42, fill: { color: TEAL, transparency: 92 } });
    slide.addText([
      { text: item.file, options: { bold: true, color: WHITE, fontSize: 12 } },
      { text: "  " + item.desc, options: { color: LIGHT_GRAY, fontSize: 10 } }
    ], { x: 5.6, y, w: 3.6, h: 0.42, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 16: OPENCLAW + TELEGRAM
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addText("HOW YOU ACTUALLY USE IT", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("OpenClaw + Telegram", {
    x: 0.5, y: 0.75, w: 9, h: 0.45, fontSize: 20, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Left side: OpenClaw runtime description
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.4, w: 4.3, h: 3.5, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.4, w: 4.3, h: 0.05, fill: { color: TEAL } });
  slide.addImage({ data: icons.robot, x: 0.8, y: 1.65, w: 0.35, h: 0.35 });
  slide.addText("OPENCLAW", {
    x: 1.3, y: 1.6, w: 3, h: 0.45, fontSize: 15, fontFace: "Calibri",
    color: TEAL, bold: true, valign: "middle", margin: 0
  });
  slide.addText("Open-source agent runtime", {
    x: 0.8, y: 2.15, w: 3.8, h: 0.3, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0
  });
  const oclawFeatures = [
    { label: "Agent runtime", desc: "Runs your Mirror Palace agents locally or in the cloud" },
    { label: "Any LLM backend", desc: "Claude, GPT, local models" },
    { label: "Multi-channel", desc: "Telegram, Discord, web, CLI" },
    { label: "Open source", desc: "You own the infrastructure" },
  ];
  oclawFeatures.forEach((f, i) => {
    const y = 2.6 + i * 0.52;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y, w: 3.8, h: 0.42, fill: { color: TEAL, transparency: 92 } });
    slide.addText(f.label, { x: 1.0, y, w: 1.3, h: 0.42, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, valign: "middle", margin: 0 });
    slide.addText(f.desc, { x: 2.3, y, w: 2.2, h: 0.42, fontSize: 10, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // Right side: Telegram conversational loop
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.4, w: 4.3, h: 3.5, fill: { color: BG_CARD }, shadow: makeCardShadow() });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.4, w: 4.3, h: 0.05, fill: { color: CORAL } });
  slide.addImage({ data: icons.telegram, x: 5.5, y: 1.65, w: 0.35, h: 0.35 });
  slide.addText("TELEGRAM", {
    x: 6.0, y: 1.6, w: 3, h: 0.45, fontSize: 15, fontFace: "Calibri",
    color: CORAL, bold: true, valign: "middle", margin: 0
  });
  slide.addText("Full conversational loop", {
    x: 5.5, y: 2.15, w: 3.8, h: 0.3, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0
  });
  const tgFeatures = [
    { label: "Agents push to you", desc: "Morning briefings, pattern alerts, drift warnings" },
    { label: "You talk back", desc: "Run frameworks, update status, ask questions" },
    { label: "Full conversations", desc: "Not just commands. Real dialogue with your agents." },
    { label: "From your phone", desc: "No app install. Works anywhere Telegram does." },
  ];
  tgFeatures.forEach((f, i) => {
    const y = 2.6 + i * 0.52;
    slide.addShape(pres.shapes.RECTANGLE, { x: 5.5, y, w: 3.8, h: 0.42, fill: { color: CORAL, transparency: 92 } });
    slide.addText(f.label, { x: 5.7, y, w: 1.5, h: 0.42, fontSize: 11, fontFace: "Calibri", color: CORAL, bold: true, valign: "middle", margin: 0 });
    slide.addText(f.desc, { x: 7.2, y, w: 2.0, h: 0.42, fontSize: 10, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 17: THE AGENT ECOSYSTEM
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE } });

  slide.addText("THE AGENT ECOSYSTEM", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: PURPLE, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText("Mirror Palace as a knowledge layer for any agent runtime", {
    x: 0.5, y: 0.75, w: 9, h: 0.4, fontSize: 18, fontFace: "Calibri",
    color: LIGHT_GRAY, margin: 0
  });

  // Three platform cards
  const platforms = [
    {
      name: "Claude Code",
      status: "LIVE",
      statusColor: TEAL,
      desc: "Direct integration via CLAUDE.md and AGENTS.md. Agents read frameworks, update status, and apply patterns in every session.",
      color: TEAL
    },
    {
      name: "OpenClaw",
      status: "LIVE",
      statusColor: TEAL,
      desc: "Open-source agent runtime with Telegram, Discord, and web channels. Full conversational loop with your Mirror Palace agents from your phone.",
      color: CORAL
    },
    {
      name: "Claude Managed Agents",
      status: "APRIL 2026",
      statusColor: GOLD,
      desc: "Anthropic's new managed infrastructure for autonomous agents. Persistent state, sandboxed execution, long-running tasks. Mirror Palace provides the self-knowledge layer.",
      color: PURPLE
    },
  ];
  platforms.forEach((p, i) => {
    const y = 1.4 + i * 1.3;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 1.1, fill: { color: BG_CARD }, shadow: makeCardShadow() });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.07, h: 1.1, fill: { color: p.color } });
    slide.addText(p.name, { x: 0.85, y: y + 0.1, w: 3, h: 0.35, fontSize: 16, fontFace: "Calibri", color: p.color, bold: true, margin: 0 });
    // Status badge
    slide.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: y + 0.12, w: 1.4, h: 0.3, fill: { color: p.statusColor, transparency: 80 } });
    slide.addText(p.status, { x: 7.8, y: y + 0.12, w: 1.4, h: 0.3, fontSize: 9, fontFace: "Calibri", color: p.statusColor, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });
    slide.addText(p.desc, { x: 0.85, y: y + 0.5, w: 8.3, h: 0.5, fontSize: 11, fontFace: "Calibri", color: LIGHT_GRAY, margin: 0, lineSpacingMultiple: 1.3 });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.85, w: 9, h: 0.4, fill: { color: PURPLE, transparency: 90 } });
  slide.addText("The pattern: frameworks are the knowledge layer. The runtime is swappable.", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4, fontSize: 12, fontFace: "Calibri",
    color: PURPLE, bold: true, valign: "middle", margin: 0
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 18: WHERE THIS IS GOING
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: GOLD } });

  slide.addText("WHERE THIS IS GOING", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, charSpacing: 6, margin: 0
  });

  // Big thesis
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9, h: 1.0, fill: { color: GOLD, transparency: 90 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 0.07, h: 1.0, fill: { color: GOLD } });
  slide.addText("Agent platforms are converging on persistent, stateful agents. The missing piece isn't better tooling. It's better understanding of the human in the loop.", {
    x: 0.85, y: 1.0, w: 8.4, h: 1.0, fontSize: 16, fontFace: "Calibri",
    color: WHITE, valign: "middle", margin: 0, lineSpacingMultiple: 1.3
  });

  // Timeline / progression
  const timeline = [
    {
      era: "NOW",
      items: "Claude Code integration, OpenClaw + Telegram, continuous learning protocol active",
      color: TEAL
    },
    {
      era: "EMERGING",
      items: "Claude Managed Agents with persistent Mirror Palace state, long-running agent threads that remember your patterns across sessions",
      color: PURPLE
    },
    {
      era: "NEXT",
      items: "Any agent runtime that supports structured memory can load Mirror Palace. Your self-knowledge travels with you across platforms.",
      color: GOLD
    },
  ];
  timeline.forEach((t, i) => {
    const y = 2.3 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.8, fill: { color: BG_CARD } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.06, h: 0.8, fill: { color: t.color } });
    // Era badge
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: y + 0.15, w: 1.2, h: 0.3, fill: { color: t.color, transparency: 80 } });
    slide.addText(t.era, { x: 0.8, y: y + 0.15, w: 1.2, h: 0.3, fontSize: 11, fontFace: "Calibri", color: t.color, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0 });
    slide.addText(t.items, { x: 2.2, y: y + 0.05, w: 7.0, h: 0.7, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // Closing line
  slide.addText("Whoever owns the self-knowledge layer wins the agent UX war.", {
    x: 0.5, y: 5.0, w: 9, h: 0.4, fontSize: 14, fontFace: "Calibri",
    color: GOLD, italic: true, align: "center", margin: 0
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 19: THE DEEPER POINT
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARKER };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: GOLD } });

  slide.addText("THE DEEPER POINT", {
    x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: GOLD, bold: true, charSpacing: 6, margin: 0
  });

  // Big quote
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.9, w: 9, h: 0.8, fill: { color: GOLD, transparency: 90 } });
  slide.addText("It knows when \"I'll start Monday\" means \"I'm avoiding this.\"", {
    x: 0.7, y: 0.9, w: 8.6, h: 0.8, fontSize: 20, fontFace: "Calibri",
    color: WHITE, bold: true, valign: "middle", margin: 0
  });

  // Five insights
  const insights = [
    { text: "When your calendar fills up, it's not ambition. It's over-commitment.", color: TEAL },
    { text: "When you go quiet in relationships, it's a pattern, not a preference.", color: CORAL },
    { text: "When you compare yourself to others, your self-worth is untethered from your actual work.", color: PURPLE },
    { text: "When you start something new with intense energy, the follow-through is the real test.", color: GOLD },
    { text: "That knowledge, structured and continuously updated, turns an assistant into a thinking partner.", color: TEAL },
  ];
  insights.forEach((ins, i) => {
    const y = 1.9 + i * 0.68;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.55, fill: { color: BG_CARD } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.06, h: 0.55, fill: { color: ins.color } });
    slide.addText(ins.text, { x: 0.8, y, w: 8.5, h: 0.55, fontSize: 12, fontFace: "Calibri", color: LIGHT_GRAY, valign: "middle", margin: 0 });
  });

  // ═══════════════════════════════════════════════════════════
  // SLIDE 20: CALL TO ACTION
  // ═══════════════════════════════════════════════════════════
  slide = pres.addSlide();
  slide.background = { color: BG_DARK };

  // Decorative elements
  slide.addShape(pres.shapes.OVAL, { x: 7, y: -0.5, w: 4.5, h: 4.5, fill: { color: TEAL, transparency: 93 } });
  slide.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.5, w: 4, h: 4, fill: { color: PURPLE, transparency: 93 } });

  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  slide.addImage({ data: icons.rocket, x: 4.5, y: 0.6, w: 0.8, h: 0.8 });

  slide.addText("WHAT'S NEXT", {
    x: 0.5, y: 1.5, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, align: "center", charSpacing: 6, margin: 0
  });

  slide.addText("Build agents that actually understand\nthe humans they serve.", {
    x: 0.5, y: 2.1, w: 9, h: 1.0, fontSize: 26, fontFace: "Calibri",
    color: WHITE, align: "center", bold: true, margin: 0, lineSpacingMultiple: 1.3
  });

  // Open source badge
  slide.addShape(pres.shapes.RECTANGLE, { x: 3.0, y: 3.4, w: 4.0, h: 0.65, fill: { color: TEAL, transparency: 85 } });
  slide.addText("Open Source  \u00b7  MIT Licensed  \u00b7  GitHub", {
    x: 3.0, y: 3.4, w: 4.0, h: 0.65, fontSize: 14, fontFace: "Calibri",
    color: TEAL, bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("github.com/TaylorONeal/mirror-palace", {
    x: 0.5, y: 4.3, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri",
    color: LIGHT_GRAY, align: "center", margin: 0
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.565, w: 10, h: 0.06, fill: { color: CORAL } });

  // ═══════════════════════════════════════════════════════════
  // SAVE
  // ═══════════════════════════════════════════════════════════
  const outputPath = "/sessions/vigilant-vibrant-keller/mnt/mirror-palace/mirror-palace-keynote.pptx";
  await pres.writeFile({ fileName: outputPath });
  console.log("Presentation saved to:", outputPath);
}

main().catch(err => { console.error(err); process.exit(1); });
