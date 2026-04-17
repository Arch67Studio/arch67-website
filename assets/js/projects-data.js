// Projects data
const projects = [
    {
        id: 1,
        title: "Jetex Vvip Lounge - Red Sea Airport, KSA",
        location: "Umluj, KSA",
        type: "commercial",
        featured: false,
        description: "Jetex VVIP Lounge at Red Sea Airport (KSA) is an 1,200 sq.m premium facility featuring reception, VIP lounge, gaming area, and dedicated arrival and departure bays. Designed and coordinated in collaboration with Jetex, Red Sea Global, and DAA International, the project delivers a seamless, high-end private aviation experience within the Jetex VVIP terminal, completed between October 2025 and April 2026.",
        details: {
            "Client": "Jetex",
            "Area": "1,200 sqm",
            "Year": "2026",
            "Status": "Completed",
            "Capacity": "150 pax"
        },
        images: ["assets/images/placeholder.jpg"]
    },
    {
        id: 2,
        title: "Rubaiyat",
        location: "Kingdom Tower, Riyadh, KSA",
        type: "Retail",
        featured: false,
        description: "Rubaiyat Fashion Store, Riyadh Tower, KSA, completed September 2025, is an 800 sq.m luxury retail space for a leading fashion brand in Saudi Arabia. The project covered full design and coordination from concept to execution, featuring an exclusive storefront and refined interior finishes that reflect the brand's premium identity.",
        details: {
            "Client": "Rubaiyat Fashion",
            "Area": "800 sqm",
            "Year": "2025",
            "Status": "Completed",
            "Capacity": "120 pax"
        },
        images: [
            "assets/images/projects/rubaiyat/1.jpeg",
            "assets/images/projects/rubaiyat/2.jpeg",
            "assets/images/projects/rubaiyat/3.jpeg",
            "assets/images/projects/rubaiyat/4.jpeg",
            "assets/images/projects/rubaiyat/5.jpeg",
            "assets/images/projects/rubaiyat/6.jpeg"
        ],
        "technicalImages": [
            "assets/images/projects/rubaiyat/technical/1.jpeg",
            "assets/images/projects/rubaiyat/technical/2.jpeg",
            "assets/images/projects/rubaiyat/technical/3.jpeg",
            "assets/images/projects/rubaiyat/technical/4.jpeg",
            "assets/images/projects/rubaiyat/technical/5.jpeg",
            "assets/images/projects/rubaiyat/technical/6.jpeg",
            "assets/images/projects/rubaiyat/technical/7.jpeg",
            "assets/images/projects/rubaiyat/technical/8.jpeg",
            "assets/images/projects/rubaiyat/technical/9.jpeg",
            "assets/images/projects/rubaiyat/technical/10.jpeg",
            "assets/images/projects/rubaiyat/technical/11.jpeg",
            "assets/images/projects/rubaiyat/technical/12.jpeg",
            "assets/images/projects/rubaiyat/technical/13.jpeg"
        ]
    },
    {
        id: 3,
        title: "Philip Morris International",
        location: "Jeddah, KSA",
        type: "Commercial",
        featured: false,
        description: "Philip Morris International Office, Jeddah, KSA, completed May 2025, is a 1,400 sq.m corporate workspace delivered in just 38 days. The project features a dynamic and modern office environment designed to encourage collaboration, enhance employee well-being, and support sustainability.",
        details: {
            "Client": "Philip Morris International",
            "Area": "1,400 sqm",
            "Year": "2025",
            "Status": "Completed",
            "Capacity": "180 pax"
        },
        images: [
            "assets/images/projects/pm/1.jpg",
            "assets/images/projects/pm/2.jpg",
            "assets/images/projects/pm/3.jpg",
            "assets/images/projects/pm/4.jpg",
            "assets/images/projects/pm/5.jpg",
            "assets/images/projects/pm/6.jpg"
        ],
        "technicalImages": [
            "assets/images/projects/pm/technical/1.jpeg",
            "assets/images/projects/pm/technical/2.jpeg",
            "assets/images/projects/pm/technical/3.jpeg",
            "assets/images/projects/pm/technical/4.jpeg",
            "assets/images/projects/pm/technical/5.jpeg",
            "assets/images/projects/pm/technical/6.jpeg",
            "assets/images/projects/pm/technical/7.jpeg",
            "assets/images/projects/pm/technical/8.jpeg",
            "assets/images/projects/pm/technical/9.jpeg"
        ]
    },
    {
        id: 4,
        title: "Layali Diriyah",
        location: "Riyadh, KSA",
        type: "Event",
        featured: false,
        description: "Layali Diriyah, Riyadh, KSA, completed February 2025, is an 8,500 sq.m design-and-build event venue delivered in 45 days.",
        details: {
            "Client": "Diriyah",
            "Area": "8,500 sqm",
            "Year": "2025",
            "Status": "Completed",
            "Capacity": "1500 pax"
        },
        images: [
            "assets/images/projects/ld/0.jpg",
            "assets/images/projects/ld/1.jpg",
            "assets/images/projects/ld/2.jpg",
            "assets/images/projects/ld/3.jpg",
            "assets/images/projects/ld/4.jpg"
        ]
    },
    {
        id: 5,
        title: "Neom Beach Games Village",
        location: "Neom, Gayal, KSA",
        type: "Event",
        featured: false,
        description: "Neom Beach Games Village, NEOM, KSA, completed October 2024, is a large-scale 390,000 sq.m master-planned development.",
        details: {
            "Client": "Neom",
            "Area": "390,000 sqm",
            "Year": "2024",
            "Status": "Completed",
            "Capacity": "1500 pax"
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
        id: 6,
        title: "Zayed National Museum - SZLT",
        location: "Abu Dhabi, UAE",
        type: "Cultural",
        featured: false,
        description: "Contributed to the development of the Shaikh Zayed Life & Times Gallery and the Landscape and Life Gallery at the Zayed National Museum. The role focused on design coordination and integration, ensuring that all elements aligned with the overarching vision of the project. Worked in close collaboration with the client, Department of Culture and Tourism – Abu Dhabi, alongside lead design architects Foster + Partners (with WSP), project management consultants Hill International, and main contractors Six Construct and Trojan Contracting. The project involved coordinating multidisciplinary inputs, resolving design interfaces, and supporting the delivery of immersive, narrative-driven exhibition spaces that reflect the legacy, environment, and cultural history of the UAE.",
        details: {
            "Client": "Abu Dhabi Cultural Department",
            "Area": "4,000 sqm",
            "Year": "2025",
            "Status": "Completed",
            "Capacity": "1000 pax"
        },
        images: [
            "assets/images/projects/szlt/1.jpg",
            "assets/images/projects/szlt/2.jpg",
            "assets/images/projects/szlt/3.jpg",
            "assets/images/projects/szlt/4.jpg"
        ]
    },
    {
        id: 7,
        title: "Thameen London",
        location: "KSA",
        type: "Retail",
        featured: false,
        description: "Thameen London is a pinnacle of British luxury perfumery, dedicated to the pursuit of olfactory excellence.",
        details: {
            "Client": "Thameen",
            "Area": "15 sqm",
            "Year": "2022",
            "Status": "Completed"
        },
        images: [
            "assets/images/projects/Thameen/T-1.jpg",
            "assets/images/projects/Thameen/T-2.jpg",
            "assets/images/projects/Thameen/T-3.jpg",
            "assets/images/projects/Thameen/T-4.jpg",
            "assets/images/projects/Thameen/T-5.jpg"
        ],
        "technicalImages": [
            "assets/images/projects/Thameen/technical/1.jpg",
            "assets/images/projects/Thameen/technical/2.jpg",
            "assets/images/projects/Thameen/technical/3.jpg",
            "assets/images/projects/Thameen/technical/4.jpg",
        ]
    },
    {
        id: 8,
        title: "Hermes Kiosk",
        location: "Beirut, Lebanon",
        type: "Retail",
        featured: false,
        description: "Luxury retail kiosk design for Hermes.",
        details: {
            "Client": "Hermes",
            "Area": "15 sqm",
            "Year": "2021",
            "Status": "Completed"
        },
        images: [
            "assets/images/projects/Hermes/H-1.jpg",
            "assets/images/projects/Hermes/H-2.jpg"
        ],
        "technicalImages": [
            "assets/images/projects/Hermes/technical/1.jpg",
            "assets/images/projects/Hermes/technical/2.jpg",
            "assets/images/projects/Hermes/technical/3.jpg",
            "assets/images/projects/Hermes/technical/4.jpg",
            "assets/images/projects/Hermes/technical/5.jpg",
            "assets/images/projects/Hermes/technical/6.jpg",
            "assets/images/projects/Hermes/technical/7.jpg",
            "assets/images/projects/Hermes/technical/8.jpg",
            "assets/images/projects/Hermes/technical/9.jpg",
            "assets/images/projects/Hermes/technical/10.jpg",
            "assets/images/projects/Hermes/technical/11.jpg"
        ]
    },
    {
        id: 9,
        title: "Gucci - Pop Up Store",
        location: "Dubai Mall, UAE",
        type: "Retail",
        featured: false,
        description: "Pop-up store design for Gucci at Dubai Mall.",
        details: {
            "Client": "Gucci",
            "Area": "95 sqm",
            "Year": "2022",
            "Status": "Completed"
        },
        images: [
            "assets/images/projects/Gucci/G-1.jpg",
            "assets/images/projects/Gucci/G-2.jpg"
        ]
    },
    {
        id: 10,
        title: "Expo2020 - Chile Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: true,
        description: "The Chile Pavilion at Expo 2020 Dubai showcased the country's creativity, culture, and innovation.",
        details: {
            "Client": "Republic of Chile",
            "Area": "1,200 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Capacity": "180 pax",
            "Awards": "Expo 2020 Sustainability Recognition"
        },
        images: [
            "assets/images/projects/Chile Pavilion/C-1.jpg",
            "assets/images/projects/Chile Pavilion/C-2.jpg",
            "assets/images/projects/Chile Pavilion/C-3.jpg"
        ],
        "technicalImages": [
            "assets/images/projects/Chile Pavilion/technical/0.jpg",
            "assets/images/projects/Chile Pavilion/technical/1.jpg",
            "assets/images/projects/Chile Pavilion/technical/2.jpg",
            "assets/images/projects/Chile Pavilion/technical/3.jpg",
            "assets/images/projects/Chile Pavilion/technical/4.jpg",
            "assets/images/projects/Chile Pavilion/technical/5.jpg",
            "assets/images/projects/Chile Pavilion/technical/6.jpg",
            "assets/images/projects/Chile Pavilion/technical/7.jpg",
            "assets/images/projects/Chile Pavilion/technical/8.jpg",
            "assets/images/projects/Chile Pavilion/technical/9.jpg",
            "assets/images/projects/Chile Pavilion/technical/10.jpg",
            "assets/images/projects/Chile Pavilion/technical/11.jpg",
            "assets/images/projects/Chile Pavilion/technical/12.jpg",
            "assets/images/projects/Chile Pavilion/technical/13.jpg",
            "assets/images/projects/Chile Pavilion/technical/14.jpg",
            "assets/images/projects/Chile Pavilion/technical/15.jpg",
            "assets/images/projects/Chile Pavilion/technical/16.jpg",
            "assets/images/projects/Chile Pavilion/technical/17.jpg",
            "assets/images/projects/Chile Pavilion/technical/18.jpg",
            "assets/images/projects/Chile Pavilion/technical/19.jpg",
            "assets/images/projects/Chile Pavilion/technical/20.jpg",
            "assets/images/projects/Chile Pavilion/technical/21.jpg",
            "assets/images/projects/Chile Pavilion/technical/22.jpg",
            "assets/images/projects/Chile Pavilion/technical/23.jpg",
            "assets/images/projects/Chile Pavilion/technical/24.jpg",
            "assets/images/projects/Chile Pavilion/technical/25.jpg",
            "assets/images/projects/Chile Pavilion/technical/26.jpg",
            "assets/images/projects/Chile Pavilion/technical/27.jpg",
            "assets/images/projects/Chile Pavilion/technical/28.jpg",
            "assets/images/projects/Chile Pavilion/technical/29.jpg",
            "assets/images/projects/Chile Pavilion/technical/30.jpg",
            "assets/images/projects/Chile Pavilion/technical/31.jpg",
            "assets/images/projects/Chile Pavilion/technical/32.jpg",
            "assets/images/projects/Chile Pavilion/technical/33.jpg",
            "assets/images/projects/Chile Pavilion/technical/34.jpg",
            "assets/images/projects/Chile Pavilion/technical/35.jpg",
            "assets/images/projects/Chile Pavilion/technical/36.jpg",
            "assets/images/projects/Chile Pavilion/technical/37.jpg",
            "assets/images/projects/Chile Pavilion/technical/38.jpg",
            "assets/images/projects/Chile Pavilion/technical/39.jpg",
            "assets/images/projects/Chile Pavilion/technical/40.jpg",
            "assets/images/projects/Chile Pavilion/technical/41.jpg",
            "assets/images/projects/Chile Pavilion/technical/42.jpg",
            "assets/images/projects/Chile Pavilion/technical/43.jpg",
            "assets/images/projects/Chile Pavilion/technical/44.jpg",
            "assets/images/projects/Chile Pavilion/technical/45.jpg",
            "assets/images/projects/Chile Pavilion/technical/46.jpg",
            "assets/images/projects/Chile Pavilion/technical/47.jpg",
            "assets/images/projects/Chile Pavilion/technical/48.jpg",
            "assets/images/projects/Chile Pavilion/technical/49.jpg",
            "assets/images/projects/Chile Pavilion/technical/50.jpg",
            "assets/images/projects/Chile Pavilion/technical/51.jpg",
            "assets/images/projects/Chile Pavilion/technical/52.jpg",
            "assets/images/projects/Chile Pavilion/technical/53.jpg",
            "assets/images/projects/Chile Pavilion/technical/54.jpg",
            "assets/images/projects/Chile Pavilion/technical/55.jpg"
        ]
    },
    {
        id: 11,
        title: "Expo2020 - Mexico Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: true,
        description: "The Mexico Pavilion at Expo 2020 Dubai, themed 'Tejiendo Vidas' (Weaving Lives), celebrated the country's vibrant culture.",
        details: {
            "Client": "Government of Mexico",
            "Area": "900 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Capacity": "220 pax",
            "Awards": "Gold Award for Exhibition Design"
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
        ],
        "technicalImages": [
            "assets/images/projects/Mexico Pavilion/technical/M-10.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-11.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-12.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-13.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-14.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-15.jpeg",
            "assets/images/projects/Mexico Pavilion/technical/M-16.jpeg"
        ]
    },
    {
        id: 12,
        title: "Shindagha Museum",
        location: "Dubai, UAE",
        type: "cultural",
        featured: true,
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
        id: 13,
        title: "3D Renderings",
        location: "Various",
        type: "Others",
        featured: false,
        description: "3D Rendering for Different Clients using 3Ds Max/ Vray and Sketchup/ Vray/ Lumion/ Enscape.",
        details: {
            "Client": "Multiple",
            "Area": "n/a",
            "Year": "n/a"
        },
        images: [
            "assets/images/projects/3D Renderings/R-1.jpg",
            "assets/images/projects/3D Renderings/R-2.jpg",
            "assets/images/projects/3D Renderings/R-3.jpg",
            "assets/images/projects/3D Renderings/R-4.jpg",
            "assets/images/projects/3D Renderings/R-5.jpg"
        ]
    }
];

// News data
const news = [];

// Log to confirm data loaded
console.log('Projects data loaded successfully. Total projects:', projects.length);
