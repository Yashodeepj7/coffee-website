import macroSingleBean from '../assets/macro_single_bean.png';
import niceSingleBean from '../assets/nice_single_bean.png';

// Pure realistic photographic single coffee beans for floating parallax animations
export const SINGLE_HERO_BEANS = [
  // Left side single beans (positioned to frame the content without colliding with text)
  { id: 'sb-l1', src: macroSingleBean, top: '12%', left: '4%', width: 70, rotate: -30, speed: 0.6, rot: 0.08, animDur: '5.4s', animDelay: '0s' },
  { id: 'sb-l2', src: niceSingleBean, top: '38%', left: '3%', width: 72, rotate: 45, speed: -0.4, rot: -0.06, animDur: '6.2s', animDelay: '-1.8s', mobHide: true },
  { id: 'sb-l3', src: macroSingleBean, top: '65%', left: '5%', width: 54, rotate: 15, speed: 0.7, rot: 0.1, blur: '1px', animDur: '7s', animDelay: '-3.2s', mobHide: true },
  { id: 'sb-l4', src: niceSingleBean, top: '84%', left: '8%', width: 68, rotate: -65, speed: 0.5, rot: -0.08, animDur: '5.8s', animDelay: '-2.4s' },

  // Right side single beans
  { id: 'sb-r1', src: niceSingleBean, top: '14%', right: '4%', width: 72, rotate: 35, speed: -0.5, rot: -0.08, animDur: '5.6s', animDelay: '-0.9s' },
  { id: 'sb-r2', src: macroSingleBean, top: '40%', right: '3%', width: 76, rotate: -40, speed: 0.65, rot: 0.1, animDur: '6.5s', animDelay: '-2.7s', mobHide: true },
  { id: 'sb-r3', src: niceSingleBean, top: '66%', right: '5%', width: 50, rotate: 75, speed: -0.65, rot: -0.1, blur: '1.2px', animDur: '7.5s', animDelay: '-3.8s', mobHide: true },
  { id: 'sb-r4', src: macroSingleBean, top: '86%', right: '8%', width: 74, rotate: -20, speed: 0.55, rot: 0.06, animDur: '5.9s', animDelay: '-1.4s' },

  // Upper background stray beans (hidden on tablet & mobile)
  { id: 'sb-c1', src: macroSingleBean, top: '8%', left: '22%', width: 42, rotate: 110, speed: 0.3, rot: 0.04, blur: '1.8px', animDur: '8.2s', animDelay: '-2.5s', tabHide: true, mobHide: true },
  { id: 'sb-c2', src: niceSingleBean, top: '9%', right: '23%', width: 44, rotate: -85, speed: -0.25, rot: -0.04, blur: '1.8px', animDur: '8s', animDelay: '-1.6s', tabHide: true, mobHide: true }
];

// Indian Specialty Coffee Products
export const PRODUCTS = [
  {
    id: 'sunrise',
    name: 'Sunrise Ritual',
    price: 590,
    roast: 'light',
    origin: 'ARAKU VALLEY',
    weight: '250G',
    notes: 'Mandarin orange · wild honey · sweet jaggery',
    dots: 1,
    tag: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'weekender',
    name: 'The Weekender',
    price: 540,
    roast: 'medium',
    origin: 'CHIKMAGALUR',
    weight: '250G',
    notes: 'Toasted almond · rich caramel · cardamom hint',
    dots: 3,
    tag: 'NEW ARRIVAL',
    tagClass: 'tag-new',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'afterglow',
    name: 'Afterglow',
    price: 620,
    roast: 'dark',
    origin: 'COORG ESTATE',
    weight: '250G',
    notes: 'Dark cacao · roasted walnut · spiced cinnamon',
    dots: 5,
    tag: 'SMALL BATCH',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'slowmorning',
    name: 'Slow Morning',
    price: 750,
    roast: 'light',
    origin: 'NILGIRIS RESERVE',
    weight: '250G',
    notes: 'Alphonso mango · hibiscus flower · dried fig',
    dots: 2,
    tag: 'LIMITED LOT',
    tagClass: 'tag-limited',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  }
];

// Coffee Finder Quiz Questions
export const QUIZ_QUESTIONS = [
  {
    q: 'How do you like to brew at home?',
    opts: [
      ['espresso', 'Espresso machine', 'espresso'],
      ['filter', 'Pour over / Chemex / V60', 'filter'],
      ['french', 'French press / Aeropress', 'french']
    ]
  },
  {
    q: 'Which flavour profile speaks to you?',
    opts: [
      ['fruit', 'Bright, floral & fruity notes (Araku / Nilgiris)', 'fruit'],
      ['sweet', 'Sweet caramel, orange & almond (Chikmagalur)', 'sweet'],
      ['rich', 'Rich dark cacao & roasted walnut (Coorg)', 'rich']
    ]
  },
  {
    q: 'How bold do you like your morning cup?',
    opts: [
      ['light', 'Light, delicate & tea-like', 'light'],
      ['medium', 'Balanced & smooth medium body', 'medium'],
      ['dark', 'Deep, comforting & intense body', 'dark']
    ]
  }
];

export const QUIZ_ICONS = {
  espresso: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  filter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`,
  french: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M6 2v20"></path><path d="M18 2v20"></path><path d="M6 12h12"></path><circle cx="12" cy="7" r="2"></circle></svg>`,
  fruit: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
  sweet: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
  rich: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  light: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>`,
  medium: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>`,
  dark: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
};

export const formatMoney = (n) => '₹' + Number(n).toLocaleString('en-IN');
