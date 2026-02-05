import a2Bg from '@/assets/a2-bg.png'
import capabilitiesTop from '@/assets/a36b75d56c06668725871e43e96a49ec2652efab.jpg'
import capabilitiesBottom from '@/assets/c2babd82e8035966d69ba1e96586810a458fd4a9.jpg'

import X2Bg from '@/assets/entertainment-venues1.png'

import X2CapabilitiesTop from '@/assets/X2CapabilitiesTop.png'
import X2CapabilitiesBottom from '@/assets/X2CapabilitiesBottom.png'

import G1Bg from '@/assets/G1bg.png'

import G1CapabilitiesTop from '@/assets/G1CapabilitiesTop.jpg'
import G1CapabilitiesBottom from '@/assets/G1CapabilitiesBottom.jpg'


import D1bg from '@/assets/D1bg.png'

import D1CapabilitiesTop from '@/assets/D1CapabilitiesTop.png'
import D1CapabilitiesBottom from '@/assets/D1CapabilitiesBottom.png'

import MaxBg from '@/assets/maxgb.png'
import MaxCapabilitiesTop from '@/assets/MaxCapabilitiesTop.jpg'
import MaxCapabilitiesBottom from '@/assets/MaxCapabilitiesBottom.jpg'

import ProMaxBg from '@/assets/ProMaxbg.png'
import ProMaxCapabilitiesTop from '@/assets/ProMaxCapabilitiesTop.png'


import hotelsvg from '@/assets/Applications/hotel.svg'
import corporate from '@/assets/Applications/corporate.svg'
import healt from '@/assets/Applications/healt.svg'
import crown from '@/assets/Applications/crown.svg'
import store from '@/assets/Applications/store-01.svg'

import clothes from '@/assets/Applications/clothes.svg'
import clubs from '@/assets/Applications/clubs-02.svg'
import delivery from '@/assets/Applications/delivery-box-01.svg'
import burjAlArab from '@/assets/Applications/burj-al-arab.svg'

import warehouse from '@/assets/Applications/house-02.svg'
import industrial from '@/assets/Applications/factory-02.svg'
import corporateCampuses from '@/assets/Applications/city-01.svg'
import criticalInfrastructure from '@/assets/Applications/real-estate-01.svg'
import governmentMilitary from '@/assets/Applications/helicopter.svg'

import security from '@/assets/Applications/security-lock.svg'
import AiSvg from '@/assets/Applications/artificial-intelligence-04.svg'

import bubble from  '@/assets/Applications/bubble-chat-search.svg'
import ellipse from '@/assets/Applications/energy-ellipse.svg'
import deliveryTruck from '@/assets/Applications/delivery-truck-02.svg'

import recycle from '@/assets/Applications/recycle-02.svg'
import truck from '@/assets/Applications/truck.svg'
import fire from '@/assets/Applications/fire.svg'

import ExploreA2 from '@/assets/Applications/ExploreA2.png'
import ExploreX2 from '@/assets/Applications/ExploreX2.png'
import ExploreD1Ultra from '@/assets/Applications/ExploreD1Ultra.png'
import ExploreG1Ultra from '@/assets/Applications/ExploreG1Ultra.png'
import ExploreD1Max from '@/assets/Applications/ExploreD1Max.png'
import ExploreD1ProMax from '@/assets/Applications/ExploreD1ProMax.png'
// 产品
export const products = [
    {
        name : 'A2 Ultra',
        path : '/products/a2',
        descPath : '/description/a2',
        productDesc : {
            title : [
                {
                    color : false,
                    text : 'Where First Impressions Become '
                },
                {
                    color : true,
                    text : 'Lasting Memories'
                }
            ],
            desc : 'Mangobot A2 Ultra is a full-size humanoid robot designed to elevate human interaction through natural conversation, fluid movement, and intelligent navigation.',
            bg : a2Bg
        },
        capabilities : {
            top : capabilitiesTop,
            bottom : capabilitiesBottom,
            children : [
                {
                    title : 'Performance & Expression',
                    chidlren : [
                    'Fluid dance routines',
                    'Vocal capabilities',
                    'Ultra-realistic speech synthesis'
                    ]
                },
                {
                    title : 'Multilingual Communication',
                    chidlren : [
                    'Fluent conversationalist in multiple languages (Arabic, English, French 20+ other languages)',
                    ]
                },
                {
                    title : 'Autonomous Intelligence',
                    chidlren : [
                    'Self-mapping & navigation',
                    '360° obstacle avoidance with zero blind spots',
                    ]
                },
                { 
                    title : 'Brand Customization',
                    chidlren : [
                    'Tailored persona, voice, and personality',
                    'Expandable appearance to match your aesthetic'
                    ]
                },
                {
                    title : 'Seamless Operation',
                    chidlren : [
                    'Fully autonomous',
                    'Adapts to complex environments in real-time'
                    ]
                }
            ]
        },
        Applications: {
            bgImg : ExploreA2,
            bgTitle : 'Explore A2 Ultra',
            children : [
                {
                    name : 'Hotels & Resorts',
                    text : 'Front desk support, concierge services, guest relations',
                    icon : hotelsvg
                },
                {
                    name : 'Luxury Retail',
                    text : 'Brand ambassadors, product information, elevated customer experience',
                    icon : store
                },
                {
                    name : 'Corporate Headquarters',
                    text : 'Reception, visitor management, building information',
                    icon : corporate
                },
                {
                    name : 'Exclusive Events',
                    text : 'Guest check-in, information services, VIP assistance',
                    icon : crown
                },
                {
                    name : 'Healthcare Facilities',
                    text : 'Patient navigation, visitor guidance, administrative support',
                    icon : healt
                }
            ]
        }
    },
    {
        name : 'X2 Ultra',
        path : '/products/x2',
        descPath : '/description/x2',
        productDesc : {
            title : [
                {
                    color : true,
                    text : 'Entertainment'
                },
                {
                    color : false,
                    text : ' That Stops the Show'
                }
            ],
            desc : 'Mangobot X2 Ultra is an expressive humanoid built for performance-driven environments, combining lifelike movement, intelligent interaction, and embodied AI to captivate audiences and elevate events into camera-ready experiences.',
            bg : X2Bg
        },
        capabilities : {
            top : X2CapabilitiesTop,
            classNameTop : 'X2CapabilitiesTopStyle',
            bottom : X2CapabilitiesBottom,
            classNameBottom : 'X2CapabilitiesBottomStyle',
            children : [
                {
                    title : 'Fluid, Human-Like Movement',
                    chidlren : [
                    'Advanced servo systems deliver dance',
                    'gesture',
                    'Motion that feels organic'
                    ]
                },
                {
                    title : 'Choreography Programming',
                    chidlren : [
                    'Custom routines designed for your event',
                    'From contemporary dance to traditional movements',
                    'X2 Ultra adapts to your creative vision'
                    ]
                },
                {
                    title : 'Audience Interaction',
                    chidlren : [
                    'Recognition systems allow X2 Ultra to engage with guests',
                    ]
                },
                {
                    title : 'Multi-Robot Synchronization',
                    chidlren : [
                    'Deploy multiple X2 Ultra units for synchronized performances. ',
                    'Coordination is flawless, impact is multiplied.'
                    ]
                },
                {
                    title : 'Coordination is flawless, impact is multiplied.',
                    chidlren : [
                    'LED displays, custom colors, branded messaging. ',
                    "X2 Ultra doesn't just entertain, it amplifies your brand identity."
                    ]
                },
                {
                    title : 'Social Media Magnetism',
                    chidlren : [
                    'Every X2 Ultra performance becomes shareable content.',
                    'Built-in virality for the Instagram age.'
                    ]
                }
            ]
        },
        Applications: {
            className : 'ExploreX2Style',
            bgImg : ExploreX2,
            bgTitle : 'Explore X2 Ultra',
            children : [
                {
                    name : 'Fashion Shows & Launches',
                    text : 'Runway presence, product reveals, brand storytelling',
                    icon : clothes
                },
                {
                    name : 'Corporate Events',
                    text : 'Product launches, conferences, brand activations',
                    icon : corporate
                },
                {
                    name : 'Luxury Celebrations',
                    text : 'Weddings, galas, exclusive parties, VIP experiences',
                    icon : crown
                },
                {
                    name : 'Entertainment Venues',
                    text : 'Clubs, theme parks, entertainment complexes',
                    icon : clubs
                },
                {
                    name : 'Retail Activations',
                    text : 'In-store experiences, pop-ups, promotional campaigns',
                    icon : delivery
                },
                {
                    name : 'Cultural Events',
                    text : 'Festivals, exhibitions, public celebrations',
                    icon : burjAlArab
                }
            ]
        }
    },
    {
        name : 'G1 Ultra',
        path : '/products/g1-ultra',
        descPath : '/description/g1',
        productDesc : {
            title : [
                {
                    color : true,
                    text : 'Precision'
                },
                {
                    color : false,
                    text : ' Where It Matters Most'
                }
            ],
            desc : 'The G1 Ultra is a highly capable humanoid robot designed for precision-driven environments. Equipped with advanced force sensors and a multi-camera vision system, it delivers exceptional spatial awareness and controlled, accurate movement.',
            bg : D1bg
        },
        capabilities : {
            top : D1CapabilitiesTop,
            bottom : D1CapabilitiesBottom,
            classNameBottom : 'G1CapabilitiesBottomStyle',
            children : [
                {
                    title : '',
                    chidlren : [
                    'Advanced environmental awareness and spatial perception',
                    'Human-safe operation with built-in protection systems',
                    'Flexible, human-like movement and articulation',
                    'Reliable performance across diverse environments',
                    'Real-time data capture and cloud intelligence integration',
                    'Scalable, industrial-grade deployment readiness',
                    'Intuitive monitoring, control, and remote updates'
                    ]
                }
            ]
        },
        Applications: {
            bgImg : ExploreG1Ultra,
            bgTitle : 'Explore G1 Ultra',
            className : 'ExploreD1UltraStyle',
            children : [
                {
                    name : 'Corporate and commercial environments',
                    text : '',
                    icon : hotelsvg
                },
                {
                    name : 'Industrial facilities and smart factories',
                    text : '',
                    icon : industrial
                },
                {
                    name : 'Events, exhibitions, and experiential activation',
                    text : '',
                    icon : corporate
                },
                {
                    name : 'Security, monitoring, and controlled-access areas',
                    text : '',
                    icon : security
                },
                {
                    name : 'Research, training, and AI development environments',
                    text : '',
                    icon : AiSvg
                }
            ]
        }
    },
    {
        name : 'D1 Ultra',
        path : '/products/d1-ultra',
        descPath : '/description/d1',
        productDesc : {
            title : [
                {
                    color : false,
                    text : 'Vigilance That Never '
                },
                {
                    color : true,
                    text : 'Wavers'
                }
            ],
            desc : 'D1 Ultra is a quadruped security robot built for tireless patrol and intelligent threat detection, navigating complex terrain with confidence while distinguishing routine activity from real risk, delivering the next evolution of security.',
            bg : G1Bg,
            bgClassName : 'G1BgStyle',
        },
        capabilities : {
            top : G1CapabilitiesTop,
            bottom : G1CapabilitiesBottom,
            children : [
                {
                    title : 'Autonomous Patrol',
                    chidlren : [
                    'Pre-programmed routes or adaptive navigation',
                    'D1 continuously covers your facilities without fatigue',
                    'Distraction, or gaps'
                    ]
                },
                {
                    title : 'Threat Detection & Assessment',
                    chidlren : [
                    'Advanced computer vision identifies anomalies',
                    'Unauthorized access',
                    'Safety hazards',
                    'AI-powered analysis reduces false alarms while maintaining vigilance.'
                    ]
                },
                {
                    title : 'Real-Time Alerts',
                    chidlren : [
                    'Instant notification to security teams with visual evidence'
                    ]
                }
            ]
        },
        Applications: {
            bgImg : ExploreD1Ultra,
            bgTitle : 'Explore G1 Ultra',
            className : 'ExploreG1UltraStyle',
            children : [
                {
                    name : 'Warehouses & Distribution',
                    text : 'After-hours patrol, inventory protection, perimeter security',
                    icon : warehouse
                },
                {
                    name : 'Industrial Facilities',
                    text : 'Safety monitoring, hazardous area inspection, compliance verification',
                    icon : industrial
                },
                {
                    name : 'Corporate Campuses',
                    text : 'Grounds patrol, parking security, building perimeter',
                    icon : corporateCampuses
                },
                {
                    name : 'Critical Infrastructure',
                    text : 'Power facilities, data centers, sensitive installations',
                    icon : criticalInfrastructure
                },
                {
                    name : 'Government & Military',
                    text : 'Base security, facility monitoring, checkpoint support',
                    icon : governmentMilitary
                }
            ]
        }
    },
    {
        name : 'D1 Max',
        path : '/products/d1-max',
        descPath : '/description/d1Max',
        productDesc : {
            title : [
                {
                    color : false,
                    text : 'Built for'
                },
                {
                    color : true,
                    text : ' Intelligent'
                },
                {
                    color : false,
                    text : ' Remote Operations'
                }
            ],
            desc : 'The D1 Max is designed to stay light, move smart, and carry more, delivering strong payload capacity, long endurance, and stable performance in demanding environments. Built to adapt on the move, it handles impacts, recovers from falls, and adjusts naturally to changing terrain. With built-in awareness and autonomous navigation, plus flexible power and connectivity options, it’s ready to support everything from patrols and inspections to logistics, missions, and search-and-rescue operations.',
            bg : MaxBg,
            bgText : true,
            className : 'MaxStyle',
            bgClassName : 'MaxBgStyle',
            textMore : true
        },
        capabilities : {
            top : MaxCapabilitiesTop,
            bottom : MaxCapabilitiesBottom,
            children : [
                {
                    title : 'Hybrid Speed & Agility',
                    chidlren : [
                    'Combines legged and wheeled movement to move fast on flat ground and stay stable across obstacles, slopes, and uneven terrain.',
                    ]
                },
                {
                    title : 'Smart Adaptive Movement',
                    chidlren : [
                    'Continuously adjusts its posture and motion to handle impacts, recover from falls, and adapt smoothly to changing ground conditions.',
                    ]
                },
                {
                    title : 'Built-In Awareness',
                    chidlren : ['Uses vision, LiDAR, ultrasonic sensing, and inertial navigation to understand its surroundings and move autonomously with confidence.']
                },
                {
                    title : 'Rugged & Mission-Ready',
                    chidlren : ['Lightweight yet tough, with industrial-grade protection and flexible power and connectivity to support real-world deployments.']
                },
            ]
        },
        Applications: {
            bgImg : ExploreD1Max,
            bgTitle : 'Explore D1 Max',
            className : 'ExploreD1MaxStyle',
            children : [
                {
                    name : 'Security Patrol & Surveillance',
                    text : 'Autonomous monitoring of industrial zones, campuses, and restricted areas with stable navigation and environmental awareness.',
                    icon : hotelsvg
                },
                {
                    name : 'Power & Infrastructure Inspection',
                    text : 'Safely navigates complex facilities and rough terrain to support inspection tasks without human risk.',
                    icon : ellipse
                },
                {
                    name : 'Logistics & On-Site Transport',
                    text : 'Moves tools, equipment, and payloads efficiently across mixed environments where traditional vehicles struggle.',
                    icon : deliveryTruck
                },
                {
                    name : 'Search, Rescue & Mission Support',
                    text : 'Designed to operate in unstable or high-risk conditions, supporting response teams when speed and reliability matter most.',
                    icon : bubble
                },
            ]
        }
    },
    {
        name : 'D1 Pro Max',
        path : '/products/d1-pro-max',
        descPath : '/description/d1ProMax',
        productDesc : {
            title : [
                {
                    color : true,
                    text : 'Precision'
                },
                {
                    color : false,
                    text : 'Where It Matters Most'
                }
            ],
            bgClassName : 'ProMaxBgStyle',
            desc : 'The D1 Max Pro is a next-generation quadruped built to move with confidence while carrying serious weight. Designed to adapt naturally to rough and unpredictable terrain, it navigates complex environments with ease. With built-in awareness and autonomous capabilities, it’s ready to support industrial inspections and step in when conditions demand fast, reliable action.',
            bg : ProMaxBg,
            bgText : true,
            className : 'ProMaxStyle',
            textMore : true
        },
        capabilities : {
            top : ProMaxCapabilitiesTop,
            bottom : ProMaxBg,
            children : [
                {
                    title : 'Heavy Payload Confidence',
                    chidlren : [
                    'Carries serious weight with stability, ideal for transporting equipment, tools, or mounted systems without compromising movement.',
                    ]
                },
                {
                    title : 'All-Terrain Mobility',
                    chidlren : [
                    'Moves smoothly across stairs, slopes, and uneven ground, maintaining balance and control even in dynamic environments.',
                    ]
                },
                {
                    title : 'Long-Run Endurance',
                    chidlren:[
                        'High-capacity battery with hot-swap support enables extended operation with minimal downtime, even during long missions.'
                    ]
                },
                {
                    title: 'Built for Extremes',
                    chidlren : ['Industrial-grade protection allows reliable performance in dust, rain, heat, cold, and harsh outdoor conditions.']
                }
            ]
        },
        Applications :{ 
            bgImg : ExploreD1ProMax,
            bgTitle : 'Explore D1 Pro Max',
            children : [
                {
                    name : 'Industrial & Plant Inspections',
                    text : 'Safely navigates complex facilities to support inspections in energy, chemical, and heavy industrial sites.',
                    icon : industrial
                },
                {
                    name : 'Heavy-Duty Transport',
                    text : 'Handles cargo and equipment movement across challenging terrain where traditional vehicles fall short.',
                    icon : truck
                },
                {
                    name : 'Emergency & Rescue Operations',
                    text : 'Deploys quickly in high-risk environments, supporting rescue teams when conditions are unstable or unsafe.',
                    icon : fire
                },
                {
                    name : 'Autonomous Patrol & Monitoring',
                    text : 'Provides continuous, intelligent patrol in large outdoor or industrial areas with minimal human intervention.',
                    icon : recycle
                },
            ]
        }
    }
]