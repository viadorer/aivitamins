// Shared types for the AI Vitamin Advisor

export type Gender = 'female' | 'male';
export type Lifestyle = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
export type Seasonality = 'winter' | 'summer';
export type StressLevel = 'low' | 'medium' | 'high';
export type SleepQuality = 'excellent' | 'good' | 'fair' | 'poor';
export type DietType = 'mixed' | 'vegetarian' | 'vegan' | 'keto' | 'paleo';

export interface UserProfile {
  age: number;
  gender: Gender;
  weight: number;
  lifestyle: Lifestyle;
  goals: string[];
  conditions: string[];
  genetics: Record<string, string>;
  labResults: Record<string, any>;
  seasonality: Seasonality;
  stressLevel: StressLevel;
  sleepQuality: SleepQuality;
  dietType: DietType;
}

export interface SupplementForm {
  name: string;
  bioavailability: number;
  timing: 'morning' | 'with-fat' | 'anytime' | 'evening' | 'any' | 'empty-stomach' | 'with-food';
  [key: string]: any;
}

export interface SupplementData {
  name: string;
  forms: Record<string, SupplementForm>;
  category: 'water-soluble' | 'fat-soluble' | 'mineral' | 'antioxidant' | 'polyphenol' | 'essential-fat';
  dosageRange: { min: number; max: number; unit: string };
  benefits: string[];
  contraindications?: string[];
  interactions?: string[];
  geneticFactors?: string[];
  labMarkers?: string[];
  seasonalAdjustment?: Partial<Record<Seasonality, number>>;
  symptoms?: string[];
  foodSources?: string[];
}

export type SupplementsData = Record<string, SupplementData>;

export interface HealthGoal {
  name: string;
  supplements: string[];
  season?: Seasonality;
}

export type HealthGoalsMap = Record<string, HealthGoal>;

export interface GeneticPolymorphismInfo {
  name: string;
  affects: string[];
  recommendations: string[];
}

export type GeneticPolymorphismsMap = Record<string, GeneticPolymorphismInfo>;

export interface DosageRecommendation {
  min: number;
  max: number;
  unit: string;
  recommended: number;
}

export interface Synergy {
  type: 'synergy';
  supplements: string[];
  effect: string;
  recommendation: string;
}

export interface WarningInteraction {
  type: 'competition' | 'warning';
  supplements: string[];
  effect: string;
  recommendation: string;
}

export interface ScheduleItem {
  name: string;
  supplements: Array<{ name: string; form: string; dosage: string; bioavailability: string }>;
  description: string;
}

export type ScheduleMap = Record<string, ScheduleItem>;

export interface RiskAssessment {
  score: number;
  level: 'low' | 'medium' | 'high';
  factors: string[];
}

export interface LabRecommendation {
  supplement: string;
  markers: string[];
  frequency: string;
}
