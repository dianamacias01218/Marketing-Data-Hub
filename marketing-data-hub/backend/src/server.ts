import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const mockData = [
  { campaign: "Spring Sale", leads: 120 },
  { campaign: "Summer Promo", leads: 80 },
  { campaign: "Meta Ads Campaign", leads: 150 },
  { campaign: "LinkedIn Campaign", leads: 60 },
];

app.get("/analytics", (req, res) => {
  res.json(mockData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
