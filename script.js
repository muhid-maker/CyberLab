
/* CyberLab Global Settings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #07111f;
    color: #fff;
    line-height: 1.6;
}

button, input {
    font: inherit;
}

button {
    cursor: pointer;
}

[hidden] {
    display: none !important;
}

/* Navigation */
header {
    background: #0b1728;
    border-bottom: 1px solid #1c344b;
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    max-width: 1200px;
    margin: auto;
    padding: 18px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
}

.logo {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;
}

.logo span,
.hero h1 span {
    color: #00e676;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 28px;
}

.nav-links a {
    color: #d5e1ee;
    text-decoration: none;
    transition: .3s;
}

.nav-links a:hover {
    color: #00e676;
}

.nav-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.login-btn, .register-btn, .start-btn {
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}

.login-btn {
    color: #00e676;
    border: 1px solid #00e676;
    background: transparent;
}

.register-btn, .start-btn {
    background: #00e676;
    color: #07111f;
    border: 1px solid #00e676;
}

.user-status {
    color: #00e676;
    font-size: 13px;
    max-width: 150px;
    overflow-wrap: anywhere;
}

.menu-toggle {
    display: none;
    background: transparent;
    color: #00e676;
    border: 1px solid #00e676;
    border-radius: 6px;
    padding: 7px 12px;
    font-size: 22px;
}

/* Hero */
.hero {
    min-height: 520px;
    padding: 100px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, #102c38, #07111f 70%);
}

.welcome-text {
    color: #00e676;
    letter-spacing: 3px;
    font-weight: bold;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: 52px;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-description {
    max-width: 600px;
    color: #b5c4d5;
    margin-bottom: 35px;
    font-size: 17px;
}

.start-btn {
    padding: 14px 28px;
}

/* Courses */
.courses {
    max-width: 1200px;
    margin: auto;
    padding: 75px 25px;
    text-align: center;
}

.courses h2, .about h2 {
    font-size: 34px;
    margin-bottom: 10px;
}

.courses > p {
    color: #aab9ca;
    margin-bottom: 35px;
}

.course-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.course-card {
    background: #101f32;
    border: 1px solid #203c50;
    border-radius: 10px;
    padding: 28px 20px;
    text-align: left;
    transition: .3s;
}

.course-card:hover {
    border-color: #00e676;
    transform: translateY(-5px);
}

.course-card h3 {
    color: #00e676;
    margin-bottom: 12px;
}

.course-card p {
    color: #b5c4d5;
}

/* About and Footer */
.about {
    padding: 75px 25px;
    text-align: center;
    background: #0b1728;
}

.about p {
    max-width: 700px;
    margin: 15px auto 0;
    color: #b5c4d5;
}

footer {
    padding: 25px;
    text-align: center;
    background: #050c16;
    color: #8fa2b8;
    border-top: 1px solid #203c50;
}

/* Authentication */
.auth-modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.88);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.auth-modal.open {
    display: flex;
}

.auth-box {
    background: #101b2a;
    border: 1px solid #20e68a;
    border-radius: 12px;
    padding: 30px;
    width: 100%;
    max-width: 400px;
    color: white;
    position: relative;
}

.auth-box h2 {
    color: #20e68a;
    margin-bottom: 15px;
}

.auth-box input {
    width: 100%;
    padding: 13px;
    margin: 9px 0;
    border-radius: 6px;
    border: 1px solid #45546a;
    background: #19283a;
    color: white;
}

.auth-submit {
    width: 100%;
    padding: 13px;
    margin-top: 15px;
    background: #20e68a;
    color: #071323;
    border: 0;
    border-radius: 6px;
    font-weight: bold;
}

.auth-close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 25px;
    background: transparent;
    color: white;
    border: 0;
}

.auth-switch {
    margin-top: 18px;
    text-align: center;
    font-size: 14px;
}

.auth-switch a {
    color: #20e68a;
    cursor: pointer;
}

/* Dashboard */
#dashboard {
    display: none;
    padding: 45px 5%;
    min-height: 70vh;
    max-width: 1300px;
    margin: auto;
}

.dash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.dash-header h1, .dash-title {
    color: #20e68a;
}

.dash-tabs {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 25px 0;
}

.dash-tabs button, .dash-action {
    background: #19283a;
    color: #20e68a;
    border: 1px solid #20e68a;
    padding: 10px 16px;
    border-radius: 7px;
}

.dash-tabs button.active, .dash-action:hover {
    background: #20e68a;
    color: #071323;
}

.dash-action:disabled, .auth-submit:disabled {
    opacity: .55;
    cursor: not-allowed;
}

.dash-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 18px;
    margin: 25px 0;
}

.dash-card, .lesson-card, .profile-card, .lesson-content-card {
    background: #101b2a;
    border: 1px solid #26394d;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
}

.dash-card h3 {
    color: #20e68a;
}

.dash-card strong {
    font-size: 28px;
}

.lesson-list {
    display: grid;
    gap: 12px;
    margin-top: 20px;
}

.track-heading {
    color: #20e68a;
    margin: 25px 0 10px;
}

.lesson-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.lesson-card h3 {
    margin: 0 0 7px;
    color: #20e68a;
}

.lesson-card p, .dash-small {
    color: #bdc8d5;
    font-size: 14px;
}

.lesson-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.dash-section {
    display: none;
}

.dash-section.active {
    display: block;
}

.dash-message {
    color: #20e68a;
    margin: 12px 0;
}

.profile-card p {
    overflow-wrap: anywhere;
    margin: 8px 0;
}

/* Lesson viewer */
.lesson-content-card {
    margin-top: 20px;
    padding: 28px;
}

.lesson-content-card h2,
.lesson-content-card h3 {
    color: #20e68a;
    margin: 22px 0 10px;
}

.lesson-content-card p,
.lesson-content-card li {
    color: #d0dae5;
    margin-bottom: 10px;
}

.lesson-content-card ul,
.lesson-content-card ol {
    padding-left: 25px;
    margin: 12px 0 20px;
}

.lesson-content-card code {
    background: #19283a;
    color: #20e68a;
    padding: 3px 7px;
    border-radius: 4px;
}

.lesson-content-card pre {
    overflow-x: auto;
    background: #050c16;
    border: 1px solid #26394d;
    padding: 15px;
    border-radius: 8px;
    margin: 12px 0;
    color: #20e68a;
}

.lesson-content-card .bangla {
    border-left: 3px solid #20e68a;
    padding-left: 14px;
    margin: 15px 0;
}

/* Quiz */
.quiz-box {
    background: #0b1728;
    border: 1px solid #26394d;
    border-radius: 8px;
    padding: 20px;
    margin: 25px 0;
}

.quiz-box h3 {
    margin-top: 0;
}

.quiz-option {
    display: block;
    margin: 10px 0;
    color: #d0dae5;
}

.quiz-option input {
    margin-right: 8px;
    accent-color: #20e68a;
}

.quiz-result {
    margin-top: 12px;
    color: #20e68a;
}

@media(max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        order: 4;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .nav-links.menu-open {
        display: flex;
    }

    .nav-buttons {
        margin-left: auto;
    }

    .hero h1 {
        font-size: 36px;
    }

    .course-container {
        grid-template-columns: 1fr;
    }

    #dashboard {
        padding: 30px 5%;
    }

    .lesson-card {
        align-items: flex-start;
    }
}

@media(max-width: 480px) {
    .navbar {
        padding: 14px;
    }

    .logo {
        font-size: 24px;
    }

    .nav-buttons {
        width: 100%;
        justify-content: center;
    }

    .hero {
        padding: 75px 18px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .lesson-content-card {
        padding: 18px;
    }
}
