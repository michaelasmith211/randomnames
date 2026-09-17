export interface UsernameStyleData {
  prefixes: string[];
  words: string[];
  suffixes: string[];
  curated: string[];
}

export const USERNAME_DATA: Record<string, UsernameStyleData> = {
  gamer: {
    prefixes: ['Hyper', 'Neon', 'Shadow', 'Cyber', 'Viper', 'Phantom', 'Ghost', 'Apex', 'Rogue', 'Venom', 'Frost', 'Iron'],
    words: ['Sniper', 'Vortex', 'Slayer', 'Hunter', 'Striker', 'Titan', 'Reaper', 'Specter', 'Ninja', 'Blaze', 'Wolf', 'Rider'],
    suffixes: ['X', '99', 'GG', 'Ops', 'HQ', 'Pro', 'TV', 'Elite', 'Zone', 'Mode', 'Prime', 'Zero'],
    curated: [
      'NeonViper', 'ShadowSniper', 'CyberGhost', 'ApexStriker', 'FrostByte',
      'HyperRogue', 'VortexTitan', 'PhantomWolf', 'IronReaper', 'BlazeKnight',
      'QuantumEcho', 'DeltaForce99', 'PixelSlayer', 'ChronoGamer', 'VenomEdge'
    ],
  },
  minecraft: {
    prefixes: ['Crafty', 'Blocky', 'Diamond', 'Redstone', 'Ender', 'Creep', 'Pixel', 'Nether', 'Obsidian', 'Iron', 'Gold', 'Lapis'],
    words: ['Miner', 'Crafter', 'Knight', 'Steve', 'Builder', 'Blade', 'Golem', 'Dragon', 'Slime', 'Sword', 'Pickaxe', 'Warden'],
    suffixes: ['MC', 'Craft', 'Block', 'Mine', 'YT', 'Plays', 'Box', 'World', 'Builds', 'Realm'],
    curated: [
      'DiamondMinerMC', 'RedstoneCrafter', 'EnderKnight', 'ObsidianGolem', 'NetherBlade',
      'PixelSteve', 'CraftyWarden', 'BlockyDragon', 'LapisBuilder', 'IronPickaxeYT',
      'CreeperSlayer', 'GoldCrafter99', 'VoxelKing', 'EnderPearlPro', 'BedrockBreaker'
    ],
  },
  aesthetic: {
    prefixes: ['Velvet', 'Lunar', 'Cloudy', 'Cosmic', 'Solar', 'Silky', 'Golden', 'Pastel', 'Misty', 'Crystal', 'Ethereal', 'Honey'],
    words: ['Whisper', 'Bloom', 'Echo', 'Haven', 'Meadow', 'Horizon', 'Breeze', 'Petal', 'Glow', 'Cascade', 'Mirage', 'Dew'],
    suffixes: ['Vibes', 'Aura', 'Soul', 'Dreams', 'Mist', 'Wave', 'Mood', 'Glow', 'Haze', 'Loom'],
    curated: [
      'VelvetMoon', 'CosmicWhisper', 'CloudyPetal', 'LunarMeadow', 'EtherealBloom',
      'GoldenHorizon', 'PastelAura', 'SilkyBreeze', 'CrystalHaven', 'MistyEcho',
      'HoneyGlow', 'SolarMirage', 'DewDropVibes', 'SereneLoom', 'StarlightWave'
    ],
  },
  tech: {
    prefixes: ['Code', 'Byte', 'Stack', 'Dev', 'Algo', 'Git', 'Cloud', 'Data', 'Kernel', 'Node', 'Async', 'Bit'],
    words: ['Craft', 'Flow', 'Forge', 'Sync', 'Pilot', 'Nexus', 'Pulse', 'Matrix', 'Vector', 'Logic', 'Engine', 'Stack'],
    suffixes: ['Dev', 'IO', 'Ops', 'Lab', 'Hub', 'Net', 'App', 'AI', 'CLI', 'API'],
    curated: [
      'ByteCrafter', 'CodePilotDev', 'AsyncLogic', 'KernelForge', 'DataVector',
      'CloudNexus', 'AlgoPulse', 'StackSyncIO', 'GitMatrix', 'NodeFlowLab',
      'BitEngine', 'DevOpsMaster', 'CyberVector', 'LogicPilot', 'SyntaxSurgeon'
    ],
  },
  random: {
    prefixes: ['Lucky', 'Swift', 'Brave', 'Wild', 'Chill', 'Turbo', 'Crazy', 'Epic', 'Mighty', 'Clever', 'Sunny', 'Atomic'],
    words: ['Panda', 'Falcon', 'Badger', 'Rocket', 'Comet', 'Fox', 'Otter', 'Eagle', 'Tiger', 'Koala', 'Hawk', 'Dolphin'],
    suffixes: ['42', '77', '101', 'X', 'Club', 'HQ', 'Life', 'Go', 'Up', 'Star'],
    curated: [
      'LuckyPanda42', 'SwiftFalcon', 'WildRocket', 'ChillFox', 'AtomicOtter',
      'TurboBadger', 'CleverTiger', 'EpicComet77', 'SunnyKoala', 'MightyHawk',
      'CrazyDolphin', 'BraveEagleHQ', 'CosmicSloth', 'VelociraptorGo', 'OrbitPanda'
    ],
  },
};
