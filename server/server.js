const app = require("./app");
const connectDB = require("./mongodb/connect");
const PORT = 8080 || process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error.message);
  }
  console.log(`> Server running on port http://localhost:${PORT}`);
});
