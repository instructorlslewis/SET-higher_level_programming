//1.  install npm install openai 
/**
 * Professor Lewis
 * 10/1/2026
 * 
 * Application creates a prompt that sends customer review text to an OpenAI API for sentiment analysis. 
 * The AI will classify the review as positive, negative, or neutral and return a 
 * confidence value and short explanation in a structured JSON format.
 * Professor Lewis
 * 10/1/2026
 */

import OpenAI from "openai";

//Read the API key from the environment
const apiKey = process.env.OPENAI_API_KEY;

if(!apiKey){
    throw new Error("OpenAI API key is not set.");
}

//Create the OpenAI client
const client = new OpenAI({
   apiKey: apiKey

});

//Text we want AI to analyze
const review = "I absolutely love this product!";

//Build the prompt
const prompt = `
Analyze the sentiment of this customer review.
Return ONLY valid JSON in this format:
{
    "sentiment": "positive, negative,or neutral",
    "confidence": "number from 0 to 1",
    "explanation": "one short sentence"
}
Review:
"${review}"
`;

//Send the prompt to OpenAI
const response = await client.responses.create({
    model: "gpt-6-luna",    //gpt-6-astra
    input: prompt

});

const responseText = response.output_text;
console.log(responseText);

/**
 * Converts JSON object to JavaScript Object and
 * display specific properties
 */
const result = JSON.parse(responseText);
console.log(result.sentiment);
console.log(result.confidence);
console.log(result.explanation);

