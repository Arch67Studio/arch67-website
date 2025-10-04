// Projects data
const projects = [
    {
        id: 1,
        title: "ICD Brookfield Place",
        location: "Dubai, UAE",
        type: "commercial",
        featured: true,
        description: "A landmark commercial tower in the heart of Dubai's financial district, featuring innovative sustainable design and state-of-the-art amenities. The building incorporates advanced energy-efficient systems and offers panoramic views of the city skyline.",
        details: {
            "Client": "ICD & Brookfield Properties",
            "Area": "85,000 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Awards": "International Architecture Award 2023"
        },
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
        ]
    },
    {
        id: 2,
        title: "Marina Financial Center",
        location: "Singapore",
        type: "commercial",
        featured: true,
        description: "An iconic financial center located in Singapore's Marina Bay district, designed to create a harmonious balance between corporate functionality and public accessibility. The building features a unique double-skin facade for optimal energy performance.",
        details: {
            "Client": "Marina Bay Development",
            "Area": "120,000 sqm",
            "Year": "2021",
            "Status": "Completed",
            "Sustainability": "LEED Platinum Certified"
        },
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        ]
    },
    {
        id: 3,
        title: "Noor Residences",
        location: "Doha, Qatar",
        type: "residential",
        featured: true,
        description: "Luxury residential towers that redefine urban living in Doha. The design incorporates traditional Qatari architectural elements with contemporary aesthetics, creating private oases in the sky with breathtaking views of the Arabian Gulf.",
        details: {
            "Client": "Qatar Development Authority",
            "Area": "65,000 sqm",
            "Year": "2023",
            "Status": "Completed",
            "Units": "150 Luxury Apartments"
        },
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        ]
    },
    {
        id: 4,
        title: "Expo2020 - Mexico Pavilion",
        location: "Expo2020 - Dubai, UAE",
        type: "cultural",
        featured: false,
        description: "A contemporary art pavilion in London's cultural district, designed as a flexible space for exhibitions and performances. The building features movable walls and adaptable lighting systems to accommodate various art forms.",
        details: {
            "Client": "Mexico Government",
            "Area": "8,500 sqm",
            "Year": "2022",
            "Status": "Completed",
            "Capacity": "50000 visitors"
        },
        images: [
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ]
    },
    {
        id: 5,
        title: "Sky Garden Towers",
        location: "New York, USA",
        type: "residential",
        featured: false,
        description: "Twin residential towers in Manhattan featuring innovative vertical gardens and sustainable design principles. Each apartment includes private outdoor space with integrated planting systems.",
        details: {
            "Client": "Manhattan Living",
            "Area": "95,000 sqm",
            "Year": "2023",
            "Status": "Under Construction",
            "Completion": "2024"
        },
        images: [
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
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
