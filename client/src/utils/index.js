// This line imports the 'surpriseMePrompts' array from the '../constants' module.
import { surpriseMePrompts } from "../constants";

// This function takes an array of prompts as an argument and returns a randomly selected prompt from the 'surpriseMePrompts' array.
export function getRandomPrompt(prompts) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompts = surpriseMePrompts[randomIndex];

  // If the selected prompt is the same as the prompt argument passed to the function, it recursively calls itself until a different prompt is selected.
  if (randomPrompts === prompts) return getRandomPrompt(prompts);
  return randomPrompts;
}
