import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // random prompt can't be repeated
    if (randomPrompt === prompt ) {
        return getRandomPrompt(prompt);
    }
    return randomPrompt
}
