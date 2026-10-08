# ISO229 Assessment 4 – Integrated Web Design Project

## Brian Bell HomeCentres – Customer Information Website

This individual project is the final integrated continuation of the website developed for ISO229 Assessments 2 and 3. It demonstrates HTML5, CSS3, responsive design, JavaScript, forms, validation, accessibility, testing and GitHub Pages deployment.

> **Academic note:** This is a student-developed academic project and is not an official Brian Bell HomeCentres website.

## Pages
1. `index.html` – Home page, customer information and FAQ interaction.
2. `services.html` – Product categories, search/filter interaction and product table.
3. `contact.html` – Substantial customer enquiry form, HTML5/JavaScript validation and FAQ interaction.

## Technologies
- HTML5 semantic elements
- CSS3
- Flexbox
- CSS Grid
- Responsive media queries and flexible units
- JavaScript (external `script.js`)
- Git/GitHub
- GitHub Pages

No Bootstrap, Tailwind, WordPress, Wix, downloaded theme, page builder or CSS framework is used.

## JavaScript features
### 1. Product search and category filter
The Products & Services page lets visitors search the category cards and filter them by category. The visible result count updates as the visitor types or changes the filter. A clear button resets the controls.

### 2. Accessible FAQ accordion
FAQ buttons use `aria-expanded` and `aria-controls` to let users expand/collapse useful answers without leaving the current page.

### 3. Form validation and feedback
The enquiry form uses native HTML5 validation plus JavaScript. Invalid input produces a validation message, while valid input displays a confirmation message. The form is deliberately presented as an academic front-end demonstration and does not send customer data to a real business system.

### 4. Local preference
The selected product category on the enquiry page is saved in browser `localStorage` so the visitor's preference can be retained on a later visit in the same browser.

## Responsive and accessibility features
- Responsive layout for mobile, tablet and desktop.
- Flexbox for navigation/button groups.
- CSS Grid for hero, cards, forms and filter layout.
- Media queries for screen-size changes.
- Responsive images with `max-width: 100%` and `height: auto`.
- Semantic HTML5 structure.
- Descriptive page titles and image alternative text.
- Labels associated with form controls.
- HTML5 `required`, type, length and pattern validation.
- Keyboard-visible focus states using `:focus-visible`.
- Readable contrast and clear hierarchy.
- Accessible FAQ controls using ARIA state information.
- Tables use column headings and horizontal scrolling on narrow screens.

## Testing evidence
The `evidence/` folder contains templates and pre-check information. The final submission must include actual screenshots/results for:
- Functional testing
- Responsive testing at approximately 375×812, 768×1024 and 1366×768
- At least two modern browsers where practical
- HTML/CSS validation
- Accessibility testing using Lighthouse or an equivalent browser tool
- JavaScript features

**Do not submit placeholder PASS/FAIL results. Complete the evidence using the tests you actually perform.**

## Project Summary
See `PROJECT-SUMMARY.md` for the required 300–500-word technical project summary.

## AI Use
See `AI-Use-Declaration.md` for the required AI Use Declaration.

## Publication
Repository:
https://github.com/lloydyainter/iso229-assesment-2

Published website:
https://lloydyainter.github.io/iso229-assesment-2/

GitHub Pages should be configured to publish from the `main` branch and root folder. After pushing changes, wait for the Pages deployment to complete and refresh the live website.

## Student
**Name:** Lloyd Yainter  
**Course:** Bachelor of Business in Information Technology  
**Unit:** ISO229 – Web Design  
**Assessment:** Assessment 4 – Individual Integrated Web Design Project  
**Year:** 2026
