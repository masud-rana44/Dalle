import { surpriseMePrompts } from "../constants/constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomIndex === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
