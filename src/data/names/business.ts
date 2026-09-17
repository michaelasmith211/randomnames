export interface BusinessStyleData {
  roots: string[];
  suffixes: string[];
  compoundFirst: string[];
  compoundSecond: string[];
  curated: { name: string; industry: string; tagline: string }[];
}

export const BUSINESS_DATA: Record<string, BusinessStyleData> = {
  startup: {
    roots: ['Veloce', 'Nova', 'Apex', 'Strata', 'Cloud', 'Pulse', 'Hyper', 'Omni', 'Sync', 'Lumina', 'Kinet', 'Aura'],
    suffixes: ['ly', 'ify', 'io', 'base', 'flow', 'stack', 'hub', 'grid', 'wave', 'forge', 'link', 'scale'],
    compoundFirst: ['Next', 'Smart', 'Peak', 'Rapid', 'Bright', 'Clear', 'Prime', 'Bold', 'Swift', 'Deep'],
    compoundSecond: ['Logic', 'Shift', 'Scale', 'Engine', 'Venture', 'Matrix', 'Bridge', 'Path', 'Metrics', 'Layer'],
    curated: [
      { name: 'ApexFlow', industry: 'SaaS / Automation', tagline: 'Streamline team operations instantly' },
      { name: 'NovaSphere', industry: 'Cloud Infrastructure', tagline: 'Scalable multi-cloud orchestration' },
      { name: 'SyncNest', industry: 'Collaboration', tagline: 'Unified workspace for modern distributed teams' },
      { name: 'LuminaTech', industry: 'Data & Analytics', tagline: 'Intelligent decision-making through AI insights' },
      { name: 'StrataLogic', industry: 'Enterprise Security', tagline: 'Zero-trust architecture for hyper-growth' },
      { name: 'PulseBase', industry: 'Developer Tools', tagline: 'Real-time telemetry and API observability' },
      { name: 'VeloceLabs', industry: 'AI Research', tagline: 'Accelerating foundational neural models' },
      { name: 'OmniGrid', industry: 'Energy & Tech', tagline: 'Decentralized smart grid management' },
    ],
  },
  company: {
    roots: ['Vanguard', 'Pinnacle', 'Sterling', 'Summit', 'Heritage', 'Keystone', 'Paramount', 'Ascent', 'Horizon', 'Cornerstone'],
    suffixes: ['Group', 'Partners', 'Holdings', 'Ventures', 'Associates', 'Capital', 'Corp', 'Global', 'Solutions', 'Enterprises'],
    compoundFirst: ['North', 'Global', 'Pacific', 'Atlantic', 'First', 'Beacon', 'Atlas', 'Crest', 'Anchor', 'Iron'],
    compoundSecond: ['Stone', 'Wood', 'Point', 'Ridge', 'Harbor', 'Cross', 'Field', 'Brook', 'Gate', 'Way'],
    curated: [
      { name: 'Pinnacle Capital Partners', industry: 'Finance & Investment', tagline: 'Long-term strategic growth' },
      { name: 'Keystone Global Holdings', industry: 'Enterprise Logistics', tagline: 'Connecting supply chains worldwide' },
      { name: 'Vanguard Solutions Group', industry: 'Management Consulting', tagline: 'Guiding visionary corporate pivots' },
      { name: 'Horizon Strategic Partners', industry: 'Advisory', tagline: 'Navigating regulatory and market shifts' },
      { name: 'Beacon Ridge Enterprise', industry: 'Commercial Infrastructure', tagline: 'Building resilient foundations' },
      { name: 'Sterling Crest Capital', industry: 'Asset Management', tagline: 'Disciplined wealth preservation' },
    ],
  },
  brand: {
    roots: ['Aura', 'Sol', 'Lux', 'Haven', 'Echo', 'Velvet', 'Ember', 'Zenith', 'Mira', 'Flora'],
    suffixes: ['Studio', 'Collective', 'Co.', 'Lab', 'House', 'Works', 'Living', 'Life', 'Design', 'Media'],
    compoundFirst: ['Silver', 'Golden', 'Wild', 'Pure', 'True', 'Modern', 'Urban', 'Gentle', 'Raw', 'Fine'],
    compoundSecond: ['Bloom', 'Thread', 'Grain', 'Craft', 'Leaf', 'Root', 'Stone', 'Light', 'Line', 'Spark'],
    curated: [
      { name: 'Velvet & Vine', industry: 'Lifestyle & Botanicals', tagline: 'Artisanal botanicals for mindful spaces' },
      { name: 'Echo Collective', industry: 'Creative Agency', tagline: 'Stories shaped through digital design' },
      { name: 'Lumina Studio', industry: 'Brand Identity', tagline: 'Illuminating authentic brand essences' },
      { name: 'Urban Grain Co.', industry: 'Sustainable Furniture', tagline: 'Handcrafted timber for contemporary homes' },
      { name: 'Golden Hour Media', industry: 'Production Studio', tagline: 'Cinematic storytelling that inspires' },
      { name: 'Pure Root Living', industry: 'Organic Wellness', tagline: 'Holistic living rooted in nature' },
    ],
  },
  shop: {
    roots: ['Penny', 'Clover', 'Willow', 'Bramble', 'Copper', 'Rustic', 'Honey', 'Cobble', 'Ivy', 'Oak'],
    suffixes: ['Market', 'Corner', 'Emporium', 'Barn', 'Boutique', 'Pantry', 'Depot', 'Merchant', 'Store', 'Co.'],
    compoundFirst: ['The Little', 'Old Town', 'Cozy', 'Curious', 'Daily', 'Sunny', 'Wholesome', 'Secret', 'Heritage'],
    compoundSecond: ['Nest', 'Post', 'Yard', 'Oven', 'Shed', 'Patch', 'Haven', 'Cabin', 'Mill'],
    curated: [
      { name: 'The Bramble Boutique', industry: 'Fashion & Apparel', tagline: 'Curated apparel for curious spirits' },
      { name: 'Copper Kettle Pantry', industry: 'Gourmet Bakery', tagline: 'Warm sourdough and heritage jams daily' },
      { name: 'Willow & Oak Emporium', industry: 'Home & Decor', tagline: 'Antiques and timeless home artifacts' },
      { name: 'Cozy Corner Market', industry: 'Neighborhood Grocer', tagline: 'Locally grown produce and dry goods' },
      { name: 'The Honeycomb Yard', industry: 'Garden Nursery', tagline: 'Native flora, herbs, and garden supplies' },
      { name: 'Old Town Cobbler', industry: 'Leather Crafts', tagline: 'Generations of handcrafted leather goods' },
    ],
  },
};
