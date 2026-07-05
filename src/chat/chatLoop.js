import readlineSync from "readline-sync";

function askQuestion() {
  return readlineSync.question("\nAsk a question (type 'exit' to quit): ");
}

export default askQuestion;