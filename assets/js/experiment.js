/**
 * JIWON'S ROBOTICS LAB - Interactive 3D CV Explorer
 * Humanoid robot navigates through a lab discovering CV information
 */

// ============================================
// CV DATA - Jiwon's Information
// ============================================
const CV_DATA = {
  education: {
    icon: '🎓',
    title: 'EDUCATION',
    content: `
      <div class="info-section">
        <div class="info-section-title">Korea University</div>
        <div class="info-item">
          <div class="info-item-title">B.S. in Mechanical Engineering</div>
          <div class="info-item-subtitle">Mar 2019 - Feb 2026 (Expected)</div>
          <div class="info-item-desc">
            <strong>GPA:</strong> 3.94/4.5 (Overall), 4.03/4.5 (Major)<br><br>
            <strong>Relevant Coursework:</strong><br>
            Robotics (A+), Mechatronics (A+), Dynamics (A+), Microprocessor Programming (A+), Kinematics (A+), Manufacturing Processes (A+), Computer-Aided Design (A+)<br><br>
            <strong>Honors:</strong> Dean's List (4 semesters), Korea University Excellence Scholarship (2023-2025)
          </div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Next Step</div>
        <div class="info-item">
          <div class="info-item-title">KAIST - Department of Mechanical Engineering</div>
          <div class="info-item-subtitle">DRCD Lab | Starting Spring 2026</div>
          <div class="info-item-desc">Admitted through REPS track for graduate research</div>
        </div>
      </div>
    `
  },
  research: {
    icon: '🔬',
    title: 'RESEARCH EXPERIENCE',
    content: `
      <div class="info-section">
        <div class="info-section-title">KIST - Robogram Lab (Jun 2024 - Aug 2025)</div>
        <div class="info-item">
          <div class="info-item-title">KAPEX Humanoid Arm Design</div>
          <div class="info-item-subtitle">Advisor: Dr. Yong Seok Ihn</div>
          <div class="info-item-desc">
            • Developed multi-metric optimization framework combining RBDL and MuJoCo<br>
            • Achieved <strong>18.4% workspace expansion</strong> while minimizing joint torques<br>
            • <span class="info-tag">IROS 2025 Oral</span> First author presentation accepted<br>
            • Designed compact 2-DoF wrist module (45mm × 75mm) with 6mm ball screw mechanism
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-title">Self-Driving Lab - Bimanual Manipulation</div>
          <div class="info-item-desc">
            • Designed novel antiparallelogram linkage shoulder mechanism<br>
            • Expanded bimanual workspace by <strong>4.3%</strong> for confined space manipulation<br>
            • Achieved low-inertia rolling contact motion through kinematic optimization
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-title">Microsurgical Robotic System</div>
          <div class="info-item-desc">
            • Implemented C-based real-time multi-axis motor control using EtherCAT protocol<br>
            • Developed synchronous control modes (PPM, CSV) on EPOS4 controllers
          </div>
        </div>
      </div>
    `
  },
  publications: {
    icon: '📄',
    title: 'PUBLICATIONS',
    content: `
      <div class="info-section">
        <div class="info-section-title">International Conference</div>
        <div class="info-item">
          <div class="info-item-title">Optimization Framework of the Shoulder Base Frame Initial Angle for Enhanced Dynamic Performance in a Humanoid Robotic Arm</div>
          <div class="info-item-subtitle">IROS 2025, China | October 2025</div>
          <div class="info-item-desc">
            <strong>Jiwon Yoon*</strong>, Sujin Lee*, Yong Seok Ihn<br>
            <span class="info-tag">Oral Presentation</span> <span class="info-tag">*Equal Contribution</span>
          </div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Domestic Conference</div>
        <div class="info-item">
          <div class="info-item-title">Optimization of Shoulder Joint Frame Angles for Torque and Energy Performance Improvement in 7-DOF Humanoid Arms</div>
          <div class="info-item-subtitle">KRoC 2025, Korea | February 2025</div>
          <div class="info-item-desc">
            Jiwon Yoon, Yong Seok Ihn<br>
            <span class="info-tag">Excellence Undergraduate Paper Award</span>
          </div>
        </div>
      </div>
    `
  },
  projects: {
    icon: '🛠️',
    title: 'PROJECTS',
    content: `
      <div class="info-section">
        <div class="info-section-title">Selected Projects</div>
        <div class="info-item">
          <div class="info-item-title">Electric Motor Design and Fabrication</div>
          <div class="info-item-subtitle">Hyundai H-Mobility | Apr 2025 - Jul 2025</div>
          <div class="info-item-desc">
            • Designed permanent magnet synchronous motor using ANSYS Maxwell FEM analysis<br>
            • Led complete fabrication including stator winding and powertrain integration<br>
            • Validated motor performance achieving <strong>92% efficiency</strong> at rated load
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-title">Solar-Tracking Smart Parasol</div>
          <div class="info-item-subtitle">Korea University Creative Design Contest | Jun 2023 - Sep 2023</div>
          <div class="info-item-desc">
            • Designed 2-DoF solar tracking system for maximum shade coverage<br>
            • Fabricated functional prototype using machining skills (welding, grinding)<br>
            • <span class="info-tag">3rd Place</span> among 12 competing teams
          </div>
        </div>
      </div>
    `
  },
  skills: {
    icon: '💻',
    title: 'TECHNICAL SKILLS',
    content: `
      <div class="info-section">
        <div class="info-section-title">Programming</div>
        <div style="margin-bottom: 15px;">
          <span class="info-tag">C/C++</span>
          <span class="info-tag">Python</span>
          <span class="info-tag">MATLAB</span>
          <span class="info-tag">ROS2</span>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Software</div>
        <div style="margin-bottom: 15px;">
          <span class="info-tag">SolidWorks</span>
          <span class="info-tag">NX</span>
          <span class="info-tag">Creo</span>
          <span class="info-tag">MATLAB-Simulink</span>
          <span class="info-tag">MuJoCo</span>
          <span class="info-tag">Isaac</span>
          <span class="info-tag">LaTeX</span>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Hardware</div>
        <div style="margin-bottom: 15px;">
          <span class="info-tag">Arduino</span>
          <span class="info-tag">Jetson Nano</span>
          <span class="info-tag">EtherCAT</span>
          <span class="info-tag">3D Printing</span>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Languages</div>
        <div>
          <span class="info-tag">Korean (Native)</span>
          <span class="info-tag">English (Fluent)</span>
        </div>
      </div>
    `
  },
  awards: {
    icon: '🏆',
    title: 'HONORS & AWARDS',
    content: `
      <div class="info-section">
        <div class="info-section-title">Selected Awards</div>
        <div class="info-item">
          <div class="info-item-title">2025 Excellence Paper Award</div>
          <div class="info-item-subtitle">Korea Robotics Society Annual Conference</div>
        </div>
        <div class="info-item">
          <div class="info-item-title">2025 University President's Award</div>
          <div class="info-item-subtitle">Korea University Creative Challenge Program</div>
        </div>
        <div class="info-item">
          <div class="info-item-title">2024 Certificate of Commendation</div>
          <div class="info-item-subtitle">Gyeonggi Provincial Council</div>
        </div>
        <div class="info-item">
          <div class="info-item-title">2024 Excellence Project Award</div>
          <div class="info-item-subtitle">HD Hyundai Xitesolution</div>
        </div>
        <div class="info-item">
          <div class="info-item-title">2023 Korea University Student Excellence Scholarship</div>
          <div class="info-item-subtitle">Renewable</div>
        </div>
      </div>
    `
  },
  leadership: {
    icon: '👥',
    title: 'LEADERSHIP & SERVICE',
    content: `
      <div class="info-section">
        <div class="info-section-title">Military Service</div>
        <div class="info-item">
          <div class="info-item-title">Republic of Korea Air Force</div>
          <div class="info-item-subtitle">10th Fighter Wing | Jun 2021 - Mar 2023</div>
          <div class="info-item-desc">Air Defence Artillery; Honorably discharged</div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-section-title">Club Leadership</div>
        <div class="info-item">
          <div class="info-item-title">KUECS President</div>
          <div class="info-item-subtitle">Engineering Volunteer Club | Mar 2023 - Jun 2025</div>
          <div class="info-item-desc">
            • Led 80+ member club in STEM education outreach<br>
            • Served 200+ elementary students across Seoul<br>
            • Progressed: Member → Executive → President<br>
            • <span class="info-tag">Best Club Award</span> <span class="info-tag">Provincial Commendation</span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-title">KUBA (Korea University Buddy Assistant)</div>
          <div class="info-item-subtitle">Mar 2022 - Dec 2022</div>
          <div class="info-item-desc">International Student Festival Booth Leader (Indonesia); Outstanding Volunteer</div>
        </div>
      </div>
    `
  }
};

// ============================================
// CONSOLE COMMANDS
// ============================================
const CONSOLE_COMMANDS = {
  help: {
    desc: 'Show available commands',
    exec: () => `
<span class="info">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="info">           AVAILABLE COMMANDS</span>
<span class="info">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="success">help</span>       Show this help message
<span class="success">about</span>      About Jiwon Yoon
<span class="success">contact</span>    Contact information
<span class="success">skills</span>     Technical skills
<span class="success">research</span>   Research interests

<span class="warning">guestbook</span>  Leave a message for me!
<span class="success">clear</span>      Clear console

<span class="info">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span class="info">       NAVIGATION COMMANDS</span>
<span class="info">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="success">robot</span>      Robot status
<span class="success">map</span>        Show map locations
<span class="success">goto</span> <span class="warning">[loc]</span> Teleport to location

<span class="info">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
`
  },
  about: {
    desc: 'About Jiwon',
    exec: () => `
<span class="info">═══════════════════════════════════════</span>
<span class="success">Yoon Ji Won (윤지원)</span>
<span class="info">═══════════════════════════════════════</span>

Mechanical Engineering @ Korea University
Robotics Researcher | KIST Robogram Lab Alumni
Incoming Graduate Student @ KAIST DRCD Lab

"Dream big, dive deep, finish strong."

<span class="warning">Research Focus:</span>
  • Dynamics-based robot design and control
  • Optimization for energy-efficient motion
  • Mechanism design for compliant interaction
`
  },
  contact: {
    desc: 'Contact information',
    exec: () => `
<span class="info">━━━━━━━━━ CONTACT ━━━━━━━━━</span>

  <span class="warning">Email:</span>    younjw813@korea.ac.kr
  <span class="warning">Phone:</span>    (+82)10-3322-7991
  <span class="warning">Location:</span> Seoul, Korea
  <span class="warning">GitHub:</span>   github.com/ninooy
`
  },
  skills: {
    desc: 'Technical skills',
    exec: () => `
<span class="info">━━━━━━━━━ SKILLS ━━━━━━━━━</span>

<span class="warning">Programming:</span>
  C/C++, Python, MATLAB, ROS2

<span class="warning">Software:</span>
  SolidWorks, NX, MuJoCo, Isaac, LaTeX

<span class="warning">Hardware:</span>
  Arduino, Jetson Nano, EtherCAT
`
  },
  research: {
    desc: 'Research interests',
    exec: () => `
<span class="info">━━━━━━━ RESEARCH ━━━━━━━</span>

• Dynamics-based design and control
• Optimization for energy-efficient motion
• Mechanism design for enhanced workspace

<span class="success">Recent:</span> IROS 2025 Oral (First Author)
`
  },
  robot: {
    desc: 'Robot status',
    exec: () => {
      const pos = humanoid ? humanoid.position : { x: 0, z: 0 };
      return `
<span class="info">━━━━━ ROBOT STATUS ━━━━━</span>

  Position: (${pos.x.toFixed(1)}, ${pos.z.toFixed(1)})
  State: ${isWalking ? '<span class="success">Walking</span>' : '<span class="warning">Idle</span>'}
  Battery: <span class="success">100%</span>
  Status: All systems nominal
`;
    }
  },
  map: {
    desc: 'Map locations',
    exec: () => `
<span class="info">━━━━━━━ LAB MAP ━━━━━━━</span>

  <span class="warning">education</span>    Education Hall
  <span class="warning">research</span>     Research Lab
  <span class="warning">publications</span> Publications Tower
  <span class="warning">projects</span>     Projects Workshop
  <span class="warning">skills</span>       Skills Terminal
  <span class="warning">awards</span>       Awards Podium
  <span class="warning">leadership</span>   Leadership Center
  <span class="warning">center</span>       Center Platform

<span class="info">Usage:</span> goto education
`
  },
  goto: {
    desc: 'Teleport to location',
    exec: (args) => {
      const locations = {
        education: { x: 0, z: -20 },
        research: { x: 20, z: 0 },
        publications: { x: 0, z: 20 },
        projects: { x: -20, z: 0 },
        skills: { x: 15, z: -15 },
        awards: { x: 15, z: 15 },
        leadership: { x: -15, z: -15 },
        center: { x: 0, z: 0 }
      };

      const loc = args[0]?.toLowerCase();
      if (locations[loc] && humanoid) {
        humanoid.position.x = locations[loc].x;
        humanoid.position.z = locations[loc].z;
        return `<span class="success">✓ Teleported to ${loc.toUpperCase()}</span>`;
      }
      return `<span class="error">✗ Unknown location "${args[0] || ''}"</span>
<span class="info">Type 'map' to see available locations</span>`;
    }
  },
  guestbook: {
    desc: 'Sign guestbook',
    exec: () => {
      showGuestbookForm();
      return `<span class="info">📝 Opening guestbook form...</span>`;
    }
  },
  clear: {
    desc: 'Clear console',
    exec: () => {
      setTimeout(() => {
        const output = document.querySelector('.console-output');
        if (output) output.innerHTML = '<div class="console-line system">Console cleared. Type "help" for commands.</div>';
      }, 100);
      return '';
    }
  }
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let scene, camera, renderer;
let humanoid, humanoidParts = {};
let buildings = {};
let clock, delta;
let isWalking = false;
let isWalkingBackward = false;
let walkPhase = 0;
let robotRotation = 0; // Robot's facing direction
let nearBuilding = null;

// Joint states for HUD
const jointStates = {
  leftHip: { load: 0 },
  rightHip: { load: 0 },
  leftKnee: { load: 0 },
  rightKnee: { load: 0 },
  leftAnkle: { load: 0 },
  rightAnkle: { load: 0 }
};

// Input state
const keys = {
  w: false, a: false, s: false, d: false,
  ArrowUp: false, ArrowLeft: false, ArrowDown: false, ArrowRight: false
};

// Camera state
let cameraAngle = 0; // Horizontal angle around robot
let cameraHeight = 8;
let cameraDistance = 14;

// ============================================
// INITIALIZATION
// ============================================
function init() {
  clock = new THREE.Clock();

  // Scene with bright, clean background
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f4f8);
  scene.fog = new THREE.FogExp2(0xf0f4f8, 0.008);

  // Camera
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.set(0, cameraHeight, cameraDistance);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('game-canvas'),
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Create world
  createLights();
  createGround();
  createBuildings();
  createHumanoid();

  // Event listeners
  window.addEventListener('resize', onResize);
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  // Initialize console
  initConsole();

  // Initialize minimap
  initMinimap();

  // Start animation
  animate();

  // Hide loading screen
  simulateLoading();
}

// ============================================
// LOADING SIMULATION
// ============================================
function simulateLoading() {
  const progressBar = document.querySelector('.loading-progress-bar');
  const statusText = document.querySelector('.loading-status');
  const loadingScreen = document.querySelector('.loading-screen');

  const stages = [
    { progress: 20, text: 'Initializing Three.js...' },
    { progress: 40, text: 'Loading robot model...' },
    { progress: 60, text: 'Building lab environment...' },
    { progress: 80, text: 'Calibrating joints...' },
    { progress: 100, text: 'Ready!' }
  ];

  let currentStage = 0;

  const updateProgress = () => {
    if (currentStage < stages.length) {
      progressBar.style.width = stages[currentStage].progress + '%';
      statusText.textContent = stages[currentStage].text;
      currentStage++;
      setTimeout(updateProgress, 400);
    } else {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        printToConsole('System initialized. Type <span class="success">help</span> for commands.', 'system');
      }, 500);
    }
  };

  setTimeout(updateProgress, 300);
}

// ============================================
// LIGHTS
// ============================================
function createLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);

  const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xe8f4e8, 0.8);
  scene.add(hemiLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
  mainLight.position.set(30, 50, 30);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 150;
  mainLight.shadow.camera.left = -50;
  mainLight.shadow.camera.right = 50;
  mainLight.shadow.camera.top = 50;
  mainLight.shadow.camera.bottom = -50;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xffeedd, 0.4);
  fillLight.position.set(-20, 30, -20);
  scene.add(fillLight);
}

// ============================================
// GROUND
// ============================================
function createGround() {
  const groundGeo = new THREE.PlaneGeometry(150, 150);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xe8ecf0,
    metalness: 0.1,
    roughness: 0.8
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const gridHelper = new THREE.GridHelper(150, 75, 0xcccccc, 0xdddddd);
  gridHelper.position.y = 0.01;
  scene.add(gridHelper);

  // Center platform
  const platformGeo = new THREE.CylinderGeometry(5, 5.5, 0.3, 32);
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.2,
    roughness: 0.3
  });
  const platform = new THREE.Mesh(platformGeo, platformMat);
  platform.position.y = 0.15;
  platform.castShadow = true;
  platform.receiveShadow = true;
  scene.add(platform);

  const ringGeo = new THREE.TorusGeometry(5.2, 0.08, 16, 64);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.5 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.31;
  scene.add(ring);
}

// ============================================
// BUILDINGS WITH SIGNPOSTS
// ============================================
function createBuildings() {
  const buildingData = [
    { key: 'education', pos: [0, -25], color: 0x3b82f6, height: 12 },
    { key: 'research', pos: [25, 0], color: 0x8b5cf6, height: 14 },
    { key: 'publications', pos: [0, 25], color: 0x10b981, height: 16 },
    { key: 'projects', pos: [-25, 0], color: 0xf59e0b, height: 11 },
    { key: 'skills', pos: [18, -18], color: 0x06b6d4, height: 10 },
    { key: 'awards', pos: [18, 18], color: 0xeab308, height: 13 },
    { key: 'leadership', pos: [-18, -18], color: 0xef4444, height: 9 }
  ];

  buildingData.forEach(data => {
    const building = createBuilding(data.color, data.height, data.key);
    building.position.set(data.pos[0], 0, data.pos[1]);
    scene.add(building);

    // Create signpost in front of building (facing center)
    const signpost = createSignpost(data.key, data.color);
    const angle = Math.atan2(data.pos[1], data.pos[0]);
    const signDist = 8;
    signpost.position.set(
      data.pos[0] - Math.cos(angle) * signDist,
      0,
      data.pos[1] - Math.sin(angle) * signDist
    );
    signpost.rotation.y = angle + Math.PI;
    scene.add(signpost);

    buildings[data.key] = {
      mesh: building,
      position: { x: data.pos[0], z: data.pos[1] },
      radius: 7
    };
  });
}

function createBuilding(accentColor, height, key) {
  const group = new THREE.Group();

  // Base
  const baseGeo = new THREE.CylinderGeometry(4.5, 5, 0.4, 32);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.4 });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.y = 0.2;
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  // Main structure
  const mainGeo = new THREE.CylinderGeometry(3.5, 4, height, 32);
  const mainMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, metalness: 0.1, roughness: 0.5 });
  const main = new THREE.Mesh(mainGeo, mainMat);
  main.position.y = height / 2 + 0.4;
  main.castShadow = true;
  main.receiveShadow = true;
  group.add(main);

  // Color accent band
  const bandGeo = new THREE.CylinderGeometry(3.6, 3.6, 1.5, 32);
  const bandMat = new THREE.MeshStandardMaterial({ color: accentColor, metalness: 0.3, roughness: 0.4 });
  const band = new THREE.Mesh(bandGeo, bandMat);
  band.position.y = height - 0.5;
  band.castShadow = true;
  group.add(band);

  // Roof
  const roofGeo = new THREE.ConeGeometry(3.8, 2, 32);
  const roofMat = new THREE.MeshStandardMaterial({ color: accentColor, metalness: 0.4, roughness: 0.3 });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.y = height + 1.4;
  roof.castShadow = true;
  group.add(roof);

  // Ground marker ring
  const markerGeo = new THREE.RingGeometry(5, 5.5, 32);
  const markerMat = new THREE.MeshBasicMaterial({ color: accentColor, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
  const marker = new THREE.Mesh(markerGeo, markerMat);
  marker.rotation.x = -Math.PI / 2;
  marker.position.y = 0.02;
  marker.userData.pulsePhase = Math.random() * Math.PI * 2;
  group.add(marker);

  group.userData.key = key;
  group.userData.accentColor = accentColor;

  return group;
}

function createSignpost(name, color) {
  const group = new THREE.Group();

  // Post
  const postGeo = new THREE.CylinderGeometry(0.08, 0.1, 2.5, 8);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.5, roughness: 0.3 });
  const post = new THREE.Mesh(postGeo, postMat);
  post.position.y = 1.25;
  post.castShadow = true;
  group.add(post);

  // Sign board
  const boardGeo = new THREE.BoxGeometry(2.5, 0.8, 0.1);
  const boardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.5 });
  const board = new THREE.Mesh(boardGeo, boardMat);
  board.position.y = 2.3;
  board.castShadow = true;
  group.add(board);

  // Sign text (canvas texture)
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 256, 80);

  // Border
  ctx.strokeStyle = '#' + color.toString(16).padStart(6, '0');
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, 250, 74);

  // Text
  ctx.font = 'bold 28px -apple-system, sans-serif';
  ctx.fillStyle = '#1f2937';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name.toUpperCase(), 128, 42);

  const textTexture = new THREE.CanvasTexture(canvas);
  const textMat = new THREE.MeshBasicMaterial({ map: textTexture });
  const textGeo = new THREE.PlaneGeometry(2.4, 0.75);

  // Front
  const textFront = new THREE.Mesh(textGeo, textMat);
  textFront.position.set(0, 2.3, 0.06);
  group.add(textFront);

  // Back
  const textBack = new THREE.Mesh(textGeo, textMat);
  textBack.position.set(0, 2.3, -0.06);
  textBack.rotation.y = Math.PI;
  group.add(textBack);

  // Color accent on top
  const accentGeo = new THREE.BoxGeometry(2.5, 0.1, 0.12);
  const accentMat = new THREE.MeshStandardMaterial({ color: color, metalness: 0.3, roughness: 0.4 });
  const accent = new THREE.Mesh(accentGeo, accentMat);
  accent.position.y = 2.75;
  group.add(accent);

  return group;
}

// ============================================
// HUMANOID ROBOT - BLACK COLOR
// ============================================
function createHumanoid() {
  humanoid = new THREE.Group();

  // Materials - Dark/Black robot
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.6,
    roughness: 0.3
  });

  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a0a,
    metalness: 0.7,
    roughness: 0.2
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    metalness: 0.4,
    roughness: 0.3,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.5
  });

  const jointMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    metalness: 0.8,
    roughness: 0.15
  });

  // === TORSO ===
  const torsoGeo = new THREE.CylinderGeometry(0.5, 0.6, 1.4, 16);
  const torso = new THREE.Mesh(torsoGeo, bodyMat);
  torso.position.y = 2.2;
  torso.castShadow = true;
  humanoid.add(torso);
  humanoidParts.torso = torso;

  // Chest accent (blue glow)
  const chestGeo = new THREE.BoxGeometry(0.4, 0.3, 0.1);
  const chest = new THREE.Mesh(chestGeo, accentMat);
  chest.position.set(0, 2.4, 0.55);
  humanoid.add(chest);

  // === HEAD ===
  const headGeo = new THREE.SphereGeometry(0.35, 32, 32);
  const head = new THREE.Mesh(headGeo, bodyMat);
  head.position.y = 3.2;
  head.castShadow = true;
  humanoid.add(head);
  humanoidParts.head = head;

  // Visor (blue glow)
  const visorGeo = new THREE.BoxGeometry(0.5, 0.15, 0.1);
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    metalness: 0.8,
    roughness: 0.1,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.8
  });
  const visor = new THREE.Mesh(visorGeo, visorMat);
  visor.position.set(0, 3.25, 0.32);
  humanoid.add(visor);

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.25, 16);
  const neck = new THREE.Mesh(neckGeo, darkMat);
  neck.position.y = 2.8;
  humanoid.add(neck);

  // === ARMS ===
  const createArm = (side) => {
    const sign = side === 'left' ? -1 : 1;
    const prefix = side;

    // Shoulder
    const shoulderGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const shoulder = new THREE.Mesh(shoulderGeo, jointMat);
    shoulder.position.set(sign * 0.65, 2.6, 0);
    humanoid.add(shoulder);

    // Upper arm
    const upperArmGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.6, 16);
    const upperArm = new THREE.Mesh(upperArmGeo, bodyMat);
    upperArm.position.set(sign * 0.65, 2.2, 0);
    upperArm.castShadow = true;
    humanoid.add(upperArm);
    humanoidParts[prefix + 'UpperArm'] = upperArm;

    // Elbow
    const elbowGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const elbow = new THREE.Mesh(elbowGeo, jointMat);
    elbow.position.set(sign * 0.65, 1.85, 0);
    humanoid.add(elbow);

    // Lower arm
    const lowerArmGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.5, 16);
    const lowerArm = new THREE.Mesh(lowerArmGeo, bodyMat);
    lowerArm.position.set(sign * 0.65, 1.55, 0);
    lowerArm.castShadow = true;
    humanoid.add(lowerArm);
    humanoidParts[prefix + 'LowerArm'] = lowerArm;

    // Hand
    const handGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const hand = new THREE.Mesh(handGeo, darkMat);
    hand.position.set(sign * 0.65, 1.25, 0);
    humanoid.add(hand);
  };

  createArm('left');
  createArm('right');

  // === LEGS ===
  const createLeg = (side) => {
    const sign = side === 'left' ? -1 : 1;
    const prefix = side;

    // Hip joint
    const hipGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const hip = new THREE.Mesh(hipGeo, jointMat);
    hip.position.set(sign * 0.25, 1.45, 0);
    humanoid.add(hip);
    humanoidParts[prefix + 'Hip'] = hip;

    // Upper leg
    const upperLegGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.7, 16);
    const upperLeg = new THREE.Mesh(upperLegGeo, bodyMat);
    upperLeg.position.set(sign * 0.25, 1.0, 0);
    upperLeg.castShadow = true;
    humanoid.add(upperLeg);
    humanoidParts[prefix + 'UpperLeg'] = upperLeg;

    // Knee joint
    const kneeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const knee = new THREE.Mesh(kneeGeo, jointMat);
    knee.position.set(sign * 0.25, 0.6, 0);
    humanoid.add(knee);
    humanoidParts[prefix + 'Knee'] = knee;

    // Lower leg
    const lowerLegGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.6, 16);
    const lowerLeg = new THREE.Mesh(lowerLegGeo, bodyMat);
    lowerLeg.position.set(sign * 0.25, 0.25, 0);
    lowerLeg.castShadow = true;
    humanoid.add(lowerLeg);
    humanoidParts[prefix + 'LowerLeg'] = lowerLeg;

    // Ankle
    const ankleGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const ankle = new THREE.Mesh(ankleGeo, jointMat);
    ankle.position.set(sign * 0.25, -0.1, 0);
    humanoid.add(ankle);
    humanoidParts[prefix + 'Ankle'] = ankle;

    // Foot
    const footGeo = new THREE.BoxGeometry(0.2, 0.08, 0.35);
    const foot = new THREE.Mesh(footGeo, darkMat);
    foot.position.set(sign * 0.25, -0.2, 0.05);
    foot.castShadow = true;
    humanoid.add(foot);
    humanoidParts[prefix + 'Foot'] = foot;
  };

  createLeg('left');
  createLeg('right');

  // Waist
  const waistGeo = new THREE.CylinderGeometry(0.35, 0.4, 0.25, 16);
  const waist = new THREE.Mesh(waistGeo, darkMat);
  waist.position.y = 1.55;
  humanoid.add(waist);

  humanoid.position.set(0, 0.2, 0);
  scene.add(humanoid);
}

// ============================================
// INPUT HANDLING
// ============================================
function onKeyDown(e) {
  // Enter key to focus console
  if (e.key === 'Enter') {
    const consoleInput = document.querySelector('.console-input');
    const consoleContainer = document.querySelector('.console-container');

    if (document.activeElement !== consoleInput) {
      consoleContainer.classList.remove('minimized');
      consoleContainer.classList.add('expanded');
      consoleInput.focus();
      e.preventDefault();
      return;
    }
  }

  // Ignore if typing in console
  if (document.activeElement.classList.contains('console-input')) {
    return;
  }

  const key = e.key.toLowerCase();
  if (key in keys) {
    keys[key] = true;
    updateKeyVisual(key, true);
    e.preventDefault();
  }
  if (e.key in keys) {
    keys[e.key] = true;
    e.preventDefault();
  }

  // E key for interaction
  if (e.key === 'e' || e.key === 'E') {
    if (nearBuilding) {
      showInfoPanel(nearBuilding);
    }
  }

  // Escape to close panels
  if (e.key === 'Escape') {
    closeInfoPanel();
    document.activeElement.blur();
  }
}

function onKeyUp(e) {
  const key = e.key.toLowerCase();
  if (key in keys) {
    keys[key] = false;
    updateKeyVisual(key, false);
  }
  if (e.key in keys) {
    keys[e.key] = false;
  }
}

function updateKeyVisual(key, active) {
  const keyElement = document.querySelector(`[data-key="${key.toUpperCase()}"]`);
  if (keyElement) {
    if (active) {
      keyElement.classList.add('active');
    } else {
      keyElement.classList.remove('active');
    }
  }
}

// ============================================
// ANIMATION & GAME LOOP
// ============================================
function animate() {
  requestAnimationFrame(animate);
  delta = clock.getDelta();

  updateMovement();
  updateWalkAnimation();
  updateCamera();
  updateJointHUD();
  updateBuildingProximity();
  updateMinimap();
  animateBuildings();

  renderer.render(scene, camera);
}

// ============================================
// MOVEMENT - Simplified and Fixed
// ============================================
function updateMovement() {
  // A/D = Rotate robot left/right
  const turnSpeed = 2.5 * delta;
  if (keys.a || keys.ArrowLeft) {
    robotRotation += turnSpeed;
  }
  if (keys.d || keys.ArrowRight) {
    robotRotation -= turnSpeed;
  }

  // Apply rotation to robot
  humanoid.rotation.y = robotRotation;

  // W/S = Move forward/backward (in robot's facing direction)
  const moveSpeed = 6 * delta;
  let moving = false;
  isWalkingBackward = false;

  if (keys.w || keys.ArrowUp) {
    // Move forward in facing direction
    humanoid.position.x -= Math.sin(robotRotation) * moveSpeed;
    humanoid.position.z -= Math.cos(robotRotation) * moveSpeed;
    moving = true;
  }
  if (keys.s || keys.ArrowDown) {
    // Move backward (moonwalk) - no turning
    humanoid.position.x += Math.sin(robotRotation) * moveSpeed;
    humanoid.position.z += Math.cos(robotRotation) * moveSpeed;
    moving = true;
    isWalkingBackward = true;
  }

  isWalking = moving;

  // Boundary check
  humanoid.position.x = THREE.MathUtils.clamp(humanoid.position.x, -60, 60);
  humanoid.position.z = THREE.MathUtils.clamp(humanoid.position.z, -60, 60);
}

// ============================================
// WALKING ANIMATION - More visible leg movement
// ============================================
function updateWalkAnimation() {
  if (isWalking) {
    // Adjust walk phase direction for backward walking
    const phaseDir = isWalkingBackward ? -1 : 1;
    walkPhase += delta * 10 * phaseDir;

    const hipSwing = Math.sin(walkPhase) * 0.5;  // Increased from 0.4
    const kneeSwing = Math.abs(Math.sin(walkPhase)) * 0.7;  // Increased
    const armSwing = Math.sin(walkPhase) * 0.4;

    // Left leg
    if (humanoidParts.leftUpperLeg) {
      humanoidParts.leftUpperLeg.rotation.x = hipSwing;
    }
    if (humanoidParts.leftLowerLeg) {
      humanoidParts.leftLowerLeg.rotation.x = Math.max(0, -hipSwing) * 1.0;
    }

    // Right leg (opposite phase)
    if (humanoidParts.rightUpperLeg) {
      humanoidParts.rightUpperLeg.rotation.x = -hipSwing;
    }
    if (humanoidParts.rightLowerLeg) {
      humanoidParts.rightLowerLeg.rotation.x = Math.max(0, hipSwing) * 1.0;
    }

    // Arms (opposite to legs)
    if (humanoidParts.leftUpperArm) {
      humanoidParts.leftUpperArm.rotation.x = -armSwing;
    }
    if (humanoidParts.rightUpperArm) {
      humanoidParts.rightUpperArm.rotation.x = armSwing;
    }

    // Calculate joint load
    const baseLoad = 30;
    jointStates.leftHip.load = baseLoad + Math.abs(hipSwing) * 70;
    jointStates.rightHip.load = baseLoad + Math.abs(hipSwing) * 70;
    jointStates.leftKnee.load = baseLoad + kneeSwing * 60;
    jointStates.rightKnee.load = baseLoad + kneeSwing * 60;
    jointStates.leftAnkle.load = 20 + Math.abs(Math.sin(walkPhase + 0.5)) * 40;
    jointStates.rightAnkle.load = 20 + Math.abs(Math.cos(walkPhase + 0.5)) * 40;

  } else {
    // Reset to idle pose
    ['leftUpperLeg', 'rightUpperLeg', 'leftLowerLeg', 'rightLowerLeg', 'leftUpperArm', 'rightUpperArm'].forEach(part => {
      if (humanoidParts[part]) {
        humanoidParts[part].rotation.x = THREE.MathUtils.lerp(humanoidParts[part].rotation.x, 0, 0.15);
      }
    });

    // Idle load
    Object.keys(jointStates).forEach(key => {
      jointStates[key].load = THREE.MathUtils.lerp(jointStates[key].load, 10, 0.1);
    });
  }

  // Update joint colors based on load
  updateJointColors();
}

function updateJointColors() {
  const getLoadColor = (load) => {
    if (load > 70) return 0xef4444;
    if (load > 50) return 0xf59e0b;
    if (load > 30) return 0xeab308;
    return 0x22c55e;
  };

  ['leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'].forEach(jointName => {
    if (humanoidParts[jointName]) {
      const load = jointStates[jointName].load;
      humanoidParts[jointName].material.emissive = new THREE.Color(getLoadColor(load));
      humanoidParts[jointName].material.emissiveIntensity = load / 120;
    }
  });
}

// ============================================
// CAMERA - Fixed third-person behind robot
// ============================================
function updateCamera() {
  // Camera always stays behind the robot at fixed distance
  const targetX = humanoid.position.x + Math.sin(robotRotation) * cameraDistance;
  const targetY = humanoid.position.y + cameraHeight;
  const targetZ = humanoid.position.z + Math.cos(robotRotation) * cameraDistance;

  // Smooth camera movement
  camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);
  camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
  camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

  // Look at robot's back (slightly above)
  const lookAtY = humanoid.position.y + 2;
  camera.lookAt(humanoid.position.x, lookAtY, humanoid.position.z);
}

// ============================================
// JOINT HUD
// ============================================
function updateJointHUD() {
  const canvas = document.getElementById('joint-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Draw humanoid silhouette
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  // Head
  ctx.beginPath();
  ctx.arc(w/2, 25, 12, 0, Math.PI * 2);
  ctx.stroke();

  // Body
  ctx.beginPath();
  ctx.moveTo(w/2, 37);
  ctx.lineTo(w/2, 85);
  ctx.stroke();

  // Shoulders
  ctx.beginPath();
  ctx.moveTo(w/2 - 25, 50);
  ctx.lineTo(w/2 + 25, 50);
  ctx.stroke();

  // Arms
  ctx.beginPath();
  ctx.moveTo(w/2 - 25, 50);
  ctx.lineTo(w/2 - 30, 75);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w/2 + 25, 50);
  ctx.lineTo(w/2 + 30, 75);
  ctx.stroke();

  // Hip line
  ctx.beginPath();
  ctx.moveTo(w/2 - 15, 85);
  ctx.lineTo(w/2 + 15, 85);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(w/2 - 12, 85);
  ctx.lineTo(w/2 - 15, 120);
  ctx.lineTo(w/2 - 15, 155);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w/2 + 12, 85);
  ctx.lineTo(w/2 + 15, 120);
  ctx.lineTo(w/2 + 15, 155);
  ctx.stroke();

  // Draw joints with load color
  const drawJoint = (x, y, load) => {
    let color;
    if (load > 70) color = '#ef4444';
    else if (load > 50) color = '#f59e0b';
    else if (load > 30) color = '#eab308';
    else color = '#22c55e';

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  };

  drawJoint(w/2 - 12, 87, jointStates.leftHip.load);
  drawJoint(w/2 + 12, 87, jointStates.rightHip.load);
  drawJoint(w/2 - 15, 120, jointStates.leftKnee.load);
  drawJoint(w/2 + 15, 120, jointStates.rightKnee.load);
  drawJoint(w/2 - 15, 155, jointStates.leftAnkle.load);
  drawJoint(w/2 + 15, 155, jointStates.rightAnkle.load);

  // Update text values
  document.querySelectorAll('.joint-item').forEach(item => {
    const joint = item.dataset.joint;
    if (jointStates[joint]) {
      const load = jointStates[joint].load;
      const valueEl = item.querySelector('.joint-value');
      const barEl = item.querySelector('.joint-bar-fill');

      if (valueEl) valueEl.textContent = load.toFixed(0) + '%';
      if (barEl) {
        barEl.style.width = Math.min(load, 100) + '%';
        barEl.className = 'joint-bar-fill' + (load > 70 ? ' danger' : load > 50 ? ' warning' : '');
      }
    }
  });
}

// ============================================
// BUILDING PROXIMITY
// ============================================
function updateBuildingProximity() {
  nearBuilding = null;
  let minDist = Infinity;

  Object.entries(buildings).forEach(([key, building]) => {
    const dx = humanoid.position.x - building.position.x;
    const dz = humanoid.position.z - building.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist < building.radius && dist < minDist) {
      minDist = dist;
      nearBuilding = key;
    }
  });

  const prompt = document.querySelector('.interact-prompt');
  if (nearBuilding) {
    prompt.classList.add('visible');
    prompt.innerHTML = `Press <span class="key">E</span> to explore <span class="building-name">${nearBuilding.toUpperCase()}</span>`;
  } else {
    prompt.classList.remove('visible');
  }
}

function animateBuildings() {
  Object.values(buildings).forEach(building => {
    const marker = building.mesh.children.find(c => c.geometry?.type === 'RingGeometry');
    if (marker) {
      marker.userData.pulsePhase += delta * 2;
      marker.material.opacity = 0.3 + Math.sin(marker.userData.pulsePhase) * 0.2;
      marker.scale.setScalar(1 + Math.sin(marker.userData.pulsePhase) * 0.1);
    }
  });
}

// ============================================
// INFO PANEL
// ============================================
function showInfoPanel(key) {
  const panel = document.getElementById('info-panel');
  const data = CV_DATA[key];

  if (!panel || !data) return;

  panel.querySelector('.info-panel-icon').textContent = data.icon;
  panel.querySelector('.info-panel-title').textContent = data.title;
  panel.querySelector('.info-panel-body').innerHTML = data.content;
  panel.classList.add('active');

  printToConsole(`<span class="success">→</span> Accessed: ${data.title}`, 'info');
}

function closeInfoPanel() {
  const panel = document.getElementById('info-panel');
  if (panel) {
    panel.classList.remove('active');
  }
}

window.closeInfoPanel = closeInfoPanel;

// ============================================
// CONSOLE
// ============================================
function initConsole() {
  const consoleContainer = document.querySelector('.console-container');
  const consoleHeader = document.querySelector('.console-header');
  const consoleInput = document.querySelector('.console-input');

  consoleHeader.addEventListener('click', () => {
    consoleContainer.classList.toggle('minimized');
    consoleContainer.classList.toggle('expanded');
  });

  consoleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = consoleInput.value.trim();
      if (input) {
        executeCommand(input);
        consoleInput.value = '';
      }
      e.stopPropagation();
    }
    if (e.key === 'Escape') {
      consoleInput.blur();
    }
  });

  consoleContainer.classList.add('minimized');
  consoleContainer.classList.remove('expanded');
}

function executeCommand(input) {
  printToConsole(`<span class="prompt">$</span> ${input}`, '');

  const parts = input.toLowerCase().split(' ');
  const cmd = parts[0];
  const args = parts.slice(1);

  if (CONSOLE_COMMANDS[cmd]) {
    const result = CONSOLE_COMMANDS[cmd].exec(args);
    if (result) {
      printToConsole(result);
    }
  } else {
    printToConsole(`<span class="error">✗ Unknown command: ${cmd}</span>
<span class="system">Type 'help' for available commands</span>`);
  }
}

function printToConsole(message, type = '') {
  const output = document.querySelector('.console-output');
  if (!output) return;

  const line = document.createElement('div');
  line.className = `console-line ${type}`;
  line.innerHTML = message;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

// ============================================
// GUESTBOOK
// ============================================
function showGuestbookForm() {
  const output = document.querySelector('.console-output');

  const formHTML = `
    <div class="guestbook-form" id="guestbook-form">
      <div class="gb-title">📝 Leave a Message</div>
      <input type="text" id="gb-name" placeholder="Your name" maxlength="50">
      <textarea id="gb-message" placeholder="Write something nice..." maxlength="500"></textarea>
      <div class="gb-buttons">
        <button onclick="submitGuestbook()">Submit</button>
        <button onclick="cancelGuestbook()" class="cancel">Cancel</button>
      </div>
    </div>
  `;

  output.insertAdjacentHTML('beforeend', formHTML);
  output.scrollTop = output.scrollHeight;

  setTimeout(() => {
    document.getElementById('gb-name')?.focus();
  }, 100);
}

function cancelGuestbook() {
  const form = document.getElementById('guestbook-form');
  if (form) form.remove();
  printToConsole('<span class="system">Guestbook cancelled.</span>', '');
}

window.submitGuestbook = async function() {
  const name = document.getElementById('gb-name').value.trim();
  const message = document.getElementById('gb-message').value.trim();

  if (!name || !message) {
    printToConsole('<span class="error">✗ Please fill in both name and message.</span>');
    return;
  }

  const form = document.getElementById('guestbook-form');
  if (form) form.remove();

  printToConsole('<span class="system">Submitting...</span>', '');

  const SCRIPT_URL = window.GUESTBOOK_SCRIPT_URL || null;

  const now = new Date();
  const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const dateStr = koreaTime.toISOString().replace('T', ' ').substring(0, 19) + ' KST';

  if (!SCRIPT_URL) {
    printToConsole('<span class="warning">⚠ Guestbook not configured.</span>');
    printToConsole(`<span class="info">Your message: "${message}" from ${name}</span>`);
    return;
  }

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: dateStr, name: name, message: message })
    });
    printToConsole('<span class="success">✓ Message submitted successfully! Thank you!</span>');
  } catch (error) {
    printToConsole('<span class="error">✗ Failed to submit. Please try again.</span>');
  }
};

window.cancelGuestbook = cancelGuestbook;

// ============================================
// MINIMAP
// ============================================
function initMinimap() {
  const canvas = document.getElementById('minimap-canvas');
  if (!canvas) return;
  canvas.width = 160;
  canvas.height = 140;
}

function updateMinimap() {
  const canvas = document.getElementById('minimap-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const scale = 2.0;

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= w; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
  }
  for (let i = 0; i <= h; i += 20) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }

  // Center marker
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(w/2, h/2, 4, 0, Math.PI * 2);
  ctx.stroke();

  // Buildings
  Object.entries(buildings).forEach(([key, building]) => {
    const x = w / 2 + building.position.x * scale;
    const y = h / 2 + building.position.z * scale;
    const color = '#' + building.mesh.userData.accentColor.toString(16).padStart(6, '0');

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '7px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(key.slice(0, 3).toUpperCase(), x, y + 12);
  });

  // Player
  const px = w / 2 + humanoid.position.x * scale;
  const py = w / 2 + humanoid.position.z * scale;

  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(-robotRotation);

  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.moveTo(0, -7);
  ctx.lineTo(-4, 4);
  ctx.lineTo(4, 4);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.restore();
}

// ============================================
// WINDOW EVENTS
// ============================================
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// MOBILE JOYSTICK
// ============================================
function initJoystick() {
  const joystick = document.querySelector('.joystick-stick');
  const base = document.querySelector('.joystick-base');

  if (!joystick || !base) return;

  let isDragging = false;
  const maxDist = 35;

  const handleStart = (e) => {
    isDragging = true;
    e.preventDefault();
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches ? e.touches[0] : e;
    const rect = base.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let dx = touch.clientX - centerX;
    let dy = touch.clientY - centerY;

    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > maxDist) {
      dx = (dx / dist) * maxDist;
      dy = (dy / dist) * maxDist;
    }

    joystick.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

    // W/S for forward/back, A/D for turning
    keys.w = dy < -10;
    keys.s = dy > 10;
    keys.a = dx < -10;
    keys.d = dx > 10;
  };

  const handleEnd = () => {
    isDragging = false;
    joystick.style.transform = 'translate(-50%, -50%)';
    keys.w = keys.a = keys.s = keys.d = false;
  };

  joystick.addEventListener('mousedown', handleStart);
  joystick.addEventListener('touchstart', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  init();
  initJoystick();
});
