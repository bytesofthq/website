const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');
const searchString = '/* Utilities for visibility */';
const index = content.indexOf(searchString);
if (index !== -1) {
  content = content.substring(0, index + searchString.length);
}

const newCss = `
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Slider Styles */
.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-slide.active {
  opacity: 1;
  z-index: 1;
}

.hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 6s ease-out;
}

.hero-slide.active img {
  transform: scale(1);
}

.slider-nav {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background: var(--accent-neon);
  width: 32px;
  border-radius: 6px;
}

/* Enhanced 3D Cards */
.card-3d {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.card-3d:hover {
  transform: translateY(-15px) rotateX(5deg) rotateY(-5deg);
  box-shadow: -10px 15px 30px rgba(14, 165, 233, 0.2), 10px 15px 30px rgba(139, 92, 246, 0.2);
}

.glowing-border {
  position: relative;
}

.glowing-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--accent-blue), var(--accent-neon), var(--accent-purple));
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glowing-border:hover::before {
  opacity: 1;
  animation: rotate-gradient 3s linear infinite;
}

@keyframes rotate-gradient {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
`;

fs.writeFileSync('src/index.css', content + newCss);
console.log('Fixed index.css');
