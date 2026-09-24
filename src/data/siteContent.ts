import type {
  FaqItem,
  NavLink,
  ProcessStep,
  ResourceArticle,
  Service,
  SocialLink,
  Testimonial,
  ValuePillar,
  WorkshopTopic,
} from "./types";

export const siteMeta = {
  name: "LandStrong Coaching & Consulting",
  shortName: "LandStrong",
  tagline: "Do less. Feel better. Live steady.",
  founder: "Julie Landers, M.Ed., MA, NCC",
  founderFirstName: "Julie",
};

export const businessInfo = {
  email: "info@landstrongcc.com",
  phone: "(404) 829-4584",
  phoneHref: "tel:+14048294584",
  address: {
    line1: "110 Samaritan Drive, Suite 204",
    line2: "Cumming, GA 30040",
  },
  bookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=38397625",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", url: "https://www.instagram.com/landstrongcc/", icon: "instagram" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/julie-landers-b1a3a2194/", icon: "linkedin" },
  { label: "Facebook", url: "https://www.facebook.com/share/1AzwUMvkdy/?mibextid=wwXIfr", icon: "facebook" },
];

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Coaching", path: "/coaching" },
  { label: "Workshops", path: "/workshops" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

export const services: Service[] = [
  {
    id: "individual-coaching",
    title: "Individual Coaching",
    tagline: "Just you, a steady guide, and permission to slow down.",
    description:
      "One-on-one sessions built around your nervous system, your season of life, and the version of you that got buried under everyone else's needs. We go at your pace — no fixing, no judgment, no pretending you're fine when you're not.",
    bullets: [
      "Weekly or biweekly sessions, virtual or in-person",
      "Nervous-system-informed, not one-size-fits-all",
      "For women in burnout, transition, or quiet crisis",
    ],
    format: "Ongoing · 50-minute sessions",
    href: "/coaching",
    icon: "leaf",
  },
  {
    id: "group-journeys",
    title: "8-Week Group Journeys",
    tagline: "You don't have to figure this out alone.",
    description:
      "A small, guided cohort of women doing the same deep work at the same time. Part workshop, part therapy-adjacent support circle, part girls'-night-you-actually-needed. Bring a friend or come solo — you'll leave with both.",
    bullets: [
      "Small cohorts, 6–10 women",
      "Practical tools + real conversation, not just theory",
      "Eight weeks to reconnect with the mind, body, and heart",
    ],
    format: "8 weeks · small group",
    href: "/coaching",
    icon: "heart",
  },
  {
    id: "workshops",
    title: "Workshops",
    tagline: "A few hours that reset how you carry everything else.",
    description:
      "Immersive, in-person sessions for teams, communities, and groups of women ready to understand their own stress response — and finally do something about it besides push through.",
    bullets: [
      "Half-day, 4-hour immersive format",
      "Built on nervous system science, made human",
      "Custom topics for teams, churches, and women's groups",
    ],
    format: "4-hour immersive · groups & teams",
    href: "/workshops",
    icon: "sun",
  },
];

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "I came in thinking I needed better time management. What I actually needed was permission to stop performing 'fine.' Julie gave me that in the first session.",
    name: "A LandStrong client",
    detail: "Individual Coaching",
  },
  {
    quote:
      "The group journey felt like the friendship I didn't know I was missing — except with actual tools I still use. Eight weeks changed how I talk to myself.",
    name: "A LandStrong client",
    detail: "8-Week Group Journey",
  },
  {
    quote:
      "Our team workshop was the first 'wellness training' that didn't feel like a lecture. People cried, laughed, and actually used what they learned the next week.",
    name: "A workshop host",
    detail: "Team Workshop",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "You're not broken",
    description:
      "You're depleted. There's a difference, and it changes everything about how we work together — no pathologizing, just steady, practical support.",
    icon: "heart",
  },
  {
    title: "Nervous system first",
    description:
      "Willpower isn't the problem. A dysregulated nervous system is. We start there — with the body, the breath, the real reasons you can't just 'think' your way calm.",
    icon: "leaf",
  },
  {
    title: "Rooted in real science",
    description:
      "Psychology, neuroscience, human development, and mindfulness — translated out of the textbook and into tools you'll actually use on a Tuesday.",
    icon: "sparkle",
  },
  {
    title: "Safety before growth",
    description:
      "You grow when you feel safe, seen, and unhurried — never when you're being managed. Every session starts with that on purpose.",
    icon: "sun",
  },
];

export const founderCredentials = [
  "M.Ed., Education",
  "MA, Clinical Mental Health Counseling",
  "NCC, National Certified Counselor",
];

export const founderStory = {
  heading: "I've lived it — not just studied it.",
  paragraphs: [
    "I spent years working across schools, private practice, and the correctional system, watching the same pattern show up in every room: stress and a dysregulated nervous system quietly running the show, no matter how capable or accomplished the person in front of me was.",
    "Then life stopped being theoretical. During graduate school, I experienced profound grief while supporting both of my parents through cancer diagnoses — all at once. Everything I'd studied about mindfulness and resilience got tested in real time.",
    "“The skills I lived and taught did not remove the pain,” I say. “They allowed me to stay present inside it.”",
    "That distinction became the foundation of LandStrong. I'm not in the business of helping women avoid hard things — I'm in the business of building the kind of inner steadiness that lets you meet the storm with clarity, resilience, and something that finally feels like you again.",
  ],
};

export const coachingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Book a consultation",
    description:
      "A free, no-pressure conversation to talk through what's going on and whether coaching, a group journey, or a workshop is the right fit.",
  },
  {
    step: "02",
    title: "Build your steadiness",
    description:
      "Sessions grounded in nervous-system science, mindfulness, and honest conversation — practical tools you can use before the next hard moment hits.",
  },
  {
    step: "03",
    title: "Reconnect with yourself",
    description:
      "Not the version who's managing everyone else's needs — the one underneath. Steadier, clearer, and finally exhaling.",
  },
];

export const workshopTopics: WorkshopTopic[] = [
  {
    title: "Understanding Your Nervous System",
    description:
      "What fight, flight, freeze, and fawn actually feel like in a body — and the fastest ways back to calm when they show up mid-meeting or mid-meltdown.",
    icon: "leaf",
  },
  {
    title: "Burnout Isn't a Character Flaw",
    description:
      "Why capable, high-functioning women burn out quietly — and the difference between resting and actually recovering.",
    icon: "heart",
  },
  {
    title: "Boundaries Without the Guilt Spiral",
    description:
      "Practical language and nervous-system tools for saying no without the three days of anxious replaying afterward.",
    icon: "sun",
  },
  {
    title: "Mindfulness That Doesn't Feel Fake",
    description:
      "Grounded, secular, no-incense-required tools for staying present — built for women who roll their eyes at 'just breathe.'",
    icon: "sparkle",
  },
];

export const workshopAudiences = [
  "Corporate teams & HR wellness days",
  "Women's ministry & community groups",
  "Friend groups planning something better than brunch",
  "School staff & healthcare teams",
];

export const faqItems: FaqItem[] = [
  {
    question: "Is this therapy or is this coaching?",
    answer:
      "LandStrong offers coaching and consulting, not clinical therapy. Coaching is forward-focused and skills-based — it's a wonderful complement to therapy, and many clients do both. If clinical counseling is a better fit for what you're navigating, I can point you toward that option.",
  },
  {
    question: "How do I know if I need coaching or a group journey?",
    answer:
      "If you want dedicated, private one-on-one time, start with individual coaching. If the idea of doing this alongside other women — with built-in accountability and connection — sounds energizing rather than exhausting, the 8-Week Group Journey is likely your answer. Not sure? Book a free consultation and we'll figure it out together.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes. Individual coaching is available both virtually and in-person at the Cumming, GA office. Group journeys and workshops vary by cohort — ask about current formats when you book your consultation.",
  },
  {
    question: "What does a workshop actually look like?",
    answer:
      "Most workshops run about four hours and mix teaching, guided practice, and real conversation — not a lecture where everyone stares at slides. Topics are customized for your team or group, from corporate wellness days to women's retreats.",
  },
  {
    question: "I don't feel like I'm 'bad enough' to need help. Is that okay?",
    answer:
      "That thought is exactly the pattern LandStrong exists to interrupt. You don't have to be in crisis to deserve support — being tired, stretched thin, and quietly over it is more than enough reason to start.",
  },
];

export const resourceArticles: ResourceArticle[] = [
  {
    title: "The Difference Between Resting and Recovering",
    excerpt:
      "A weekend of Netflix isn't the same as nervous-system recovery. Here's how to tell which one you actually need — and why more sleep doesn't always fix exhaustion.",
    readTime: "6 min read",
    tag: "Nervous System",
  },
  {
    title: "Five Signs You're Running on Fumes (That Have Nothing to Do with Tiredness)",
    excerpt:
      "Brain fog, snapping at small things, and losing interest in stuff you used to love aren't personality traits. They're data.",
    readTime: "5 min read",
    tag: "Burnout",
  },
  {
    title: "A Grounding Exercise for the Middle of a Hard Day",
    excerpt:
      "No candles, no thirty minutes to spare. A ninety-second reset you can do in a parking lot, a bathroom stall, or standing at the kitchen sink.",
    readTime: "4 min read",
    tag: "Mindfulness",
  },
  {
    title: "Why 'Just Set Boundaries' Is Bad, Incomplete Advice",
    excerpt:
      "Boundaries fail when your nervous system doesn't feel safe enough to hold them. Here's what actually needs to happen first.",
    readTime: "7 min read",
    tag: "Boundaries",
  },
  {
    title: "What to Expect from Your First Coaching Consultation",
    excerpt:
      "No worksheets, no pressure, no being told to meditate more. Here's exactly what happens in a free consultation call with me.",
    readTime: "3 min read",
    tag: "Getting Started",
  },
  {
    title: "For the Woman Who Takes Care of Everyone Except Herself",
    excerpt:
      "A letter to the capable, exhausted woman holding it all together — and a gentle case for why she's allowed to put something down.",
    readTime: "5 min read",
    tag: "Reflection",
  },
];
