# EthicaData

A static website exploring responsible technology use and ethical data mining, with an emphasis on semantic HTML, accessibility, and standards-compliant design. The project prioritises correctness, clarity, and adherence to web standards over visual novelty or framework usage.

## Live Site

- Live demo: https://ethicadata.netlify.app
- Project repo: https://github.com/baberlabs/ethicadata
- Documentation: see `docs/` for full design and development rationale

## Project Structure

```text
.
├── index.html              # Home page
├── principles.html         # Principles and SDG-related content
├── practice.html           # Practical applications and examples
├── references.html         # Academic and external references
├── contact.html            # Contact form and contact information
├── thank-you.html          # Confirmation page after form submission
├── README.md               # Project overview and structure
│
├── docs/
│   └── design.fig          # Figma design (desktop and mobile)
│   └── design-report.pdf   # Aims, objectives, sitemap, and design notes
│   └── documentation.pdf   # Development notes, implementation changes, and JS functionality
│
├── styles/
│   └── styles.css          # Main stylesheet
│
├── scripts/
│   └── scripts.js          # JavaScript for navigation and filtering
│
├── images/
│   ├── common/             # Shared assets
│   ├── home/               # Home page assets
│   ├── contact/            # Contact page assets
│   └── principles/         # Principles page assets
│
└── validation/
    ├── css-validation-report.pdf
    └── html-validation-reports/
        ├── index.pdf
        ├── principles.pdf
        ├── practice.pdf
        ├── references.pdf
        └── contact.pdf
```

## Technologies Used

- Figma (design)
- HTML5 (semantic markup)
- CSS3 (responsive layout and styling)
- JavaScript (progressive enhancement)
- SVG and optimised raster images

No external frameworks or libraries were used; the project relies on core web standards and native browser behaviour.

## Validation

All HTML pages and the final CSS stylesheet were validated using the W3C HTML and CSS validation services. Validation reports are included in the `validation/` directory as evidence of standards compliance.

## Accessibility

Accessibility was treated as a first-class concern throughout development; related decisions and justifications are documented in `docs/documentation.pdf`.

- Semantic HTML structure
- Keyboard-accessible navigation
- Skip-to-content link
- Minimal and appropriate use of ARIA where semantic HTML alone was insufficient
- Considered and meaningful use of alternative text for images

## Context

Developed for the CMP4310 Website Design and Development module within the BSc Computer Science programme at Birmingham City University.

## Acknowledgements

- Dr Sayan Sarcar — Module Leader and Lecturer, for academic guidance and feedback throughout the project
- Dr Changjiang He — Laboratory Tutor, for providing learning resources and technical support
- Harman Singh — Visiting Demonstrator, for assistance with design and development queries
