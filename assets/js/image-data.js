// Images data for easy management
const imagePaths = {
    projects: {
        "icd-brookfield": [
            "assets/images/projects/icd-brookfield/main.jpg",
            "assets/images/projects/icd-brookfield/gallery1.jpg",
            "assets/images/projects/icd-brookfield/gallery2.jpg",
            "assets/images/projects/icd-brookfield/gallery3.jpg"
        ],
        "marina-financial": [
            "assets/images/projects/marina-financial/main.jpg",
            "assets/images/projects/marina-financial/gallery1.jpg",
            "assets/images/projects/marina-financial/gallery2.jpg",
            "assets/images/projects/marina-financial/gallery3.jpg"
        ],
        "noor-residences": [
            "assets/images/projects/noor-residences/main.jpg",
            "assets/images/projects/noor-residences/gallery1.jpg",
            "assets/images/projects/noor-residences/gallery2.jpg",
            "assets/images/projects/noor-residences/gallery3.jpg"
        ]
    },
    studio: [
        "assets/images/studio/studio1.jpg",
        "assets/images/studio/studio2.jpg",
        "assets/images/studio/studio3.jpg"
    ]
};

// Function to get project images by slug
function getProjectImages(projectSlug) {
    return imagePaths.projects[projectSlug] || [];
}

// Function to get studio images
function getStudioImages() {
    return imagePaths.studio;
}
