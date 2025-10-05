// Projects data
const projects = [
    {
        id: 1,
        title: "Expo2020 - Chile Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: true,
        description: "A contemporary Exhibit pavilion in Expo2020 cultural district, designed as a flexible space for exhibitions and Office. Design, co-ordination and Execution of Exhibition, Oﬃce space for Republic of Chile in Rented Pavilion, Expo 2020. Project Value – 7.8 Million AED.",
        details: {
            "Client": "ICD & Brookfield Properties",
            "Area": "85,000 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Awards": "International Architecture Award 2023"
        },
        images: [
            "assets/images/projects/Mexico Pavilion/M-8.jpg",
            "assets/images/projects/Mexico Pavilion/M-9.jpg",
            "assets/images/projects/Mexico Pavilion/M-10.jpg"
        ]
    },
    {
        id: 4,
        title: "Expo2020 - Mexico Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: false,
        description: "A contemporary Exhibit pavilion in Expo2020 cultural district, designed as a flexible space for exhibitions and Office. Design, co-ordination and Execution of Exhibition, Oﬃce space for Republic of Mexico in Rented Pavilion, Expo 2020. Project Value – 7.8 Million AED.",
        details: {
            "Client": "Mexico Government",
            "Area": "8,500 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Capacity": "50000 visitors"
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
            "assets/images/projects/Mexico Pavilion/M-9.jpg",
            "assets/images/projects/Mexico Pavilion/M-10.jpg"
        ]
    },
    {
        id: 3,
        title: "Neom Sports Village - Beach Games 2024",
        location: "Neom, KSA",
        type: "Events",
        featured: true,
        description: "Design, co-ordination and Execution of Neom Sports Village in Gayal, Neom, Saudi Arabia. Project Value – 10 Million AED.",
        details: {
            "Client": "Neom Sports Authority",
            "Area": "65,000 sqm",
            "Year": "2024",
            "Status": "Completed",
            "Units": "350 Luxury Accomodations"
        },
        images: [
            "assets/images/projects/Mexico Pavilion/M-1.jpg",
            "assets/images/projects/Mexico Pavilion/M-2.jpg",
            "assets/images/projects/Mexico Pavilion/M-10.jpg"
        ]
    },
    {
        id: 4,
        title: "Expo2020 - Mexico Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: false,
        description: "A contemporary Exhibit pavilion in Expo2020 cultural district, designed as a flexible space for exhibitions and Office. Design, co-ordination and Execution of Exhibition, Oﬃce space for Republic of Mexico in Rented Pavilion, Expo 2020. Project Value – 7.8 Million AED.",
        details: {
            "Client": "Mexico Government",
            "Area": "8,500 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Capacity": "50000 visitors"
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
            "assets/images/projects/Mexico Pavilion/M-9.jpg",
            "assets/images/projects/Mexico Pavilion/M-10.jpg"
        ]
    },
    {
        id: 5,
        title: "Gucci - Pop Up Store ",
        location: "Dubai Mall, UAE",
        type: "Retail",
        featured: false,
        description: "TBC.",
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
        title: "Innovation Campus",
        location: "Berlin, Germany",
        type: "commercial",
        featured: false,
        description: "A technology campus designed to foster collaboration and innovation. The campus includes research facilities, collaborative workspaces, and recreational areas in a park-like setting.",
        details: {
            "Client": "Berlin Tech Hub",
            "Area": "150,000 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Sustainability": "Net Zero Energy"
        },
        images: [
            "assets/images/projects/Mexico Pavilion/M-8.jpg",
            "assets/images/projects/Mexico Pavilion/M-9.jpg",
            "assets/images/projects/Mexico Pavilion/M-10.jpg"
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
