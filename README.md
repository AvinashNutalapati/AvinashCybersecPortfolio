<h2 align="center">
  Avinash Nutalapati's Cybersecurity Portfolio - v2.0<br/>
</h2>


## TL;DR

Feel free to fork this repo to modify and make your own changes. Thank you!

## Built With

My personal cybersecurity portfolio <a href="https://avinashnutalapati.github.io/AvinashCybersecPortfolio/" target="_blank">Avinash's Site</a> showcases my GitHub projects, resume, and technical skills in cybersecurity.<br/>


This project utilizes the following technologies:

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

## Features

**🔒 Focused on Cybersecurity Projects**

**🎨 Styled with React-Bootstrap and CSS, featuring a centralized steel-blue + silver theme driven by CSS custom properties**

**📱 Fully Responsive and Secure**

## Security Tooling (SAST & SCA)

This repo "eats its own dog food" and ships with automated security checks:

| Layer | Tool | Where |
| --- | --- | --- |
| SAST (code) | `eslint-plugin-security` | `npm run lint` + `.github/workflows/ci.yml` |
| SAST (deep) | GitHub CodeQL | `.github/workflows/codeql.yml` |
| SCA (deps) | `npm audit` (shipped deps) | `npm run audit` + CI |
| SCA (PRs) | GitHub Dependency Review | `.github/workflows/dependency-review.yml` |
| SCA (patching) | Dependabot (weekly) | `.github/dependabot.yml` |

Useful scripts:

- `npm run lint` — ESLint with the security plugin enabled
- `npm run audit` — fail on high-severity advisories in shipped dependencies

## Getting Started

Clone this repository. Ensure you have `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. To run the project: `npm start`

This will launch the app in development mode.\
Visit [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload with edits.

## Usage Instructions

Navigate to `/src/components/` in the project folder. <br/>
Here, you'll find all components used. Edit to add your personal information.

### Show your support

Give a ⭐ if you like this website!

<a href="https://www.buymeacoffee.com/avinashnutu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="60px" width="217px" ></a>

