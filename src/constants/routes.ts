const baseUrl = import.meta.env.BASE_URL
export const ROUTES = {
  HOME: baseUrl,
  ABOUT: `${baseUrl}/about`,
  CONTACT: `${baseUrl}/contact`,
  SOLUTIONS: `${baseUrl}/solutions`,
} as const;
