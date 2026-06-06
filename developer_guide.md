# Akshay P L — XR Developer Portfolio (Developer Guide)

This guide is for local development context, outlining project structure, asset staging, and how to add projects.

---

## ⚡ Tech Stack & Performance Architecture

To guarantee the fastest possible page loads and zero server maintenance overhead, the site avoids heavy frontend frameworks (such as React or Angular) and utilizes a **Vanilla Tech Stack**:
1. **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Grid/Flex properties), and Vanilla ECMAScript.
2. **Interactive WebGL Canvas**: A lightweight background wave running on **Three.js** using hardware-accelerated BufferGeometries for a 3D responsive feel without high CPU/RAM overhead.
3. **On-Demand Loading**: Media assets (videos, YouTube iframes) are only loaded/injected into the DOM when a project card is opened, keeping initial load sizes under 1MB.

---

## 📂 Project Folder Structure

```text
Portfolio/
├── index.html                  # Main landing page & Project Grid
├── cv.html                     # Timeline-based interactive Resume
├── style.css                   # Custom stylesheets & media queries
├── script.js                   # Projects database, carousel, & Three.js background code
├── Akshay_PL_Master_CV.pdf     # Direct CV PDF download asset
└── assets/                     # Media directory (thumbnails & video clips)
```

---

## 🛠️ How to Add Projects Manually

Since the site is fully static, adding or editing projects is done directly inside the database array `projectsData` at the top of **`script.js`**. 

To add a new project, copy, customize, and insert the following object template into the array:

```javascript
    {
        name: "Your New Project",
        tag: "Project Subtitle (e.g., Unity Engine)",
        status: "Completed", 
        categories: ["simulation", "hardware", "network"], // Optional filters: "simulation", "hardware", "network"
        outcome: "A concise overview describing the project's final outcome, clients, and purpose.",
        thumbnail: "assets/your_new_thumbnail.jpg", // MUST be an image
        filename: "your_main_media_file.mp4", // Reference placeholder
        mediaList: [
            {
                type: "video", // Options: "video", "image", or "youtube"
                src: "assets/your_main_media_file.mp4",
                caption: "Description shown below this slide."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/VIDEO_ID",
                caption: "YouTube walkthrough video link."
            },
            {
                type: "image",
                src: "assets/extra_screenshot.jpg",
                caption: "Technical visualization preview."
            }
        ],
        bullets: [
            "Your first C# mechanical system detail.",
            "Your second physics telemetry or sensor calibration bullet.",
            "Third optimization detail."
        ]
    },
```

---

## 📋 Staging Asset Checklist

To replace grid and modal placeholders with your real media, place files matching these names into the **`/assets`** directory:

| Project | Asset Type | Expected Filename | Description |
| :--- | :--- | :--- | :--- |
| **AlFursan** | Grid Thumbnail | `alfursan_thumb.jpg` | Grid card preview image |
| | Carousel Video | `alfursan_ui.mp4` | Main local video demonstration |
| | Carousel Image | `alfursan_slide1.jpg` | Hardware light controller screenshot |
| **Qiddiya Aqua Arabia** | Grid Thumbnail | `aqua_arabia_thumb.jpg` | Grid card preview image |
| | Carousel Video | `aqua_arabia_surfing.mp4` | Surfing simulator video clip |
| **e& Money Activation** | Grid Thumbnail | `eandmoney_thumb.jpg` | Grid card preview image |
| | Carousel Video | `eandmoney_mudra_activation.mp4` | Mudra wristband and tablet sync video |
| **EH_WHX** | Grid Thumbnail | `eh_whx_thumb.jpg` | Grid card preview image |
| | Carousel Video | `eh_whx_interactive.mp4` | Exhibition console interface video |
| **Qiddiya_Quiz** | Grid Thumbnail | `qiddiya_quiz_thumb.jpg` | Grid card preview image |
| | Carousel Image | `qiddiya_quiz.png` | Quiz questionnaire screenshot |
| **XRG** | Grid Thumbnail | `xrg_thumb.jpg` | Grid card preview image |
| | Carousel Video | `xrg_webrtc.mp4` | WebRTC sync tablet panel video |

---

## 🚀 Running Locally

You do not need to run a compilation or build pipeline. You can view the site locally in two ways:
1. **Direct Open**: Double-click `index.html` inside your browser file explorer.
2. **Local Static Server (Recommended for local video plays)**: Run `npx serve ./` or use VS Code's "Live Server" extension in the root directory.
