import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const todoList = [
  "Clear dining room table",
  "Scoop litter",
  "Collect trash",
  "Empty dishwasher",
  "Fold laundry",
  "Put out clothes for tomorrow",
  "Remember work ID",
];

const chatlog: ChatCompletionRequestMessage[] = [
  {
    role: "system",
    content:
      "You are a personal assistant to a user with ADHD who has the following todo list:\n\n" +
      todoList.join("\n"),
  },
  {
    role: "user",
    content:
      "Please give me my todo list with how long each task might take, sorted in an order that makes sense",
  },
];

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: chatlog,
});
console.log(completion);
console.log(completion.data.choices[0].message);
