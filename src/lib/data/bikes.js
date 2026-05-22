import { img } from "@/assets/assest";

export const bikeData = [
  {
    id: 1,
    slug: 'hunter-350',
    name: 'Hunter 350',
    category: 'Roadster',
    emiStarting: 4999,
    description: 'Agile, compact, and designed for the urban jungle. The Hunter 350 is built for those who want to navigate the city with ease and style.',
    image: img.hunter350,
    colors: [
      { name: 'Factory Black', hex: '#111111', image: img.hunter350, price: '₹1,69,189' },
      { name: 'Graphite Grey', hex: '#555555', image: img.classic350, price: '₹2,01,051' },
      { name: 'Dapper Grey', hex: '#666666', image: img.hunter350, price: '₹2,01,051' },
      { name: 'Rio White', hex: '#eeeeee', image: img.hunter350, price: '₹2,01,051' },
      { name: 'London Red', hex: '#9B111E', image: img.hunter350, price: '₹2,06,464' },
      { name: 'Rebel Blue', hex: '#1B4D89', image: img.hunter350, price: '₹2,06,464' },
      { name: 'Tokyo Black', hex: '#1c1c1c', image: img.hunter350, price: '₹2,06,464' },
      { name: 'Tarmac Black', hex: '#222222', image: img.hunter350, price: '₹1,83,399' },
      { name: 'Moonshot White', hex: '#ffffff', image: img.hunter350, price: '₹2,06,464' },
      { name: 'Mumbai Yellow', hex: '#FFD700', image: img.hunter350, price: '₹2,06,464' },
    ],
    brochure: '/brochures/hunter-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Agility Redefined",
        description: "With its shorter wheelbase, lighter weight and tighter geometry, the Hunter's chunky frame is fitted with a set of super maneuverable 17-inch alloy wheels.",
        image: img.banner1
      },
      {
        title: "Intuitive Ergonomics",
        description: "A seat height of 790mm, wide contours and excellent standover ergonomics offer easy handling and a confident riding experience.",
        image: img.banner2
      }
    ]
  },
  {
    id: 2,
    slug: 'classic-350',
    name: 'Classic 350',
    category: 'Classic',
    emiStarting: 11999,
    description: 'Inspired by the G2 model of the 1950s, the all-new Classic 350 continues to embody the timeless design and dependable performance.',
    image: img.classic350,
    colors: [
      { name: 'Redditch Red', hex: '#9B111E', image: img.classic350, price: '₹2,25,064' },
      { name: 'Madras Red', hex: '#800020', image: img.classic350, price: '₹2,27,955' },
      { name: 'Medallion Bronze', hex: '#a38058', image: img.classic350, price: '₹2,37,252' },
      { name: 'Commando Sand', hex: '#938c75', image: img.classic350, price: '₹2,59,827' },
      { name: 'Gun Grey', hex: '#7a7f80', image: img.classic350, price: '₹2,73,669' },
      { name: 'Stealth Black', hex: '#1c1c1c', image: img.classic350, price: '₹2,73,669' },
      { name: 'Emerald Green', hex: '#004b49', image: img.classic350, price: '₹2,79,533' },
    ],
    brochure: '/brochures/classic-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "A Timeless Stance",
        description: "The Classic 350 carries the legendary teardrop fuel tank, the distinctive thump, and the hallmark casquette headlamp, harmonizing the past and the present.",
        image: img.banner1
      },
      {
        title: "Unmatched Comfort",
        description: "Featuring a wider, more relaxed riding posture and an exceptionally comfortable seat to ensure you can soak in every moment of the journey.",
        image: img.banner2
      }
    ]
  },
  {
    id: 3,
    slug: 'bullet-350',
    name: 'Bullet 350',
    category: 'Classic',
    emiStarting: 4999,
    description: 'A symbol of resilience and a testament to the enduring spirit of pure motorcycling. The new Bullet 350 is more than just a machine; it is a legacy.',
    image: img.bullet350,
    colors: [
      { name: 'Military Black', hex: '#111111', image: img.bullet350, price: '₹2,00,227' },
      { name: 'Battalion Black', hex: '#000000', image: img.bullet350, price: '₹2,02,810' },
      { name: 'The Standard Black', hex: '#1a1a1a', image: img.bullet350, price: '₹2,28,045' },
      { name: 'The Standard Maroon', hex: '#800000', image: img.bullet350, price: '₹2,28,045' },
      { name: 'Black Gold', hex: '#b3953b', image: img.bullet350, price: '₹2,63,224' },
    ],
    brochure: '/brochures/bullet-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Unwavering Legacy",
        description: "For over nine decades, the Bullet has stood as the definitive symbol of motorcycling resilience and a testament to enduring character.",
        image: img.banner2
      },
      {
        title: "The Signature Thump",
        description: "The updated J-series engine ensures that the iconic Royal Enfield thump resonates stronger than ever while delivering smooth, modern performance.",
        image: img.banner1
      }
    ]
  },
  {
    id: 4,
    slug: 'goan-classic-350',
    name: 'Goan Classic 350',
    category: 'Classic',
    emiStarting: 11999,
    description: 'A gorgeous, laid-back cruiser version of the iconic Classic. The Goan Classic 350 is built for effortless, stylish touring along coastal roads.',
    image: img.classic350,
    colors: [
      { name: 'Shack Black', hex: '#151515', image: img.classic350, price: '₹2,82,265' },
      { name: 'Purple Haze', hex: '#4b0082', image: img.classic350, price: '₹2,82,265' },
      { name: 'Trip Teal Green', hex: '#008080', image: img.classic350, price: '₹2,85,744' },
      { name: 'Rave Red', hex: '#b22222', image: img.classic350, price: '₹2,85,744' },
    ],
    brochure: '/brochures/classic-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Laid-Back Bobber Stance",
        description: "Featuring a low-slung, relaxed step-through seating posture, high-set ape-hanger handlebars, and premium white-walled tyres for a classic cruiser look.",
        image: img.banner4
      },
      {
        title: "Refined Thump",
        description: "Powered by the exceptionally smooth J-series single-cylinder engine, designed to make every cruise along scenic routes feel absolutely effortless.",
        image: img.banner1
      }
    ]
  },
  {
    id: 5,
    slug: 'himalayan-450',
    name: 'Himalayan 450',
    category: 'Adventure',
    emiStarting: 24999,
    description: 'The all-new Himalayan is designed to conquer every terrain, from the highest peaks to the deepest valleys.',
    image: img.himalayan450,
    colors: [
      { name: 'Kaza Brown', hex: '#8a7d72', image: img.himalayan450, price: '₹3,91,615' },
      { name: 'Slate Poppy Blue', hex: '#3b5c78', image: img.himalayan450, price: '₹3,96,848' },
      { name: 'Kamet White', hex: '#e8ecef', image: img.himalayan450, price: '₹4,02,080' },
      { name: 'Hanle Black', hex: '#111111', image: img.himalayan450, price: '₹4,08,619' },
      { name: 'Mana Black', hex: '#222222', image: img.himalayan450, price: '₹4,29,779' },
    ],
    brochure: '/brochures/himalayan-450.pdf',
    stats: [
      { label: 'Engine', val: '452cc' },
      { label: 'Power', val: '40.02 PS' },
      { label: 'Torque', val: '40 Nm' }
    ],
    stories: [
      {
        title: "Sherpa 450 Engine",
        description: "The heart of the new Himalayan. A liquid-cooled, 452cc engine that produces 40PS of peak power, designed to pull you through the toughest altitudes.",
        image: img.banner1
      },
      {
        title: "Adventure Ready",
        description: "Equipped with a long-travel suspension, switchable ABS, and true dual-purpose tires, it feels right at home when the tarmac ends.",
        image: img.banner2
      }
    ]
  },
  {
    id: 6,
    slug: 'interceptor-650',
    name: 'Interceptor 650',
    category: 'Cafe Racer',
    emiStarting: 49999,
    description: 'The Interceptor 650 is a versatile twin-cylinder roadster that captures the essence of the 1960s California cool.',
    image: img.interceptor,
    colors: [
      { name: 'Cali Green', hex: '#2e5a44', image: img.interceptor, price: '₹4,27,777' },
      { name: 'Canyon Red', hex: '#CD5C5C', image: img.interceptor, price: '₹4,27,777' },
      { name: 'Sunset Strip Black', hex: '#222222', image: img.interceptor, price: '₹4,38,578' },
      { name: 'Blackray', hex: '#111111', image: img.interceptor, price: '₹4,52,075' },
      { name: 'Mark Two Chrome', hex: '#C0C0C0', image: img.interceptor, price: '₹4,65,570' },
    ],
    brochure: '/brochures/interceptor-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "Easy Riding",
        description: "With its wide handlebars, low seat height, and confident riding position, the Interceptor is designed for effortless cruising down the coast or the highway.",
        image: img.banner1
      },
      {
        title: "Twin Cylinder Soul",
        description: "The 648cc parallel-twin engine is a masterpiece of refinement, offering abundant torque across the rev range for an unhurried yet engaging ride.",
        image: img.banner2
      }
    ]
  },
  {
    id: 7,
    slug: 'continental-gt-650',
    name: 'Continental GT 650',
    category: 'Cafe Racer',
    emiStarting: 49999,
    description: 'Relive the spirit of the 1960s with the Continental GT 650. A true-blue cafe racer that combines vintage style with modern performance.',
    image: img.continentalgt650,
    colors: [
      { name: 'Rocker Red', hex: '#E63020', image: img.continentalgt650, price: '₹4,49,370' },
      { name: 'British Racing Green', hex: '#004225', image: img.continentalgt650, price: '₹4,49,370' },
      { name: 'Apex Grey', hex: '#708090', image: img.continentalgt650, price: '₹4,76,366' },
      { name: 'Mr Clean Chrome', hex: '#e5e4e2', image: img.continentalgt650, price: '₹4,84,463' },
      { name: 'Slipstream Blue', hex: '#000080', image: img.continentalgt650, price: '₹4,76,368' },
    ],
    brochure: '/brochures/continental-gt-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "Cafe Racer Heritage",
        description: "Stripped down, tucked in, and ready to sprint. The Continental GT 650 channels the minimalist, aggressive aesthetics of the 60s cafe racer culture.",
        image: img.banner3
      },
      {
        title: "Parallel Twin Power",
        description: "Powered by Royal Enfield's legendary 648cc parallel-twin engine, it delivers 47 bhp of seamless power with a deep, rumbling exhaust note.",
        image: img.banner1
      }
    ]
  },
  {
    id: 8,
    slug: 'interceptor-bear-650',
    name: 'Interceptor Bear 650',
    category: 'Cafe Racer',
    emiStarting: 49999,
    description: 'A scrambler-styled cafe racer powered by the legendary parallel-twin engine, built for wild trails and fast highways.',
    image: img.interceptor,
    colors: [
      { name: 'Board Walk White', hex: '#ffffff', image: img.interceptor, price: '₹4,76,547' },
      { name: 'Board Wild Honey Yellow', hex: '#ffcc00', image: img.interceptor, price: '₹4,83,302' },
      { name: 'Board Golden Shadow Black', hex: '#bfa15f', image: img.interceptor, price: '₹4,92,752' },
      { name: 'Board White 249', hex: '#f0f0f0', image: img.interceptor, price: '₹5,03,549' },
    ],
    brochure: '/brochures/interceptor-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '56.5 Nm' }
    ],
    stories: [
      {
        title: "Wild Scrambler Stance",
        description: "Equipped with a rugged dual-exhaust, braced handlebars, and heavy-duty spoked wheels to tackle the toughest dirt tracks.",
        image: img.banner4
      },
      {
        title: "Uncompromised Thrill",
        description: "The tuned parallel-twin engine delivers higher low-end torque, giving you rapid bursts of speed with absolute confidence.",
        image: img.banner1
      }
    ]
  },
  {
    id: 9,
    slug: 'meteor-350',
    name: 'Meteor 350',
    category: 'Cruiser',
    emiStarting: 11999,
    description: 'A classic highway cruiser that introduces advanced J-series engine dynamics and unmatched long-distance comfort.',
    image: img.shotgun650,
    colors: [
      { name: 'Fireball Grey', hex: '#808080', image: img.shotgun650, price: '₹2,27,819' },
      { name: 'Fireball Orange', hex: '#ff4500', image: img.shotgun650, price: '₹2,27,819' },
      { name: 'Stellar Matt Grey', hex: '#4d4d4d', image: img.shotgun650, price: '₹2,41,445' },
      { name: 'Stellar Marine Blue', hex: '#1c2e4a', image: img.shotgun650, price: '₹2,41,445' },
      { name: 'Aurora Red', hex: '#8b0000', image: img.shotgun650, price: '₹2,65,525' },
      { name: 'Aurora Retro Green', hex: '#2e8b57', image: img.shotgun650, price: '₹2,65,525' },
      { name: 'Supernova Black', hex: '#111111', image: img.shotgun650, price: '₹2,77,421' },
    ],
    brochure: '/brochures/classic-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Pure Highway DNA",
        description: "Designed with a deeply cushioned saddle, forward footpegs, and pulled-back handlebars for maximum ergonomics.",
        image: img.banner1
      },
      {
        title: "Advanced Navigation",
        description: "Features the innovative Tripper navigation console, making it easier than ever to explore new routes.",
        image: img.banner2
      }
    ]
  },
  {
    id: 10,
    slug: 'scram-440',
    name: 'Scram 440',
    category: 'Adventure',
    emiStarting: 24999,
    description: 'Built for the concrete jungle and beyond. The Scram 440 combines high-altitude DNA with authentic urban styling.',
    image: img.scram440,
    colors: [
      { name: 'Trail Green', hex: '#2d5a27', image: img.scram440, price: '₹2,80,301' },
      { name: 'Force Blue', hex: '#1e3f66', image: img.scram440, price: '₹3,00,050' },
      { name: 'Force Grey', hex: '#777777', image: img.scram440, price: '₹3,00,050' },
      { name: 'Force Teal', hex: '#008080', image: img.scram440, price: '₹3,00,050' },
    ],
    brochure: '/brochures/scram-411.pdf',
    stats: [
      { label: 'Engine', val: '443cc' },
      { label: 'Power', val: '25 bhp' },
      { label: 'Torque', val: '34 Nm' }
    ],
    stories: [
      {
        title: "Scrambler Vibe",
        description: "Stripped down for agility and styled for the streets. The Scram 440 is Royal Enfield's first ADV crossover, perfect for navigating traffic or hitting light trails.",
        image: img.banner2
      },
      {
        title: "Versatile Performance",
        description: "The proven 440cc LS engine delivers steady low-end torque, while the 19-inch front wheel improves on-road handling without compromising its rugged capability.",
        image: img.banner4
      }
    ]
  },
  {
    id: 11,
    slug: 'super-meteor-650',
    name: 'Super Meteor 650',
    category: 'Cruiser',
    emiStarting: 49999,
    description: 'The ultimate parallel-twin highway cruiser. Built for endless horizons with massive power and absolute stability.',
    image: img.shotgun650,
    colors: [
      { name: 'Astral Black', hex: '#111111', image: img.shotgun650, price: '₹5,10,166' },
      { name: 'Interstellar Green', hex: '#0f3c20', image: img.shotgun650, price: '₹5,30,722' },
      { name: 'Interstellar Grey', hex: '#5a5e6b', image: img.shotgun650, price: '₹5,30,722' },
      { name: 'Celestial Red', hex: '#7c1c1c', image: img.shotgun650, price: '₹5,51,281' },
      { name: 'Celestial Blue', hex: '#1c3e7c', image: img.shotgun650, price: '₹5,51,281' },
    ],
    brochure: '/brochures/interceptor-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52.3 Nm' }
    ],
    stories: [
      {
        title: "Premium Cruiser Frame",
        description: "Features a high-tensile steel tube spine frame, premium USD front forks, and a wide rear tyre for maximum grip.",
        image: img.banner5
      },
      {
        title: "Infinite Horizons",
        description: "A massive fuel tank, dual exhaust pipes, and relaxed seating geometry allow you to cruise for hundreds of miles non-stop.",
        image: img.banner1
      }
    ]
  },
  {
    id: 12,
    slug: 'guerrilla-450',
    name: 'Guerrilla 450',
    category: 'Roadster',
    emiStarting: 24999,
    description: 'A high-performance modern roadster powered by the revolutionary Sherpa liquid-cooled engine, built for aggressive city sprints.',
    image: img.himalayan450,
    colors: [
      { name: 'Twilight Blue', hex: '#3b5c78', image: img.himalayan450, price: '₹3,22,673' },
      { name: 'Apex Red', hex: '#d91d1d', image: img.himalayan450, price: '₹3,22,673' },
      { name: 'Apex Green', hex: '#1d8c1d', image: img.himalayan450, price: '₹3,31,443' },
      { name: 'Apex Black', hex: '#1c1c1c', image: img.himalayan450, price: '₹3,31,443' },
      { name: 'Peix Bronze', hex: '#966d40', image: img.himalayan450, price: '₹3,44,523' },
      { name: 'Smoke Silver', hex: '#c0c0c0', image: img.himalayan450, price: '₹3,44,523' },
      { name: 'Shadow Ash Green', hex: '#4a5d4e', image: img.himalayan450, price: '₹3,44,523' },
      { name: 'Brava Blue', hex: '#1f4e79', image: img.himalayan450, price: '₹3,51,064' },
    ],
    brochure: '/brochures/himalayan-450.pdf',
    stats: [
      { label: 'Engine', val: '452cc' },
      { label: 'Power', val: '40.02 PS' },
      { label: 'Torque', val: '40 Nm' }
    ],
    stories: [
      {
        title: "Sleek Urban Attacker",
        description: "Lightweight, extremely nimble, and designed with a sporty riding position for swift lane slicing.",
        image: img.banner1
      },
      {
        title: "Sherpa Liquid Cooled",
        description: "Harnesses the state-of-the-art DOHC 452cc liquid-cooled engine for raw, punchy, high-revving adrenaline.",
        image: img.banner2
      }
    ]
  },
  {
    id: 13,
    slug: 'shotgun-650',
    name: 'Shotgun 650',
    category: 'Cruiser',
    emiStarting: 49999,
    description: 'A motorcycle that defies categorization. The Shotgun 650 is a custom-inspired machine built for the creative mind.',
    image: img.shotgun650,
    colors: [
      { name: 'Sheet Metal Grey', hex: '#708090', image: img.shotgun650, price: '₹5,04,132' },
      { name: 'Green Drill', hex: '#006400', image: img.shotgun650, price: '₹5,18,589' },
      { name: 'Stencil White', hex: '#FFFFFF', image: img.shotgun650, price: '₹5,22,453' },
    ],
    brochure: '/brochures/shotgun-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "A Canvas for Customization",
        description: "The Shotgun 650 is an homage to the custom building culture. Its modular design allows it to transform effortlessly from a single-seater to a dual-seater.",
        image: img.banner5
      },
      {
        title: "Dominating Presence",
        description: "With its low-slung stance, blacked-out components, and the powerful 648cc twin-cylinder engine, it demands attention wherever it goes.",
        image: img.banner1
      }
    ]
  },
  {
    id: 14,
    slug: 'classic-650',
    name: 'Classic 650',
    category: 'Classic',
    emiStarting: 49999,
    description: 'The legendary Classic silhouette, reborn with the massive parallel-twin 650cc heart. Timeless styling meets massive torque.',
    image: img.classic350,
    colors: [
      { name: 'Bruntingthorpe Blue', hex: '#1c3b5e', image: img.classic350, price: '₹4,63,700' },
      { name: 'Vallam Red', hex: '#7c1616', image: img.classic350, price: '₹4,63,700' },
      { name: 'Teal', hex: '#008080', image: img.classic350, price: '₹4,69,551' },
      { name: 'Black Chrome', hex: '#3a3a3a', image: img.classic350, price: '₹4,81,252' },
    ],
    brochure: '/brochures/classic-350.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "The Twin-Cylinder Legend",
        description: "Combines the iconic teardrop tank and post-war styling with a smooth, massive parallel-twin engine.",
        image: img.banner1
      },
      {
        title: "Regal Road Presence",
        description: "Stately chrome detailing, signature headlight dome, and a deep twin exhaust thump that demands respect on every street.",
        image: img.banner2
      }
    ]
  }
];
