type AppConfig = {
  apiUrl: string;
};

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
};