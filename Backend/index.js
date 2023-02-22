const express = require("express");
const { OpenAIApi, Configuration } = require("openai");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_KEY = process.env.OPENAI_KEY;

const configuration = new Configuration({
  organization: "org-HVrC297azLgB4GqL2joFeqEa",
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 500,
    temperature: 0.5,
  });

  res.json({ message: response.data.choices[0].text });
});

app.get("/models",async(req,res) => {

  const response = await openai.listEngines();
 res.json(response.data.data);

})
const PORT = process.env.PORT;

// const response = await openai.listEngines();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
