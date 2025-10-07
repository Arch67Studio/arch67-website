// Projects data
const projects = [
    {
        id: 1,
        title: "Expo2020 - Chile Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: true,
        description: "The Chile Pavilion at Expo 2020 Dubai showcased the country’s creativity, culture, and innovation. Inspired by Chile’s Antarctic landscapes, the pavilion combined an exhibition space with offices for the Chilean delegation. Visitors explored interactive displays about Chile’s natural beauty, sustainability, food, renewable energy, and technology. The design featured warm Chilean wood, copper finishes, and artistic installations made from recycled materials. A striking entrance with large wooden penguins welcomed guests and set the tone for an engaging cultural experience. Inside, digital screens and immersive displays brought Chile’s stories to life. The space was also designed to host meetings, events, and official gatherings. With a total value of AED 7.8 million, the project reflected careful design, coordination, and execution to represent Chile proudly on the world stage at Expo 2020.",
        details: {
            "Client": "Republic of Chile – Ministry of Foreign Affairs",
            "Area": "1,200 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Capacity": "180 pax ",
            "Awards": "Expo 2020 Sustainability Recognition (Participant Pavilion)"
        },
        images: [
            "assets/images/projects/Chile Pavilion/C-1.jpg",
            "assets/images/projects/Chile Pavilion/C-2.jpg",
            "assets/images/projects/Chile Pavilion/C-3.jpg"
        ]
    },
    {
        id: 2,
        title: "Expo2020 - Mexico Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: true,
        description: "The Mexico Pavilion at Expo 2020 Dubai, themed “Tejiendo Vidas” (Weaving Lives), celebrated the country’s vibrant culture, biodiversity, and craftsmanship. Located in the Mobility District, the pavilion featured a stunning hand-woven façade created by over 200 female artisans from Etzatlán, Jalisco, using thousands of raffia palm pieces in rich, colorful patterns. Inside, visitors were immersed in multimedia exhibits that highlighted Mexico’s heritage, from ancient civilizations and natural beauty to art, gastronomy, and innovation. The space also hosted cultural performances, business meetings, and tourism showcases, offering a platform for exchange and collaboration. Designed to blend creativity with sustainability, the pavilion stood as a symbol of unity, diversity, and the spirit of Mexican craftsmanship brought to life on a global stage.",
        details: {
            "Client": "Government of Mexico - Ministry of Foreign Affairs",
            "Area": "900 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Capacity": "220 pax ",
            "Awards": "Gold award from Bureau International des Expositions for Exhibition Design in the Mobility District"
        },
        images: [
            "assets/images/projects/Mexico Pavilion/M-1.jpg",
            "assets/images/projects/Mexico Pavilion/M-2.jpg",
            "assets/images/projects/Mexico Pavilion/M-3.jpg",
            "assets/images/projects/Mexico Pavilion/M-4.jpg",
            "assets/images/projects/Mexico Pavilion/M-5.jpg",
            "assets/images/projects/Mexico Pavilion/M-6.jpg",
            "assets/images/projects/Mexico Pavilion/M-7.jpg",
            "assets/images/projects/Mexico Pavilion/M-8.jpg",
            "assets/images/projects/Mexico Pavilion/M-9.jpg"
        ]
    },
    {
        id: 3,
        title: "Neom Sports Village - Beach Games 2024",
        location: "Neom, KSA",
        type: "Events",
        featured: false,
        description: "The Gayal Beach Hub for NEOM Beach Games 2024 was designed as the central venue for beach sports, including triathlon, 3×3 basketball, beach soccer, and open water swimming. Set along NEOM’s pristine coastline, the hub blended competition arenas with fan zones, hospitality areas, and athlete facilities. The architecture emphasized modular, eco-friendly structures that harmonized with the natural landscape while providing high functionality for both participants and spectators. Interactive zones, shaded seating, and media areas ensured an engaging experience for all visitors. With a focus on sustainability, the venue showcased innovative materials and layouts that could be adapted for future sporting and cultural events. The design created a memorable and immersive beach sports environment, highlighting NEOM’s vision for world-class, environmentally conscious events. Project Value – 10 Million AED.",
        details: {
            "Client": "NEOM Sport Authority",
            "Area": "Multiple venues including Beach Hub at Gayal Beach & Mountain Village at Bajdah",
            "Year": "2024",
            "Status": "Completed",
            "Capacity": "1,000 participants (athletes, coaches & officials)"
        },
        images: [
            "assets/images/projects/NSV-2024/N-1.jpg",
            "assets/images/projects/NSV-2024/N-2.jpg",
            "assets/images/projects/NSV-2024/N-3.jpg",
            "assets/images/projects/NSV-2024/N-4.jpg",
            "assets/images/projects/NSV-2024/N-5.jpg",
            "assets/images/projects/NSV-2024/N-6.jpg",
            "assets/images/projects/NSV-2024/N-7.jpg",
            "assets/images/projects/NSV-2024/N-8.jpg"
        ]
    },
    {
        id: 4,
        title: "Shindagha Museum",
        location: "Dubai, UAE",
        type: "cultural",
        featured: false,
        description: "A contemporary Museum in cultural district, designed as a flexible space for exhibitions.",
        details: {
            "Client": "Dubai Government",
            "Area": "8,500 sqm",
            "Year": "2018",
            "Status": "Completed",
            "Capacity": "80000 visitors"
        },
        images: [
            "assets/images/projects/Shindagha Museum/S-1.jpeg",
            "assets/images/projects/Shindagha Museum/S-2.jpeg",
            "assets/images/projects/Shindagha Museum/S-3.jpeg",
            "assets/images/projects/Shindagha Museum/S-4.jpeg",
            "assets/images/projects/Shindagha Museum/S-5.jpeg",
            "assets/images/projects/Shindagha Museum/S-6.jpeg",
            "assets/images/projects/Shindagha Museum/S-7.jpeg",
            "assets/images/projects/Shindagha Museum/S-8.jpeg",
            "assets/images/projects/Shindagha Museum/S-9.jpeg"
        ]
    },
    {
        id: 5,
        title: "Gucci - Pop Up Store ",
        location: "Dubai Mall, UAE",
        type: "Retail",
        featured: true,
        description: "Coming Soon.",
        details: {
            "Client": "Gucci",
            "Area": "95,000 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Completion": "2022"
        },
        images: [
            "assets/images/projects/Gucci/G-1.jpg",
            "assets/images/projects/Gucci/G-2.jpg"
        ]
    },
    {
        id: 6,
        title: "Hermes Kiosk",
        location: "Beirut, Lebanon",
        type: "Retail",
        featured: false,
        description: "Coming Soon.",
        details: {
            "Client": "Hermes",
            "Area": "15 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Sustainability": "Net Zero Energy"
        },
        images: [
            "assets/images/projects/Hermes/H-1.jpg",
            "assets/images/projects/Hermes/H-2.jpg"
        ]
    },
    {
        id: 7,
        title: "Thameen London",
        location: "KSA",
        type: "Retail",
        featured: true,
        description: "Thameen London is a pinnacle of British luxury perfumery, dedicated to the pursuit of olfactory excellence. Our name, 'Thameen,' meaning 'precious' in Arabic, reflects our core philosophy: to seek out and capture the world's most rare and precious ingredients, transforming them into extraordinary fragrances for the discerning individual.",
        details: {
            "Client": "Thameen",
            "Area": "15 sqm",
            "Year": "2022",
            "Status": "Completed",
        },
        images: [
            "assets/images/projects/Thameen/T-1.jpg",
            "assets/images/projects/Thameen/T-2.jpg",
            "assets/images/projects/Thameen/T-3.jpg",
            "assets/images/projects/Thameen/T-4.jpg",
            "assets/images/projects/Thameen/T-5.jpg"
        ]
    },
    {
        id: 8,
        title: "3D Renderings",
        type: "Others",
        featured: false,
        description: "3D Rendering for Different Clients using 3Ds Max/ Vray and Sketchup/ Vray/ Lumion/ Enscape.",
        details: {
            "Client": "Multiple",
            "Area": "n/a",
            "Year": "n/a",
        },
        images: [
            "assets/images/projects/3D Renderings/R-1.jpg",
            "assets/images/projects/3D Renderings/R-2.jpg",
            "assets/images/projects/3D Renderings/R-3.jpg",
            "assets/images/projects/3D Renderings/R-4.jpg",
            "assets/images/projects/3D Renderings/R-5.jpg",
            "assets/images/projects/3D Renderings/R-6.jpg",
            "assets/images/projects/3D Renderings/R-7.jpg",
            "assets/images/projects/3D Renderings/R-8.jpg",
            "assets/images/projects/3D Renderings/R-9.jpg",
            "assets/images/projects/3D Renderings/R-10.jpg"
        ]
    }
];

// News data
const news = [
    {
        id: 1,
        title: "Arch67 Wins International Architecture Award",
        date: "June 15, 2023",
        excerpt: "Our ICD Brookfield Place project has been recognized with the prestigious International Architecture Award for excellence in commercial design.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
        featured: true
    },
    {
        id: 2,
        title: "New Sustainable Design Initiative",
        date: "May 28, 2023",
        excerpt: "We're proud to announce our commitment to carbon-neutral design across all projects by 2025 as part of our sustainability initiative.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        featured: true
    },
    {
        id: 3,
        title: "Arch67 Exhibition Opens in London",
        date: "April 12, 2023",
        excerpt: "Our retrospective exhibition showcasing 15 years of architectural innovation opens at the Design Museum London next month.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        featured: true
    },
    {
        id: 4,
        title: "Noor Residences Receives Design Excellence Award",
        date: "March 22, 2023",
        excerpt: "Our residential project in Doha has been honored with the Middle East Design Excellence Award for innovative residential architecture.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        featured: false
    },
    {
        id: 5,
        title: "Arch67 Expands to Asian Market",
        date: "February 15, 2023",
        excerpt: "We're excited to announce the opening of our new studio in Singapore to better serve our growing client base in Asia.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        featured: false
    },
    {
        id: 6,
        title: "Sustainable Materials Research Partnership",
        date: "January 8, 2023",
        excerpt: "We've partnered with leading universities to research and develop new sustainable building materials for future projects.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        featured: false
    }
];
