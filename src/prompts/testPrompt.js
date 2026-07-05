import buildPrompt from "./buildPrompt.js";

const prompt = buildPrompt(
  "What is JWT?",
  [
    {
      pageContent:
        "JWT is a compact authentication token.",
    },
    {
      pageContent:
        "JWT contains Header, Payload and Signature.",
    },
  ]
);

console.log(prompt);