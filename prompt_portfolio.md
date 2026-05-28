# 🚀 ANTIGRAVITY AI — PORTFOLIO WEBSITE MASTER PROMPT
## Ultra-Premium Personal Portfolio | Full Build Specification

---

## ════════════════════════════════════════════
## SECTION 1: IDENTITY & PERSONAL DETAILS
## ════════════════════════════════════════════

Build a world-class, visually iconic personal portfolio website for a tech student and aspiring developer. The website must reflect intelligence, creativity, and ambition. The overall feel should be like a premium tech brand — not a plain resume page.

**Personal Section Requirements:**
- Display my full name prominently as the hero headline using a large, bold display font
- Show my profile photo in a creative frame — use a hexagonal or circular glowing border with animated neon ring effect
- Add a short tagline beneath my name: "Turning Ideas Into Digital Realities 🚀"
- Add a subtitle that types itself out character by character (typewriter animation) showing rotating roles:
  - "Full Stack Developer"
  - "AI Enthusiast"
  - "Problem Solver"
  - "Tech Innovator"
- Include a location badge: "📍 Salem, Tamil Nadu, India"
- Add social links row with animated hover icons: GitHub, LinkedIn, Instagram, Email
- Add a glowing "Download Resume" button with a subtle pulse animation
- Add a "Hire Me" CTA button with a shimmering gradient border

---

## ════════════════════════════════════════════
## SECTION 2: COLOR THEME & VISUAL IDENTITY
## ════════════════════════════════════════════

**Primary Color Palette — DARK FUTURISTIC NEON:**
```
Background Base:        #050A14  (Deep space black-blue)
Secondary Background:   #0D1B2A  (Dark navy)
Card Background:        #0F2235  (Midnight blue)
Primary Accent:         #00F5FF  (Cyan neon — electric)
Secondary Accent:       #7B2FBE  (Deep violet-purple)
Tertiary Accent:        #FF6B35  (Warm orange — energy)
Text Primary:           #E8F4F8  (Soft white)
Text Secondary:         #A0B4C8  (Muted blue-grey)
Glow Color:             rgba(0, 245, 255, 0.3)
Border Color:           rgba(0, 245, 255, 0.15)
```

**Typography System:**
- Display / Hero Font: "Orbitron" (Google Fonts) — futuristic, bold, techy
- Heading Font: "Exo 2" — modern, clean, readable
- Body Font: "DM Sans" — elegant, professional
- Code / Terminal Font: "JetBrains Mono" — developer aesthetic
- Use font sizes: Hero 72px → Section Titles 42px → Cards 20px → Body 16px

**Design Language:**
- Dark mode exclusively — space-grade dark backgrounds
- Glassmorphism cards: frosted glass effect with backdrop-filter: blur(20px)
- Neon glow effects on all hover states and active elements
- Subtle animated grid-line background (CSS grid pattern with opacity 0.04)
- Particle starfield background animation in the hero section
- Gradient meshes in section backgrounds for depth
- All borders use rgba(0, 245, 255, 0.15) — subtle cyan glow borders
- Box shadows: 0 0 30px rgba(0, 245, 255, 0.2) on cards
- Consistent 16px border-radius on all cards and components

---

## ════════════════════════════════════════════
## SECTION 3: LAYOUT & NAVIGATION
## ════════════════════════════════════════════

**Navigation Bar:**
- Sticky navbar with glassmorphism blur effect on scroll
- Logo: My initials in a glowing box (like a tech brand mark)
- Navigation links: Home | About | Skills | Education | Workshops | Certifications | Projects | Contact
- Active link highlighted with neon cyan underline animation
- Mobile hamburger menu with smooth slide-in animation
- Add a "Status" badge in navbar: 🟢 Open to Opportunities

**Page Layout Style:**
- Full-screen section layout — each section fills 100vh (viewport height)
- Smooth scroll between sections using CSS scroll-snap or JavaScript smooth scroll
- Animated section transitions: sections fade + slide up when entering viewport
- Use IntersectionObserver API to trigger animations as user scrolls
- Fixed floating navigation dots on the right side (vertical dot indicators for each section)
- Scroll progress bar at the very top of the page (thin neon cyan line)

---

## ════════════════════════════════════════════
## SECTION 4: HERO SECTION (LANDING)
## ════════════════════════════════════════════

**Hero Section Full Specification:**
- Full viewport height, centered content layout
- Animated starfield / floating particles background (canvas or CSS)
- My photo on the RIGHT side — large, circular, with animated neon ring orbiting around it
- My name and tagline on the LEFT side — large, bold, glowing
- Typewriter animation cycling through my roles (see Section 1)
- Below name: a short 2-line bio — "Computer Science Student | Passionate about building meaningful tech solutions that solve real-world problems."
- 3 animated stat counters in a row below the bio:
  - 🏆 [N] Certifications
  - 🛠️ [N] Projects Built
  - 📚 [N] Workshops Attended
- CTA Buttons row: "View My Work" (primary) + "Download CV" (secondary outline)
- Animated floating icons in background: </>, 🤖, ⚡, 💡, 🔗 (subtle, slow rotation)
- Scroll indicator at bottom: animated bouncing arrow + "Scroll to Explore" text

---

## ════════════════════════════════════════════
## SECTION 5: ABOUT ME SECTION
## ════════════════════════════════════════════

**About Section Layout — Split Design:**

LEFT PANEL:
- A stylized photo or avatar with geometric frame (hexagon shape)
- Below photo: a floating badge card showing:
  - Current Status: 🎓 Currently Studying
  - Institution: [College Name]
  - Degree: B.E. / B.Tech Computer Science Engineering
  - Year: [Current Year/Semester]
  - CGPA/Grade: [Your Grade]

RIGHT PANEL:
- Section title: "Who Am I?"
- 3-4 paragraph bio with highlighted keyword spans (important words in cyan color)
- Example content:
  "I am a passionate Computer Science student from Salem, Tamil Nadu, currently pursuing my degree in [College Name]. I have a deep love for technology, programming, and building digital solutions that create real-world impact."
  "My journey in tech started with curiosity and grew into a skill set spanning web development, machine learning, and software engineering. I am constantly learning and exploring new technologies."
  "Beyond coding, I enjoy attending workshops, earning certifications, and collaborating on projects that challenge my thinking and push my boundaries."
- 4 personality trait cards in a 2x2 grid below bio:
  - 🎯 Goal-Driven
  - 🤝 Team Player
  - 🔍 Detail-Oriented
  - 🚀 Fast Learner

**Currently Learning / Studying Section (Inside About):**
- Title: "🔥 Currently Learning"
- Display 4–6 "learning cards" in a horizontal scroll strip:
  - Each card: Technology icon + Name + progress bar showing proficiency %
  - Example cards:
    - ⚛️ React.js — 65% Progress
    - 🤖 Machine Learning — 55% Progress
    - ☁️ Cloud Computing (AWS) — 40% Progress
    - 🐍 Python Advanced — 70% Progress
    - 🗄️ Database Design — 60% Progress
    - 🔐 Cybersecurity Basics — 35% Progress
  - Progress bars animated on scroll with glowing neon fill

---

## ════════════════════════════════════════════
## SECTION 6: SKILLS SECTION — VISUAL SHOWCASE
## ════════════════════════════════════════════

**Skills Section — THREE VIEW MODES (add toggle buttons):**

**Default View: Skill Constellation / Icon Grid**
- Large centered grid of skill badges
- Each skill: circular badge with icon + name label + glow on hover
- Badges animate in staggered (appear one by one) when section enters viewport
- Hover effect: badge scales up 1.2x + neon glow pulse

**Skill Categories (Tab Filter):**
Add filter tabs: All | Frontend | Backend | Languages | Tools & Platforms | AI & Data

```
LANGUAGES:
- Python | JavaScript | Java | C | C++ | HTML5 | CSS3 | SQL

FRONTEND:
- React.js | HTML5 | CSS3 | Bootstrap | Tailwind CSS | Figma

BACKEND:
- Node.js | Express.js | REST APIs | Django (Basics) | PHP (Basics)

DATABASE:
- MySQL | MongoDB | Firebase | PostgreSQL

TOOLS & PLATFORMS:
- Git & GitHub | VS Code | Postman | Linux | Docker (Basics) | Figma | Canva

AI & DATA:
- Python ML | TensorFlow (Basics) | Pandas | NumPy | Jupyter Notebook | OpenAI API
```

**Skill Proficiency Bars View (secondary view):**
- Each skill shown as a horizontal bar with animated fill on scroll
- Color gradient: Cyan → Purple based on level
- Label: Skill name on left, percentage on right (e.g., "Python — 80%")

**Skill Radar Chart View (tertiary view):**
- A hexagonal radar/spider chart showing 6 main skill domains
- Animated drawing of the chart on scroll entry
- Domains: Programming | Web Dev | Database | Tools | AI/ML | Soft Skills

---

## ════════════════════════════════════════════
## SECTION 7: EDUCATION SECTION
## ════════════════════════════════════════════

**Education — Vertical Timeline Design:**
- Elegant vertical line in center with glowing neon nodes
- Each education entry is a card that slides in alternately left/right
- Timeline entries:

ENTRY 1 — B.E. / B.Tech Computer Science Engineering
- Institution: [Your College Name], Salem
- Duration: [Start Year] – Present (Expected [Graduation Year])
- Status badge: 🟢 Currently Pursuing
- CGPA: [Your CGPA]
- Key subjects: Data Structures, OOP, DBMS, Computer Networks, OS, Machine Learning

ENTRY 2 — Higher Secondary (12th Grade)
- School: [School Name], Salem
- Year: [Year of Completion]
- Percentage/Grade: [Your Score]
- Stream: Computer Science / Math group

ENTRY 3 — Secondary School (10th Grade)
- School: [School Name], Salem
- Year: [Year of Completion]
- Percentage/Grade: [Your Score]

Each timeline card:
- Glassmorphism card style (frosted glass)
- Institution logo placeholder (circular)
- Glow icon for degree type
- "View Details" expand button showing subjects studied

---

## ════════════════════════════════════════════
## SECTION 8: WORKSHOPS & EVENTS SECTION
## ════════════════════════════════════════════

**Workshops Section — Horizontal Card Slider (Swipeable):**
- Section title: "🎓 Workshops & Events Attended"
- Subtitle: "Continuously growing through hands-on learning experiences"

Display workshop cards in a Swiper.js or custom CSS horizontal scroll carousel with:
- Arrow navigation buttons (left/right)
- Dot pagination indicators below
- Autoplay with pause on hover

Each Workshop Card:
- Glowing card with gradient border on hover
- Workshop category icon (Web Dev 🌐 / AI 🤖 / Hardware ⚙️ / Design 🎨 / Security 🔐)
- Workshop Name (large, bold)
- Organized by: [Institution/Company Name]
- Date: [Month, Year]
- Duration: [X days / X hours]
- Mode badge: 🏢 Offline / 💻 Online
- Short description (2 lines about what was learned)
- "Certificate Earned" badge (if applicable) — glowing gold badge

Sample Workshop Entries (replace with your real ones):
```
1. Full Stack Web Development Workshop
   Organized by: [College/Tech Community]
   Date: [Month Year] | Duration: 2 Days | Mode: Offline
   Topics: HTML, CSS, JS, React, Node.js basics
   ✅ Certificate Earned

2. Machine Learning & AI Workshop
   Organized by: [Institution]
   Date: [Month Year] | Duration: 3 Days | Mode: Online
   Topics: ML algorithms, Python, Scikit-learn, Projects
   ✅ Certificate Earned

3. Cloud Computing & AWS Fundamentals
   Organized by: [Platform/College]
   Date: [Month Year] | Duration: 1 Day | Mode: Online
   Topics: EC2, S3, Lambda, Cloud basics
   ✅ Certificate Earned

4. UI/UX Design & Figma Workshop
   Organized by: [Organization]
   Date: [Month Year] | Duration: 1 Day | Mode: Offline
   Topics: Design thinking, Wireframing, Figma tools

5. Cybersecurity Awareness Workshop
   Organized by: [Institution]
   Date: [Month Year] | Duration: Half Day | Mode: Offline
   Topics: Ethical hacking intro, Network security basics

6. Hackathon Participation — [Hackathon Name]
   Organized by: [College/Company]
   Date: [Month Year] | Duration: 24 Hours | Mode: Offline
   Achievement: [Rank / Participated / Finalist]
```

---

## ════════════════════════════════════════════
## SECTION 9: CERTIFICATIONS SECTION
## ════════════════════════════════════════════

**Certifications — 3D Flip Card Gallery:**
- Section title: "🏆 My Certifications"
- Subtitle: "Verified credentials that validate my skills"

Layout: 3-column responsive grid (3 cols desktop, 2 tablet, 1 mobile)

Each Certification Card — 3D Flip Animation:
- FRONT of card:
  - Platform logo (Coursera, Udemy, Google, NPTEL, HackerRank, etc.)
  - Certificate title (bold)
  - Issued by: [Platform/Organization]
  - Issue Date: [Month Year]
  - Glowing border matching platform brand color

- BACK of card (revealed on hover flip):
  - Skills covered in this certificate
  - Validity period (if any)
  - Certificate ID (if applicable)
  - "Verify Certificate" button linking to credential URL

Sample Certificate Entries:
```
1. Python Programming — HackerRank / Coursera / NPTEL
2. Web Development Fundamentals — [Platform]
3. Introduction to Machine Learning — Coursera / NPTEL
4. JavaScript Algorithms & Data Structures — freeCodeCamp
5. Git & GitHub — [Platform]
6. Cloud Computing Fundamentals — AWS / Google / NPTEL
7. SQL & Database Management — [Platform]
8. UI/UX Design Principles — Google / Coursera
9. [Any Domain-Specific Certificate You Have]
10. [Internship Completion Certificate if any]
```

- Below grid: a stats banner showing:
  - "10+ Certifications Earned | 5+ Platforms | 3 Years of Learning"

---

## ════════════════════════════════════════════
## SECTION 10: PROJECTS SECTION — SHOWCASE
## ════════════════════════════════════════════

**Projects Section — Interactive Bento Grid + Modal View:**

Layout: Pinterest/Bento-style masonry grid
- Large featured project card takes 2 columns
- Smaller project cards in remaining cells
- Animated on hover: card tilts 3D + glows + overlay appears

Filter tabs above grid: All | Web Apps | AI Projects | Mini Tools | College Projects

Each Project Card:
- Project screenshot or tech-art thumbnail
- Project name (bold, large)
- Tech stack pills (color-coded chips)
- 1-line description
- GitHub icon link + Live Demo link button
- "View Details" button opens a full-screen modal

Project Detail Modal (on click):
- Project banner image
- Full description (3-5 sentences)
- Complete tech stack with icons
- Key features list (3-5 bullet points)
- Challenges faced & how solved
- GitHub Repository link
- Live Demo link (if deployed)
- Project duration & team size

Sample Project Entries:
```
PROJECT 1 (Featured — Large Card):
Name: [Your Main Project Name]
Tech: React.js, Node.js, MongoDB, Express, REST API
Description: [What your project does — 2 sentences]
Features: User authentication, Dashboard, Real-time updates, Responsive design
Status: ✅ Completed / 🔄 In Progress

PROJECT 2:
Name: [AI-based Project]
Tech: Python, TensorFlow/Scikit-learn, Flask, HTML/CSS
Description: [Brief description]
Status: ✅ Completed

PROJECT 3:
Name: [Portfolio / Personal Website]
Tech: HTML, CSS, JavaScript, Antigravity AI
Description: This portfolio website itself
Status: ✅ Live

PROJECT 4:
Name: [College Mini Project]
Tech: Java / Python / C++
Description: [Description]
Status: ✅ Completed

PROJECT 5:
Name: [Database or Backend Project]
Tech: MySQL, PHP / Node.js
Description: [Description]
Status: ✅ Completed

PROJECT 6:
Name: [Hackathon Project if any]
Tech: [Stack used]
Description: Built during [Hackathon Name] in [Duration]
Status: 🏆 Hackathon Submission
```

---

## ════════════════════════════════════════════
## SECTION 11: UNIQUE UI FEATURES & ANIMATIONS
## ════════════════════════════════════════════

**Signature Unique UI Elements — Make it UNFORGETTABLE:**

1. CUSTOM ANIMATED CURSOR:
   - Replace default cursor with a small neon glowing dot
   - A larger translucent ring trails behind it with slight delay
   - Cursor expands and glows when hovering over clickable elements

2. HERO PARTICLE CONSTELLATION:
   - Canvas-based floating particle system in hero background
   - Particles connect with thin lines when close together
   - Mouse movement pushes particles away — interactive
   - Colors: cyan (#00F5FF) with varying opacity

3. SECTION REVEAL ANIMATIONS:
   - All sections use IntersectionObserver
   - Cards slide up with staggered delay (each 80ms apart)
   - Text elements fade in from left/right based on position
   - Numbers/counters animate from 0 to final value on entry

4. SKILLS FLOATING ORBIT DISPLAY (Hero secondary element):
   - 8 skill icons slowly orbit around profile photo in hero section
   - Outer ring: 5 icons | Inner ring: 3 icons (different speeds)
   - Icons glow and show tooltip on hover

5. SCROLL SNAP SECTIONS:
   - Full page sections with CSS scroll-snap-type: y mandatory
   - Smooth, magnetic scroll between sections
   - Navigation dots highlight current active section

6. GLASSMORPHISM EVERYWHERE:
   - All cards: background: rgba(255,255,255,0.03) + backdrop-filter: blur(20px)
   - Navigation bar: same frosted glass with thin top border
   - Modal overlays: heavy blur with dark overlay

7. GRADIENT TEXT EFFECTS:
   - Section titles use gradient text: background-clip: text
   - Gradient: linear-gradient(135deg, #00F5FF, #7B2FBE)
   - Subtle shimmer animation on hover over headings

8. NEON LINE DECORATORS:
   - Thin horizontal neon lines before/after section titles
   - Vertical glowing sidebar accent lines on cards
   - Animated dash-stroke borders on featured elements

9. LOADING SCREEN:
   - Full-screen loading animation before portfolio loads
   - My initials appear letter by letter with glow effect
   - Progress bar fills up underneath
   - Loading screen fades out revealing the site (2-3 seconds)

10. MOBILE TOUCH SWIPE:
    - Workshop and certificate sections swipeable on mobile
    - All hover effects converted to tap effects on mobile
    - Bottom navigation bar on mobile for quick section jumps

---

## ════════════════════════════════════════════
## SECTION 12: CONTACT SECTION
## ════════════════════════════════════════════

**Contact Section — Clean & Professional:**

Layout: Split — Contact info left, Form right

LEFT SIDE — Contact Details:
- "Let's Connect 🤝" heading
- Subtitle: "I'm always open to new opportunities, collaborations, and conversations."
- Contact info cards (each with icon + glow):
  - 📧 Email: [your@email.com]
  - 📱 Phone: [+91 XXXXXXXXXX]
  - 📍 Location: Salem, Tamil Nadu, India
  - 💼 LinkedIn: [your linkedin URL]
  - 🐙 GitHub: [your github URL]
- Availability status: 🟢 Available for Internships & Freelance Projects
- Response time note: "I typically respond within 24 hours"

RIGHT SIDE — Contact Form:
- Name field with floating label + cyan focus border
- Email field with validation indicator
- Subject dropdown: Internship Inquiry | Project Collaboration | General Question | Other
- Message textarea (4 rows)
- "Send Message 🚀" button with loading spinner animation on click
- Form fields animate in with staggered delay
- Success toast notification on form submit

SOCIAL MEDIA ROW (below everything):
- GitHub | LinkedIn | Twitter/X | Instagram | LeetCode | HackerRank
- Each as a square glowing icon button
- Hover: scale + glow + tooltip with profile handle

---

## ════════════════════════════════════════════
## SECTION 13: FOOTER
## ════════════════════════════════════════════

**Footer Design:**
- Dark background matching hero (#050A14)
- Center-aligned content
- My name in glowing display font
- Tagline: "Designed & Developed with ❤️ + ☕ in Salem, India"
- Quick navigation links row
- Social icons row
- Copyright: "© 2025 [Your Name]. All rights reserved."
- Back to top button (right corner, glowing arrow up icon)
- Subtle animated gradient underline across top of footer

---

## ════════════════════════════════════════════
## SECTION 14: RESPONSIVE DESIGN RULES
## ════════════════════════════════════════════

**Breakpoints:**
- Desktop: 1200px+ — Full 3-col layouts, side-by-side sections
- Tablet: 768px–1199px — 2-col layouts, compressed navigation
- Mobile: < 768px — Single column, hamburger menu, swipeable cards

**Mobile-Specific:**
- Hero: Stack photo above text (photo centered, smaller)
- Skills: 2-column badge grid
- Projects: Single column scrollable list
- Workshops: Swipeable card carousel (touch enabled)
- Contact: Form stacked below contact info
- Floating nav dots: hidden on mobile (use bottom tab bar instead)
- Font sizes reduced by 20-30% on mobile

---

## ════════════════════════════════════════════
## SECTION 15: PERFORMANCE & EXTRAS
## ════════════════════════════════════════════

**Technical Excellence:**
- Smooth 60fps animations throughout (use will-change and transform3d)
- Lazy loading for all images and sections below the fold
- SEO meta tags: title, description, og:image, og:title for sharing
- Favicon: My initials in a small neon icon
- Page title: "[Your Name] — Portfolio | Full Stack Developer"
- Google Fonts preloaded in <head> for fast font rendering
- CSS custom properties (variables) for entire design system
- All animations respect prefers-reduced-motion media query

**Easter Egg Feature:**
- If user types "hire me" or clicks logo 5 times quickly:
  - Confetti burst animation plays across the screen
  - Toast message: "You've found the Easter Egg! 🎉 Check your email — let's collaborate!"

---

## ════════════════════════════════════════════
## SECTION 16: FINAL BUILD INSTRUCTIONS FOR ANTIGRAVITY
## ════════════════════════════════════════════

"Build me a full personal portfolio website using the above specifications.

Use DARK FUTURISTIC NEON theme with:
- Background: #050A14 (deep space)
- Primary accent: #00F5FF (electric cyan)
- Secondary accent: #7B2FBE (deep violet)
- Fonts: Orbitron (display), Exo 2 (headings), DM Sans (body)

The site must include these sections IN ORDER:
1. Sticky glassmorphism navbar
2. Full-viewport hero with particle background, profile photo with orbiting skill icons, typewriter name animation
3. About section with bio, current studies card, and learning progress bars
4. Skills section with tabbed filtering, icon badges, and radar chart
5. Education timeline (vertical, alternating cards)
6. Workshops section (horizontal swipeable card slider)
7. Certifications section (3D flip card grid)
8. Projects section (bento masonry grid with modal detail view)
9. Contact section (split layout with animated form)
10. Footer with social links

Unique UI: Custom cursor glow trail, scroll-snap sections, vertical section dot navigation, counter animations, card tilt on hover, staggered reveal animations, 3-second loading screen.

All content attached (profile photo, skills list, workshop details, certificates, project files). Use them exactly. Apply this complete design spec to produce a stunning, memorable, professional portfolio."

---

*Prompt created for Antigravity AI | Portfolio Build | Version 1.0*
*Total specification: 300+ lines of detailed design, content, and technical requirements*