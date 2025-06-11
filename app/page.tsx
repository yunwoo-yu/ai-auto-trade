import OpenAI from "openai";
import Section from "./components/Section";

export const openAi = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

export default function Home() {
  return <Section />;
}
