const config = {
  port: process.env.PORT || 3000,
  databaseUrl:
    process.env.MONGODB_URI ||
    "mongodb+srv://Bartek:inzynierka2023@inzynierka.pnka94j.mongodb.net/?retryWrites=true&w=majority",
  JwtSecret: process.env.JWT_SECRET || "Secret",
};

export default config;
