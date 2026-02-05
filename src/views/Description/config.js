
import bg3 from './images/f92eef46773f82ee1ca63f1de6cfa7b37d5592cf.png'
import bg2 from './images/84bec9ed59ccf3a0a97d9bf43b50ac6744219825.png'
import bg1 from './images/4e7c76a299bc371d994ad2ac98369291f13d4b5d.png'
import bg6 from './images/1278cfd5dc8c7291885c7e0660c242ca8fbdcf18.png'
import bg5 from './images/793bbc84b803feef4177f15823f6ebc136ffb832.png'
import bg4 from './images/14046396419ce371ae85ad6b89ca38d3f5f4fcb8.png'

import item1 from './images/machine-robot.svg'
import item2 from './images/battery-charging-02.svg'
import item3 from './images/usb.svg'
import item4 from './images/mic-01.svg'
import item5 from './images/notebook.svg'
import item6 from './images/automotive-battery-02.svg'
import item7 from './images/battery-full.svg'
import item8 from './images/certificate.svg'
import item9 from './images/electric-plugs.svg'
import item10 from './images/wireless.svg'
import item11 from './images/smartphone-wifi.svg'
import item12 from './images/square-arrow-data-transfer-horizontal-sharp.svg'
import item13 from './images/transmission.svg'


import max1 from './images/max1.png'
import max2 from './images/max2.png'
import max3 from './images/max3.png'
import max4 from './images/max4.png'
import proMax1 from './images/pro1.png'
import proMax2 from './images/pro2.png'
import proMax3 from './images/pro3.png'
import proMax4 from './images/pro4.png'

import D1 from './images/D1.png'
import D2 from './images/D2.png'
import D3 from './images/D3.png'
import D4 from './images/D4.png'

import frontView from './images/anatomy.png'
import frontView2 from './images/anatomy2.png'
import frontView3 from './images/anatomy3.png'


import solute3 from './images/solute3.png'
import solute4 from './images/solute4.png'
import solute6 from './images/solute6.png'

export const descriptionConfig = {
    a2: {
        high: true,
        path: '/description/a2',
        price: true,
        video: {
            url: 'https://media.mangobot.org/2026020500.mp4',
            title: 'Mangobot A2 Ultra',
            text: ['Full-Size Humanoid Robot', 'Large-scale commercial deployment, proven in real environments'],
        },

        bg: {
            imgs: [
                {
                    img: bg1,
                    title: 'Entertainment & Commercial Performance',
                    text: 'Event promotion, brand enhancement, skill-based interaction'
                },
                {
                    img: bg2,
                    title: 'Sales / Reception / Guidance / Co-Host / DJ',
                    text: 'Events, exhibitions, ceremonies, parties, podcasts'
                },
                {
                    img: bg3,
                    title: 'IP-Customized Brand Ambassador',
                    text: 'Image customization, brand personality, visual identity upgrade'
                }
            ]
        },
        anatomy: {
            frontView: frontView
        },
        speach: {
            leftSpecs: [{
                title: "General",
                specs: [
                    { label: "Model", value: "A2 Ultra" },
                    { label: "Height", value: "169 cm" },
                    { label: "Weight", value: "69 kg" },
                ],
            },
            {
                title: "Dimensions",
                specs: [
                    { label: "Height", value: "169 cm" },
                    { label: "Width", value: "75 cm" },
                    { label: "Length", value: "30 cm" },
                ],
            },
            {
                title: "Degrees of Freedom",
                specs: [
                    { label: "Total DOF", value: "40" },
                    { label: "Neck", value: "2" },
                    { label: "Single arm", value: "7" },
                    { label: "Single leg", value: "6" },
                    { label: "Hand", value: "6-DOF dexterous" },
                ],
            },
            {
                title: "Perception System",
                specs: [
                    { label: "3D LiDAR", value: "Equipped" },
                    { label: "RGB-D camera", value: "Equipped" },
                    { label: "RGB camera", value: "Equipped" },
                    { label: "Fisheye camera", value: "Equipped" },
                ],
            },
            {
                title: "Communication",
                specs: [
                    { label: "Wi-Fi", value: "Supported" },
                ],
            }],
            rightSpecs: [{
                title: "Interaction Modules",
                specs: [
                    { label: "Facial expression screen", value: "Yes" },
                    { label: "Interaction screen", value: "Yes" },
                    { label: "Microphone array", value: "Yes" },
                    { label: "Speaker", value: "Yes" },
                    { label: "Indicator light", value: "Yes" },
                ],
            },
            {
                title: "Performance",
                specs: [
                    { label: "Peak knee torque", value: "270 N·m" },
                    { label: "Speed", value: "Max 0.8 m/s (typical <0.6 m/s)" },
                    { label: "Max arm load", value: "~3 kg" },
                ],
            },
            {
                title: "Power & Energy",
                specs: [
                    { label: "Battery capacity", value: "14.4 Ah" },
                    { label: "Standing battery life", value: "~3 h" },
                    { label: "Walking battery life", value: "~1.5 h" },
                    { label: "Charging time", value: "2 h" },
                    { label: "Voltage", value: "110–220 V" },
                ],
            },
            {
                title: "Intelligent Control",
                specs: [
                    { label: "CPU", value: "16-core high-performance" },
                    { label: "AI board", value: "NVIDIA Jetson Orin (275 TOPS)" },
                ],
            },
            {
                title: "Other",
                specs: [
                    { label: "Handheld remote", value: "Yes" },
                    { label: "OTA upgrade", value: "Supported" },
                    { label: "Dance development", value: "Supported" },
                    { label: "Swarm control", value: "Supported" },
                ],
            },
            ]
        },
        Items: [
            { title: "Robot body x1", img: item1 },
            { title: "Battery charger x1", img: item2 },
            { title: "Accessory charger x1", img: item3 },
            { title: "Lavalier microphone x1", img: item4 },
            { title: "Battery pack x1", img: item5 },
            { title: "Wireless emergency stop switch x1", img: item6 },
            { title: "Wireless remote controller x1", img: item7 },
            { title: "Transfer device x1", img: item8 },
        ],
        attributes: {
            items: [
                {
                    title: 'Height',
                    value: '169cm'
                },
                {
                    title: 'Weight',
                    value: '69kg'
                },
                {
                    title: "Runtime",
                    value: "3 hours"
                },
                {
                    title: "DOF",
                    value: "40"
                },
                {
                    title: "Battery",
                    value: "700wh"
                },
                {
                    title: "Turning Radius",
                    value: "60cm"
                },
                {
                    title: "Daily Rental",
                    value: "AED 20,000 per unit"
                },
            ]
        }
    },
    x2: {
        precision: true,
        price: true,
        path: '/description/x2',
        video: {
            url: 'https://media.mangobot.org/2026020504.mp4',
            title: 'Mangobot X2 Ultra',
            text: ['Agile. Intelligent. Delightfully Human.'],
        },
        bionic : true,
        speach: {
            leftSpecs: [
                {
                    title: "General",
                    specs: [
                        { label: "Model", value: "A2 Ultra" },
                        { label: '', value: '1310 mm (H)' },
                        { label: "Dimensions", value: "460 mm (W)" },
                        { label: '', value: ' 210mm (L)' },
                        { label: "height", value: "=131 m" },
                        { label: "weight", value: "=39kg" },
                        { label: "Total DOF", value: "30" },
                        { label: "Neck DOF", value: "1" },
                        { label: "Single arm DOF", value: "7" },
                        { label: "Waist DOF", value: "3" },
                        { label: "Single leg DOF", value: "6" },
                        { label: "Arm reach", value: "558 mm" },
                        { label: "Excluding and Effector", value: "10C to 40C degrees" },
                    ],
                },
                {
                    title: "Perception System",
                    specs: [
                        { label: "3D LiDAR", value: "Equipped" },
                        { label: "RGB-D Camera", value: "Equipped" },
                        { label: "RGB camera", value: "Interactive RGB + Front Dual RGB + Rear RGB" },
                        { label: "Head touch sensor", value: "Equipped" },
                    ],
                },
                {
                    title: "Communication",
                    specs: [
                        { label: "Method", value: "Wi-Fi, Bluetooth, 4G/5G module" },
                    ],
                },
                {
                    title: "Interaction Module",
                    specs: [
                        { label: "Audio I/O", value: "Microphone array, wireless microphone, speaker" },
                        { label: "Display", value: "Interactive screen, lighting effects" },
                    ],
                },
                {
                    title: "Performance Specifications",
                    specs: [
                        { label: "Peak joint torque", value: "120 N·m" },
                        { label: "Walking Speed", value: "Up to 1.8 m/s" },
                        { label: "Typical Speed", value: "<0.8 m/s" },
                        { label: "Lab environment", value: "<2 m/s" },
                        { label: "Max payload (specific postures)", value: "3 kg (excl. end effector)" },
                        { label: "Payload across full range", value: "<1 kg (excl. end effector)" },
                    ],
                },
            ],
            rightSpecs: [
                {
                    title: "Energy System",
                    specs: [
                        { label: "Battery Capacity", value: "Approx. 500 Wh" },
                        { label: "Operating Time", value: "Approx. 2 hours (at 0.5 m/s)" },
                        { label: "Power supply", value: "Direct charging, swappable battery, optional auto-charging dock" },
                        { label: "Charging time", value: "<1.5 hours" },
                        { label: "Input voltage", value: "110V-220V" },
                        { label: "Charger output", value: "54.6V 10A" },
                    ],
                },
                {
                    title: "Intelligent Control",
                    specs: [
                        { label: "Main Compute Board", value: "RK3588 ×2" },
                        { label: "High performance board", value: "Orin NX (157 TOPS)" },
                    ],
                },
                {
                    title: "Hardware Expansion Interface",
                    specs: [
                        { label: "USB Ports", value: "Type A ×2, Type C ×2" },
                        { label: "LAN Ports", value: "RJ45 ×2" },
                        { label: "Video Output", value: "Mini DP ×1" },
                        { label: "Power Output", value: "12V/3A ×1, 48V/5A ×1" },
                    ],
                },
                {
                    title: "Others",
                    specs: [
                        { label: "Handheld remote", value: "Included" },
                        { label: "OTA Upgrade", value: "Supported" },
                        { label: "Mobile App", value: "Supported" },
                        { label: "Secondary Development", value: "Supported" },
                    ],
                },
            ],
        },
        anatomy: {
            frontView: frontView2,
            backView: frontView3,
        },
        process: [
            {
                title: "Self-Directed Navigation",
                copy:
                    "Powered by LiDAR and RGB-D vision, Mangobot X2 Ultra continuously maps its environment and plots optimal routes in real time.",
            },
            {
                title: "Proactive Obstacle Avoidance",
                copy:
                    "With LiDAR, RGB-D cameras, front stereo vision and intelligent algorithms, the robot detects obstacles ahead and adjusts its path proactively.",
            },
            {
                title: "Automatic Energy Replenishment",
                copy:
                    "When battery power is low, the robot autonomously locates charging equipment and performs automatic charging without human intervention.",
            },
        ],
        attributes:
        {
            items: [
                {
                    title: "Height",
                    value: "130cm"
                },
                {
                    title: "Weight",
                    value: "37kg"
                },
                {
                    title: "Runtime",
                    value: "3 hours"
                },
                {
                    title: "DOF",
                    value: "31"
                },
                {
                    title: "Battery",
                    value: "500Wh"
                },
                {
                    title: "Max End Load",
                    value: "3kg"
                },
                {
                    title: "Daily Rental",
                    value: "AED 20,000 per unit"
                },
            ]
        },
        Items: [
            { title: "Robot body ×1", img: item1 },
            { title: "Charging Adapter ×1", img: item2 },
            { title: "Remote Controller ×1", img: item3 },
            { title: "Microphone ×1", img: item4 },
            { title: "Quick Start Guide ×1", img: item9 },
            { title: "Battery Package", img: item10 },
            { title: "Rechargeable Battery ×1", img: item11 },
            { title: "Certificate of Conformity ×1", img: item12 },
        ],
        bg: {
            imgs: [
                {
                    img: bg4,
                    title: 'Human-Like Interaction',
                    text: 'Visual, voice, touch, and facial expression interaction combined to enable natural, context-aware communication across diverse environments.'
                },
                {
                    img: bg5,
                    title: 'Lifelike Agility',
                    text: 'Humanoid motion, expressive movement, and synchronized head and waist motion deliver fluid, realistic performance and dynamic presence.'
                },
                {
                    img: bg6,
                    title: 'Intelligent Autonomy',
                    text: 'Autonomous navigation, proactive obstacle avoidance, and self-managed energy systems powered by intelligent, algorithm-driven decision making.'
                }
            ]
        }
    },
    d1: {
        price: true,
        path: '/description/d1',
        video: {
            url: 'https://media.mangobot.org/2026020503.mp4',
            title: 'Mangobot D1 Ultra',
            text: ['Industrial-grade compact quadruped robot', 'Purpose-built for advanced industrial and specialized operations'],
        },
        tech: [
            {
                label: "Product Positioning",
                value: "Compact yet Powerful – Industry Grade",
            },
            {
                label: "Application scenarios",
                value: "Special operations, emergency response, security, inspection, education, entertainment",
            },
            {
                label: "Standing Dimensions",
                value: "63x36x42cm",
            },
            {
                label: "Folded Dimensions",
                value: "67x43x15cm",
            },
            {
                label: "Operation and control capabilities",
                value: "Standard RL-based operation and control",
            },
            {
                label: "Speed",
                value: "0~3.7m/s (limit ~5m/s)",
            },
            {
                label: "Static load",
                value: "≈8kg (limit ~10kg)",
            },
            {
                label: "Unloaded range (1.8m/s)",
                value: "6km",
            },
            {
                label: "Loaded range (5kg)",
                value: "4km",
            },
            {
                label: "Protection level",
                value: "IP54",
            },
            {
                label: "Stable Operating Time in Extreme Environments",
                value: "200h",
            },
            {
                label: "Peak output power of the whole machine",
                value: "about 3,500W",
            },
            {
                label: "Joint motor peak torque",
                value: "about 48N-m",
            },
            {
                label: "Joint motor peak power density",
                value: "2kw/kg",
            },
            {
                label: "Joint control mode",
                value: "dual encoding",
            },
            {
                label: "Expansion interface",
                value: "Ethernet port, USB port, power port (12V/24V), SBUS port, UART port",
            },
            {
                label: "Supported expansion",
                value: "3D radar, depth camera, RTK, 4g module, image transmission module, follow-up module, application layer loading, etc.",
            },
        ],
        preview: [
            {
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                bgImg: D1,
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Built for Harsh Environment',
                text: [
                    'Dustproof and waterproof construction engineered for long-term reliability.',
                    'High resistance to splashing, damp, muddy, and sandy environments, ',
                    'reinforced by vacuum press-formed aluminum alloy shafts and sealed, anti-corrosion core components.'
                ]
            },
            {
                bgImg: D3,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Terrain-Adaptive Mobility',
                text: ['Robust mobility powered by RL-based gait control, delivering self-balancing, anti-tipping, and disturbance rejection across complex terrains.',
                    'Supports a maximum running speed of 3.7 m/s, slope climbing angles of ≥30°, forward or upward jumps up to 35 cm, and continuous stair climbing up to 16 cm.']
            },
            {
                bgImg: D2,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '0px -328.909px',
                size: '100% 342.353%',
                isTop: true,
                title: 'High-Torque Motor Performance',
                text: ['High-performance motors deliver 48 N-m peak torque for complex terrain and high-load operations.',
                    'Impact-resistant modules ensure long service life, while the dual-encoder controller enables calibration-free operation, ready for use immediately at startup.']
            },
            {
                bgImg: D4,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Open & Flexible Development',
                text: ['Designed for modular deployment with standardized interfaces supporting a wide range of mounted payloads.',
                    'Features an open SDK for secondary development, compatibility with positioning modules, LiDAR, depth cameras, RTK, 4G/5G, and image transmission modules.',
                    'Supports URDF modeling for simulation in platforms such as Isaac Sim and Mujoco.']
            }
        ]
    },
    g1: {
        price: true,
        path: '/description/g1',
        solution: {
            children: [
                {
                    title: 'Multi-Scenario Operations',
                    left: true,
                    videoSrc : 'https://media.mangobot.org/2026020510.mp4',
                    text: [
                        'Designed for industrial, commercial, and domestic environments',
                        'Reaches working heights above 2 meters while continuously handling 3 kg with one arm',
                        '26 Degrees of Freedom enable head rotation (horizontal & vertical) and flexible waist motion (bend, stretch, lift, lower)',
                        'Mobile chassis supports in-place turning, navigates 95% of factory pathways, and overcomes obstacles up to 20 mm'
                    ]
                },
                {
                    title: 'Native Data Collection',
                    left: false,
                    videoSrc : 'https://media.mangobot.org/2026020502.mp4',
                    text: [
                        'Millisecond-latency remote operation via VR and motion capture, recording full-body joint data',
                        'Cloud-based collaborative data collection with automated validation and manual review for high data quality',
                        'Asynchronous cloud upload with local data buffering limited to under 2 hours'
                    ]
                },
                {
                    title: 'Multidimensional Perception',
                    left: true,
                    imgSrc : solute3,
                    text: [
                        'Six-axis force sensors on both arms for precise force control',
                        'Eight high-resolution cameras on the upper body for full 3D perception',
                        'Front and rear RGB-D cameras plus LiDAR on the chassis for accurate obstacle detection',
                        'All sensors precisely calibrated for consistent, reliable perception'
                    ]
                },
                {
                    title: 'Comprehensive Safety',
                    left: false,
                    imgSrc : solute4,
                    text: [
                        'Immediate shutdown and alarm activation in case of malfunction',
                        'Built-in collision protection',
                        'Dedicated emergency stop button',
                        'Intelligent chassis movement for obstacle avoidance'
                    ]
                },
                {
                    title: 'Stable Operation & Mass Production',
                    left: true,
                    videoSrc : 'https://media.mangobot.org/2026020501.mp4',
                    text: [
                        'Built with industrial-grade components and tested in extreme environments for long-term reliability',
                        'Wired communication ensures stable data transmission',
                        'Scalable mass production enables rapid delivery'
                    ]
                },
                {
                    title: 'HMI System for Efficient O&M',
                    left: false,
                    imgSrc : solute6,
                    text: [
                        'Real-time monitoring and alerts for robot and remote operations',
                        'One-click fault recovery through intuitive O&M controls',
                        'OTA updates for continuous system improvement'
                    ]
                }
            ]
        },
        video: {
            url: 'https://media.mangobot.org/2026020506.mp4',
            title: 'Mangobot G1 Ultra',
            text: ['General-purpose robot built for intelligent data collection and real-time model inference'],
            textRight: ['Designed to gather rich environmental data and support continuous learning and AI model optimization.']
        }
    },
    d1Max: {
        path: '/description/d1Max',
        video: {
            url: 'https://media.mangobot.org/2026020507.mp4',
            title: 'Mangobot D1 Max',
            text: ['Intelligent Hybrid Quadruped Robot', 'A lightweight yet powerful robot combining legged and wheeled mobility, intelligent perception, and industrial-grade protection to operate seamlessly across complex terrain and mission-critical environments.'],
        },
        Items: [
            { title: "D1 Max Robot Dog Platform *1 Unit", img: item1 },
            { title: "Charger *1 Piece", img: item2 },
            {
                title: 'Handheld Remote *1 Piece',
                img: item13
            }
        ],
        tech: [
            {
                label: "Standing Dimensions (L × W × H)",
                value: "Approx. 80 × 50 × 60 cm",
            },
            {
                label: "Folded Dimensions",
                value: "Approx. 89 × 50 × 26 cm",
            },
            {
                label: "Weight",
                value: "Approx. 30 kg (including battery)",
            },
            {
                label: "Legged Walking Speed",
                value: "> 4 m/s",
            },
            {
                label: "Wheeled Driving Speed",
                value: "> 8 m/s",
            },
            {
                label: "Maximum Obstacle Height",
                value: "22 cm",
            },
            {
                label: "Obstacle Crossing Height",
                value: "80 cm",
            },
            {
                label: "Trench Crossing Width",
                value: "80 cm",
            },
            {
                label: "Slope Climbing Ability",
                value: "45°",
            },
            {
                label: "Continuous Load Capacity",
                value: "25 kg",
            },
            {
                label: "Battery Capacity",
                value: "20 Ah",
            },
            {
                label: "Endurance with Load",
                value: "2.5 hours",
            },
            {
                label: "Operating Temperature",
                value: "–20 °C to 55 °C",
            },
            {
                label: "Protection Rating",
                value: "IP67",
            },
            {
                label: "External Expansion Ports",
                value: "Gigabit Ethernet, USB, Serial Port",
            },
            {
                label: "Power Interfaces",
                value: "5V / 12V / 24V / 48V",
            },
            {
                label: "Maximum Power Output",
                value: "480 W",
            },
            {
                label: "Wheel / Leg Switching",
                value: "Quick release & quick change",
            },
        ],
        usecase: true,
        preview: [
            {
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), ',
                bgImg: max1,
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Adaptive Terrain Mobility',
                text: ['Agile movement with wide joint articulation and intelligent posture control, enabling stable climbing and smooth navigation across complex terrain.']
            },
            {
                bgImg: max2,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '0px -54.072px',
                size: '100% 128.193%',
                isTop: false,
                title: 'Lightweight Power, Heavy Payload',
                text: ['Ultra-light design with a near 1:1 load-to-weight ratio, supporting payloads up to 30 kg, around 50% higher than comparable robots.']
            },
            {
                bgImg: max3,
                linear: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),',
                postion: '50%',
                size: 'cover',
                isTop: true,
                title: 'Continuous Operation',
                text: ['Autonomous charging and hot-swappable batteries enable uninterrupted performance during extended missions.']
            },
            {
                bgImg: max4,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '0px -167.322px',
                size: '100% 128.193%',
                isTop: false,
                title: 'Industrial Resilience & Expansion',
                text: [' IP67 protection and operation from –20°C to 55°C, with abundant interfaces and multi-voltage power support for high-power expansion.']
            }
        ]
    },
    d1ProMax: {
        path: '/description/d1ProMax',
        video: {
            url: 'https://media.mangobot.org/2026020508.mp4',
            title: 'Mangobot D1 Pro Max',
            text: ['Intelligent quadruped built for extreme environments', 'Built for force, endurance, and harsh environments']
        },
        scenarios: true,
        tech: [
            {
                label: "Standing Dimensions",
                value: "123 × 53 × 73 cm",
            },
            {
                label: "Weight",
                value: "64 kg",
            },
            {
                label: "Battery Capacity",
                value: "2160 Wh",
            },
            {
                label: "Autonomous Charging",
                value: "Optional",
            },
            {
                label: "Maximum Speed",
                value: "3.5 m/s",
            },
            {
                label: "Maximum Load",
                value: "100 kg",
            },
            {
                label: "Effective Load",
                value: "50 kg",
            },
            {
                label: "Maximum Climbing Angle",
                value: "45°",
            },
            {
                label: "Max Continuous Stair Climbing Height",
                value: "30 cm",
            },
            {
                label: "Endurance (Unloaded)",
                value: "5.5 hours",
            },
            {
                label: "Endurance (Loaded)",
                value: "2.5 hours",
            },
            {
                label: "Effective Load Range",
                value: "13.5 km",
            },
            {
                label: "Protection Rating",
                value: "IP67",
            },
            {
                label: "Operating Temperature",
                value: "-20°C to 55°C",
            },
            {
                label: "Sensors",
                value: "Integrated LiDAR",
            },
            {
                label: "Expansion Ports",
                value: "Gigabit Ethernet, USB, Power (12V / 24V / 48V / 720W)",
            },
        ],
        preview: [
            {
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                bgImg: proMax1,
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Heavy Payload, Stable Performance',
                text: ['D1 Max Pro supports up to 50 kg continuous payload and 100 kg maximum load, enabling equipment mounting, cargo transport, and material handling without compromising balance or control']
            },
            {
                bgImg: proMax2,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Endurance You Can Rely On',
                text: ['A high-capacity 2160 Wh battery delivers up to 2.5 hours of operation under load and 5.5 hours when unloaded. Hot-swappable battery design ensures minimal downtime, with optional autonomous charging available for extended deployments.']
            },
            {
                bgImg: proMax3,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '50%',
                size: 'cover',
                isTop: true,
                title: 'True All-Terrain Mobility',
                text: ['D1 Max Pro climbs 30 cm steps, navigates industrial staircases, and maintains stability through integrated fall-recovery mechanisms. Its motion system is optimized for agility, resilience, and continuous operation in dynamic environments.']
            },
            {
                bgImg: proMax4,
                linear: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),',
                postion: '50%',
                size: 'cover',
                isTop: false,
                title: 'Industrial-Grade Environmental Resistance',
                text: [' With IP67 protection, D1 Max Pro operates reliably in extreme conditions. It withstands rain, dust, and harsh weather, functions between -20°C and 55°C, and tolerates shallow water immersion, making it suitable for outdoor, industrial, and emergency scenarios.']
            }
        ]
    }
}