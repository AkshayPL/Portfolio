// Projects Database with categories, card thumbnails, and multi-asset modal slide carousels
const projectsData = [
    {
        name: "AlFursan",
        tag: "Interactive Exhibit App",
        status: "Completed",
        categories: ["hardware", "network"],
        outcome: "An interactive multi-screen control panel designed for immersive exhibition kiosks, enabling users to seamlessly control environmental systems, physical LED lighting arrays, and log engagement metrics.",
        thumbnail: "assets/alfursan_thumb.jpg",
        filename: "alfursan_ui.mp4",
        mediaList: [
            {
                type: "video",
                src: "assets/alfursan_ui.mp4",
                caption: "Main UI Demonstration: Page transitions, layout animations, and environmental controls."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Project walkthrough / concept demo video"
            },
            {
                type: "image",
                src: "assets/alfursan_slide1.jpg",
                caption: "Hardware Integration: UDP networking and lighting sync console."
            }
        ],
        bullets: [
            "Implemented a page-based UI state transition controller using CanvasGroups and DOTween animations for smooth alpha fades (Home, Life, Today).",
            "Designed a network integration layer via custom UDP sender/receiver scripts to broadcast control triggers to external displays based on UI click actions.",
            "Built a custom data logger and local file writer to track user clicks, registration selections, and page transition timestamps.",
            "Integrated synchronized hardware control utilizing an LED manager to trigger visual physical light cues mapped to UI events."
        ]
    },
    {
        name: "Qiddiya Aqua Arabia",
        tag: "Immersive Surfing Simulator",
        status: "Completed",
        categories: ["simulation", "hardware"],
        outcome: "An immersive physical surfing simulator built for Qiddiya's Aqua Arabia marketing stall at a major E-Sports event. Visitors stood on a physical surfboard outfitted with an Arduino and MPU6050 gyro sensor, bending left and right to steer through a virtual wave pool, collecting positive items and avoiding obstacles.",
        thumbnail: "assets/aqua_arabia_thumb.jpg",
        filename: "aqua_arabia_surfing.mp4",
        mediaList: [
            {
                type: "video",
                src: "assets/aqua_arabia_surfing.mp4",
                caption: "Physical surfboard interaction in front of the projector gameplay screen."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Gameplay walkthrough and sensor calibration setup"
            }
        ],
        bullets: [
            "Integrated an Arduino with an MPU6050 IMU gyroscope sensor mounted to a physical surfboard to transmit real-time roll/pitch tilt data over serial/UDP.",
            "Programmed a responsive C# surfboard physics controller that mapped incoming hardware telemetry into screen steering (yaw) and visual board leaning (roll).",
            "Developed proactive raycast-based boundary guides and collider triggers to safely keep players within the wave pool gameplay bounds.",
            "Configured collectible spawners, score counters, countdown state machines, and a local leaderboard to drive competitive E-Sports event engagement."
        ]
    },
    {
        name: "e& Money Activation",
        tag: "Gesture-Controlled Engagement",
        status: "Completed",
        categories: ["simulation", "hardware", "network"],
        outcome: "A dual-device interactive marketing engagement created for e& money in Dubai to promote fintech services. Visitors registered on a secondary tablet (e& Tablet) which synchronized data via UDP, then played the main coin-collection game on a main display wearing a neural gesture-controlled Mudra Band.",
        thumbnail: "assets/eandmoney_thumb.jpg",
        filename: "eandmoney_mudra_activation.mp4",
        mediaList: [
            {
                type: "video",
                src: "assets/eandmoney_mudra_activation.mp4",
                caption: "User registering on secondary tablet and playing using hand gestures via Mudra Band."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Dubai Fintech Event Activation overview video"
            }
        ],
        bullets: [
            "Developed a dual-device ecosystem syncing a registration tablet kiosk (e& Tablet) with a main gaming machine via low-latency UDP sockets.",
            "Integrated a gesture-controlled neural Mudra Band wearable, translating wrist-based neural gesture signals into screen movements (moving and collecting coins).",
            "Designed dynamic minigame managers supporting gold/forex currency collect modes, buy/sell flips, and visual particle feedback.",
            "Configured a centralized session tracker sending confirmation emails asynchronously and accumulating scores to drive marketing leaderboard engagements."
        ]
    },
    {
        name: "EH_WHX",
        tag: "Interactive Video App",
        status: "Completed",
        categories: ["simulation"],
        outcome: "A bilingual interactive presentation console deployed at corporate exhibitions, allowing visitors to slide up project outlines and play localized video guides.",
        thumbnail: "assets/eh_whx_thumb.jpg",
        filename: "eh_whx_interactive.mp4",
        mediaList: [
            {
                type: "video",
                src: "assets/eh_whx_interactive.mp4",
                caption: "Console Interface: Slide-up UI project lists and English/Arabic high-definition AVPro video loops."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Exhibit installation interaction video"
            }
        ],
        bullets: [
            "Created a canvas-based page navigation controller handling transition animations (DOFade, DOLocalMoveY) between Idle, Home, Language Selection, and Video player screens.",
            "Designed custom interactive list buttons that dynamically slide up hidden preview graphics before loading media.",
            "Implemented a language selection interface mapping user preferences to corresponding English or Arabic high-definition AVPro video streams.",
            "Integrated an activity watchdog timer resetting the experience back to the idle screen upon prolonged inactivity."
        ]
    },
    {
        name: "Qiddiya_Quiz",
        tag: "Q&A Kiosk & Backend",
        status: "Completed",
        categories: ["network"],
        outcome: "An automated Q&A exhibition kiosk featuring visitor registration, trivia games, and localized UDP network hooks to trigger synchronized lighting cues on correct answers.",
        thumbnail: "assets/qiddiya_quiz_thumb.jpg",
        filename: "qiddiya_quiz.png",
        mediaList: [
            {
                type: "image",
                src: "assets/qiddiya_quiz.png",
                caption: "Interactive Q&A Kiosk interface showing user registration and dynamic score results."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Quiz gameplay loop and hardware integration preview"
            }
        ],
        bullets: [
            "Developed a multi-step questionnaire application with user registration forms, regex email checks, and Q&A options.",
            "Designed quiz logic managing question sequencing, correct answer evaluations, and transition screens showing fun trivia cards.",
            "Wrote a local CSV database wrapper logging user details, question choices, score outcomes, and consent states.",
            "Established hardware integration communicating with local UDP networks to toggle physical lighting based on quiz results."
        ]
    },
    {
        name: "XRG",
        tag: "WebRTC Dashboard",
        status: "Completed",
        categories: ["network"],
        outcome: "A multi-device synchronised control console using low-latency WebRTC streams to link client tablets with main server exhibition displays and manage media playbacks.",
        thumbnail: "assets/xrg_thumb.jpg",
        filename: "xrg_webrtc.mp4",
        mediaList: [
            {
                type: "video",
                src: "assets/xrg_webrtc.mp4",
                caption: "Multi-Device Sync: WebRTC remote control between controller tablet and primary server display."
            },
            {
                type: "youtube",
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "WebRTC low-latency streaming pipeline demo"
            }
        ],
        bullets: [
            "Created a WebRTC networking pipeline streaming remote control instructions and syncing UI state between client and server devices.",
            "Designed a showcase dashboard managing focus screens for industry sectors (International, Chemical, Energy) and partner profiles.",
            "Integrated AVPro MediaPlayer controllers triggering corporate clips (English/Arabic) and returning to home on video completion.",
            "Configured a screensaver manager detecting idle timeouts to activate looping background video layers, instantly deactivated by WebRTC events."
        ]
    }
];

// Carousel Active State
let currentSlideIndex = 0;
let currentMediaList = [];

// Populate Cards Dynamically with Filtering and Spotlights
document.addEventListener("DOMContentLoaded", () => {
    // Render initial grid
    renderGrid("all");

    // Setup Category Filter Buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove active class from all
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Set current active
            const currentTarget = e.currentTarget;
            currentTarget.classList.add("active");
            
            // Re-render grid
            const selectedFilter = currentTarget.getAttribute("data-filter");
            renderGrid(selectedFilter);
        });
    });

    // Scroll Progress bar
    window.addEventListener("scroll", () => {
        const progressBar = document.getElementById("scroll-progress");
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            progressBar.style.width = scrolled + "%";
        }
    });
    
    // Modal Setup
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");
    
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Carousel Button listeners
    document.getElementById("carousel-prev").addEventListener("click", prevSlide);
    document.getElementById("carousel-next").addEventListener("click", nextSlide);

    // Initialize WebGL Particle Background
    initWebGLBackground();
});

// Render grid based on filter selection
function renderGrid(filter) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    projectsData.forEach((project, index) => {
        // Filter condition check
        if (filter !== "all" && !project.categories.includes(filter)) {
            return;
        }

        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-media-wrapper">
                <img src="${project.thumbnail}" alt="${project.name}" class="card-thumbnail" id="thumb-${index}">
                <div class="wireframe-placeholder" id="placeholder-${index}">
                    <i class="fa-solid fa-image placeholder-icon"></i>
                    <span class="placeholder-text">${project.name}</span>
                    <div class="wireframe-dimensions">${project.thumbnail}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <span class="tag-badge">${project.tag}</span>
                    <span class="status-badge">${project.status}</span>
                </div>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-outcome-text">${project.outcome}</p>
                <div class="card-footer">
                    <span>Technical Architecture</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;
        
        card.addEventListener("click", () => openModal(index));
        grid.appendChild(card);

        // Fallback handler if thumbnail fails to load
        const img = card.querySelector(`#thumb-${index}`);
        const placeholder = card.querySelector(`#placeholder-${index}`);
        
        img.addEventListener('load', () => {
            placeholder.style.display = "none";
        });
        
        img.addEventListener('error', () => {
            img.style.display = "none";
            placeholder.style.display = "flex";
        });

        // Trigger reload check
        if (img.complete) {
            if (img.naturalWidth === 0) {
                img.dispatchEvent(new Event('error'));
            } else {
                img.dispatchEvent(new Event('load'));
            }
        }
    });

    // Re-bind glassmorphism spotlight events to newly rendered card elements
    applySpotlightEffects();
}

// Spotlight glassmorphism card tracking
function applySpotlightEffects() {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

// Modal & Carousel Logic
function openModal(index) {
    const project = projectsData[index];
    const modal = document.getElementById("project-modal");
    
    document.getElementById("modal-title").innerText = project.name;
    document.getElementById("modal-tag").innerText = project.tag;
    document.getElementById("modal-outcome").innerText = project.outcome;
    document.getElementById("modal-asset-name").innerText = project.filename;
    
    // Set up media list
    currentMediaList = project.mediaList || [];
    currentSlideIndex = 0;

    // Render slides
    renderSlides();

    // Load Bullets
    const bulletsContainer = document.getElementById("modal-bullets");
    bulletsContainer.innerHTML = project.bullets
        .map(bullet => `<li>${bullet}</li>`)
        .join("");
        
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function renderSlides() {
    const slidesContainer = document.getElementById("carousel-slides");
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    slidesContainer.innerHTML = "";
    dotsContainer.innerHTML = "";

    if (currentMediaList.length === 0) {
        slidesContainer.innerHTML = `
            <div class="carousel-slide active">
                <div class="wireframe-placeholder">
                    <i class="fa-solid fa-circle-exclamation placeholder-icon"></i>
                    <span class="placeholder-text">No media loaded.</span>
                </div>
            </div>
        `;
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        return;
    }

    // Populate Slides
    currentMediaList.forEach((media, idx) => {
        const slide = document.createElement("div");
        slide.className = `carousel-slide ${idx === 0 ? 'active' : ''}`;
        
        let mediaHtml = "";
        const slideId = `slide-media-${idx}`;
        const placeholderId = `slide-placeholder-${idx}`;

        const wireframePlaceholderHtml = `
            <div class="wireframe-placeholder" id="${placeholderId}" style="position:absolute; top:0; left:0; width:100%; height:100%; display:flex; z-index:1;">
                <i class="${media.type === 'video' ? 'fa-solid fa-video' : 'fa-solid fa-image'} placeholder-icon"></i>
                <span class="placeholder-text">${media.caption || 'Loading Media...'}</span>
                <div class="wireframe-dimensions">Required: ${media.src}</div>
            </div>
        `;

        if (media.type === "youtube") {
            mediaHtml = `
                <iframe id="${slideId}" src="${media.src}?enablejsapi=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else if (media.type === "video") {
            mediaHtml = `
                ${wireframePlaceholderHtml}
                <video id="${slideId}" controls style="display:none; z-index:2;">
                    <source src="${media.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            mediaHtml = `
                ${wireframePlaceholderHtml}
                <img id="${slideId}" src="${media.src}" alt="${media.caption}" style="display:none; z-index:2;">
            `;
        }

        slide.innerHTML = `
            ${mediaHtml}
            <div class="slide-caption" style="z-index:3;">${media.caption || ''}</div>
        `;
        slidesContainer.appendChild(slide);

        // Wire up media load/error states for images & videos
        if (media.type === "image") {
            const img = slide.querySelector(`#${slideId}`);
            const placeholder = slide.querySelector(`#${placeholderId}`);
            
            img.addEventListener('load', () => {
                placeholder.style.display = "none";
                img.style.display = "block";
            });
            img.addEventListener('error', () => {
                placeholder.style.display = "flex";
                img.style.display = "none";
            });
        } else if (media.type === "video") {
            const video = slide.querySelector(`#${slideId}`);
            const placeholder = slide.querySelector(`#${placeholderId}`);
            
            video.addEventListener('loadeddata', () => {
                placeholder.style.display = "none";
                video.style.display = "block";
            });
            video.addEventListener('error', () => {
                placeholder.style.display = "flex";
                video.style.display = "none";
            });
        }

        // Add dot indicators
        const dot = document.createElement("div");
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener("click", () => showSlide(idx));
        dotsContainer.appendChild(dot);
    });

    if (currentMediaList.length <= 1) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        dotsContainer.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
        dotsContainer.classList.remove("hidden");
    }
}

function showSlide(index) {
    if (index < 0) index = currentMediaList.length - 1;
    if (index >= currentMediaList.length) index = 0;

    // Pause current active video or iframe video before changing slides
    const currentActiveSlide = document.querySelector(".carousel-slide.active");
    if (currentActiveSlide) {
        const localVideo = currentActiveSlide.querySelector("video");
        if (localVideo) {
            localVideo.pause();
        }
        const ytIframe = currentActiveSlide.querySelector("iframe");
        if (ytIframe) {
            const src = ytIframe.src;
            ytIframe.src = src; 
        }
    }

    currentSlideIndex = index;

    // Update active class on slides
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Update active class on dot indicators
    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach(slide => {
        const video = slide.querySelector("video");
        if (video) video.pause();

        const iframe = slide.querySelector("iframe");
        if (iframe) {
            const src = iframe.src;
            iframe.src = src;
        }
    });
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Three.js Interactive 3D Interstellar Voyage Background
function initWebGLBackground() {
    const canvas = document.getElementById('webgl-bg');
    if (!canvas) return;

    // Set up WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.002); // Horizon space fog

    // Camera setup - looking ahead into space
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 80);

    // Theme Colors
    const colorIndigo = new THREE.Color(0.388, 0.4, 0.945); // Indigo
    const colorCyan = new THREE.Color(0.054, 0.647, 0.913);   // Sky Blue

    // Reusable circular glowing particle texture
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(canvasTexture);

    const pointsMaterial = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // --- 1. Procedural Cosmic Dust Starfield ---
    const starCount = 600;
    const starsGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const pathDepth = 500;

    for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 350;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        starPositions[i * 3 + 2] = -Math.random() * pathDepth;

        const c = colorIndigo.clone().lerp(colorCyan, Math.random());
        starColors[i * 3] = c.r;
        starColors[i * 3 + 1] = c.g;
        starColors[i * 3 + 2] = c.b;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starField = new THREE.Points(starsGeo, pointsMaterial);
    scene.add(starField);

    // --- 2. Procedural Space Object Library ---
    const spaceObjects = [];

    // Generator function for Spiral Galaxies with extensive randomization math
    function createSpiralGalaxy(color, zCoord) {
        const group = new THREE.Group();
        const count = 400 + Math.floor(Math.random() * 300); // Varied particle density (400-700)
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        // Randomize arm counts (2 to 4 arms) and swirl factor
        const arms = 2 + Math.floor(Math.random() * 3);
        const swirlFactor = 0.1 + Math.random() * 0.12;

        for (let i = 0; i < count; i++) {
            const r = Math.pow(Math.random(), 2) * 55; // Spread out organically
            const armAngle = (i % arms) * (2 * Math.PI / arms);
            const spiralAngle = r * swirlFactor;
            const angle = armAngle + spiralAngle + (Math.random() - 0.5) * 0.35;

            positions[i * 3] = Math.cos(angle) * r;
            positions[i * 3 + 1] = (Math.random() - 0.5) * (r * 0.08); // Slight volumetric depth
            positions[i * 3 + 2] = Math.sin(angle) * r;

            const c = color.clone().lerp(new THREE.Color(1, 1, 1), Math.random() * 0.55);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const galaxyPoints = new THREE.Points(geo, pointsMaterial);
        group.add(galaxyPoints);
        
        // Randomize initial galaxy orientations (pitch/roll tilts)
        group.rotation.x = Math.random() * Math.PI;
        group.rotation.z = Math.random() * Math.PI;

        group.position.set((Math.random() - 0.5) * 220, (Math.random() - 0.5) * 110, zCoord);
        
        // Store randomized rotation vectors for animation loop
        group.rotSpeedY = (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.004);
        group.rotSpeedX = (Math.random() - 0.5) * 0.001;

        scene.add(group);
        return group;
    }

    // Generator function for Planets with Rings (randomized core, ring sizes, and tilts)
    function createPlanetWithRings(color, zCoord) {
        const group = new THREE.Group();
        const coreRadius = 4 + Math.random() * 5; // Radius 4 to 9

        // Planet core sphere (randomize geometry density mapping)
        const segs = 6 + Math.floor(Math.random() * 8); // 6 to 14 segments
        const sphereGeo = new THREE.SphereGeometry(coreRadius, segs, segs);
        const sphereEdges = new THREE.EdgesGeometry(sphereGeo);
        const sphereMat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.35 });
        const planet = new THREE.LineSegments(sphereEdges, sphereMat);
        group.add(planet);

        // Planetary Rings (randomize width and divisions)
        const innerRing = coreRadius * (1.3 + Math.random() * 0.45);
        const outerRing = innerRing + 4 + Math.random() * 7;
        const ringGeo = new THREE.RingGeometry(innerRing, outerRing, 20 + Math.floor(Math.random() * 20));
        const ringEdges = new THREE.EdgesGeometry(ringGeo);
        const ringMat = new THREE.LineBasicMaterial({ 
            color: color.clone().lerp(new THREE.Color(1, 1, 1), Math.random() * 0.5), 
            transparent: true, 
            opacity: 0.28 
        });
        const rings = new THREE.LineSegments(ringEdges, ringMat);
        
        // Randomize planetary ring inclination tilts
        rings.rotation.x = Math.PI / (2 + Math.random() * 2);
        rings.rotation.y = (Math.random() - 0.5) * 0.5;
        group.add(rings);

        group.position.set((Math.random() - 0.5) * 220, (Math.random() - 0.5) * 110, zCoord);
        
        group.rotSpeedY = (Math.random() - 0.5) * 0.012;
        group.rotSpeedX = (Math.random() - 0.5) * 0.004;

        scene.add(group);
        return group;
    }

    // Generator function for standard Planets (randomized shapes, segments, sizes)
    function createPlanet(color, zCoord) {
        const radius = 3.5 + Math.random() * 6;
        const segs = 5 + Math.floor(Math.random() * 7); // Low-poly / geometric planet variations
        const sphereGeo = new THREE.SphereGeometry(radius, segs, segs);
        const sphereEdges = new THREE.EdgesGeometry(sphereGeo);
        const sphereMat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.35 });
        const planet = new THREE.LineSegments(sphereEdges, sphereMat);
        
        planet.position.set((Math.random() - 0.5) * 220, (Math.random() - 0.5) * 110, zCoord);
        
        planet.rotSpeedY = (Math.random() - 0.5) * 0.012;
        planet.rotSpeedX = (Math.random() - 0.5) * 0.005;

        scene.add(planet);
        return planet;
    }

    // Spawn array of objects distributed along Z path depth
    const objInterval = pathDepth / 6;
    for (let i = 0; i < 6; i++) {
        const z = -i * objInterval - Math.random() * 25;
        let obj;
        if (i % 3 === 0) {
            obj = createSpiralGalaxy(colorIndigo, z);
        } else if (i % 3 === 1) {
            obj = createPlanetWithRings(colorCyan, z);
        } else {
            obj = createPlanet(colorIndigo, z);
        }
        spaceObjects.push(obj);
    }

    // Interaction vars
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    window.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Gyroscope / Accelerometer orientation handling for mobile devices
    function handleOrientation(e) {
        if (e.beta !== null && e.gamma !== null) {
            // gamma: left/right tilt [-90, 90]
            // beta: front/back tilt [-180, 180]
            const tiltX = e.gamma / 30; // Scale range: ~30 deg tilt maps to -1 to 1
            const tiltY = (e.beta - 60) / 30; // Center around 60 deg holding angle
            
            targetMouseX = Math.max(-1, Math.min(1, tiltX));
            targetMouseY = Math.max(-1, Math.min(1, -tiltY)); // Invert Y
        }
    }

    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        window.addEventListener('click', () => {
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                })
                .catch(console.error);
        }, { once: true });
    } else {
        window.addEventListener('deviceorientation', handleOrientation);
    }

    let scrollY = 0;
    let targetScrollY = 0;
    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    });

    // Enable WebXR support
    renderer.xr.enabled = true;

    // WebXR Immersive VR Session Management
    const vrBtn = document.getElementById('vr-btn');
    const vrUnsupported = document.getElementById('vr-unsupported');
    let currentXRSession = null;

    if ('xr' in navigator && vrBtn) {
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            if (supported) {
                vrBtn.style.display = 'inline-flex';
                if (vrUnsupported) vrUnsupported.style.display = 'none';
            }
        });
    }

    function onSessionStarted(session) {
        session.addEventListener('end', onSessionEnded);
        renderer.xr.setSession(session);
        vrBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Exit VR';
        currentXRSession = session;
        document.body.classList.add('vr-active');
    }

    function onSessionEnded() {
        currentXRSession.removeEventListener('end', onSessionEnded);
        vrBtn.innerHTML = '<i class="fa-solid fa-vr-cardboard"></i> Explore in VR';
        currentXRSession = null;
        document.body.classList.remove('vr-active');
    }

    if (vrBtn) {
        vrBtn.addEventListener('click', () => {
            if (currentXRSession === null) {
                navigator.xr.requestSession('immersive-vr').then(onSessionStarted).catch((err) => {
                    console.error("Failed to start VR session:", err);
                });
            } else {
                currentXRSession.end();
            }
        });
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const clock = new THREE.Clock();

    function animate() {
        const elapsedTime = clock.getElapsedTime();

        // Easing interpolation
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        scrollY += (targetScrollY - scrollY) * 0.05;

        // Slow voyage flight speed forward
        const flightSpeed = 0.38;

        // --- Update Stars Z positions (zoom forward) ---
        const starPosAttr = starField.geometry.attributes.position;
        const starArr = starPosAttr.array;

        for (let i = 0; i < starCount; i++) {
            starArr[i * 3 + 2] += flightSpeed * 1.5;

            // Loop star back to horizon when passed
            if (starArr[i * 3 + 2] > 100) {
                starArr[i * 3 + 2] = -pathDepth;
                starArr[i * 3] = (Math.random() - 0.5) * 350;
                starArr[i * 3 + 1] = (Math.random() - 0.5) * 200;
            }
        }
        starPosAttr.needsUpdate = true;

        // --- Make Stars Twinkle dynamically ---
        const starColorAttr = starField.geometry.attributes.color;
        const starColArr = starColorAttr.array;
        for (let i = 0; i < starCount; i++) {
            // Unique twinkle speeds based on index phase
            const scale = 0.25 + Math.sin(elapsedTime * (1.8 + (i % 4)) + i) * 0.75;
            const ratio = (i % 10) / 10;
            const c = colorIndigo.clone().lerp(colorCyan, ratio);
            starColArr[i * 3] = c.r * scale;
            starColArr[i * 3 + 1] = c.g * scale;
            starColArr[i * 3 + 2] = c.b * scale;
        }
        starColorAttr.needsUpdate = true;

        // --- Update Galaxies and Planets Z position (drift past ship) ---
        spaceObjects.forEach((obj, idx) => {
            obj.position.z += flightSpeed;
            
            // Apply unique, pre-assigned random rotations
            obj.rotation.y += obj.rotSpeedY || 0.003;
            obj.rotation.x += obj.rotSpeedX || 0.001;

            // Loop object back to depth horizon when passed behind viewport
            if (obj.position.z > 100) {
                obj.position.z = -pathDepth;
                obj.position.x = (Math.random() - 0.5) * 220;
                obj.position.y = (Math.random() - 0.5) * 110;
                
                // Re-randomize orientation slightly on horizon loop
                obj.rotation.x = Math.random() * Math.PI;
                obj.rotation.z = Math.random() * Math.PI;
            }
        });

        // --- Steer flight coordinate offsets based on mouse + scroll ---
        // Mouse moves X/Y (steering side to side, climb/dive)
        const targetCamX = mouseX * 45;
        // Scroll pushes ship vertically (climb or dive heights over elements)
        const targetCamY = mouseY * 30 + (scrollY * 0.025);

        // WebXR updates camera transforms automatically.
        // Only steer camera positions if NOT in VR mode to prevent conflict
        if (!renderer.xr.isPresenting) {
            camera.position.x += (targetCamX - camera.position.x) * 0.05;
            camera.position.y += (targetCamY - camera.position.y) * 0.05;
            camera.lookAt(camera.position.x * 0.85, camera.position.y * 0.85, -150);
        } else {
            // Keep center focus in VR headset context, position tracking is automatic
            camera.position.set(0, 0, 80);
        }

        renderer.render(scene, camera);
    }

    // Set WebXR-safe animation rendering loop
    renderer.setAnimationLoop(animate);
}
