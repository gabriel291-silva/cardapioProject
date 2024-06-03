import express from "express";
import { routes } from './Routes/index';

const app = express()

app.use(express.json());
app.use(routes)
const PORT = process.env.PORT || 3332;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
