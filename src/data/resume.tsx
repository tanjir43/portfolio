import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
// import { NotebookIcon } from "lucide-react"; // re-add with the Blog nav item

export const DATA = {
  name: "Tanjir",
  initials: "TI",
  url: "https://portfolio-tanjir.vercel.app",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Crafting Innovation, Coding Excellence: Where Imagination Meets Execution.",
  summary:
    "As a seasoned software engineer, I thrive on translating creative concepts into robust code. With a passion for innovation and a commitment to coding excellence, I specialize in crafting efficient and scalable solutions. My diverse skill set, coupled with a keen eye for detail, allows me to contribute effectively to complex projects and drive technological advancement. Embracing challenges as opportunities for growth, I am dedicated to pushing the boundaries of what technology can achieve.",
  avatarUrl: "/tanjir.jpg",
  skills: [
    "Go",
    "PHP",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "React Native",
    "Vue",
    "C#",
    "Gin",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "ScyllaDB",
    "SQL Server",
    "Docker",
    "Linux",
    "Nginx",
    "AWS",
    "Digital Ocean",
    "Git",
    "Prometheus",
    "Grafana",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanjirislam7@gmail.com",
    tel: "+8801925484921",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanjir43",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanjirul-islam",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Tanjirislam43",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  }, 

  work: [
    {
      company: "Spondon IT",
      href: "https://spondonit.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/spondon.png",
      start: "December 2023",
      end: "Present",
      description:
        "Design, develop, test, and optimize scalable multi-tenant SaaS platforms using Go, PHP/Laravel, React, Next.js, and React Native. Own end-to-end delivery of grading, transcript, certificate, enrollment, drip-access, and billing modules, from technical documentation (SRS) and database design through production support. Engineer efficient algorithms, implement secure multi-tenant database structures, and optimize queries and caching across PostgreSQL, MySQL, ScyllaDB, and Redis. Ensure quality through unit, integration, and cross-service contract testing, code review, and Agile collaboration using Git. Integrate cloud platforms (AWS, Digital Ocean) and payment gateways (Stripe, PayPal, SSLCommerz, bKash), implement security measures against SQL injection, XSS, and unauthorized access, and deploy with Docker, Nginx, and Linux VM infrastructure monitored with Prometheus and Grafana.",
    },
    {
      company: "Retina Soft",
      badges: [],
      href: "https://retinasoft.com.bd/",
      location: "On Site",
      title: "Junior Software Engineer",
      logoUrl: "/fv.png",
      start: "March 2023",
      end: "November 2023",
      description:
        "Developed, tested, and optimized software using PHP and Vue.js with a focus on scalable solutions and MySQL database management. Gained experience in Agile development, Git, cloud deployment, and implementing security best practices against SQL injection and XSS.",
    },
    {
      company: "RSA Info Tech",
      badges: [],
      href: "https://www.rsaintech.net/",
      location: "On Site",
      title: "Junior Software Engineer",
      logoUrl: "/rsa.png",
      start: "June 2022",
      end: "February 2023",
      description:
        "Developed, tested, and debugged software applications using C# and PHP while collaborating with senior engineers and cross-functional teams. Gained experience in Agile methodologies, payment gateway integration (Stripe, Razorpay), and best coding practices.",
    },
  ],
  education: [
    {
      school: "City University",
      href: "https://www.cityuniversity.edu.bd/",
      degree: "Bachelor's Degree of Computer Science (BSC)",
      logoUrl: "/cu.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "Govt. Bangla College",
      href: "https://www.sarkaribanglacollege.gov.bd/",
      degree: "Higher Secondary School Certificate (HSC)",
      logoUrl: "/gbc.png",
      start: "2014",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "EduShade LMS",
      href: "https://edushade.com/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "EduShade is a multi-tenant education platform (LMS) for universities and training institutes, built on 18 Go microservices with a Next.js frontend. Led development of the grading and transcript pipeline, certificate generation, curriculum drip-scheduling, and the enrollment and billing lifecycle, and set up the production infrastructure and monitoring.",
      technologies: [
        "Go",
        "Gin",
        "PostgreSQL",
        "Redis",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "Prometheus",
      ],
      links: [
        {
          type: "Website",
          href: "https://edushade.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/edushade.png",
      video: "",
    },
    {
      title: "Playmist OTT",
      href: "http://web.aynaott.com/",
      dates: "February 2026 - Present",
      active: true,
      description:
        "Playmist is an OTT video streaming platform delivered in two modes, a standalone service and a multi-provider content aggregator, with a Laravel API and admin, a Next.js web client, and React Native mobile and TV apps. Contributed to the shared TypeScript packages used by every client, including the typed API SDK, headless billing flow and Shaka-based video player, along with subscription checkout and DRM-protected playback.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Redis",
        "Next.js",
        "React Native",
        "Go",
        "Shaka Player",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "http://web.aynaott.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/playmist.png",
      video: "",
    },
    {
      title: "InfixEdu",
      href: "https://infixedu.ischooll.com/",
      dates: "March 2023 - Present",
      active: true,
      description:
        "InfixEdu, is a SaaS-based School Management System that simplifies admissions, fee collection, and academic tracking, offering a scalable, user-friendly solution for schools and universities.",
      technologies: [
        "Bootstrap",
        "Vue",
        "Laravel",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://infixedu.ischooll.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/edu.jpg",
      video:
        "",
    },
    {
      title: "Asia Solutions",
      href: "https://asiasolutions.xyz/",
      dates: "June 2022 - December 2022",
      active: true,
      description:
        "The All in One Business Solution With Accounting and HRM Module",
      technologies: [
        "Bootstrap",
        "Laravel",
        "MySQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://asiasolutions.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/accounting.png",
      video: "",
    },
    {
      title: "GPS Freelancer",
      href: "https://www.gpsfreelancer.com/",
      dates: "January 2022 - June 2022",
      active: true,
      description:
        "GPS Freelancer is a platform that connects freelancers with clients, offering a secure, user-friendly interface for project management and payment processing.",
      technologies: [
        "Bootstrap",
        "React",
        "Laravel",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gpsfreelancer.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gps.png",
      video: "",
    },
    {
      title: "Digital UD Management",
      href: "https://bkmea.net/",
      dates: "October 2021 - December 2022",
      active: true,
      description:
        "Digital Utilization Declaration Management system for BKMEA using ASP.NET and SQL Server, enabling efficient raw material tracking, stock analysis, and payment validation while ensuring compliance with BKMEA and Bangladesh Income Tax regulations.",
      technologies: [
        "JavaScript",
        "ASP.NET",
        "C#",
        "SQL Server",
      ],
      links: [
        {
          type: "Website",
          href: "https://bkmea.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dudms.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Legal Claim Assistant",
      dates: "April 2024 - November 2025",
      location: "Remote",
      description:
        "Legal Claim Assistant supplies verified legal-claim leads to US law firms and legal intake centres. Contributed to Monetize, their real-time lead distribution and monetization platform, built on a Laravel 11 API and a Vue 3 + TypeScript frontend over MySQL, MongoDB, ClickHouse and Redis. Worked on ping-post and direct-post lead routing with validation rules and volume caps, affiliate payout and revenue reporting, and integrations including Ringba call tracking, Google Ads and Facebook APIs, and AWS Batch CSV exports.",
      image: "/lca.png",
      mlh: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://legalclaimassistant.com/",
        },
      ],
    },
    {
      title: "Druckland",
      dates: "September 2024 - February 25, 2025",
      location: "Remote",
      description:
        "Develop a B2C Ecommerce Software Based on Printing Industry  using React Admin Panel, Frontend Next js, Backend Laravel.",
      image:
        "/druckland.svg",
      mlh: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://frontend.druckland.de/",
        },
      ],
    },
    {
      title: "Eventcomm",
      dates: "February 23 - June 01, 2024",
      location: "Remote",
      description:
        "Develop a Event Management Company Dynamic Website using Bootstrap, Backend Laravel.",
      image:
        "/eventcomm.png",
      mlh: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://eventcomm.agency/",
        },
      ],
    },
    {
      title: "SHINE EPICENTER LTD.(SHINEE)",
      dates: "October 10, 2023 - Jan 11, 2024",
      location: "Part-Time",
      description:
        "Develop a Student Management System  for a chef institute with mobile app using Flutter.",
      image:
        "/shinee.png",
      mlh: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://shinee.com.bd/",
        },
      ],
    },
    {
      title: "Delryt",
      dates: "January 19, 2022 - October 11, 2022",
      location: "Part-Time",
      description:
        "A software for food delivery service with restaurant management with Mobile App using Flutter.",
      image:
        "/delryt.png",
      mlh: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://delryt.com/",
        },
      ],
    },
  ],
} as const;
