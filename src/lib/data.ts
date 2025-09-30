import { SupplementsData, HealthGoalsMap, GeneticPolymorphismsMap } from '../types';

export const advancedSupplementsData: SupplementsData = {
  'vitamin-c': {
    name: 'Vitamín C',
    forms: {
      'ascorbic-acid': { name: 'Kyselina askorbová', bioavailability: 20, timing: 'morning' },
      'liposomal': { name: 'Lipozomální', bioavailability: 95, timing: 'anytime' },
      'buffered': { name: 'Pufrovaný', bioavailability: 35, timing: 'morning' },
      'ester-c': { name: 'Ester-C', bioavailability: 45, timing: 'morning' }
    },
    category: 'water-soluble',
    dosageRange: { min: 500, max: 2000, unit: 'mg' },
    benefits: ['Imunitní systém', 'Kolagenová syntéza', 'Antioxidační ochrana', 'Vstřebávání železa'],
    contraindications: ['Ledvinové kameny', 'Hemochromatóza'],
    interactions: ['Zvyšuje vstřebávání železa', 'Snižuje účinek warfarinu'],
    geneticFactors: ['GULO gen', 'SLC23A1 polymorfismus'],
    labMarkers: ['25(OH)D', 'Oxidační stres markery'],
    seasonalAdjustment: { winter: 1.5, summer: 1.0 },
    symptoms: ['Únava', 'Časté infekce', 'Pomalé hojení'],
    foodSources: ['Citrusy', 'Paprika', 'Brokolice', 'Jahody']
  },
  'vitamin-d3': {
    name: 'Vitamín D3 (Cholekalciferol)',
    forms: {
      'oil-based': { name: 'V oleji', bioavailability: 85, timing: 'with-fat' },
      'dry-powder': { name: 'Suchý prášek', bioavailability: 60, timing: 'with-fat' },
      'sublingual': { name: 'Sublinguální', bioavailability: 75, timing: 'anytime' }
    },
    category: 'fat-soluble',
    dosageRange: { min: 1000, max: 5000, unit: 'IU' },
    benefits: ['Kostní zdraví', 'Imunitní funkce', 'Nálada', 'Svalová síla'],
    contraindications: ['Hyperkalcémie', 'Sarkoidóza', 'Granulomatózní onemocnění'],
    interactions: ['Kombinovat s K2', 'Zvyšuje vstřebávání vápníku'],
    geneticFactors: ['VDR polymorfismy', 'CYP2R1', 'CYP24A1'],
    labMarkers: ['25(OH)D3', 'PTH', 'Vápník v séru'],
    seasonalAdjustment: { winter: 2.0, summer: 0.7 },
    symptoms: ['Deprese', 'Únavnost', 'Bolesti kostí', 'Svalová slabost'],
    foodSources: ['Tučné ryby', 'Vaječné žloutky', 'Obohacené potraviny']
  },
  'vitamin-k2': {
    name: 'Vitamín K2 (Menachinon)',
    forms: {
      'mk4': { name: 'MK-4', bioavailability: 70, timing: 'with-fat', halfLife: '1-3h' },
      'mk7': { name: 'MK-7', bioavailability: 95, timing: 'with-fat', halfLife: '72h' },
      'mk7-trans': { name: 'All-trans MK-7', bioavailability: 98, timing: 'with-fat', halfLife: '72h' }
    },
    category: 'fat-soluble',
    dosageRange: { min: 100, max: 200, unit: 'mcg' },
    benefits: ['Aktivace MGP', 'Kostní mineralizace', 'Kardiovaskulární zdraví'],
    contraindications: ['Antikoagulancia', 'Jaterní onemocnění'],
    interactions: ['Synergický s D3', 'Interferuje s warfarinem'],
    geneticFactors: ['GGCX', 'VKORC1'],
    labMarkers: ['Undercarboxylovaný osteokalcin', 'MGP'],
    symptoms: ['Zhoršená kostní denzita', 'Vaskulární kalcifikace'],
    foodSources: ['Natto', 'Fermentované sýry', 'Játra']
  },
  'magnesium': {
    name: 'Hořčík',
    forms: {
      'glycinate': { name: 'Glykinát', bioavailability: 90, timing: 'evening', effects: 'relaxace' },
      'malate': { name: 'Malát', bioavailability: 85, timing: 'morning', effects: 'energie' },
      'threonate': { name: 'L-treonát', bioavailability: 95, timing: 'evening', effects: 'mozek' },
      'oxide': { name: 'Oxid', bioavailability: 4, timing: 'any', effects: 'projímavý' },
      'citrate': { name: 'Citrát', bioavailability: 75, timing: 'any', effects: 'univerzální' }
    },
    category: 'mineral',
    dosageRange: { min: 200, max: 600, unit: 'mg' },
    benefits: ['ATP produkce', 'Nervová funkce', 'Svalová relaxace', 'Spánek'],
    contraindications: ['Selhání ledvin', 'Myasthenia gravis'],
    interactions: ['Snižuje vstřebávání antibiotik', 'Rozestup s vápníkem'],
    geneticFactors: ['TRPM6', 'CNNM2'],
    labMarkers: ['RBC hořčík', 'Ionizovaný hořčík'],
    symptoms: ['Křeče', 'Nespavost', 'Úzkost', 'Arytmie'],
    foodSources: ['Tmavá listová zelenina', 'Ořechy', 'Semena', 'Tmavá čokoláda']
  },
  'omega3': {
    name: 'Omega-3 mastné kyseliny',
    forms: {
      'triglyceride': { name: 'Triglyceridy', bioavailability: 95, timing: 'with-fat' },
      'ethyl-ester': { name: 'Ethyl estery', bioavailability: 70, timing: 'with-fat' },
      'phospholipid': { name: 'Fosfolipidy', bioavailability: 85, timing: 'anytime' },
      'algae': { name: 'Z řas', bioavailability: 80, timing: 'with-fat', source: 'vegan' }
    },
    category: 'essential-fat',
    dosageRange: { min: 1000, max: 3000, unit: 'mg EPA/DHA' },
    benefits: ['Kardiovaskulární zdraví', 'Protizánětlivé účinky', 'Kognice', 'Nálada'],
    contraindications: ['Krvácivé poruchy', 'Alergie na ryby'],
    interactions: ['Zvyšuje antikoagulační účinek'],
    geneticFactors: ['FADS1', 'FADS2', 'APOE'],
    labMarkers: ['Omega-3 index', 'AA/EPA ratio'],
    symptoms: ['Suchá pokožka', 'Zánětlivé stavy', 'Poruchy nálady'],
    foodSources: ['Tučné ryby', 'Lněná semena', 'Chia semena', 'Vlašské ořechy']
  },
  'b-complex': {
    name: 'B-komplex vitamínů',
    forms: {
      'active': { name: 'Aktivní formy', bioavailability: 95, timing: 'morning' },
      'standard': { name: 'Standardní', bioavailability: 60, timing: 'morning' },
      'sustained': { name: 'Postupné uvolňování', bioavailability: 80, timing: 'morning' }
    },
    category: 'water-soluble',
    dosageRange: { min: 50, max: 200, unit: 'mg' },
    benefits: ['Energetický metabolismus', 'Nervová funkce', 'Methylace', 'Detoxifikace'],
    contraindications: ['Leber optická neuropatie (B12)', 'Periferní neuropatie (B6)'],
    interactions: ['Žlutý moč (normální)', 'Interferuje s levodopou'],
    geneticFactors: ['MTHFR', 'MTR', 'MTRR', 'CBS'],
    labMarkers: ['Homocystein', 'Methylmalonová kyselina', 'B12', 'Folát'],
    symptoms: ['Únava', 'Neuropatie', 'Anémie', 'Deprese'],
    foodSources: ['Maso', 'Ryby', 'Vejce', 'Listová zelenina']
  },
  'iron': {
    name: 'Železo',
    forms: {
      'bisglycinate': { name: 'Bisglycinát', bioavailability: 90, timing: 'empty-stomach' },
      'fumarate': { name: 'Fumarát', bioavailability: 25, timing: 'empty-stomach' },
      'sulfate': { name: 'Sulfát', bioavailability: 20, timing: 'empty-stomach' },
      'heme': { name: 'Hemové', bioavailability: 95, timing: 'anytime' }
    },
    category: 'mineral',
    dosageRange: { min: 15, max: 65, unit: 'mg' },
    benefits: ['Transport kyslíku', 'Energetický metabolismus', 'Kognice'],
    contraindications: ['Hemochromatóza', 'Thalassémie'],
    interactions: ['Kombinovat s vitamínem C', 'Rozestup s vápníkem'],
    geneticFactors: ['HFE', 'TMPRSS6', 'TFR2'],
    labMarkers: ['Ferritin', 'Transferrin', 'TIBC', 'sTfR'],
    symptoms: ['Únava', 'Bledost', 'Syndrom neklidných nohou', 'Ztráta vlasů'],
    foodSources: ['Červené maso', 'Špenát', 'Luštěniny', 'Tmavá čokoláda']
  },
  'zinc': {
    name: 'Zinek',
    forms: {
      'picolinate': { name: 'Pikolinát', bioavailability: 85, timing: 'empty-stomach' },
      'bisglycinate': { name: 'Bisglycinát', bioavailability: 80, timing: 'with-food' },
      'gluconate': { name: 'Glukonát', bioavailability: 45, timing: 'with-food' },
      'monomethionine': { name: 'Monometionin', bioavailability: 75, timing: 'empty-stomach' }
    },
    category: 'mineral',
    dosageRange: { min: 8, max: 40, unit: 'mg' },
    benefits: ['Imunitní funkce', 'Hojení ran', 'Reprodukční zdraví', 'Neurotransmittery'],
    contraindications: ['Wilsonova choroba', 'Vysoké dávky mědi'],
    interactions: ['Snižuje vstřebávání antibiotik', 'Interferuje s mědí'],
    geneticFactors: ['ZIP4', 'ZnT8', 'MT1A'],
    labMarkers: ['Zinek v séru', 'Zinek v erytrocytech'],
    symptoms: ['Časté infekce', 'Pomalé hojení', 'Ztráta chuti', 'Dermatitida'],
    foodSources: ['Ústřice', 'Maso', 'Dýňová semena', 'Temná čokoláda']
  },
  'coq10': {
    name: 'Koenzym Q10',
    forms: {
      'ubiquinol': { name: 'Ubiquinol (redukovaný)', bioavailability: 95, timing: 'with-fat' },
      'ubiquinone': { name: 'Ubichinon (oxidovaný)', bioavailability: 70, timing: 'with-fat' }
    },
    category: 'antioxidant',
    dosageRange: { min: 100, max: 300, unit: 'mg' },
    benefits: ['Mitochondriální funkce', 'Kardiovaskulární zdraví', 'Antioxidace'],
    contraindications: ['Warfarin (opatrnost)', 'Chemoterapie (konzultace)'],
    interactions: ['Může snižovat účinek warfarinu'],
    geneticFactors: ['COQ2', 'COQ6', 'PDSS2'],
    labMarkers: ['CoQ10 v plazmě'],
    symptoms: ['Svalová slabost', 'Únava', 'Statiny-indukovaná myopatie'],
    foodSources: ['Orgánové maso', 'Tučné ryby', 'Celozrnné obiloviny']
  },
  'curcumin': {
    name: 'Kurkumin',
    forms: {
      'phytosome': { name: 'Fytosomový', bioavailability: 95, timing: 'with-fat' },
      'piperine': { name: 'S piperinem', bioavailability: 85, timing: 'with-food' },
      'liposomal': { name: 'Lipozomální', bioavailability: 90, timing: 'anytime' },
      'standard': { name: 'Standardní', bioavailability: 3, timing: 'with-fat' }
    },
    category: 'polyphenol',
    dosageRange: { min: 500, max: 1500, unit: 'mg' },
    benefits: ['Protizánětlivé účinky', 'Antioxidace', 'Detoxifikace', 'Neuroprotekce'],
    contraindications: ['Žlučové kameny', 'Krvácivé poruchy'],
    interactions: ['Zvyšuje antikoagulační účinek'],
    geneticFactors: ['GSTM1', 'GSTT1', 'CYP3A4'],
    symptoms: ['Chronický zánět', 'Bolesti kloubů', 'Oxidační stres'],
    foodSources: ['Kurkuma', 'Kari koření']
  }
};

export const healthGoals: HealthGoalsMap = {
  'immune': { name: 'Posílení imunity', supplements: ['vitamin-c', 'vitamin-d3', 'zinc'], season: 'winter' },
  'energy': { name: 'Zvýšení energie', supplements: ['b-complex', 'magnesium', 'iron', 'coq10'] },
  'cognitive': { name: 'Kognitivní funkce', supplements: ['omega3', 'b-complex', 'magnesium'] },
  'bone-health': { name: 'Zdraví kostí', supplements: ['vitamin-d3', 'vitamin-k2', 'magnesium'] },
  'cardiovascular': { name: 'Srdce a cévy', supplements: ['omega3', 'coq10', 'magnesium'] },
  'anti-aging': { name: 'Anti-aging', supplements: ['vitamin-c', 'vitamin-d3', 'omega3', 'coq10'] },
  'inflammation': { name: 'Snížení zánětu', supplements: ['omega3', 'curcumin', 'vitamin-d3'] },
  'stress': { name: 'Zvládání stresu', supplements: ['magnesium', 'b-complex', 'vitamin-c'] }
};

export const geneticPolymorphisms: GeneticPolymorphismsMap = {
  'MTHFR': { 
    name: 'MTHFR C677T/A1298C',
    affects: ['Methylace folátů', 'Homocystein', 'Detoxifikace'],
    recommendations: ['Methylfolát místo kyseliny listové', 'Zvýšený B12', 'TMG']
  },
  'COMT': {
    name: 'COMT Val158Met',
    affects: ['Metabolismus dopaminu', 'Stres', 'Kofein'],
    recommendations: ['Hořčík', 'SAMe', 'Redukce kofeinu při pomalém typu']
  },
  'VDR': {
    name: 'VDR Taq/Bsm',
    affects: ['Vitamín D receptor', 'Kostní zdraví', 'Imunita'],
    recommendations: ['Vyšší dávky vitamínu D3', 'Kombinace s K2']
  },
  'APOE': {
    name: 'APOE ε4',
    affects: ['Cholesterolový metabolismus', 'Alzheimer risk'],
    recommendations: ['Omega-3 DHA', 'Antioxidanty', 'Kurkumin']
  }
};
