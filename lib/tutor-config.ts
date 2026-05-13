/**
 * Tutor AI — central configuration
 * To rename the tutor: change TUTOR_NAME here. That's it.
 */

export const TUTOR_NAME = 'Lumi';
export const TUTOR_TAGLINE = 'Il tuo assistente AI per questo corso';
export const TUTOR_PLACEHOLDER = `Chiedi a ${TUTOR_NAME}...`;
export const TUTOR_SYSTEM_IDENTITY = `Sei ${TUTOR_NAME}, il Tutor AI di AI Fundamentals.`;

export const TUTOR_TEMPERATURE_DEFAULT = 0.2;
export const TUTOR_TEMPERATURE_PRESETS = [
  { label: 'Preciso', value: 0.1 },
  { label: 'Bilanciato', value: 0.4 },
  { label: 'Creativo', value: 0.8 },
  { label: 'Caotico', value: 1.3 },
] as const;
