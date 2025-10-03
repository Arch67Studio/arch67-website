# Arch67 Architecture Website

A modern, responsive architecture website for Arch67 studio.

## Project Structure
arch67-website/
├── index.html # Homepage
├── projects.html # Projects listing page
├── project-detail.html # Individual project detail page
├── studio.html # Studio information page
├── news.html # News and updates page
├── contact.html # Contact page
├── assets/
│ ├── css/
│ │ └── style.css # Main stylesheet
│ ├── js/
│ │ ├── main.js # Main JavaScript functionality
│ │ ├── projects-data.js # Projects and news data
│ │ └── images-data.js # Image path management
│ └── images/
│ ├── projects/
│ │ ├── icd-brookfield/
│ │ ├── marina-financial/
│ │ └── noor-residences/
│ └── studio/
└── README.md


## Features

- **Responsive Design**: Works on all device sizes
- **Transparent Header**: Header becomes solid on scroll
- **Project Filtering**: Filter projects by type (commercial, residential, cultural)
- **Dynamic Content**: Projects and news loaded from JavaScript data
- **Modern Aesthetic**: Clean, professional design inspired by Foster + Partners

## How to Add Content

### Adding New Projects

1. Edit `assets/js/projects-data.js`
2. Add a new project object to the `projects` array
3. Include all required fields: id, title, location, type, featured, description, details, images

### Adding New News Items

1. Edit `assets/js/projects-data.js`
2. Add a new news object to the `news` array
3. Include all required fields: id, title, date, excerpt, image, featured

### Adding Images

1. Place project images in the appropriate folder under `assets/images/projects/`
2. Update the image paths in `assets/js/images-data.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2023 Arch67 Architecture. All rights reserved.
