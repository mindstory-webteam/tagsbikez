import { img } from "@/assets/assest";

export const bikeData = [
  {
    id: 1,
    slug: 'hunter-350',
    name: 'Hunter 350',
    category: 'Cafe Racer',
    description: 'Agile, compact, and designed for the urban jungle. The Hunter 350 is built for those who want to navigate the city with ease and style.',
    image: img.hunter350,
    colorImages: [img.hunter350, img.hunter350, img.hunter350],
    brochure: '/brochures/hunter-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Agility Redefined",
        description: "With its shorter wheelbase, lighter weight and tighter geometry, the Hunter's chunky frame is fitted with a set of super maneuverable 17-inch alloy wheels. , With its shorter wheelbase, lighter weight and tighter geometry, the Hunter's chunky frame is fitted with a set of super maneuverable 17-inch alloy wheels.",
        image: img.banner1
      },
      {
        title: "Intuitive Ergonomics",
        description: "A seat height of 790mm, wide contours and excellent standover ergonomics offer easy handling and a confident riding experience. , A seat height of 790mm, wide contours and excellent standover ergonomics offer easy handling and a confident riding experience.",
        image: img.banner2
      }
    ]
  },
  {
    id: 2,
    slug: 'classic-350',
    name: 'Classic 350',
    category: 'Classic',
    description: 'Inspired by the G2 model of the 1950s, the all-new Classic 350 continues to embody the timeless design and dependable performance.',
    image: img.classic350,
    colorImages: [img.classic350, img.classic350, img.classic350],
    brochure: '/brochures/classic-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "A Timeless Stance",
        description: "The Classic 350 carries the legendary teardrop fuel tank, the distinctive thump, and the hallmark casquette headlamp, harmonizing the past and the present. , The Classic 350 carries the legendary teardrop fuel tank, the distinctive thump, and the hallmark casquette headlamp, harmonizing the past and the present.",
        image: img.banner1
      },
      {
        title: "Unmatched Comfort",
        description: "Featuring a wider, more relaxed riding posture and an exceptionally comfortable seat to ensure you can soak in every moment of the journey. , Featuring a wider, more relaxed riding posture and an exceptionally comfortable seat to ensure you can soak in every moment of the journey.",
        image: img.banner2
      }
    ]
  },
  {
    id: 3,
    slug: 'bullet-350',
    name: 'Bullet 350',
    category: 'Classic',
    description: 'A symbol of resilience and a testament to the enduring spirit of pure motorcycling. The new Bullet 350 is more than just a machine; it is a legacy. , A symbol of resilience and a testament to the enduring spirit of pure motorcycling. The new Bullet 350 is more than just a machine; it is a legacy.',
    image: img.bullet350,
    colorImages: [img.bullet350, img.bullet350, img.bullet350],
    brochure: '/brochures/bullet-350.pdf',
    stats: [
      { label: 'Engine', val: '349cc' },
      { label: 'Power', val: '20.2 bhp' },
      { label: 'Torque', val: '27 Nm' }
    ],
    stories: [
      {
        title: "Unwavering Legacy",
        description: "For over nine decades, the Bullet has stood as the definitive symbol of motorcycling resilience and a testament to enduring character. , For over nine decades, the Bullet has stood as the definitive symbol of motorcycling resilience and a testament to enduring character.",
        image: img.banner2
      },
      {
        title: "The Signature Thump",
        description: "The updated J-series engine ensures that the iconic Royal Enfield thump resonates stronger than ever while delivering smooth, modern performance. , The updated J-series engine ensures that the iconic Royal Enfield thump resonates stronger than ever while delivering smooth, modern performance.",
        image: img.banner1
      }
    ]
  },
  {
    id: 4,
    slug: 'himalayan-450',
    name: 'Himalayan 450',
    category: 'Adventure',
    description: 'The all-new Himalayan is designed to conquer every terrain, from the highest peaks to the deepest valleys. , The all-new Himalayan is designed to conquer every terrain, from the highest peaks to the deepest valleys.',
    image: img.himalayan450,
    colorImages: [img.himalayan450, img.himalayan450, img.himalayan450],
    brochure: '/brochures/himalayan-450.pdf',
    stats: [
      { label: 'Engine', val: '452cc' },
      { label: 'Power', val: '40.02 PS' },
      { label: 'Torque', val: '40 Nm' }
    ],
    stories: [
      {
        title: "Sherpa 450 Engine",
        description: "The heart of the new Himalayan. A liquid-cooled, 452cc engine that produces 40PS of peak power, designed to pull you through the toughest altitudes. , The heart of the new Himalayan. A liquid-cooled, 452cc engine that produces 40PS of peak power, designed to pull you through the toughest altitudes.",
        image: img.banner1
      },
      {
        title: "Adventure Ready",
        description: "Equipped with a long-travel suspension, switchable ABS, and true dual-purpose tires, it feels right at home when the tarmac ends. , Equipped with a long-travel suspension, switchable ABS, and true dual-purpose tires, it feels right at home when the tarmac ends.",
        image: img.banner2
      }
    ]
  },
  {
    id: 5,
    slug: 'continental-gt-650',
    name: 'Continental GT 650',
    category: 'Cafe Racer',
    description: 'Relive the spirit of the 1960s with the Continental GT 650. A true-blue cafe racer that combines vintage style with modern performance. , Relive the spirit of the 1960s with the Continental GT 650. A true-blue cafe racer that combines vintage style with modern performance.',
    image: img.continentalgt650,
    colorImages: [img.continentalgt650, img.bulletfront, img.bulletback],
    brochure: '/brochures/continental-gt-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "Cafe Racer Heritage",
        description: "Stripped down, tucked in, and ready to sprint. The Continental GT 650 channels the minimalist, aggressive aesthetics of the 60s cafe racer culture. , Stripped down, tucked in, and ready to sprint. The Continental GT 650 channels the minimalist, aggressive aesthetics of the 60s cafe racer culture.",
        image: img.banner3
      },
      {
        title: "Parallel Twin Power",
        description: "Powered by Royal Enfield's legendary 648cc parallel-twin engine, it delivers 47 bhp of seamless power with a deep, rumbling exhaust note. , Powered by Royal Enfield's legendary 648cc parallel-twin engine, it delivers 47 bhp of seamless power with a deep, rumbling exhaust note.",
        image: img.banner1
      }
    ]
  },
  {
    id: 6,
    slug: 'interceptor-650',
    name: 'Interceptor 650',
    category: 'Cafe Racer',
    description: 'The Interceptor 650 is a versatile twin-cylinder roadster that captures the essence of the 1960s California cool.',
    image: img.interceptor,
    colorImages: [img.interceptor, img.continentalgt650, img.continentalgt650],
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
    slug: 'scram-411',
    name: 'Scram 411',
    category: 'Adventure',
    description: 'Built for the concrete jungle and beyond. The Scram 411 combines high-altitude DNA with authentic urban styling.',
    image: img.scram440,
    colorImages: [img.scram440, img.scram440, img.scram440],
    brochure: '/brochures/scram-411.pdf',
    stats: [
      { label: 'Engine', val: '411cc' },
      { label: 'Power', val: '24.3 bhp' },
      { label: 'Torque', val: '32 Nm' }
    ],
    stories: [
      {
        title: "Scrambler Vibe",
        description: "Stripped down for agility and styled for the streets. The Scram 411 is Royal Enfield's first ADV crossover, perfect for navigating traffic or hitting light trails.",
        image: img.banner2
      },
      {
        title: "Versatile Performance",
        description: "The proven 411cc LS engine delivers steady low-end torque, while the 19-inch front wheel improves on-road handling without compromising its rugged capability.",
        image: img.banner4
      }
    ]
  },
  {
    id: 8,
    slug: 'shotgun-650',
    name: 'Shotgun 650',
    category: 'Cruiser',
    description: 'A motorcycle that defies categorization. The Shotgun 650 is a custom-inspired machine built for the creative mind. , A motorcycle that defies categorization. The Shotgun 650 is a custom-inspired machine built for the creative mind.',
    image: img.shotgun650,
    colorImages: [img.shotgun650, img.shotgun650, img.shotgun650],
    brochure: '/brochures/shotgun-650.pdf',
    stats: [
      { label: 'Engine', val: '648cc' },
      { label: 'Power', val: '47 bhp' },
      { label: 'Torque', val: '52 Nm' }
    ],
    stories: [
      {
        title: "A Canvas for Customization",
        description: "The Shotgun 650 is an homage to the custom building culture. Its modular design allows it to transform effortlessly from a single-seater to a dual-seater. , The Shotgun 650 is an homage to the custom building culture. Its modular design allows it to transform effortlessly from a single-seater to a dual-seater.",
        image: img.banner5
      },
      {
        title: "Dominating Presence",
        description: "With its low-slung stance, blacked-out components, and the powerful 648cc twin-cylinder engine, it demands attention wherever it goes. , With its low-slung stance, blacked-out components, and the powerful 648cc twin-cylinder engine, it demands attention wherever it goes.",
        image: img.banner1
      }
    ]
  }
];
