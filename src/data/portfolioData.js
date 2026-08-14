export const profile = {
  name: 'Abhijith P',
  tagline: 'I build AI systems that see',
  subtagline: 'Face recognition · Image classification · Pet breed detection',
  location: 'Malappuram, Kerala, India',
  email: 'abhijith22abhi22@gmail.com',
  phone: '8086882805',
  linkedin: 'https://www.linkedin.com/in/abhijithp-876431303',
  github: 'https://github.com/Abhijithabz?tab=repositories',
  photo: '/abhijith-photo-new.jpg',
  studioPhoto: '/abhijith-studio.png',
  transparentPhoto: '/abhijith-transparent.png',
  education: "MCA '26 · Bangalore University",
  roles: ['Face Recognition Systems', 'Machine Learning Models', 'Django Backends', 'Web Applications'],
  resumeSummary:
    'MCA student specializing in software engineering and machine learning, with hands-on experience in Python, Django, OpenCV, and database management. Skilled in problem-solving, data analysis, and scalable software development.',
}

export const stats = [
  { label: 'CGPA', value: '8.5', suffix: '/10' },
  { label: 'Projects', value: '2', suffix: '+' },
  { label: 'Certifications', value: '8', suffix: '' },
  { label: 'Years Coding', value: '2', suffix: '+' },
]

export const projects = [
  {
    title: 'Attendance Register Using Face Recognition',
    category: 'Computer Vision',
    year: '2024',
    description:
      'An AI-based attendance management system that uses face recognition to automatically identify students and record their attendance.',
    intro:
      'An AI-based attendance management system that uses face recognition to automatically identify students and record their attendance. The system reduces manual work and provides a faster and more reliable way to manage attendance.',
    objectives: [
      'Automate the student attendance process using face recognition.',
      'Identify and recognize registered students through their faces.',
      'Automatically record attendance with date and time.',
      'Reduce manual attendance errors and time consumption.',
      'Maintain attendance records in a database.',
      'Provide an efficient and user-friendly attendance management system.',
    ],
    technologies: ['Python', 'Django', 'OpenCV', 'Face Recognition', 'SQL / MySQL'],
    highlights: [
      'Facial detection & recognition with OpenCV',
      'Django backend + SQL for secure, real-time tracking',
      'Automated verification cut manual effort significantly',
    ],
    tech: ['Python', 'Django', 'OpenCV', 'SQL'],
    accent: 'purple',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'SmartPaws — AI-Powered Pet Care & Breed Detection System',
    shortTitle: 'Smart Paws',
    category: 'Machine Learning',
    year: '2026',
    description:
      'An AI-powered pet care system that identifies pet breeds from images and gives personalized care recommendations.',
    intro:
      'SmartPaws is an AI-powered pet care system designed to identify pet breeds from images and provide personalized care recommendations. It helps pet owners access useful information about pet food, grooming, healthcare, supplements, and vaccination guidance.',
    objectives: [
      'Detect and identify pet breeds using AI and image processing.',
      'Provide personalized pet-care recommendations.',
      'Suggest suitable food and grooming practices based on the pet.',
      'Provide basic healthcare and vaccination guidance.',
      "Help pet owners understand their pets' specific care requirements.",
      'Create an easy-to-use platform for intelligent pet management.',
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TensorFlow', 'OpenCV', 'YOLO', 'MobileNetV2'],
    highlights: [
      'Image classification with TensorFlow, YOLO & MobileNetV2',
      'Preprocessing pipeline to boost accuracy on similar breeds',
      'Simple upload-and-predict interface for instant results',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    accent: 'pink',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'This Portfolio',
    shortTitle: 'This Portfolio',
    category: 'Frontend',
    year: '2026',
    description:
      'A glassmorphic, futuristic personal site built to showcase projects and skills — designed and coded from scratch with an eye for motion and detail.',
    intro:
      'A glassmorphic, futuristic personal site built to showcase projects and skills — designed and coded from scratch with an eye for motion and detail.',
    objectives: [
      'Present projects, skills, and background in one cohesive site.',
      'Use motion and layout to make the portfolio memorable, not templated.',
      'Stay fast, responsive, and accessible across devices.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Glassmorphism UI with animated gradients',
      'Scroll-triggered skill animations',
      'Fully responsive, accessible, and fast',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS'],
    accent: 'green',
    image:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    ],
  },
]

export const skillBars = [
  { name: 'Python', level: 85, color: '#a78bfa' },
  { name: 'Django', level: 78, color: '#f472b6' },
  { name: 'OpenCV', level: 80, color: '#38bdf8' },
  { name: 'TensorFlow', level: 70, color: '#34d399' },
  { name: 'SQL / MySQL', level: 82, color: '#facc15' },
  { name: 'MS Excel', level: 85, color: '#22c55e' },
  { name: 'Java', level: 68, color: '#fb923c' },
  { name: 'JavaScript', level: 65, color: '#a78bfa' },
  { name: 'HTML / CSS', level: 75, color: '#f472b6' },
]

export const skillTags = [
  { name: 'Python', color: '#a78bfa' },
  { name: 'Java', color: '#f472b6' },
  { name: 'C', color: '#38bdf8' },
  { name: 'SQL', color: '#34d399' },
  { name: 'MS Excel', color: '#22c55e' },
  { name: 'Django', color: '#facc15' },
  { name: 'HTML', color: '#fb923c' },
  { name: 'CSS', color: '#a78bfa' },
  { name: 'JavaScript', color: '#f472b6' },
  { name: 'MySQL', color: '#38bdf8' },
  { name: 'OpenCV', color: '#34d399' },
  { name: 'TensorFlow', color: '#facc15' },
  { name: 'Machine Learning', color: '#fb923c' },
  { name: 'Face Recognition', color: '#a78bfa' },
  { name: 'Node.js', color: '#38bdf8' },
  { name: 'Git', color: '#f472b6' },
]

export const timeline = [
  {
    year: '2019 – 2021',
    title: 'Higher Secondary',
    place: 'Technical Higher Secondary School, Vattamkulam',
    color: '#facc15',
  },
  {
    year: '2021 – 2024',
    title: 'BSc Computer Science',
    place: 'IHRD College of Applied Science, Vattamkulam',
    color: '#38bdf8',
  },
  {
    year: '2025',
    title: 'Security Professional',
    place: 'HKIT Security Solution',
    color: '#fb923c',
  },
  {
    year: '2024 – Present',
    title: 'Master of Computer Applications (MCA)',
    place: 'Soundarya Institute of Management and Science, Bangalore University',
    color: '#a78bfa',
  },
]

export const certifications = [
  'Blue Team Security Analyst & Cybersecurity Practitioner Program - Cyberverse Foundation',
  'Introduction to UNIX',
  'Introduction to Cybersecurity',
  'Database Management System (RDBMS) & Microsoft Fabric SQL',
  'Introduction to Front-End Development',
  'Introduction to Artificial Intelligence',
  'Master Computer Networking',
  'Java Course — Mastering the Fundamentals',
]

export const languages = ['English', 'Malayalam', 'Kannada', 'Tamil']

export const coreStrengths = [
  { title: 'Problem Solving', desc: 'Breaking down complex real-world challenges into reliable software algorithms.', icon: '🧩', color: '#a78bfa' },
  { title: 'Cybersecurity & Defense', desc: 'Understanding security protocols, Unix systems, and threat vulnerability analysis.', icon: '🛡️', color: '#38bdf8' },
  { title: 'Teamwork', desc: 'Collaborating seamlessly across developers, frameworks, and project domains.', icon: '🤝', color: '#34d399' },
  { title: 'Time Management', desc: 'Prioritizing features and delivering working projects on tight deadlines.', icon: '⏱️', color: '#facc15' },
  { title: 'Adaptability', desc: 'Rapidly acquiring mastery in new tools like TensorFlow, OpenCV, and MS Excel.', icon: '🔄', color: '#fb923c' },
  { title: 'Attention to Detail', desc: 'Rigorous testing and observation to ensure robust, bug-free releases.', icon: '🔍', color: '#f472b6' },
]

export const aboutStats = [
  { label: 'Based in', value: 'Malappuram, KL' },
  { label: 'Studying', value: 'MCA, 2024–26' },
  { label: 'Focus', value: 'AI + Web' },
]

