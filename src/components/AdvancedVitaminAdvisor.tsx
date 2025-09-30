import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle, CheckCircle, Calendar, Brain, Heart, Activity, Users, TrendingUp, Zap, Dna, TestTube, Target, Star } from 'lucide-react';

const AdvancedVitaminAdvisor = () => {
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('selection');
  const [userProfile, setUserProfile] = useState({
    age: 30,
    gender: 'female',
    weight: 70,
    lifestyle: 'moderate',
    goals: [] as string[],
    conditions: [] as string[],
    genetics: {} as Record<string, string>,
    labResults: {} as Record<string, any>,
    seasonality: 'winter',
    stressLevel: 'medium',
    sleepQuality: 'good',
    dietType: 'mixed'
  });

  const [symptomTracker, setSymptomTracker] = useState<Record<string, number>>({});

  // Persisted state: load from localStorage on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem('advisor_userProfile');
      if (savedProfile) setUserProfile(JSON.parse(savedProfile));
    } catch {}
    try {
      const savedSupps = localStorage.getItem('advisor_selectedSupplements');
      if (savedSupps) setSelectedSupplements(JSON.parse(savedSupps));
    } catch {}
  }, []);

  // Persist to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem('advisor_userProfile', JSON.stringify(userProfile));
    } catch {}
  }, [userProfile]);

  useEffect(() => {
    try {
      localStorage.setItem('advisor_selectedSupplements', JSON.stringify(selectedSupplements));
    } catch {}
  }, [selectedSupplements]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const advancedSupplementsData = {
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

  const healthGoals = {
    'immune': { name: 'Posílení imunity', supplements: ['vitamin-c', 'vitamin-d3', 'zinc'], season: 'winter' },
    'energy': { name: 'Zvýšení energie', supplements: ['b-complex', 'magnesium', 'iron', 'coq10'] },
    'cognitive': { name: 'Kognitivní funkce', supplements: ['omega3', 'b-complex', 'magnesium'] },
    'bone-health': { name: 'Zdraví kostí', supplements: ['vitamin-d3', 'vitamin-k2', 'magnesium'] },
    'cardiovascular': { name: 'Srdce a cévy', supplements: ['omega3', 'coq10', 'magnesium'] },
    'anti-aging': { name: 'Anti-aging', supplements: ['vitamin-c', 'vitamin-d3', 'omega3', 'coq10'] },
    'inflammation': { name: 'Snížení zánětu', supplements: ['omega3', 'curcumin', 'vitamin-d3'] },
    'stress': { name: 'Zvládání stresu', supplements: ['magnesium', 'b-complex', 'vitamin-c'] }
  };

  const geneticPolymorphisms = {
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

  const calculatePersonalizedDosage = (supplement, userProfile) => {
    const baseData = advancedSupplementsData[supplement];
    if (!baseData) return null;

    let adjustedMin = baseData.dosageRange.min;
    let adjustedMax = baseData.dosageRange.max;

    // Věkové úpravy
    if (userProfile.age > 65) {
      adjustedMin *= 1.2;
      adjustedMax *= 1.3;
    } else if (userProfile.age < 25) {
      adjustedMin *= 0.8;
      adjustedMax *= 0.9;
    }

    // Pohlavní úpravy
    if (userProfile.gender === 'male' && ['iron'].includes(supplement)) {
      adjustedMin *= 0.7;
      adjustedMax *= 0.8;
    }

    // Sezónní úpravy
    if (baseData.seasonalAdjustment && userProfile.seasonality) {
      const factor = baseData.seasonalAdjustment[userProfile.seasonality] || 1.0;
      adjustedMin *= factor;
      adjustedMax *= factor;
    }

    // Životní styl
    if (userProfile.lifestyle === 'very-active') {
      adjustedMin *= 1.3;
      adjustedMax *= 1.5;
    } else if (userProfile.lifestyle === 'sedentary') {
      adjustedMin *= 0.9;
      adjustedMax *= 1.0;
    }

    // Stres
    if (userProfile.stressLevel === 'high' && ['vitamin-c', 'b-complex', 'magnesium'].includes(supplement)) {
      adjustedMin *= 1.4;
      adjustedMax *= 1.6;
    }

    return {
      min: Math.round(adjustedMin),
      max: Math.round(adjustedMax),
      unit: baseData.dosageRange.unit,
      recommended: Math.round((adjustedMin + adjustedMax) / 2)
    };
  };

  const analyzeInteractions = () => {
    const interactions = [];
    const synergies = [];
    const warnings = [];

    // Pozitivní synergy
    if (selectedSupplements.includes('vitamin-d3') && selectedSupplements.includes('vitamin-k2')) {
      synergies.push({
        type: 'synergy',
        supplements: ['Vitamín D3', 'Vitamín K2'],
        effect: 'Optimální využití vápníku a kostní zdraví',
        recommendation: 'Užívat současně s tuky'
      });
    }

    if (selectedSupplements.includes('iron') && selectedSupplements.includes('vitamin-c')) {
      synergies.push({
        type: 'synergy',
        supplements: ['Železo', 'Vitamín C'],
        effect: 'Zvýšené vstřebávání železa až o 300%',
        recommendation: 'Užívat současně na lačno'
      });
    }

    // Negativní interakce
    if (selectedSupplements.includes('magnesium') && selectedSupplements.includes('zinc')) {
      warnings.push({
        type: 'competition',
        supplements: ['Hořčík', 'Zinek'],
        effect: 'Soutěží o stejné transportní systémy',
        recommendation: '2-3 hodinový rozestup'
      });
    }

    if (selectedSupplements.includes('iron') && selectedSupplements.includes('zinc')) {
      warnings.push({
        type: 'competition',
        supplements: ['Železo', 'Zinek'],
        effect: 'Vzájemná inhibice vstřebávání',
        recommendation: 'Užívat v různou denní dobu'
      });
    }

    return { interactions, synergies, warnings };
  };

  const generateOptimalSchedule = () => {
    const schedule = {
      '06:00': { name: 'Ráno na lačno', supplements: [], description: 'Optimální pro vstřebávání' },
      '08:00': { name: 'Se snídaní', supplements: [], description: 'S tuky pro vitamíny A,D,E,K' },
      '12:00': { name: 'S obědem', supplements: [], description: 'Hlavní jídlo s tuky' },
      '18:00': { name: 'S večeří', supplements: [], description: 'Poslední jídlo s tuky' },
      '21:00': { name: 'Před spaním', supplements: [], description: 'Relaxační doplňky' }
    };

    selectedSupplements.forEach(supplement => {
      const data = advancedSupplementsData[supplement];
      if (!data) return;

      // Určení nejlepší formy
      const bestForm = Object.entries(data.forms).reduce((best, [key, form]) => 
        form.bioavailability > best.bioavailability ? form : best
      , Object.values(data.forms)[0]);

      const dosage = calculatePersonalizedDosage(supplement, userProfile);

      const supplementInfo = {
        name: data.name,
        form: bestForm.name,
        dosage: dosage ? `${dosage.recommended} ${dosage.unit}` : 'Dle doporučení',
        bioavailability: `${bestForm.bioavailability}%`
      };

      // Zařazení do správného času
      if (bestForm.timing === 'morning' || data.category === 'water-soluble') {
        schedule['06:00'].supplements.push(supplementInfo);
      } else if (bestForm.timing === 'with-fat' || data.category === 'fat-soluble') {
        schedule['12:00'].supplements.push(supplementInfo);
      } else if (bestForm.timing === 'evening' || supplement === 'magnesium') {
        schedule['21:00'].supplements.push(supplementInfo);
      } else if (bestForm.timing === 'empty-stomach') {
        schedule['06:00'].supplements.push(supplementInfo);
      } else {
        schedule['08:00'].supplements.push(supplementInfo);
      }
    });

    return schedule;
  };

  const assessDeficiencyRisk = (supplement) => {
    const factors = [];
    let riskScore = 0;

    // Sezónní faktory
    if (supplement === 'vitamin-d3' && userProfile.seasonality === 'winter') {
      factors.push('Zimní období - nedostatek slunce');
      riskScore += 3;
    }

    // Dietní faktory
    if (userProfile.dietType === 'vegan') {
      if (['vitamin-d3', 'b-complex', 'iron', 'zinc'].includes(supplement)) {
        factors.push('Rostlinná strava');
        riskScore += 2;
      }
    }

    // Věkové faktory
    if (userProfile.age > 65) {
      if (['vitamin-d3', 'b-complex', 'magnesium'].includes(supplement)) {
        factors.push('Vyšší věk - snížené vstřebávání');
        riskScore += 2;
      }
    }

    // Pohlavní faktory
    if (userProfile.gender === 'female') {
      if (['iron', 'magnesium'].includes(supplement)) {
        factors.push('Ženy - vyšší potřeba');
        riskScore += 1;
      }
    }

    // Stresové faktory
    if (userProfile.stressLevel === 'high') {
      if (['vitamin-c', 'b-complex', 'magnesium'].includes(supplement)) {
        factors.push('Vysoký stres - zvýšená spotřeba');
        riskScore += 2;
      }
    }

    // Sportovní aktivita
    if (userProfile.lifestyle === 'very-active') {
      if (['magnesium', 'iron', 'omega3'].includes(supplement)) {
        factors.push('Intenzivní sport - zvýšené ztráty');
        riskScore += 2;
      }
    }

    return {
      score: riskScore,
      level: riskScore >= 5 ? 'high' : riskScore >= 3 ? 'medium' : 'low',
      factors
    };
  };

  const generateLabRecommendations = () => {
    const recommendations = [];
    
    selectedSupplements.forEach(supplement => {
      const data = advancedSupplementsData[supplement];
      if (data.labMarkers) {
        recommendations.push({
          supplement: data.name,
          markers: data.labMarkers,
          frequency: supplement === 'vitamin-d3' ? '2-3x ročně' : 'Ročně'
        });
      }
    });

    return recommendations;
  };

  const { synergies, warnings } = analyzeInteractions();
  const schedule = generateOptimalSchedule();
  const labRecommendations = generateLabRecommendations();


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Advanced Header */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-purple-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                <Brain className="text-purple-600" />
                AI Poradce pro personalizovanou suplementaci
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Vědecky založené doporučení s genetickou a laboratorní personalizací
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                <Clock size={16} />
                {currentTime.toLocaleTimeString('cs-CZ')}
              </div>
              <div className="text-xs text-gray-500">
                Verze 2.0 • AI Enhanced
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'selection', name: 'Výběr doplňků', icon: Target },
              { id: 'profile', name: 'Profil', icon: Users },
              { id: 'schedule', name: 'Rozvrh', icon: Calendar },
              { id: 'analysis', name: 'Analýza', icon: TestTube },
              { id: 'tracking', name: 'Sledování', icon: TrendingUp }
            ].map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Icon size={16} />
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'selection' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Health Goals Selection */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="text-green-600" />
                Zdravotní cíle a doplňky
              </h2>
              
              {/* Goals */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Vyberte vaše zdravotní cíle:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(healthGoals).map(([key, goal]) => (
                    <label key={key} className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-purple-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={userProfile.goals.includes(key)}
                        onChange={(e) => {
                          const newGoals = e.target.checked
                            ? [...userProfile.goals, key]
                            : userProfile.goals.filter(g => g !== key);
                          setUserProfile({...userProfile, goals: newGoals});
                          
                          // Auto-add recommended supplements
                          if (e.target.checked) {
                            const newSupplements = [...new Set([...selectedSupplements, ...goal.supplements])];
                            setSelectedSupplements(newSupplements);
                          }
                        }}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="text-sm font-medium">{goal.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Supplements Selection */}
              <div>
                <h3 className="font-medium mb-3">Dostupné doplňky stravy:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(advancedSupplementsData).map(([key, supplement]) => {
                    const deficiencyRisk = assessDeficiencyRisk(key);
                    const isRecommended = userProfile.goals.some(goal => 
                      healthGoals[goal]?.supplements.includes(key)
                    );
                    
                    return (
                      <div key={key} className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        selectedSupplements.includes(key) 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      } ${isRecommended ? 'ring-2 ring-green-200' : ''}`}>
                        <label className="cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <input
                              type="checkbox"
                              checked={selectedSupplements.includes(key)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedSupplements([...selectedSupplements, key]);
                                } else {
                                  setSelectedSupplements(selectedSupplements.filter(s => s !== key));
                                }
                              }}
                              className="w-4 h-4 text-purple-600 mt-1"
                            />
                            <div className="flex gap-1">
                              {isRecommended && <Star size={16} className="text-green-500" />}
                              {deficiencyRisk.level === 'high' && <AlertCircle size={16} className="text-red-500" />}
                              {deficiencyRisk.level === 'medium' && <AlertCircle size={16} className="text-yellow-500" />}
                            </div>
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-1">{supplement.name}</h4>
                          
                          <div className="text-xs text-gray-600 mb-2">
                            Nejlepší forma: <span className="font-medium">
                              {Object.values(supplement.forms).reduce((best, form) => 
                                form.bioavailability > best.bioavailability ? form : best
                              ).name}
                            </span>
                          </div>
                          
                          <div className="text-xs space-y-1">
                            {supplement.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                <CheckCircle size={12} className="text-green-500" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          {deficiencyRisk.level !== 'low' && (
                            <div className={`mt-2 text-xs p-2 rounded ${
                              deficiencyRisk.level === 'high' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'
                            }`}>
                              Riziko nedostatku: {deficiencyRisk.level === 'high' ? 'Vysoké' : 'Střední'}
                            </div>
                          )}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Real-time Recommendations */}
            <div className="space-y-6">
              {/* Current Time Recommendations */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="text-yellow-600" />
                  Aktuální doporučení
                </h3>
                {selectedSupplements.length === 0 ? (
                  <p className="text-gray-500 text-sm">Vyberte doplňky pro personalizované doporučení</p>
                ) : (
                  <div className="space-y-3">
                    {selectedSupplements.slice(0, 3).map(supplement => {
                      const data = advancedSupplementsData[supplement];
                      const hour = currentTime.getHours();
                      const dosage = calculatePersonalizedDosage(supplement, userProfile);
                      
                      let timeAdvice = '';
                      let colorClass = '';
                      
                      if (data.category === 'water-soluble' && hour >= 6 && hour <= 10) {
                        timeAdvice = 'Ideální čas!';
                        colorClass = 'text-green-600';
                      } else if (data.category === 'fat-soluble' && hour >= 11 && hour <= 14) {
                        timeAdvice = 'S obědem!';
                        colorClass = 'text-green-600';
                      } else if (supplement === 'magnesium' && hour >= 19) {
                        timeAdvice = 'Perfektní pro spánek!';
                        colorClass = 'text-green-600';
                      } else {
                        timeAdvice = 'Možné užít';
                        colorClass = 'text-blue-600';
                      }
                      
                      return (
                        <div key={supplement} className="flex items-center gap-2 text-sm p-2 bg-gray-50 rounded">
                          <CheckCircle size={16} className={colorClass} />
                          <div>
                            <span className="font-medium">{data.name}</span>
                            {dosage && <span className="text-gray-600 ml-2">({dosage.recommended} {dosage.unit})</span>}
                            <div className={`text-xs ${colorClass}`}>{timeAdvice}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Synergies */}
              {synergies.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="text-red-500" />
                    Pozitivní synergy
                  </h3>
                  <div className="space-y-2">
                    {synergies.map((synergy, index) => (
                      <div key={index} className="bg-green-50 p-3 rounded-lg">
                        <div className="font-medium text-green-800 text-sm">
                          {synergy.supplements.join(' + ')}
                        </div>
                        <div className="text-xs text-green-700 mt-1">{synergy.effect}</div>
                        <div className="text-xs text-green-600 mt-1 font-medium">{synergy.recommendation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Warnings */}
              {warnings.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="text-yellow-600" />
                    Upozornění
                  </h3>
                  <div className="space-y-2">
                    {warnings.map((warning, index) => (
                      <div key={index} className="bg-yellow-50 p-3 rounded-lg">
                        <div className="font-medium text-yellow-800 text-sm">
                          {warning.supplements.join(' vs ')}
                        </div>
                        <div className="text-xs text-yellow-700 mt-1">{warning.effect}</div>
                        <div className="text-xs text-yellow-600 mt-1 font-medium">{warning.recommendation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="text-blue-600" />
              Detailní zdravotní profil
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Základní údaje</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Věk</label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => setUserProfile({...userProfile, age: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pohlaví</label>
                  <select
                    value={userProfile.gender}
                    onChange={(e) => setUserProfile({...userProfile, gender: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="female">Žena</option>
                    <option value="male">Muž</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hmotnost (kg)</label>
                  <input
                    type="number"
                    value={userProfile.weight}
                    onChange={(e) => setUserProfile({...userProfile, weight: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Lifestyle */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Životní styl</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Úroveň aktivity</label>
                  <select
                    value={userProfile.lifestyle}
                    onChange={(e) => setUserProfile({...userProfile, lifestyle: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="sedentary">Sedavý (kancelář, minimum pohybu)</option>
                    <option value="light">Lehká aktivita (procházky, lehký sport)</option>
                    <option value="moderate">Střední aktivita (pravidelný sport 3-4x týdně)</option>
                    <option value="active">Aktivní (sport 5-6x týdně)</option>
                    <option value="very-active">Velmi aktivní (intenzivní sport denně)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Typ stravy</label>
                  <select
                    value={userProfile.dietType}
                    onChange={(e) => setUserProfile({...userProfile, dietType: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="mixed">Smíšená strava</option>
                    <option value="vegetarian">Vegetariánská</option>
                    <option value="vegan">Veganská</option>
                    <option value="keto">Ketogenní</option>
                    <option value="paleo">Paleo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Úroveň stresu</label>
                  <select
                    value={userProfile.stressLevel}
                    onChange={(e) => setUserProfile({...userProfile, stressLevel: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="low">Nízký</option>
                    <option value="medium">Střední</option>
                    <option value="high">Vysoký</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kvalita spánku</label>
                  <select
                    value={userProfile.sleepQuality}
                    onChange={(e) => setUserProfile({...userProfile, sleepQuality: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="excellent">Výborná (7-9h, klidný spánek)</option>
                    <option value="good">Dobrá (6-8h, občas probuzení)</option>
                    <option value="fair">Průměrná (5-7h, častá probuzení)</option>
                    <option value="poor">Špatná (méně než 6h, nespavost)</option>
                  </select>
                </div>
              </div>

              {/* Health Conditions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Zdravotní stav</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sezóna</label>
                  <select
                    value={userProfile.seasonality}
                    onChange={(e) => setUserProfile({...userProfile, seasonality: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="winter">Zima (říjen-březen)</option>
                    <option value="summer">Léto (duben-září)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zdravotní podmínky</label>
                  <div className="space-y-2">
                    {[
                      'Diabetes', 'Hypertenze', 'AutoImunitní onemocnění', 'Alergie', 
                      'Problémy se štítnou žlázou', 'Gastrointestinální problémy',
                      'Kardiovaskulární onemocnění', 'Osteoporóza'
                    ].map(condition => (
                      <label key={condition} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={userProfile.conditions.includes(condition)}
                          onChange={(e) => {
                            const newConditions = e.target.checked
                              ? [...userProfile.conditions, condition]
                              : userProfile.conditions.filter(c => c !== condition);
                            setUserProfile({...userProfile, conditions: newConditions});
                          }}
                          className="mr-2 w-4 h-4 text-purple-600"
                        />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Genetic Testing Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Dna className="text-purple-600" />
                Genetické testování (volitelné)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Máte-li výsledky genetického testování, zadejte je pro přesnější doporučení:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(geneticPolymorphisms).map(([gene, info]) => (
                  <div key={gene} className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">{info.name}</h4>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      onChange={(e) => setUserProfile({
                        ...userProfile,
                        genetics: {...userProfile.genetics, [gene]: e.target.value}
                      })}
                    >
                      <option value="">Neznámý</option>
                      <option value="normal">Normální varianta</option>
                      <option value="heterozygous">Heterozygotní</option>
                      <option value="homozygous">Homozygotní</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Ovlivňuje: {info.affects.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            {/* Optimized Daily Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="text-purple-600" />
                Optimalizovaný denní rozvrh
              </h2>
              
              {selectedSupplements.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Vyberte doplňky stravy pro vytvoření personalizovaného rozvrhu
                </p>
              ) : (
                <div className="space-y-4">
                  {Object.entries(schedule).map(([time, timeSlot]) => (
                    <div key={time} className={`border rounded-xl p-4 ${
                      timeSlot.supplements.length > 0 ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {time}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{timeSlot.name}</h3>
                            <p className="text-xs text-gray-500">{timeSlot.description}</p>
                          </div>
                        </div>
                        {timeSlot.supplements.length > 0 && (
                          <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                            {timeSlot.supplements.length} doplňků
                          </div>
                        )}
                      </div>
                      
                      {timeSlot.supplements.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {timeSlot.supplements.map((supplement, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-lg border border-purple-100">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800">{supplement.name}</h4>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                  {supplement.bioavailability} vstřebatelnost
                                </span>
                              </div>
                              <div className="text-sm text-gray-600">
                                <div>Forma: <span className="font-medium">{supplement.form}</span></div>
                                <div>Dávka: <span className="font-medium">{supplement.dosage}</span></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 italic text-sm">Žádné doplňky v tomto čase</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Weekly Planning */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="text-blue-600" />
                Týdenní plánování
              </h3>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day, idx) => (
                  <div key={day} className="text-center">
                    <div className="font-medium text-gray-700 mb-2">{day}</div>
                    <div className={`p-2 rounded ${
                      [5, 6].includes(idx) ? 'bg-blue-50' : 'bg-gray-50'
                    }`}>
                      <div className="text-xs text-gray-600">
                        {[5, 6].includes(idx) ? 'Víkend - volnější režim' : 'Standardní rozvrh'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Týdenní tipy:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Víkendy: Můžete být flexibilnější s časováním</li>
                  <li>• Pondělí: Začněte týden s plným spektrem vitamínů</li>
                  <li>• Středa: Zkontrolujte zásoby a doplňte chybějící</li>
                  <li>• Pátek: Připravte si dávkovače na víkend</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div className="space-y-6">
            {/* Lab Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TestTube className="text-green-600" />
                Doporučená laboratorní vyšetření
              </h2>
              
              {labRecommendations.length > 0 ? (
                <div className="space-y-4">
                  {labRecommendations.map((rec, idx) => (
                    <div key={idx} className="border border-green-200 rounded-lg p-4 bg-green-50">
                      <h3 className="font-semibold text-green-800 mb-2">{rec.supplement}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-700 mb-1">Doporučené markery:</h4>
                          <ul className="text-sm text-green-600 space-y-1">
                            {rec.markers.map((marker, markerIdx) => (
                              <li key={markerIdx} className="flex items-center gap-2">
                                <CheckCircle size={12} />
                                {marker}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-green-700 mb-1">Frekvence:</h4>
                          <p className="text-sm text-green-600">{rec.frequency}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Obecná doporučení:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Základní vyšetření: KO + diff, biochemie, CRP</li>
                      <li>• Nutriční profil: B12, folát, železo, ferritin, 25(OH)D3</li>
                      <li>• Minerály: hořčík v erytrocytech, zinek, selen</li>
                      <li>• Hormony: TSH, fT4, při potřebě fT3</li>
                      <li>• Kardiomarkery: lipidogram, homocystein</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Vyberte doplňky stravy pro personalizovaná laboratorní doporučení
                </p>
              )}
            </div>

            {/* Deficiency Risk Assessment */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="text-orange-600" />
                Analýza rizika nedostatku
              </h2>
              
              {selectedSupplements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSupplements.map(supplement => {
                    const risk = assessDeficiencyRisk(supplement);
                    const data = advancedSupplementsData[supplement];
                    
                    return (
                      <div key={supplement} className={`border rounded-lg p-4 ${
                        risk.level === 'high' ? 'border-red-300 bg-red-50' :
                        risk.level === 'medium' ? 'border-yellow-300 bg-yellow-50' :
                        'border-green-300 bg-green-50'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{data.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            risk.level === 'high' ? 'bg-red-200 text-red-800' :
                            risk.level === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-green-200 text-green-800'
                          }`}>
                            Riziko: {risk.level === 'high' ? 'Vysoké' : risk.level === 'medium' ? 'Střední' : 'Nízké'}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium">Skóre rizika: </span>
                            <span className="text-sm">{risk.score}/10</span>
                          </div>
                          
                          {risk.factors.length > 0 && (
                            <div>
                              <span className="text-sm font-medium">Rizikové faktory:</span>
                              <ul className="text-xs mt-1 space-y-1">
                                {risk.factors.map((factor, idx) => (
                                  <li key={idx} className="flex items-center gap-1">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                    {factor}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {data.symptoms && (
                            <div>
                              <span className="text-sm font-medium">Příznaky nedostatku:</span>
                              <div className="text-xs mt-1 text-gray-600">
                                {data.symptoms.join(', ')}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Vyberte doplňky stravy pro analýzu rizika nedostatku
                </p>
              )}
            </div>

            {/* Genetic Insights */}
            {Object.keys(userProfile.genetics).length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Dna className="text-purple-600" />
                  Genetická analýza a doporučení
                </h2>
                
                <div className="space-y-4">
                  {Object.entries(userProfile.genetics).map(([gene, variant]) => {
                    if (!variant || variant === '') return null;
                    
                    const geneInfo = geneticPolymorphisms[gene];
                    return (
                      <div key={gene} className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-purple-800">{geneInfo.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            variant === 'homozygous' ? 'bg-red-200 text-red-800' :
                            variant === 'heterozygous' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-green-200 text-green-800'
                          }`}>
                            {variant === 'homozygous' ? 'Homozygotní' : 
                             variant === 'heterozygous' ? 'Heterozygotní' : 'Normální'}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-purple-700">Ovlivňuje: </span>
                            <span className="text-sm text-purple-600">{geneInfo.affects.join(', ')}</span>
                          </div>
                          
                          {variant !== 'normal' && (
                            <div>
                              <span className="text-sm font-medium text-purple-700">Doporučení: </span>
                              <ul className="text-sm text-purple-600 mt-1 space-y-1">
                                {geneInfo.recommendations.map((rec, idx) => (
                                  <li key={idx} className="flex items-center gap-1">
                                    <CheckCircle size={12} />
                                    {rec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="space-y-6">
            {/* Symptom Tracker */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Activity className="text-green-600" />
                Sledování příznaků a pokroku
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Symptom Input */}
                <div>
                  <h3 className="font-semibold mb-4">Aktuální příznaky</h3>
                  <div className="space-y-3">
                    {[
                      'Únava', 'Nespavost', 'Úzkost', 'Deprese', 'Bolesti kloubů',
                      'Časté infekce', 'Pomalé hojení', 'Ztráta vlasů', 'Suchá pokožka',
                      'Problémy s koncentrací', 'Svalové křeče', 'Bolesti hlavy'
                    ].map(symptom => (
                      <div key={symptom} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">{symptom}</span>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(severity => (
                            <button
                              key={severity}
                              onClick={() => setSymptomTracker({
                                ...symptomTracker,
                                [symptom]: severity
                              })}
                              className={`w-8 h-8 rounded-full text-xs font-medium ${
                                symptomTracker[symptom] === severity
                                  ? severity <= 2 ? 'bg-green-500 text-white' :
                                    severity <= 4 ? 'bg-yellow-500 text-white' :
                                    'bg-red-500 text-white'
                                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                              }`}
                            >
                              {severity}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Chart */}
                <div>
                  <h3 className="font-semibold mb-4">Pokrok v čase</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-center text-gray-500 py-8">
                      <TrendingUp size={48} className="mx-auto mb-2" />
                      <p>Graf pokroku bude dostupný po několika týdnech sledování</p>
                    </div>
                  </div>
                  
                  {/* Weekly Summary */}
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Týdenní shrnutí</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div className="flex justify-between">
                        <span>Průměrná úroveň energie:</span>
                        <span className="font-medium">7/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kvalita spánku:</span>
                        <span className="font-medium">6/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Celkové zdraví:</span>
                        <span className="font-medium">Zlepšující se</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Tracker */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                Dodržování režimu
              </h3>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {Array.from({length: 7}, (_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - (6 - i));
                  const dayName = date.toLocaleDateString('cs-CZ', { weekday: 'short' });
                  const compliance = Math.random() > 0.3; // Mock data
                  
                  return (
                    <div key={i} className="text-center">
                      <div className="text-xs text-gray-600 mb-1">{dayName}</div>
                      <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                        compliance ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {compliance ? (
                          <CheckCircle size={16} className="text-white" />
                        ) : (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-green-800">Týdenní úspěšnost</span>
                  <span className="text-green-600 font-bold">85%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            {/* Recommendations Based on Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Brain className="text-purple-600" />
                AI doporučení na základě pokroku
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-medium text-purple-800 mb-1">Optimalizace dávkování</h4>
                  <p className="text-sm text-purple-700">
                    Na základě vašich příznaků doporučujeme zvýšit dávku hořčíku na 400mg večer pro lepší spánek.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-medium text-blue-800 mb-1">Nový doplněk</h4>
                  <p className="text-sm text-blue-700">
                    Zvažte přidání koenzumu Q10 pro zlepšení energetických procesů na buněčné úrovni.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-medium text-green-800 mb-1">Pozitivní pokrok</h4>
                  <p className="text-sm text-green-700">
                    Vaše úroveň energie se zlepšila o 30% za posledních 6 týdnů. Pokračujte v současném režimu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Tips and Insights */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white mt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="text-yellow-300" />
            Pokročilé poznatky a tipy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="text-yellow-300" />
                Optimalizace vstřebávání
              </h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Lipozomální formy: až 95% vstřebatelnost</li>
                <li>• Chelátové formy minerálů: 5x lepší než oxidy</li>
                <li>• Aktivní formy B vitamínů obcházejí genetické bariéry</li>
                <li>• Kombinace s bioperinem zvyšuje účinnost</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="text-yellow-300" />
                Chronobiologie suplementace
              </h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Kortizol ráno: vitamíny skupiny B pro energii</li>
                <li>• Melatonin večer: hořčík pro relaxaci</li>
                <li>• Trávení tuků 12-14h: vitamíny A,D,E,K</li>
                <li>• Regenerace 22-2h: kolagen, omega-3</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <TestTube className="text-yellow-300" />
                Personalizovaná medicína
              </h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Genetické testování: MTHFR, VDR, COMT</li>
                <li>• Mikrobiom analýza: individuální probiotika</li>
                <li>• Nutriční genomika: optimální dávkování</li>
                <li>• Biomarkery: objektívní měření pokroku</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer with Disclaimers */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border border-gray-200">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-red-600">
              <AlertCircle size={20} />
              <span className="font-semibold">Důležité upozornění</span>
            </div>
            
            <div className="text-sm text-gray-600 max-w-4xl mx-auto space-y-2">
              <p>
                <strong>Tato aplikace slouží pouze pro vzdělávací a informační účely.</strong> 
                Neposkytuje lékařskou diagnózu ani léčbu. Vždy konzultujte užívání jakýchkoli doplňků stravy s kvalifikovaným zdravotnickým odborníkem.
              </p>
              
              <p>
                <strong>Genetické informace:</strong> Genetické polymorfismy jsou pouze jedním z mnoha faktorů ovlivňujících metabolismus živin. 
                Interpretace by měla být vždy konzultována s genetickým poradcem nebo specialistou na nutriční genomiku.
              </p>
              
              <p>
                <strong>Laboratorní hodnoty:</strong> Referenční rozmezí se mohou lišit mezi laboratořemi. 
                Interpretaci výsledků svěřte vždy odbornému lékaři.
              </p>
            </div>
            
            <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
              <p>Založeno na současných vědeckých poznatcích z oblasti nutriční biochemie, farmakologie a personalizované medicíny.</p>
              <p className="mt-1">Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedVitaminAdvisor;