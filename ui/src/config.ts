type AppConfig = {
  apiUrl: string;
};

const config: AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
};

export default config;
