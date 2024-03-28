import { writeFile } from 'fs';
import open from 'open';
import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({region: "us-east-1"});

const prompt = "A stylized photograph of a cute old steampunk bird.";
const modelId = "amazon.titan-image-generator-v1";

const body = JSON.stringify({
    taskType: "TEXT_IMAGE",
    textToImageParams: { text: prompt },
});

const response = await client.send(new InvokeModelCommand({
    body, modelId, contentType: "application/json",
}));

const result = JSON.parse(new TextDecoder().decode(response.body));
const base64ImageData = result.images[0];

// Decode the base64 image and write to a file
const imagePath = 'output/image.png'; // Specify your file name and extension
const base64Data = base64ImageData.replace(/^data:image\/\w+;base64,/, ""); // Remove the data URL part
const buffer = Buffer.from(base64Data, 'base64');

writeFile(imagePath, buffer, (err) => {
    console.log("Image file saved:", imagePath);
    open(imagePath).catch(err => console.error("Failed to open image file:", err));
});