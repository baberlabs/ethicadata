# EthicaData

EthicaData is a static website developed as part of the CMP4310 Website Design and Development module at Birmingham City University. The site explores principles of responsible technology use and ethical data mining, with a focus on semantic HTML, accessibility, and standards-compliant design.

The project is implemented using vanilla HTML, CSS, and JavaScript, without external frameworks or libraries.

## Live Site

- Live demo: https://ethicadata.netlify.app
- Project repo: https://github.com/baberlabs/ethicadata.git
- Documentation: See `documentation.pdf` for full design and development rationale

## Project Overview

The website consists of multiple static pages, each addressing a specific aspect of ethical data use. Accessibility and semantic structure were prioritised throughout, and all pages were validated using W3C HTML and CSS validation tools.

Client-side JavaScript is used only where necessary, such as for responsive navigation and search filtering, in order to preserve clarity and maintainability.

## File Structure

```text
.
├── index.html              # Home page
├── principles.html         # Principles and SDG-related content
├── practice.html           # Practical applications and examples
├── references.html         # Academic and external references
├── contact.html            # Contact form and contact information
├── thank-you.html          # Confirmation page after form submission (extra page)
├── documentation.pdf       # Design and development documentation
├── README.md               # Project overview and structure
│
├── styles/
│   └── styles.css          # Main stylesheet
│
├── scripts/
│   └── scripts.js          # JavaScript for navigation and filtering
│
├── images/
│   ├── common/             # Shared logos and decorative assets
│   ├── home/               # Home page images and icons
│   ├── contact/            # Contact page icons and assets
│   └── principles/         # Principles page graphics
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

- HTML5 (semantic markup)
- CSS3 (responsive layout and styling)
- JavaScript (progressive enhancement)
- SVG and optimised raster images

## Validation

All HTML pages and the final CSS stylesheet were validated using the W3C validation services. Validation reports are included in the `validation/` directory as evidence of standards compliance.

## Accessibility

The site was designed with accessibility in mind, including:

- Semantic HTML structure
- Keyboard-accessible navigation
- Skip-to-content link
- Appropriate use of ARIA attributes
- Considered use of alternative text for images

Further details and justifications are provided in `documentation.pdf`.

## Author

Baber Khan  
Student ID 17125325  
BSc Computer Science, Year 1  
Birmingham City University