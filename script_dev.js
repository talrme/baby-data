// Enhanced milestone data with 60+ milestones extending to 5 years
const milestones = [
    // Physical Development (0-2 years)
    {
        id: 'smile',
        icon: '😊',
        name: 'First Social Smile',
        ageRange: '4-8 weeks',
        startAge: 4,
        endAge: 8,
        category: 'physical',
        description: 'Your baby\'s first genuine smile in response to social interaction. This is different from reflexive smiles that occur during sleep.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'looks-face',
        icon: '👀',
        name: 'Looks at Your Face',
        ageRange: '0-8 weeks',
        startAge: 0,
        endAge: 8,
        category: 'social',
        description: 'Baby starts spending more time looking at faces, especially familiar caregivers. Early face-gazing is one of the first building blocks of social connection.',
        source: 'https://www.cdc.gov/act-early/milestones/2-months.html'
    },
    {
        id: 'reacts-loud-sounds',
        icon: '🔔',
        name: 'Reacts to Loud Sounds',
        ageRange: '0-8 weeks',
        startAge: 0,
        endAge: 8,
        category: 'language',
        description: 'Baby startles, quiets, blinks, moves, or otherwise reacts when there is a loud sound. This is an early communication and hearing-response milestone.',
        source: 'https://www.cdc.gov/act-early/milestones/2-months.html'
    },
    {
        id: 'watches-movement',
        icon: '👁️',
        name: 'Watches You Move',
        ageRange: '4-8 weeks',
        startAge: 4,
        endAge: 8,
        category: 'cognitive',
        description: 'Baby begins visually following a caregiver or interesting object for a short time. This reflects early attention, vision, and learning.',
        source: 'https://www.cdc.gov/act-early/milestones/2-months.html'
    },
    {
        id: 'opens-hands',
        icon: '🖐️',
        name: 'Opens Hands Briefly',
        ageRange: '4-8 weeks',
        startAge: 4,
        endAge: 8,
        category: 'physical',
        description: 'Baby begins opening their hands briefly instead of keeping them tightly fisted all the time. This is an early fine-motor milestone.',
        source: 'https://www.cdc.gov/act-early/milestones/2-months.html'
    },
    {
        id: 'head-up-tummy',
        icon: '💪',
        name: 'Holds Head Up During Tummy Time',
        ageRange: '4-8 weeks',
        startAge: 4,
        endAge: 8,
        category: 'physical',
        description: 'During supervised tummy time, baby can lift and hold their head up briefly. This is an early sign of neck and upper-body strength.',
        source: 'https://www.cdc.gov/act-early/milestones/2-months.html'
    },
    {
        id: 'coos',
        icon: '🎶',
        name: 'Coos and Gurgles',
        ageRange: '6-12 weeks',
        startAge: 6,
        endAge: 12,
        category: 'language',
        description: 'Baby starts making soft vowel-like sounds such as coos and gurgles. These early sounds are the beginning of back-and-forth communication.',
        source: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-3-Months.aspx'
    },
    {
        id: 'roll',
        icon: '🔄',
        name: 'Rolls Over',
        ageRange: '3-6 months',
        startAge: 12,
        endAge: 24,
        category: 'physical',
        description: 'Baby learns to roll from tummy to back and back to tummy. This is a major motor milestone that leads to increased mobility.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'sit',
        icon: '🪑',
        name: 'Sits Without Support',
        ageRange: '4-8 months',
        startAge: 16,
        endAge: 32,
        category: 'physical',
        description: 'Baby can sit upright without needing support from pillows or hands. This builds core strength for future mobility.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'crawl',
        icon: '🐛',
        name: 'Crawls',
        ageRange: '6-10 months',
        startAge: 24,
        endAge: 40,
        category: 'physical',
        description: 'Baby begins to move around on hands and knees. Some babies skip crawling and go straight to walking - both are normal!',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'pincer',
        icon: '✋',
        name: 'Pincer Grasp',
        ageRange: '8-12 months',
        startAge: 32,
        endAge: 48,
        category: 'physical',
        description: 'Baby uses thumb and forefinger to pick up small objects. This fine motor skill is crucial for self-feeding.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'walk',
        icon: '🚶',
        name: 'First Steps',
        ageRange: '9-15 months',
        startAge: 36,
        endAge: 60,
        category: 'physical',
        description: 'Those magical first independent steps! Most babies take their first steps between 9-15 months, but the range is quite wide.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'run',
        icon: '🏃',
        name: 'Runs',
        ageRange: '15-24 months',
        startAge: 60,
        endAge: 96,
        category: 'physical',
        description: 'Baby can run with both feet off the ground. This requires coordination and balance.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'jump',
        icon: '🦘',
        name: 'Jumps',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'physical',
        description: 'Baby can jump with both feet off the ground. This shows advanced motor coordination.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'stairs',
        icon: '🪜',
        name: 'Walks Up Stairs',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'physical',
        description: 'Baby can walk up stairs while holding onto a railing or hand.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'throw',
        icon: '⚾',
        name: 'Throws Ball',
        ageRange: '12-24 months',
        startAge: 48,
        endAge: 96,
        category: 'physical',
        description: 'Baby can throw a ball forward. This shows hand-eye coordination development.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'kick',
        icon: '⚽',
        name: 'Kicks Ball',
        ageRange: '15-30 months',
        startAge: 60,
        endAge: 120,
        category: 'physical',
        description: 'Baby can kick a ball forward. This requires balance and coordination.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'climb',
        icon: '🧗',
        name: 'Climbs',
        ageRange: '12-24 months',
        startAge: 48,
        endAge: 96,
        category: 'physical',
        description: 'Baby can climb onto furniture or playground equipment.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'balance',
        icon: '🤸',
        name: 'Balances on One Foot',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'physical',
        description: 'Baby can balance on one foot for a few seconds. This shows advanced balance skills.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'pedal',
        icon: '🚴',
        name: 'Pedals Tricycle',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'physical',
        description: 'Baby can pedal a tricycle or ride-on toy. This requires coordination and strength.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'dress',
        icon: '👕',
        name: 'Dresses Self',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'physical',
        description: 'Baby can put on simple clothing items like shirts or pants.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Physical Development (3-5 years)
    {
        id: 'hop',
        icon: '🦵',
        name: 'Hops on One Foot',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'physical',
        description: 'Child can hop on one foot for several steps. This shows advanced balance and coordination.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'skip',
        icon: '💃',
        name: 'Skips',
        ageRange: '42-60 months',
        startAge: 168,
        endAge: 240,
        category: 'physical',
        description: 'Child can skip with alternating feet. This is a complex motor skill requiring coordination.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'catch',
        icon: '🤾',
        name: 'Catches Ball',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'physical',
        description: 'Child can catch a large ball with both hands. This shows hand-eye coordination.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'write',
        icon: '✍️',
        name: 'Writes Name',
        ageRange: '48-60 months',
        startAge: 192,
        endAge: 240,
        category: 'physical',
        description: 'Child can write their first name with some letters recognizable. This shows fine motor development.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'scissors',
        icon: '✂️',
        name: 'Uses Scissors',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'physical',
        description: 'Child can use child-safe scissors to cut paper. This shows fine motor control.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Language Development (0-2 years)
    {
        id: 'words',
        icon: '🗣️',
        name: 'First Words',
        ageRange: '8-14 months',
        startAge: 32,
        endAge: 56,
        category: 'language',
        description: 'Baby says their first meaningful words like "mama" or "dada". This marks the beginning of expressive language.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'phrases',
        icon: '💬',
        name: 'Uses 2-Word Phrases',
        ageRange: '15-24 months',
        startAge: 60,
        endAge: 96,
        category: 'language',
        description: 'Baby combines two words together like "more milk" or "daddy go". This shows growing language complexity.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'vocabulary',
        icon: '📚',
        name: '50 Word Vocabulary',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'language',
        description: 'Baby can say at least 50 different words. This shows rapid language development.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'sentences',
        icon: '📝',
        name: 'Uses 3-Word Sentences',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'language',
        description: 'Baby can form simple sentences with 3 or more words.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'questions',
        icon: '❓',
        name: 'Asks Questions',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'language',
        description: 'Baby starts asking "what" and "where" questions to learn about the world.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'stories',
        icon: '📖',
        name: 'Tells Simple Stories',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'language',
        description: 'Baby can tell simple stories about their day or experiences.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'sings',
        icon: '🎵',
        name: 'Sings Songs',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'language',
        description: 'Baby can sing simple songs or nursery rhymes.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'follows',
        icon: '👂',
        name: 'Follows Simple Instructions',
        ageRange: '12-18 months',
        startAge: 48,
        endAge: 72,
        category: 'language',
        description: 'Baby understands and follows simple one-step commands like "come here" or "give me the ball".',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'points',
        icon: '👆',
        name: 'Points to Objects',
        ageRange: '9-15 months',
        startAge: 36,
        endAge: 60,
        category: 'language',
        description: 'Baby points to objects they want or to show interest. This is early communication.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'responds',
        icon: '👂',
        name: 'Responds to Name',
        ageRange: '6-12 months',
        startAge: 24,
        endAge: 48,
        category: 'language',
        description: 'Baby turns their head when their name is called. This shows recognition and attention.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Language Development (3-5 years)
    {
        id: 'conversation',
        icon: '💭',
        name: 'Holds Conversation',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'language',
        description: 'Child can have a back-and-forth conversation with multiple exchanges.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'letters',
        icon: '🔤',
        name: 'Recognizes Letters',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'language',
        description: 'Child can identify some letters of the alphabet, especially those in their name.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'rhymes',
        icon: '🎶',
        name: 'Recognizes Rhymes',
        ageRange: '42-60 months',
        startAge: 168,
        endAge: 240,
        category: 'language',
        description: 'Child can identify words that rhyme and may create simple rhymes.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'reading',
        icon: '📖',
        name: 'Pretends to Read',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'language',
        description: 'Child holds books correctly and pretends to read by telling a story based on pictures.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'complex',
        icon: '🗨️',
        name: 'Uses Complex Sentences',
        ageRange: '48-60 months',
        startAge: 192,
        endAge: 240,
        category: 'language',
        description: 'Child uses compound and complex sentences with proper grammar.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Cognitive Development (0-2 years)
    {
        id: 'play',
        icon: '👫',
        name: 'Parallel Play',
        ageRange: '18-24 months',
        startAge: 72,
        endAge: 96,
        category: 'cognitive',
        description: 'Baby plays alongside other children without direct interaction. This is the beginning of social play development.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'pretend',
        icon: '🎭',
        name: 'Pretend Play',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'cognitive',
        description: 'Baby engages in pretend play, like feeding a doll or talking on a toy phone.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'puzzle',
        icon: '🧩',
        name: 'Completes Simple Puzzles',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'cognitive',
        description: 'Baby can complete simple puzzles with 2-4 pieces. This shows problem-solving skills.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'sort',
        icon: '🔢',
        name: 'Sorts Objects',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'cognitive',
        description: 'Baby can sort objects by color, shape, or size. This shows classification skills.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'count',
        icon: '🔢',
        name: 'Counts to 10',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'cognitive',
        description: 'Baby can count from 1 to 10. This shows early math skills.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'colors',
        icon: '🌈',
        name: 'Names Colors',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'cognitive',
        description: 'Baby can identify and name basic colors like red, blue, yellow, and green.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'shapes',
        icon: '🔷',
        name: 'Names Shapes',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'cognitive',
        description: 'Baby can identify and name basic shapes like circle, square, and triangle.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'memory',
        icon: '🧠',
        name: 'Remembers Events',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'cognitive',
        description: 'Baby can remember and talk about events that happened in the past.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'cause',
        icon: '🔗',
        name: 'Understands Cause & Effect',
        ageRange: '12-24 months',
        startAge: 48,
        endAge: 96,
        category: 'cognitive',
        description: 'Baby understands that actions have consequences, like pressing a button makes a sound.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'object',
        icon: '👁️',
        name: 'Object Permanence',
        ageRange: '8-12 months',
        startAge: 32,
        endAge: 48,
        category: 'cognitive',
        description: 'Baby understands that objects still exist even when they can\'t see them.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'imitation',
        icon: '🔄',
        name: 'Imitates Actions',
        ageRange: '12-18 months',
        startAge: 48,
        endAge: 72,
        category: 'cognitive',
        description: 'Baby imitates actions they see, like clapping or waving.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'attention',
        icon: '👀',
        name: 'Sustained Attention',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'cognitive',
        description: 'Baby can focus on an activity for 5-10 minutes without getting distracted.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Cognitive Development (3-5 years)
    {
        id: 'numbers',
        icon: '🔢',
        name: 'Counts to 20',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'cognitive',
        description: 'Child can count from 1 to 20 and understands basic number concepts.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'time',
        icon: '⏰',
        name: 'Understands Time Concepts',
        ageRange: '42-60 months',
        startAge: 168,
        endAge: 240,
        category: 'cognitive',
        description: 'Child understands concepts like "yesterday," "tomorrow," and "in a few minutes."',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'patterns',
        icon: '🔁',
        name: 'Creates Patterns',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'cognitive',
        description: 'Child can create and extend simple patterns with blocks or other objects.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'problem',
        icon: '🧩',
        name: 'Solves Problems',
        ageRange: '42-60 months',
        startAge: 168,
        endAge: 240,
        category: 'cognitive',
        description: 'Child can solve simple problems and think through solutions step by step.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'memory2',
        icon: '🧠',
        name: 'Remembers Instructions',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'cognitive',
        description: 'Child can remember and follow 2-3 step instructions.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Social Development (0-2 years)
    {
        id: 'stranger',
        icon: '😰',
        name: 'Stranger Anxiety',
        ageRange: '6-12 months',
        startAge: 24,
        endAge: 48,
        category: 'social',
        description: 'Baby shows wariness or fear around unfamiliar people. This is normal social development.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'separation',
        icon: '😢',
        name: 'Separation Anxiety',
        ageRange: '8-18 months',
        startAge: 32,
        endAge: 72,
        category: 'social',
        description: 'Baby becomes upset when separated from primary caregivers. This shows attachment.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'shares',
        icon: '🤝',
        name: 'Shares Toys',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'social',
        description: 'Baby can share toys with other children, though this is still developing.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'empathy',
        icon: '❤️',
        name: 'Shows Empathy',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'social',
        description: 'Baby shows concern for others who are upset or hurt.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'cooperation',
        icon: '🤝',
        name: 'Cooperates with Others',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'social',
        description: 'Baby can work together with others on simple tasks or games.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'independence',
        icon: '🦸',
        name: 'Shows Independence',
        ageRange: '18-30 months',
        startAge: 72,
        endAge: 120,
        category: 'social',
        description: 'Baby wants to do things by themselves and shows "I can do it" attitude.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'friends',
        icon: '👥',
        name: 'Makes Friends',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'social',
        description: 'Baby forms friendships with other children and shows preference for certain playmates.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'rules',
        icon: '📋',
        name: 'Follows Rules',
        ageRange: '24-36 months',
        startAge: 96,
        endAge: 144,
        category: 'social',
        description: 'Baby can follow simple rules and understands basic social expectations.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },

    // Social Development (3-5 years)
    {
        id: 'turn',
        icon: '🔄',
        name: 'Takes Turns',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'social',
        description: 'Child can take turns in games and conversations without constant reminders.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'apologize',
        icon: '🙏',
        name: 'Apologizes',
        ageRange: '36-48 months',
        startAge: 144,
        endAge: 192,
        category: 'social',
        description: 'Child can apologize when they hurt someone and understand why it\'s important.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'help',
        icon: '🤝',
        name: 'Offers Help',
        ageRange: '42-60 months',
        startAge: 168,
        endAge: 240,
        category: 'social',
        description: 'Child voluntarily offers to help others and shows consideration for their needs.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'conflict',
        icon: '⚖️',
        name: 'Resolves Conflicts',
        ageRange: '48-60 months',
        startAge: 192,
        endAge: 240,
        category: 'social',
        description: 'Child can work through conflicts with peers using words and compromise.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    },
    {
        id: 'leadership',
        icon: '👑',
        name: 'Shows Leadership',
        ageRange: '48-60 months',
        startAge: 192,
        endAge: 240,
        category: 'social',
        description: 'Child can take on leadership roles in play and help organize group activities.',
        source: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html'
    }
];

// Filter and display settings
let currentFilters = {
    minAge: 0,
    maxAge: 60, // 5 years in months
    categories: ['physical', 'language', 'cognitive', 'social']
};

// Birthday functionality
let babyBirthday = null;

function toggleFilters() {
    const content = document.getElementById('filters-content');
    const icon = document.getElementById('toggle-icon');
    const resultsInfo = document.getElementById('results-info');
    
    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '▲' : '▼';
    
    // Show/hide results count based on filter state
    if (content.classList.contains('active')) {
        resultsInfo.style.display = 'block';
    } else {
        resultsInfo.style.display = 'none';
    }
}

function updateBirthday() {
    const birthdayInput = document.getElementById('baby-birthday');
    const birthdayInfo = document.getElementById('birthday-info');
    
    if (birthdayInput.value) {
        babyBirthday = new Date(birthdayInput.value);
        birthdayInfo.textContent = `Birthday set! Milestones will show actual dates based on ${babyBirthday.toLocaleDateString()}`;
        updateDisplay();
    } else {
        babyBirthday = null;
        birthdayInfo.textContent = 'Enter your baby\'s birthday to see actual dates for milestones';
        updateDisplay();
    }
}

function clearBirthday() {
    const birthdayInput = document.getElementById('baby-birthday');
    const birthdayInfo = document.getElementById('birthday-info');
    
    birthdayInput.value = '';
    babyBirthday = null;
    birthdayInfo.textContent = 'Enter your baby\'s birthday to see actual dates for milestones';
    updateDisplay();
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function getMidpointDate(milestone) {
    if (!babyBirthday) return '';
    
    const midpointDate = new Date(babyBirthday);
    const midpointWeeks = (milestone.startAge + milestone.endAge) / 2;
    
    // Convert weeks to days and add to birthday
    midpointDate.setDate(midpointDate.getDate() + (midpointWeeks * 7));
    
    return formatDate(midpointDate);
}

function formatAgeDisplay(months) {
    if (months < 12) {
        return `${months} months`;
    } else {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        if (remainingMonths === 0) {
            return `${months} months (${years} year${years > 1 ? 's' : ''})`;
        } else {
            return `${months} months (${years}.${remainingMonths} years)`;
        }
    }
}

function updateDisplay() {
    const container = document.getElementById('milestones-container');
    container.innerHTML = '';
    
    // Filter milestones based on current settings
    const filteredMilestones = milestones.filter(milestone => {
        const ageInMonths = milestone.startAge / 4; // Convert weeks to months
        const categoryMatch = currentFilters.categories.includes(milestone.category);
        const ageMatch = ageInMonths >= currentFilters.minAge && ageInMonths <= currentFilters.maxAge;
        
        return categoryMatch && ageMatch;
    });
    
    // Sort milestones by average age (chronological order)
    filteredMilestones.sort((a, b) => {
        const avgAgeA = (a.startAge + a.endAge) / 2;
        const avgAgeB = (b.startAge + b.endAge) / 2;
        return avgAgeA - avgAgeB;
    });
    
    filteredMilestones.forEach(milestone => {
        const milestoneDiv = createMilestoneElement(milestone);
        container.appendChild(milestoneDiv);
    });
    
    // Update count display
    document.getElementById('milestone-count').textContent = filteredMilestones.length;
}

function createMilestoneElement(milestone) {
    const div = document.createElement('div');
    div.className = 'milestone-container';
    
    // Calculate timeline bar width and position (now for 5 years = 60 months)
    const totalMonths = 60; // 5 years
    const startPercent = (milestone.startAge / 4 / totalMonths) * 100; // Convert weeks to months
    const widthPercent = ((milestone.endAge - milestone.startAge) / 4 / totalMonths) * 100;
    
    div.innerHTML = `
        <div class="timeline-bar" onclick="toggleAccordion('${milestone.id}')">
            <div class="milestone-icon">${milestone.icon}</div>
            <div class="milestone-label">${milestone.name}</div>
            <div class="milestone-category">${milestone.category}</div>
            <div class="timeline-visual">
                <div class="timeline-range" style="width: ${widthPercent}%; margin-left: ${startPercent}%;"></div>
            </div>
            <div class="age-label">${milestone.ageRange}</div>
        </div>
        <div class="accordion-content" id="content-${milestone.id}">
            <div class="histogram-container" id="histogram-${milestone.id}">
                <div class="histogram-title">Age Distribution for ${milestone.name}</div>
                <div class="data-display">
                    <div class="timeline-bar-mini">
                        <div class="timeline-range-mini" style="width: ${widthPercent}%; margin-left: ${startPercent}%;"></div>
                    </div>
                </div>
                <div class="milestone-info">
                    <div class="milestone-description">${milestone.description}</div>
                    <a href="${milestone.source}" target="_blank" class="source-link">Source: CDC Milestone Tracker</a>
                </div>
            </div>
        </div>
    `;
    
    return div;
}

function toggleAccordion(milestoneId) {
    const content = document.getElementById(`content-${milestoneId}`);
    const histogram = document.getElementById(`histogram-${milestoneId}`);
    const bar = document.querySelector(`[onclick="toggleAccordion('${milestoneId}')"]`);
    
    // Toggle accordion
    content.classList.toggle('active');
    histogram.classList.toggle('active');
    bar.classList.toggle('active');
    
    // Update dates display when accordion opens
    if (content.classList.contains('active')) {
        updateAccordionDates(milestoneId);
    }
}

function updateAccordionDates(milestoneId) {
    const milestone = milestones.find(m => m.id === milestoneId);
    const histogram = document.getElementById(`histogram-${milestoneId}`);
    
    // Remove existing date display
    const existingDateDisplay = histogram.querySelector('.date-display');
    if (existingDateDisplay) {
        existingDateDisplay.remove();
    }
    
    // Add new date display if birthday is set
    if (babyBirthday) {
        const midpointDate = getMidpointDate(milestone);
        const dateDisplay = document.createElement('div');
        dateDisplay.className = 'date-display';
        dateDisplay.innerHTML = `
            <div class="midpoint-date">
                <strong>Expected around:</strong> ${midpointDate}
            </div>
            <div class="approximation-note">
                <em>This is an approximation based on typical development patterns</em>
            </div>
        `;
        
        // Insert after histogram title
        const title = histogram.querySelector('.histogram-title');
        title.insertAdjacentElement('afterend', dateDisplay);
    }
}

// Filter functions
function updateAgeRange() {
    const minSlider = document.getElementById('age-min');
    const maxSlider = document.getElementById('age-max');
    const minDisplay = document.getElementById('age-min-display');
    const maxDisplay = document.getElementById('age-max-display');
    
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);
    
    // Ensure min doesn't exceed max
    if (minVal >= maxVal) {
        minVal = maxVal - 1;
        minSlider.value = minVal;
    }
    
    // Ensure max doesn't go below min
    if (maxVal <= minVal) {
        maxVal = minVal + 1;
        maxSlider.value = maxVal;
    }
    
    currentFilters.minAge = minVal;
    currentFilters.maxAge = maxVal;
    
    minDisplay.textContent = formatAgeDisplay(minVal);
    maxDisplay.textContent = formatAgeDisplay(maxVal);
    
    updateDisplay();
}

function toggleCategory(category) {
    const checkbox = document.getElementById(`category-${category}`);
    if (checkbox.checked) {
        currentFilters.categories.push(category);
    } else {
        currentFilters.categories = currentFilters.categories.filter(c => c !== category);
    }
    updateDisplay();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set default birthday
    babyBirthday = new Date('2026-04-02');
    updateDisplay();
});
