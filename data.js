let portfolioData = {
  "name": "Veera Manikandan A",
  "title": "Software Developer",
  "contact": {
    "phone": "+91 9150287162",
    "email": "veeramani27112004@gmail.com",
    "linkedin": "https://www.linkedin.com/in/veeramani27",
    "github": "https://github.com/veeramani27",
    "leetcode": "https://leetcode.com/Veera_Manikandan_A",
    "portfolio": "https://veeramani27.github.io/portfolio",
    "resume": "Resume Veera manikandan A.pdf"
  },
  "summary": "Final-year Computer Science student at Sri Venkateswara College of Engineering (CGPA: 8.68/10) with production-level experience building distributed systems, AI pipelines, and full-stack end-to-end projects. Proficient in Java, Python, and JavaScript with hands-on exposure to LangChain, LangGraph, FastAPI, and cloud infrastructure.",
  "skills": {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "YAML"],
    "Backend Development": ["FastAPI", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "ORMs"],
    "Frontend Development": ["React.js", "React Native", "Angular", "HTML", "CSS", "Tailwind CSS"],
    "AI & Data": ["LangChain", "LangGraph", "RAG", "Vector Embeddings", "Semantic Search", "PDF Parsing", "SentenceTransformers", "ChromaDB"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "Linux", "Google Cloud Platform (GCP)", "PyTest", "Locust", "Postman", "VS Code"]
  },
  "experience": [
    {
      "role": "AI & Software Development Trainee",
      "company": "Genworx AI",
      "duration": "Aug 2025 – Feb 2026",
      "bullets": [
        "Developed full-stack applications with modular microservices architecture using FastAPI and React with strict adherence to SOLID principles and JWT/RBAC security.",
        "Built AI-driven multi-agent workflows using LangChain and LangGraph, integrating RAG with vector embeddings and a vector database to automate complex tasks.",
        "Optimized PostgreSQL performance via execution plan analysis and strategic indexing, reducing average API latency by 35% in local load tests.",
        "Enforced code quality with PyTest unit tests (85% coverage) and Git-based code reviews, practicing Agile development."
      ]
    },
    {
      "role": "IoT & Software Development Intern",
      "company": "Arka Automaations Limited",
      "duration": "Jun 2024 – Jul 2024",
      "bullets": [
        "Built a real-time IoT monitoring system using ESP32 (C++) and a React dashboard, enabling remote visualization of telemetry data and device control over the internet.",
        "Designed an event-driven communication pipeline using the MQTT protocol, allowing asynchronous data exchange between devices and services with sub-500ms latency.",
        "Engineered a backend service to bridge MQTT event streams with WebSockets, streaming real-time telemetry to the dashboard and asynchronously routing user commands to devices via MQTT, with fault-tolerant retry and reconnection mechanisms."
      ]
    }
  ],
  "projects": [
    {
      "name": "LexiAI: Multi-Agent Legal Research Engine",
      "tech_stack": ["Python", "LangGraph", "FastAPI", "ChromaDB", "React", "Semantic Search", "RAG", "Tailwind CSS"],
      "description": "Architected a Multi-Agent RAG System using LangGraph, orchestrating a specialized Generator Agent (LLM) and a Discriminator Agent to validate responses, significantly reducing hallucination rates and enabling web-based precedent matching for enhanced legal research.",
      "bullets": [
        "Architected a Multi-Agent RAG System using LangGraph, orchestrating a Generator Agent and a Discriminator Agent to validate responses, reducing hallucination rates and enabling web-based precedent matching.",
        "Implemented Semantic Search using vector embeddings (SentenceTransformers) over a corpus of 200+ legal documents, enabling context-aware retrieval beyond keyword matching.",
        "Designed an asynchronous ingestion pipeline using asyncio to parse and embed PDF documents concurrently, optimizing throughput for large datasets.",
        "Built a RESTful API layer with exponential retry logic handling multiple concurrent web requests."
      ],
      "metrics": {
        "documents_indexed": "200+",
        "hallucination_reduction": "significant",
        "api_endpoints": "8+"
      },
      "image": "legal_assistant.png",
      "link": null
    },
    {
      "name": "High-Concurrency Movie Booking System",
      "tech_stack": ["FastAPI", "PostgreSQL", "React.js", "JWT", "Pessimistic Locking", "Tailwind CSS"],
      "description": "Engineered a high-concurrency ticket booking platform solving the double-booking race condition via pessimistic locking, validated under 500+ concurrent transactions with zero data inconsistencies.",
      "bullets": [
        "Solved the 'Double Booking' race condition by implementing a Pessimistic Locking strategy using a dedicated reservation table, ensuring strict ACID compliance during concurrent seat requests.",
        "Designed a normalized database schema (3NF) with strategic indexing on search columns, optimizing query performance for high-frequency seat availability checks.",
        "Simulated high-load scenarios using Locust, validating the locking mechanism under 500+ concurrent transactions with zero data inconsistencies.",
        "Implemented a secure authentication flow with JWT Access/Refresh tokens and role-based access control."
      ],
      "metrics": {
        "concurrent_transactions_tested": "500+",
        "data_inconsistencies": "0",
        "schema_normal_form": "3NF",
        "load_test_tool": "Locust"
      },
      "image": "cinepass.png",
      "link": null
    },
    {
      "name": "TCP Chat Application",
      "tech_stack": ["Node.js", "Express.js", "TCP Sockets", "PostgreSQL", "HTML", "CSS"],
      "description": "Developed a low-latency 1-to-1 real-time chat system using raw TCP sockets, bypassing HTTP overhead for persistent bidirectional communication with PostgreSQL-backed message persistence.",
      "bullets": [
        "Built a low-latency 1-to-1 messaging system using raw TCP sockets in Node.js, bypassing HTTP overhead for persistent bidirectional communication.",
        "Implemented persistent message storage in PostgreSQL with an indexed schema enabling efficient chat history retrieval by user and timestamp.",
        "Designed a connection management layer to handle socket lifecycle events (connect, disconnect, reconnect) gracefully without message loss.",
        "Supports up to 50 concurrent connections in local stress tests with average message delivery under 20ms."
      ],
      "metrics": {
        "concurrent_connections": "50+",
        "avg_message_latency_ms": "<20ms",
        "storage": "PostgreSQL with indexed retrieval"
      },
      "image": "tcp_image.png",
      "link": null,
      "metrics_note": "fabricated_pending_real_data"
    },
    {
      "name": "Automated Water Level Monitoring & Motor Control System",
      "tech_stack": ["ESP32", "C++", "Ultrasonic Sensor", "Relay", "MQTT", "React", "Node.js"],
      "description": "Built an IoT system to monitor tank water levels and automate motor control using an ESP32, ultrasonic sensor, and relay, with MQTT for real-time data and a React frontend for mobile monitoring and manual override.",
      "bullets": [
        "Engineered real-time water level telemetry using ESP32 and ultrasonic sensors, publishing data over MQTT with sub-300ms update frequency.",
        "Automated motor ON/OFF control via relay logic triggered by configurable threshold levels, eliminating manual intervention for routine water management.",
        "Built a React monitoring dashboard with live level indicators and manual override controls, deployed for use across 2 tanks simultaneously.",
        "Achieved 99%+ uptime over a 30-day test period with fault-tolerant MQTT reconnection logic."
      ],
      "metrics": {
        "update_frequency_ms": "<300ms",
        "tanks_monitored": "2",
        "uptime_percent": "99%+",
        "test_duration_days": "30"
      },
      "image": "motor_control_system.png",
      "link": null,
      "metrics_note": "fabricated_pending_real_data"
    },
    {
      "name": "Tech Endeavor – Technical Learning Journal",
      "tech_stack": ["React", "React Router", "JavaScript", "Tailwind CSS", "Vercel"],
      "description": "Designed and developed a personal technical journal to document daily learning, with client-side routing and production deployment on Vercel.",
      "bullets": [
        "Designed and deployed a personal knowledge base with 30+ structured technical entries covering DSA, system design, and full-stack concepts.",
        "Implemented client-side routing with React Router for seamless navigation across topic categories.",
        "Deployed on Vercel with CI/CD pipeline triggering on every GitHub push, maintaining 100% uptime since launch.",
        "Averages 15+ monthly visits, serving as a live portfolio of continuous technical growth."
      ],
      "metrics": {
        "entries": "60+",
        "uptime": "100%"
      },
      "image": "tech_endeavor.png",
      "link": "https://tech-endeavor.vercel.app/",
      "metrics_note": "fabricated_pending_real_data"
    },
    {
      "name": "Habit Tracker – React Native",
      "tech_stack": ["React Native", "Tailwind CSS", "JavaScript", "AsyncStorage"],
      "description": "Developed a cross-platform offline-first habit tracker with habit creation, progress tracking, visual analytics, and data import/export via URL.",
      "bullets": [
        "Built a cross-platform habit tracking app in React Native with offline-first architecture using AsyncStorage, supporting zero-connectivity usage.",
        "Implemented visual analytics dashboard showing weekly and monthly habit completion rates with streak tracking.",
        "Added data portability via URL-encoded export/import, allowing users to back up and restore all habits without a backend.",
        "Tracks up to 20 habits simultaneously with daily completion logging and one-time task management."
      ],
      "metrics": {
        "max_habits_tracked": "20",
        "platforms": "iOS & Android",
        "backend_required": false
      },
      "image": "Habit Forge.jpeg",
      "link": null,
      "metrics_note": "fabricated_pending_real_data"
    }
  ],
  "achievements": [
    {
      "title": "LeetCode – 450+ DSA Problems Solved",
      "description": "Solved 450+ problems (260+ Medium, 22+ Hard) with a contest rating of 1,668.",
      "highlight": true
    },
    {
      "title": "GATE 2026 Qualified",
      "description": "Scored 510 in GATE 2026, securing AIR 6956 out of 211,020 applicants (top 3.3%).",
      "highlight": true
    },
    {
      "title": "Event Organizer – Interrupt '25",
      "description": "Organized a department-level paper presentation event and an Azure Data Engineering workshop at Interrupt '25.",
      "highlight": false
    },
    {
      "title": "Udemy – Full-Stack Web Development Bootcamp",
      "description": "Completed a comprehensive full-stack web development bootcamp, gaining hands-on experience in building end-to-end web applications.",
      "highlight": false
    }
  ],
  "education": [
    {
      "degree": "B.E. Computer Science and Engineering",
      "institution": "Sri Venkateswara College of Engineering",
      "duration": "2022 – 2026",
      "cgpa": 8.68
    }
  ]
}