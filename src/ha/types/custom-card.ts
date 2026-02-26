interface CustomCardRegistrationInfo {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
}

export function registerCustomCard(card: CustomCardRegistrationInfo): void {
  const windowWithCards = window as unknown as Window & {
    customCards: unknown[];
  };
  windowWithCards.customCards = windowWithCards.customCards || [];

  windowWithCards.customCards.push(card);
}
