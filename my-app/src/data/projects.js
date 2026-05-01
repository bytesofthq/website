export const projectsData = [
  {
    id: "campus-quest",
    name: "Campus Quest",
    shortDescription: "A modern full-stack quiz platform designed for educational institutions with real-time interaction, analytics, and automation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    category: "EdTech & Analytics",
    partner: "Integral University",
    introduction: "Campus Quest is a modern full-stack quiz platform exclusively developed in strategic partnership with Integral University. Built to serve their dynamic educational ecosystem, it transforms traditional assessments into an interactive, real-time experience where students can participate in live quizzes, track their performance, and compete with peers. The platform handles multiple user roles, delivers real-time updates, and provides deep insights through analytics — making it a complete digital assessment solution tailored for leading educational institutions.",
    features: {
      student: [
        "Participate in live quizzes with synchronized countdown timers",
        "Track performance using interactive analytics dashboards",
        "Compete on real-time leaderboards",
        "Receive auto-generated certificates after completion",
        "Access AI-powered chat assistant for instant help",
        "Secure login with OTP verification and profile management"
      ],
      faculty: [
        "Create and manage quizzes with multiple question types",
        "Launch real-time quiz sessions with live monitoring",
        "Analyze student performance through detailed reports",
        "Organize quizzes into structured courses",
        "Access dashboards for engagement and results tracking"
      ],
      admin: [
        "Manage faculty and student accounts across the platform",
        "Monitor live quiz sessions institution-wide",
        "Access aggregated analytics and reports",
        "Manage departments, courses, and platform settings"
      ]
    },
    realTime: [
      "Synchronized quiz timers for all participants",
      "Instant leaderboard updates",
      "Real-time participant tracking",
      "Live notifications and score updates"
    ],
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Material UI", "Bootstrap", "Chart.js", "Recharts"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Socket.io"],
      tools: ["Cloudinary", "Nodemailer", "PDFKit", "AI Integration"]
    },
    security: [
      "Role-based access control (Student, Faculty, Admin)",
      "Secure authentication with JWT tokens",
      "Rate limiting and API protection",
      "Optimized for scalability and high performance"
    ],
    impact: [
      "Improve student engagement",
      "Automate evaluation and certification",
      "Gain insights through performance data",
      "Conduct seamless online assessments"
    ],
    conclusion: "Campus Quest is not just a quiz platform — it is a complete ecosystem for modern education, combining technology, automation, and real-time interaction to enhance learning and assessment experiences.",
    liveLink: "https://mohd-faizan.onrender.com/student/login"
  },
  {
    id: "track-my-bus",
    name: "TrackMyBus",
    shortDescription: "A smart, real-time university bus tracking system using browser geolocation APIs and live notifications.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    category: "Transport & Logistics",
    partner: "Integral University",
    introduction: "TrackMyBus is a smart, real-time bus tracking system built especially for Integral University students and staff. It allows students to track their university buses live, while drivers share their current GPS coordinates using the browser's Geolocation API (watchPosition()) — no external GPS hardware needed. The system ensures accurate arrival notifications, complete admin control, and seamless communication between students, drivers, and the administration.",
    features: {
      student: [
        "Track Your University Bus in Real-Time — View your bus moving live on the map.",
        "Auto Location Updates — Driver's GPS coordinates continuously update.",
        "Smart Notifications — 'Arriving soon' and 'Arrived' alerts via FCM.",
        "Password Reset — Secure password recovery via NodeMailer."
      ],
      driver: [
        "Share Real-Time GPS Location — Uses watchPosition() for live updates.",
        "Secure Login & Password Reset — Protected authentication."
      ],
      admin: [
        "Manage Buses — Create, edit, or delete bus records.",
        "Driver Management — Register and manage drivers.",
        "Student Assignment — View and manage students assigned to each bus.",
        "Pickup Points Overview — See all pickup points for every bus.",
        "Geocoding Integration — Auto converts location names to lat/lng.",
        "Live Tracking Dashboard — Monitor every bus in real-time."
      ]
    },
    realTime: [
      "Driver App uses watchPosition() to continuously send live GPS coordinates",
      "User App fetches location data to display bus movement on the map",
      "Firebase Cloud Messaging sends 'Arriving Soon' and 'Arrived' alerts",
      "Real-time synchronization between drivers and users",
      "Accurate ETA (Estimated Time of Arrival) calculation"
    ],
    techStack: {
      frontend: ["React.js", "Leaflet.js", "CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "OpenRouteService API", "JWT"],
      tools: ["Firebase Cloud Messaging", "NodeMailer", "Nominatim API"]
    },
    security: [
      "Secure authentication and password reset flow",
      "JWT (JSON Web Token) for secure access",
      "Protected admin and driver routes"
    ],
    impact: [
      "Real-time synchronization between drivers and users",
      "Accurate ETA calculations save student waiting time",
      "Smart notifications for better user experience",
      "Integrated geocoding for easy admin management"
    ],
    conclusion: "TrackMyBus bridges the gap between university administration, drivers, and students. By leveraging real-time geocoding and live notifications without external GPS hardware, it provides a highly cost-effective, scalable, and seamless transportation experience.",
    liveLink: "https://track-my-bus-v2-j21l.vercel.app/login"
  }
];
