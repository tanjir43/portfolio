import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanjir",
  initials: "TI",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Crafting Innovation, Coding Excellence: Where Imagination Meets Execution.",
  summary:
    "As a seasoned software engineer, I thrive on translating creative concepts into robust code. With a passion for innovation and a commitment to coding excellence, I specialize in crafting efficient and scalable solutions. My diverse skill set, coupled with a keen eye for detail, allows me to contribute effectively to complex projects and drive technological advancement. Embracing challenges as opportunities for growth, I am dedicated to pushing the boundaries of what technology can achieve.",
  avatarUrl: "/tanjir.jpg",
  skills: [
    "JavaScript",
    "Typescript",
    "Vue",
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "C#",
    "Linux",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
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
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/spondon.png",
      start: "December 2022",
      end: "Present",
      description:
        "Design, develop, and optimize software applications using C#, PHP, React, Next.js, Vue, Python, and Java. Build efficient algorithms, implement database structures, and optimize SQL queries. Perform unit and integration testing, collaborate with cross-functional teams, and follow Agile methodologies. Ensure security against DDoS, SQL injection, and XSS. Use Docker, Kubernetes, and CI/CD pipelines, and deploy applications on cloud platforms like AWS, Azure, and cPanel.",
    },
    {
      company: "RSA Info Tech",
      badges: [],
      href: "https://www.rsaintech.net/",
      location: "On Site",
      title: "Junior Software Engineer",
      logoUrl: "/rsa.png",
      start: "September 2021",
      end: "November 2022",
      description:
        "Design, develop, and test software applications using C#, PHP, React, Next.js, Vue, and Java. Implement scalable algorithms, optimize SQL queries, and manage databases. Write unit and integration tests, collaborate in Agile teams, and use Git for version control. Ensure security against DDoS, SQL injection, and XSS. Utilize Docker, Kubernetes, and CI/CD pipelines for deployment on AWS, Azure, and cPanel. Stay updated on industry trends.",
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
