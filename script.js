
// ==========================================
// CYBERLAB - MAIN APPLICATION
// Learn. Practice. Secure.
// ==========================================

import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Supabase connection
const SUPABASE_URL = "https://riujwawhhsanogqmkqpy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_uyszSBsqn0pm2me_mtEOPQ_JJ1exumQ";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const $ = (id) => document.getElementById(id);

// ==========================================
// MOBILE MENU
// ==========================================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    const menuButton = document.createElement("button");
    menuButton.type = "button";
    menuButton.textContent = "☰";
    menuButton.className = "menu-toggle";
    menuButton.setAttribute("aria-label", "Toggle navigation");
    menuButton.setAttribute("aria-expanded", "false");

    navbar.insertBefore(menuButton, navLinks);

    menuButton.addEventListener("click", () => {
        const open = navLinks.classList.toggle("menu-open");
        menuButton.textContent = open ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("menu-open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} CyberLab. Learn. Practice. Secure.`;
}

// ==========================================
// COURSE AND LESSON DATA
// ==========================================

const tracks = [
    {
        id: "computer",
        name: "Computer Fundamentals",
        description: "Learn computer and web basics.",
        lessons: [
            ["computer-1", "Introduction to Computers"],
            ["computer-2", "How the Internet Works"],
            ["computer-3", "HTML & Website Basics"]
        ]
    },
    {
        id: "networking",
        name: "Networking Fundamentals",
        description: "Understand IP, DNS, ports and networks.",
        lessons: [
            ["network-1", "Introduction to Networking"],
            ["network-2", "IP Address and DNS"],
            ["network-3", "Ports and Protocols"]
        ]
    },
    {
        id: "linux",
        name: "Linux & Kali Linux",
        description: "Learn Linux commands and terminal basics.",
        lessons: [
            ["linux-1", "Introduction to Linux"],
            ["linux-2", "Basic Linux Commands"],
            ["linux-3", "Kali Linux Environment"]
        ]
    },
    {
        id: "python",
        name: "Python for Security",
        description: "Learn Python programming for security.",
        lessons: [
            ["python-1", "Python Introduction"],
            ["python-2", "Variables and Data Types"],
            ["python-3", "Conditions and Loops"]
        ]
    },
    {
        id: "web",
        name: "Web Application Security",
        description: "Understand web application security.",
        lessons: [
            ["web-1", "How Websites Work"],
            ["web-2", "HTTP Requests and Responses"],
            ["web-3", "Introduction to Web Security"]
        ]
    },
    {
        id: "bugbounty",
        name: "Bug Bounty Methodology",
        description: "Learn ethical bug bounty methodology.",
        lessons: [
            ["bug-1", "What is Bug Bounty?"],
            ["bug-2", "Scope and Rules"],
            ["bug-3", "Responsible Vulnerability Reporting"]
        ]
    },
    {
        id: "owasp",
        name: "OWASP Top 10",
        description: "Study common web application risks.",
        lessons: [
            ["owasp-1", "Introduction to OWASP"],
            ["owasp-2", "Broken Access Control"],
            ["owasp-3", "Security Misconfiguration"]
        ]
    }
];

// Each lesson has an English explanation, Bangla explanation,
// learning points, exercise and a short knowledge-check quiz.

const lessonData = {
    "computer-1": {
        en: "A computer is an electronic device that accepts data, processes it and produces information. It uses hardware and software to perform tasks.",
        bn: "Computer হলো একটি electronic device। এটি Data গ্রহণ করে, Process করে এবং Information তৈরি করে। Hardware ও Software একসঙ্গে কাজ করে Computer পরিচালনা করে।",
        points: [
            "Hardware: Physical parts such as keyboard, monitor and CPU.",
            "Software: Programs and operating systems.",
            "Input: Data entered into a computer.",
            "Output: Information produced by a computer."
        ],
        exercise: "Identify three hardware devices and two software programs you use.",
        question: "Which one is an example of computer hardware?",
        options: ["Windows", "Keyboard", "Google Chrome", "Python"],
        answer: 1
    },

    "computer-2": {
        en: "The Internet is a worldwide network connecting computers, phones and servers. A browser sends requests to servers, and servers return information.",
        bn: "Internet হলো সারা বিশ্বের Computer, Mobile ও Server-এর একটি বিশাল Network। Browser Request পাঠায় এবং Server Response দিয়ে Website দেখায়।",
        points: [
            "Client: A device or application requesting information.",
            "Server: A system that provides data or services.",
            "IP Address: A network address.",
            "DNS: Translates domain names into IP addresses.",
            "Browser: Software used to visit websites."
        ],
        exercise: "Visit a website in your browser. Identify the browser as the client application and the website server as the service provider.",
        question: "What does DNS mainly do?",
        options: [
            "Creates images",
            "Translates domain names into IP addresses",
            "Repairs computers",
            "Stores keyboard input"
        ],
        answer: 1
    },

    "computer-3": {
        en: "HTML stands for HyperText Markup Language. It defines the structure of a webpage using elements such as headings, paragraphs, links and images.",
        bn: "HTML দিয়ে Website-এর Structure তৈরি করা হয়। Heading, Paragraph, Link ও Image-এর মতো Element HTML ব্যবহার করে লেখা হয়।",
        points: [
            "HTML: Webpage structure.",
            "CSS: Webpage styling and layout.",
            "JavaScript: Webpage interaction.",
            "The anchor element creates a link.",
            "The href attribute specifies a link destination."
        ],
        exercise: "Create a simple HTML page containing one heading, one paragraph and one link.",
        question: "Which technology is mainly used to structure a webpage?",
        options: ["HTML", "CSS", "SQL", "Linux"],
        answer: 0
    },

    "network-1": {
        en: "A computer network is a group of connected devices that communicate and share resources. Networks can be wired or wireless.",
        bn: "Network হলো একাধিক Device-এর সংযোগ ব্যবস্থা। এর মাধ্যমে Device-গুলো Data আদান-প্রদান এবং Resource Share করতে পারে।",
        points: [
            "LAN: Local Area Network.",
            "WAN: Wide Area Network.",
            "Router: Connects different networks.",
            "Switch: Connects devices within a local network.",
            "Protocol: A set of communication rules."
        ],
        exercise: "Find the router in your home or office and identify the devices connected to it.",
        question: "What does LAN stand for?",
        options: [
            "Large Access Number",
            "Local Area Network",
            "Long Application Name",
            "Linux Area Node"
        ],
        answer: 1
    },

    "network-2": {
        en: "An IP address identifies a device on a network. DNS helps users access websites using readable domain names instead of remembering IP addresses.",
        bn: "IP Address Network-এর মধ্যে Device শনাক্ত করতে সাহায্য করে। DNS Domain Name-কে সংশ্লিষ্ট IP Address-এর সঙ্গে মিলিয়ে দেয়।",
        points: [
            "IPv4 uses 32 bits.",
            "IPv6 uses 128 bits.",
            "Private IP addresses are used inside private networks.",
            "Public IP addresses are used for Internet communication.",
            "DNS records include A, AAAA, MX and CNAME."
        ],
        exercise: "On your own computer, use the ipconfig command on Windows to view your network configuration.",
        question: "Which service translates a domain name into an IP address?",
        options: ["FTP", "DNS", "HTML", "SSH"],
        answer: 1
    },

    "network-3": {
        en: "Ports help a computer direct network traffic to the correct application or service. Protocols define how devices communicate.",
        bn: "Port Computer-এর নির্দিষ্ট Application বা Service-এ Network Traffic পৌঁছাতে সাহায্য করে। Protocol যোগাযোগের নিয়ম নির্ধারণ করে।",
        points: [
            "HTTP commonly uses TCP port 80.",
            "HTTPS commonly uses TCP port 443.",
            "SSH commonly uses TCP port 22.",
            "DNS commonly uses port 53.",
            "TCP provides reliable, connection-oriented communication.",
            "UDP is connectionless and has lower overhead."
        ],
        exercise: "Learn the purpose of ports 22, 53, 80 and 443. Do not scan systems without permission.",
        question: "Which port is commonly used by HTTPS?",
        options: ["21", "22", "80", "443"],
        answer: 3
    },

    "linux-1": {
        en: "Linux is an open-source operating system family. It is widely used in servers, cloud systems, development and cybersecurity.",
        bn: "Linux হলো Open-source Operating System-এর একটি Family। Server, Cloud, Programming এবং Cybersecurity-তে Linux ব্যাপকভাবে ব্যবহৃত হয়।",
        points: [
            "Kernel: The core of the operating system.",
            "Distribution: A packaged Linux operating system.",
            "Terminal: A text-based interface.",
            "Root: The administrative account.",
            "Kali Linux is a security-focused Linux distribution."
        ],
        exercise: "Open a Linux terminal and run the command: whoami",
        question: "What is the core component of an operating system called?",
        options: ["Browser", "Kernel", "Folder", "Website"],
        answer: 1
    },

    "linux-2": {
        en: "Linux commands let users navigate files, manage directories, inspect information and control system tasks through a terminal.",
        bn: "Linux Command ব্যবহার করে Terminal থেকে File দেখা, Folder তৈরি, Directory পরিবর্তন এবং System Information পরীক্ষা করা যায়।",
        points: [
            "pwd: Show the current directory.",
            "ls: List files and folders.",
            "cd: Change directory.",
            "mkdir: Create a directory.",
            "touch: Create an empty file.",
            "cat: Display file content.",
            "whoami: Show the current username."
        ],
        exercise: "In your own Linux environment, run pwd, whoami, ls and mkdir practice-folder.",
        question: "Which command displays the current directory?",
        options: ["pwd", "ls", "mkdir", "touch"],
        answer: 0
    },

    "linux-3": {
        en: "Kali Linux is a Debian-based distribution designed for penetration testing, security research and digital forensics.",
        bn: "Kali Linux হলো Debian-based একটি Distribution। এটি Penetration Testing, Security Research এবং Digital Forensics-এর কাজে ব্যবহৃত হয়।",
        points: [
            "Use a virtual machine for a safe learning environment.",
            "Learn Linux commands before using security tools.",
            "Understand networking fundamentals.",
            "Practice in intentionally vulnerable labs.",
            "Only test systems with explicit authorization."
        ],
        exercise: "Open Kali Linux in your own virtual machine and identify its terminal, file manager and network settings.",
        question: "What is a responsible way to practise Kali Linux?",
        options: [
            "Test random public websites",
            "Use an authorized lab",
            "Attack a neighbour's Wi-Fi",
            "Access unknown servers"
        ],
        answer: 1
    },

    "python-1": {
        en: "Python is a high-level programming language known for readable syntax. It is used in automation, data analysis, web development and security tools.",
        bn: "Python একটি সহজে পড়া যায় এমন High-level Programming Language। Automation, Data Analysis, Web Development এবং Security Tools তৈরিতে এটি ব্যবহার হয়।",
        points: [
            "Python programs are written in .py files.",
            "print() displays output.",
            "Comments begin with #.",
            "Indentation is important in Python.",
            "Python supports reusable functions."
        ],
        exercise: "Write a Python program that prints: Hello, CyberLab!",
        question: "Which Python function displays output?",
        options: ["show()", "print()", "displayText()", "writeLine()"],
        answer: 1
    },

    "python-2": {
        en: "Variables store values in a program. Python supports data types such as strings, integers, floats and booleans.",
        bn: "Variable-এর মধ্যে Program-এর Data রাখা হয়। Python-এ String, Integer, Float এবং Boolean-এর মতো Data Type রয়েছে।",
        points: [
            "name = 'CyberLab' creates a string variable.",
            "age = 20 creates an integer variable.",
            "price = 10.5 creates a float variable.",
            "is_active = True creates a boolean variable.",
            "type() checks an object's type."
        ],
        exercise: "Create variables for your name, age and student status. Print all three.",
        question: "Which data type represents True or False?",
        options: ["String", "Integer", "Boolean", "Float"],
        answer: 2
    },

    "python-3": {
        en: "Conditions allow a program to make decisions. Loops repeat instructions. Python uses if, elif, else, for and while.",
        bn: "Condition Program-কে Decision নিতে সাহায্য করে। Loop একই কাজ বারবার করতে পারে। Python-এ if, elif, else, for এবং while ব্যবহৃত হয়।",
        points: [
            "if checks a condition.",
            "elif checks another condition.",
            "else runs when previous conditions are false.",
            "for repeats over a sequence.",
            "while repeats while a condition remains true."
        ],
        exercise: "Write a program that prints numbers from 1 to 5 using a for loop.",
        question: "Which keyword starts a conditional statement in Python?",
        options: ["repeat", "if", "loop", "check"],
        answer: 1
    },

    "web-1": {
        en: "A website is made of resources such as HTML, CSS, JavaScript, images and other files. A browser requests these resources from a web server.",
        bn: "Website তৈরি হয় HTML, CSS, JavaScript, Image এবং অন্যান্য Resource দিয়ে। Browser Web Server থেকে এসব Resource Request করে।",
        points: [
            "Frontend: The part users interact with.",
            "Backend: Server-side application logic.",
            "Database: Stores application information.",
            "Web server: Delivers website resources.",
            "Browser: Displays the website."
        ],
        exercise: "Open your CyberLab website and identify one frontend element, such as the navigation bar.",
        question: "Which part of a website is directly used by visitors?",
        options: ["Frontend", "Database server only", "Power supply", "Router firmware"],
        answer: 0
    },

    "web-2": {
        en: "HTTP is a protocol used for communication between clients and web servers. A request asks for a resource, and a response contains the result.",
        bn: "HTTP হলো Client ও Web Server-এর মধ্যে Communication Protocol। Client Request পাঠায় এবং Server Response দেয়।",
        points: [
            "GET commonly retrieves information.",
            "POST commonly submits information.",
            "200 means OK.",
            "404 means Not Found.",
            "500 means Internal Server Error.",
            "HTTPS protects HTTP communication using TLS."
        ],
        exercise: "Open browser developer tools, select the Network tab and reload a website you are allowed to inspect.",
        question: "What does HTTP status code 404 mean?",
        options: ["OK", "Not Found", "Server Started", "Access Granted"],
        answer: 1
    },

    "web-3": {
        en: "Web security protects websites, users, data and services from unauthorized access and misuse. Secure development includes validation, authentication and access control.",
        bn: "Web Security Website, User এবং Data-কে Unauthorized Access ও Misuse থেকে রক্ষা করে। Secure Development-এর জন্য Validation, Authentication এবং Access Control গুরুত্বপূর্ণ।",
        points: [
            "Authentication verifies who a user is.",
            "Authorization determines what a user can access.",
            "Input validation checks submitted data.",
            "HTTPS protects data in transit.",
            "Security testing must be authorized."
        ],
        exercise: "Review your own website and identify where login and logout controls appear.",
        question: "What does authentication verify?",
        options: [
            "A user's identity",
            "A website's colour",
            "A computer's screen size",
            "A file's extension"
        ],
        answer: 0
    },

    "bug-1": {
        en: "Bug bounty programs invite security researchers to find and responsibly report vulnerabilities in approved systems. Program rules define what can be tested.",
        bn: "Bug Bounty Program-এ Security Researcher-রা অনুমোদিত System-এর Vulnerability খুঁজে Responsibleভাবে Report করেন। Program-এর Scope ও Rules মেনে কাজ করতে হয়।",
        points: [
            "A vulnerability is a security weakness.",
            "A researcher investigates potential issues.",
            "A program defines its testing scope.",
            "A valid report explains impact and evidence.",
            "Never test outside authorization."
        ],
        exercise: "Read the rules of a public practice program before attempting any security test.",
        question: "What should a researcher check before testing a target?",
        options: [
            "The target's popularity",
            "The program's scope and rules",
            "The website's colour",
            "The server's country"
        ],
        answer: 1
    },

    "bug-2": {
        en: "Scope describes which domains, applications and assets are allowed for testing. Rules may also define prohibited techniques and testing limits.",
        bn: "Scope নির্ধারণ করে কোন Domain, Application বা Asset পরীক্ষা করা যাবে। Rules-এ নিষিদ্ধ Technique এবং Testing Limit-ও থাকতে পারে।",
        points: [
            "In-scope assets are explicitly permitted.",
            "Out-of-scope assets must not be tested.",
            "Read rate limits and program restrictions.",
            "Avoid accessing real user data.",
            "Ask the program for clarification when uncertain."
        ],
        exercise: "Choose a training program and write down two in-scope and two out-of-scope examples from its published policy.",
        question: "Can you test an asset that is explicitly out of scope?",
        options: [
            "Yes, at any time",
            "Only at night",
            "No, not without separate permission",
            "Yes, if it looks vulnerable"
        ],
        answer: 2
    },

    "bug-3": {
        en: "A responsible vulnerability report clearly describes the issue, affected asset, reproducible steps, security impact and suggested remediation.",
        bn: "একটি ভালো Vulnerability Report-এ Issue, Affected Asset, Reproduction Steps, Security Impact এবং সম্ভাব্য Solution পরিষ্কারভাবে লেখা থাকে।",
        points: [
            "Use a clear and specific title.",
            "Identify the affected in-scope asset.",
            "Provide safe reproduction steps.",
            "Explain the realistic security impact.",
            "Do not expose private user data.",
            "Include remediation suggestions when possible."
        ],
        exercise: "Create a sample report for a fictional issue in a local practice application. Do not include real private data.",
        question: "Which item is important in a vulnerability report?",
        options: [
            "Reproduction steps",
            "Unrelated personal information",
            "A guessed reward amount",
            "An unrelated website link"
        ],
        answer: 0
    },

    "owasp-1": {
        en: "OWASP is a nonprofit foundation that provides resources for improving software security. Its Top 10 project highlights important web application security risks.",
        bn: "OWASP Software Security উন্নত করার জন্য বিভিন্ন Resource প্রকাশ করে। OWASP Top 10 Web Application-এর গুরুত্বপূর্ণ Security Risk সম্পর্কে ধারণা দেয়।",
        points: [
            "OWASP stands for Open Worldwide Application Security Project.",
            "The Top 10 is an awareness document.",
            "It helps developers understand common security risks.",
            "It is not a complete security testing checklist.",
            "Learn the risks and their prevention."
        ],
        exercise: "Visit the official OWASP website and read the introduction to the OWASP Top 10.",
        question: "What is the main purpose of OWASP Top 10?",
        options: [
            "Teach graphic design",
            "Highlight important web application security risks",
            "Replace all security testing",
            "Manage computer hardware"
        ],
        answer: 1
    },

    "owasp-2": {
        en: "Broken Access Control occurs when an application does not properly enforce what authenticated users are allowed to do or access.",
        bn: "Broken Access Control ঘটে যখন Application সঠিকভাবে নিয়ন্ত্রণ করতে পারে না কোন User কোন Resource বা Action ব্যবহার করতে পারবে।",
        points: [
            "Authentication and authorization are different.",
            "Users should only access permitted resources.",
            "Server-side permission checks are essential.",
            "Never rely only on hiding buttons in the interface.",
            "Test access control only in authorized environments."
        ],
        exercise: "In a local practice application, review whether a normal user can access a page intended only for an administrator. Do not test a real service without permission.",
        question: "What is a key defence against Broken Access Control?",
        options: [
            "Hide every button",
            "Server-side authorization checks",
            "Use a larger logo",
            "Disable all user accounts"
        ],
        answer: 1
    },

    "owasp-3": {
        en: "Security Misconfiguration happens when systems, applications or cloud services are configured insecurely. Examples include unnecessary services and exposed error details.",
        bn: "Security Misconfiguration ঘটে যখন System, Application বা Cloud Service ভুলভাবে বা অনিরাপদভাবে Configure করা হয়।",
        points: [
            "Remove unnecessary default accounts.",
            "Change default credentials.",
            "Disable unused services and features.",
            "Avoid exposing detailed error messages.",
            "Keep software and configurations updated.",
            "Review security settings regularly."
        ],
        exercise: "Review the security settings of a local practice application and list three configuration improvements.",
        question: "Which is an example of security misconfiguration?",
        options: [
            "Changing default credentials",
            "Keeping software updated",
            "Leaving default passwords unchanged",
            "Disabling unused services"
        ],
        answer: 2
    }
};

// ==========================================
// APPLICATION STATE
// ==========================================

let currentUser = null;
let completedLessons = new Set();
let bookmarkedLessons = new Set();
let currentLessonId = null;
let dashboardLoading = false;

// ==========================================
// AUTHENTICATION UI
// ==========================================

const modal = $("auth-modal");
const form = $("auth-form");
const authMessage = $("auth-message");
const submitButton = $("auth-submit");

let currentMode = "login";

function showAuthMessage(text, success = false) {
    authMessage.textContent = text;
    authMessage.style.color = success ? "#20e68a" : "#ff7777";
}

function openModal(mode) {
    currentMode = mode;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    showAuthMessage("");

    $("auth-title").textContent =
        mode === "register" ? "Student Registration" : "Student Login";

    submitButton.textContent =
        mode === "register" ? "Create Account" : "Login";

    $("student-name").hidden = mode !== "register";
    $("student-name").required = mode === "register";

    $("student-password").autocomplete =
        mode === "register" ? "new-password" : "current-password";

    $("switch-text").textContent =
        mode === "register"
            ? "Already have an account?"
            : "Don't have an account?";

    $("switch-auth").textContent =
        mode === "register" ? "Login" : "Register";
}

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

$("login-button").addEventListener("click", () => openModal("login"));
$("register-button").addEventListener("click", () => openModal("register"));
$("close-auth").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
});

$("switch-auth").addEventListener("click", event => {
    event.preventDefault();
    openModal(currentMode === "login" ? "register" : "login");
});

form.addEventListener("submit", async event => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Please wait...";

    try {
        const email = $("student-email").value.trim();
        const password = $("student-password").value;

        if (currentMode === "register") {
            const fullName = $("student-name").value.trim();

            if (!fullName) {
                throw new Error("Please enter your full name.");
            }

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { full_name: fullName },
                    emailRedirectTo: window.location.origin
                }
            });

            if (error) throw error;

            if (data.session) {
                showAuthMessage("Account created successfully!", true);
                closeModal();
                await showDashboard();
            } else {
                showAuthMessage(
                    "Account created. Please confirm your email, then log in.",
                    true
                );
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            showAuthMessage("Login successful!", true);
            closeModal();
            await showDashboard();
        }
    } catch (error) {
        showAuthMessage(error.message || "Something went wrong.");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent =
            currentMode === "register" ? "Create Account" : "Login";
    }
});

// ==========================================
// COURSE CARDS
// ==========================================

function renderCourseCards() {
    $("course-container").innerHTML = tracks.map((track, index) => `
        <article class="course-card">
            <h3>${String(index + 1).padStart(2, "0")}. ${track.name}</h3>
            <p>${track.description}</p>
            <p class="dash-small">3 beginner lessons</p>
        </article>
    `).join("");
}

renderCourseCards();

// ==========================================
// LESSON HELPERS
// ==========================================

function allLessons() {
    return tracks.flatMap(track =>
        track.lessons.map(([id, name]) => ({
            id,
            name,
            track: track.name
        }))
    );
}

function getLesson(id) {
    return allLessons().find(lesson => lesson.id === id);
}

function getTrackForLesson(id) {
    return tracks.find(track =>
        track.lessons.some(lesson => lesson[0] === id)
    );
}

// ==========================================
// DASHBOARD DATA
// ==========================================

function updateCounts() {
    $("completed-count").textContent = completedLessons.size;
    $("bookmark-count").textContent = bookmarkedLessons.size;
}

async function loadDashboard(user) {
    if (!user || dashboardLoading) return;

    dashboardLoading = true;
    $("dash-status").textContent = "Loading your learning data...";

    try {
        const [profileResult, progressResult, bookmarkResult] =
            await Promise.all([
                supabase.from("profiles")
                    .select("full_name,email")
                    .eq("id", user.id)
                    .maybeSingle(),

                supabase.from("learning_progress")
                    .select("lesson_id,completed")
                    .eq("user_id", user.id),

                supabase.from("bookmarks")
                    .select("lesson_id")
                    .eq("user_id", user.id)
            ]);

        if (profileResult.error) throw profileResult.error;
        if (progressResult.error) throw progressResult.error;
        if (bookmarkResult.error) throw bookmarkResult.error;

        if (currentUser?.id !== user.id) return;

        const profile = profileResult.data || {};
        const fullName =
            profile.full_name ||
            user.user_metadata?.full_name ||
            "Student";

        $("dash-name").textContent = fullName;
        $("profile-name").textContent = fullName;
        $("profile-email").textContent = profile.email || user.email || "";
        $("profile-id").textContent = user.id;

        completedLessons = new Set(
            (progressResult.data || [])
                .filter(item => item.completed)
                .map(item => item.lesson_id)
        );

        bookmarkedLessons = new Set(
            (bookmarkResult.data || []).map(item => item.lesson_id)
        );

        updateCounts();
        renderLessons();
        renderBookmarks();

        $("dash-status").textContent =
            "Your learning data is up to date.";
    } catch (error) {
        console.error("Dashboard loading error:", error);
        $("dash-status").textContent =
            "Could not load your data: " + error.message;
    } finally {
        dashboardLoading = false;
    }
}

// ==========================================
// RENDER LESSON LIST
// ==========================================

function renderLessons() {
    $("lesson-list").innerHTML = tracks.map(track => `
        <div class="track-block">
            <h3 class="track-heading">${track.name}</h3>

            ${track.lessons.map(([id, name]) => `
                <article class="lesson-card">
                    <div>
                        <h3>${name}</h3>
                        <p>${completedLessons.has(id)
                            ? "Completed ✓"
                            : "Not completed"}</p>
                    </div>

                    <div class="lesson-actions">
                        <button class="dash-action"
                            data-action="open"
                            data-id="${id}">
                            Open Lesson
                        </button>

                        <button class="dash-action"
                            data-action="complete"
                            data-id="${id}">
                            ${completedLessons.has(id)
                                ? "Undo Complete"
                                : "Mark Complete"}
                        </button>

                        <button class="dash-action"
                            data-action="bookmark"
                            data-id="${id}">
                            ${bookmarkedLessons.has(id)
                                ? "Saved ★"
                                : "Bookmark ☆"}
                        </button>
                    </div>
                </article>
            `).join("")}
        </div>
    `).join("");
}

// ==========================================
// OPEN AND DISPLAY LESSON
// ==========================================

function openLesson(id) {
    const lesson = getLesson(id);
    const content = lessonData[id];
    const track = getTrackForLesson(id);

    if (!lesson || !content || !track) {
        $("dash-status").textContent = "Lesson content is not available.";
        return;
    }

    currentLessonId = id;

    $("lesson-list").hidden = true;
    $("lesson-view").hidden = false;

    $("lesson-track").textContent = track.name;
    $("lesson-title").textContent = lesson.name;

    $("lesson-content").innerHTML = `
        <h3>English Explanation</h3>
        <p>${content.en}</p>

        <h3>বাংলা ব্যাখ্যা</h3>
        <p class="bangla">${content.bn}</p>

        <h3>Important Learning Points</h3>
        <ul>
            ${content.points.map(point => `<li>${point}</li>`).join("")}
        </ul>

        <h3>Practical Exercise</h3>
        <p>${content.exercise}</p>

        <p class="dash-small">
            Practice only in your own environment or on systems
            where you have explicit permission.
        </p>
    `;

    $("lesson-quiz").innerHTML = `
        <h3>Knowledge Check</h3>
        <p>${content.question}</p>

        <form id="quiz-form">
            ${content.options.map((option, index) => `
                <label class="quiz-option">
                    <input type="radio" name="quiz-answer"
                        value="${index}" required>
                    ${option}
                </label>
            `).join("")}

            <button class="dash-action" type="submit">
                Check Answer
            </button>
        </form>

        <p id="quiz-result" class="quiz-result" role="status"></p>
    `;

    $("lesson-feedback").textContent =
        completedLessons.has(id)
            ? "You have completed this lesson."
            : "";

    $("lesson-complete").textContent =
        completedLessons.has(id)
            ? "Undo Lesson Completion"
            : "Mark Lesson Complete";

    $("lesson-quiz").querySelector("#quiz-form")
        .addEventListener("submit", event => {
            event.preventDefault();

            const selected = $("lesson-quiz")
                .querySelector('input[name="quiz-answer"]:checked');

            const result = $("quiz-result");

            if (!selected) {
                result.textContent = "Please select an answer.";
                return;
            }

            if (Number(selected.value) === content.answer) {
                result.textContent = "Correct answer! Well done.";
            } else {
                result.textContent =
                    "Not quite. Review the lesson and try again.";
            }
        });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

$("back-to-lessons").addEventListener("click", () => {
    $("lesson-view").hidden = true;
    $("lesson-list").hidden = false;
    currentLessonId = null;
});

// ==========================================
// MARK CURRENT LESSON COMPLETE
// ==========================================

$("lesson-complete").addEventListener("click", async () => {
    if (!currentUser || !currentLessonId) return;

    const id = currentLessonId;
    const wasCompleted = completedLessons.has(id);
    const button = $("lesson-complete");

    button.disabled = true;

    try {
        const { error } = await supabase
            .from("learning_progress")
            .upsert({
                user_id: currentUser.id,
                lesson_id: id,
                completed: !wasCompleted,
                updated_at: new Date().toISOString()
            }, {
                onConflict: "user_id,lesson_id"
            });

        if (error) throw error;

        if (wasCompleted) {
            completedLessons.delete(id);
        } else {
            completedLessons.add(id);
        }

        updateCounts();
        renderLessons();

        button.textContent = completedLessons.has(id)
            ? "Undo Lesson Completion"
            : "Mark Lesson Complete";

        $("lesson-feedback").textContent =
            completedLessons.has(id)
                ? "Lesson completed and progress saved!"
                : "Lesson marked as incomplete.";

        $("dash-status").textContent = "Your progress has been saved.";
    } catch (error) {
        $("lesson-feedback").textContent = error.message;
    } finally {
        button.disabled = false;
    }
});

// ==========================================
// BOOKMARKS
// ==========================================

function renderBookmarks() {
    const saved = allLessons().filter(item =>
        bookmarkedLessons.has(item.id)
    );

    $("bookmark-list").innerHTML = saved.length
        ? saved.map(item => `
            <article class="lesson-card">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.track}</p>
                </div>
                <div class="lesson-actions">
                    <button class="dash-action"
                        data-action="open"
                        data-id="${item.id}">
                        Open Lesson
                    </button>
                    <button class="dash-action"
                        data-action="bookmark"
                        data-id="${item.id}">
                        Remove ★
                    </button>
                </div>
            </article>
        `).join("")
        : "<p class='dash-small'>You have no saved lessons yet.</p>";
}

// ==========================================
// LESSON AND BOOKMARK ACTIONS
// ==========================================

$("dashboard").addEventListener("click", async event => {
    const button = event.target.closest("button[data-action]");

    if (!button || !currentUser) return;

    const id = button.dataset.id;
    const action = button.dataset.action;

    if (action === "open") {
        openLesson(id);
        return;
    }

    button.disabled = true;

    try {
        if (action === "complete") {
            const wasCompleted = completedLessons.has(id);

            const { error } = await supabase
                .from("learning_progress")
                .upsert({
                    user_id: currentUser.id,
                    lesson_id: id,
                    completed: !wasCompleted,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: "user_id,lesson_id"
                });

            if (error) throw error;

            if (wasCompleted) completedLessons.delete(id);
            else completedLessons.add(id);
        }

        if (action === "bookmark") {
            if (bookmarkedLessons.has(id)) {
                const { error } = await supabase
                    .from("bookmarks")
                    .delete()
                    .eq("user_id", currentUser.id)
                    .eq("lesson_id", id);

                if (error) throw error;
                bookmarkedLessons.delete(id);
            } else {
                const { error } = await supabase
                    .from("bookmarks")
                    .insert({
                        user_id: currentUser.id,
                        lesson_id: id
                    });

                if (error) throw error;
                bookmarkedLessons.add(id);
            }
        }

        updateCounts();
        renderLessons();
        renderBookmarks();

        $("dash-status").textContent = "Your changes have been saved.";
    } catch (error) {
        $("dash-status").textContent = error.message;
    } finally {
        button.disabled = false;
    }
});

// ==========================================
// DASHBOARD TABS
// ==========================================

function showTab(tab) {
    document.querySelectorAll(".dash-section").forEach(section => {
        section.classList.toggle("active", section.id === tab);
    });

    document.querySelectorAll(".dash-tabs button").forEach(button => {
        button.classList.toggle("active", button.dataset.tab === tab);
    });

    if (tab === "my-courses") {
        $("lesson-view").hidden = true;
        $("lesson-list").hidden = false;
        currentLessonId = null;
    }
}

document.querySelectorAll(".dash-tabs button").forEach(button => {
    button.addEventListener("click", () => showTab(button.dataset.tab));
});

// ==========================================
// SHOW AND HIDE DASHBOARD
// ==========================================

async function showDashboard() {
    if (!currentUser) {
        openModal("login");
        return;
    }

    $("home").hidden = true;
    $("courses").hidden = true;
    $("about").hidden = true;
    $("dashboard").style.display = "block";

    showTab("overview");

    await loadDashboard(currentUser);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
    $("dashboard").style.display = "none";
    $("home").hidden = false;
    $("courses").hidden = false;
    $("about").hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

$("dashboard-button").addEventListener("click", showDashboard);
$("back-home").addEventListener("click", showHome);

// ==========================================
// USER SESSION
// ==========================================

function renderUser(user) {
    currentUser = user;

    $("login-button").hidden = !!user;
    $("register-button").hidden = !!user;
    $("dashboard-button").hidden = !user;
    $("logout-button").hidden = !user;

    $("user-status").textContent = user
        ? (user.user_metadata?.full_name || user.email || "Student")
        : "";

    if (user) {
        loadDashboard(user);
    } else {
        $("dashboard").style.display = "none";
        showHome();

        completedLessons.clear();
        bookmarkedLessons.clear();

        updateCounts();

        $("profile-name").textContent = "Not logged in";
        $("profile-email").textContent = "Not logged in";
        $("profile-id").textContent = "Not logged in";

        renderLessons();
        renderBookmarks();
    }
}

$("logout-button").addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        alert(error.message);
    } else {
        closeModal();
        showHome();
    }
});

// Listen for login, logout and session changes.
// Keep the callback synchronous to avoid Supabase auth lock issues.
supabase.auth.onAuthStateChange((_event, session) => {
    setTimeout(() => {
        renderUser(session?.user || null);
    }, 0);
});

// Restore an existing login session.
const { data, error } = await supabase.auth.getSession();

if (error) {
    console.error("Session error:", error);
}

renderUser(data.session?.user || null);

// Open dashboard when the URL contains #dashboard.
if (window.location.hash === "#dashboard" && data.session?.user) {
    await showDashboard();
}
