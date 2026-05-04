import zapShift from "../assets/projects/zap-shift.jpg";
import weatherDeshboard from "../assets/projects/weather-dashboard.jpg";
import jobPortal from "../assets/projects/job-portal.jpg";
import foodOrderManagement from "../assets/projects/home-page.png";
import travlingPage from "../assets/projects/mint.jpg";
import coffeeStore from "../assets/projects/coffee-store.png";
import sunCart from "../assets/projects/sun-cart.jpg";
import keenKeeper from "../assets/projects/keenkeeper.png";
import boardResultSystem from "../assets/projects/board-result.png";
import swiftCart from "../assets/projects/swift-cart.jpg";
import payoo from "../assets/projects/payoo.png";
import photographyPortfolio from "../assets/projects/photography.png";


export const projects = [
    // ── MERN Stack 
    {
        image: zapShift,
        name: "Parcel Delivery (Zap Shift)",
        type: ["MERN Stack", "Role-Based System"],
        description:
            "Zap Shift is a full-stack parcel delivery platform where users can send parcels or register as a local rider. The system operates across three roles — User, Rider, and Admin — where the admin assigns deliveries to nearby riders and manages the entire workflow in real time, including payment processing via Stripe.",
        live_link: "https://zap-shift-client-zeta.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/zap-shift-client.git",
        github_server: "https://github.com/ziaulhoquepatwary/zap-shift-server.git",
        technologies: ["React", "TailwindCSS", "React-router", "Express.js", "MongoDB", "Firebase", "Stripe"],
    },
    {
        image: jobPortal,
        name: "Job Portal",
        type: ["MERN Stack", "Multi-Role System"],
        description:
            "Job Portal is a full-stack job marketplace where candidates can search and apply for positions after authentication. Employers can post jobs and manage applicants by hiring, rejecting, or placing them on a waiting list — all through a clean and organized role-based dashboard.",
        live_link: "https://job-portal-client-flax.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/job-portal-client.git",
        github_server: "https://github.com/ziaulhoquepatwary/job-portal-server.git",
        technologies: ["React", "TailwindCSS", "React-router", "Express.js", "MongoDB", "Firebase"],
    },
    {
        image: coffeeStore,
        name: "Coffee Store",
        type: ["MERN Stack", "CRUD Practice"],
        description:
            "Coffee Store is a shop management web application built on the full MERN stack. It focuses on admin-side product management with complete CRUD operations, protected routes, and Firebase authentication. This was my first end-to-end MERN project, built to solidify the core concepts of full-stack development.",
        live_link: "https://coffee-store-lyart.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/coffee-store.git",
        github_server: null,
        technologies: ["React", "TailwindCSS", "React-router", "Context API", "SweetAlert2", "Express.js", "MongoDB", "Firebase"],
    },

    // ── React / Next.js 
    {
        image: sunCart,
        name: "SunCart – Summer Essentials Store",
        type: ["Next.js", "User Authentication"],
        description:
            "SunCart is a frontend e-commerce application built for summer shoppers using Next.js App Router. Users can browse seasonal essentials and place orders after authentication via BetterAuth with Google. The platform features protected routes, a vibrant seasonal UI, and a smooth shopping experience across all devices.",
        live_link: "https://sun-cart-sage.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/SunCart.git",
        github_server: null,
        technologies: ["Next.js", "TailwindCSS", "App Router", "SweetAlert2", "BetterAuth", "MongoDB"],
    },
    {
        image: keenKeeper,
        name: "KeenKeeper — Keep Your Friendships Alive",
        type: ["Next.js", "Frontend"],
        description:
            "KeenKeeper is a personal friendship tracker built with Next.js to practice the App Router pattern. Users can log contacts, track how many days have passed since their last interaction, and view communication history. A dedicated Stats page visualizes patterns through a pie chart using Recharts.",
        live_link: "https://keen-keeper-lemon.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/KeenKeeper.git",
        github_server: null,
        technologies: ["Next.js", "TailwindCSS", "App Router", "React Hot Toast", "Recharts", "Local Storage"],
    },
    {
        image: weatherDeshboard,
        name: "Weather Dashboard",
        type: ["React", "API Integration"],
        description:
            "Weather Dashboard is a real-time weather tracking app built with React. Users can search any location worldwide to view current conditions and save favorite places for quick access anytime. The app fetches live data from a third-party weather API and presents it through a clean, responsive dashboard interface.",
        live_link: "https://weather-dashboard-three-iota.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/Weather-Dashboard.git",
        github_server: null,
        technologies: ["React", "TailwindCSS", "React-router", "Weather API"],
    },
    {
        image: foodOrderManagement,
        name: "Food Order Management",
        type: ["React", "CRUD Practice"],
        description:
            "Food Order Management is a simple React-based ordering system where users can place food orders by selecting items. Admins can view and manage all orders through a dashboard — marking them as pending or delivered, or removing them — making it a focused exercise in CRUD operations and state management.",
        live_link: "https://food-order-management-ziaul.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/Food-Order-Management.git",
        github_server: null,
        technologies: ["React", "TailwindCSS", "React-router"],
    },

    // ── JavaScript / Vanilla 
    {
        image: payoo,
        name: "Payoo — Mobile Banking Web App",
        type: ["JavaScript", "DOM Manipulation"],
        description:
            "Payoo is a mobile-first digital banking simulator built with HTML, Tailwind CSS, and vanilla JavaScript. It replicates core banking features such as fund transfers, bill payments, cashouts, and bonus coupons — with all data persisted through localStorage for a realistic single-session banking experience.",
        live_link: "https://payoo-code.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/payoo-code.git",
        github_server: null,
        technologies: ["HTML", "Tailwind CSS", "DaisyUI", "JavaScript", "DOM Manipulation", "Local Storage"],
    },
    {
        image: swiftCart,
        name: "Swift Cart — E-Commerce",
        type: ["JavaScript", "DOM Manipulation"],
        description:
            "Swift Cart is a fully functional frontend e-commerce site built entirely with vanilla HTML, CSS, and JavaScript — no frameworks. The project covers real-world concepts including API data fetching, dynamic DOM rendering, cart management, and multi-page navigation, all implemented from scratch as a core JavaScript exercise.",
        live_link: "https://ziaulhoquepatwary.github.io/Swift-Cart-E-Commerce-/",
        github_client: "https://github.com/ziaulhoquepatwary/Swift-Cart-E-Commerce-.git",
        github_server: null,
        technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Local Storage"],
    },
    {
        image: boardResultSystem,
        name: "Board Result System",
        type: ["JavaScript", "CRUD Practice"],
        description:
            "Board Result System is an interactive clone of Bangladesh's SSC/HSC result portal, built with vanilla JavaScript. Admins can add, edit, and delete mock student records, while users can search and view full result sheets. All data is stored in localStorage, making it a practical exercise in DOM manipulation and CRUD logic.",
        live_link: "https://ziaulhoquepatwary.github.io/board-result-system/",
        github_client: "https://github.com/ziaulhoquepatwary/board-result-system.git",
        github_server: null,
        technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Local Storage"],
    },

    // ── Design / UI 
    {
        image: photographyPortfolio,
        name: "Photography Portfolio",
        type: ["Design", "Frontend"],
        description:
            "A modern photography portfolio website built with React and Tailwind CSS. The project emphasizes clean UI design, elegant layout composition, and smooth animations to present a photographer's work in a professional and visually compelling way. Swiper.js is used for an interactive gallery experience.",
        live_link: "https://photography-portfolio-teal-three.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/photography-portfolio.git",
        github_server: null,
        technologies: ["React", "TailwindCSS", "Swiper.js"],
    },
    {
        image: travlingPage,
        name: "Traveling Landing Page",
        type: ["Design", "Animation"],
        description:
            "A visually rich travel landing page built with HTML, CSS, JavaScript, and GSAP. The project focuses entirely on animation and modern UI design, delivering a smooth and dynamic near-3D experience. It was built as a dedicated exercise in advanced CSS techniques and GSAP-driven motion design.",
        live_link: "https://animated-travel-landing-page.vercel.app/",
        github_client: "https://github.com/ziaulhoquepatwary/animated-travel-landing-page.git",
        github_server: null,
        technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    },
];