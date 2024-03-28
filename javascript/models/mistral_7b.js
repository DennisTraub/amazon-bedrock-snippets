import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({region: "us-east-1"});

const prompt = "Hello, how are you today?";
const modelId = "mistral.mistral-7b-instruct-v0:2";

const formattedPrompt = `<s>[INST] ${prompt} [/INST]`

const body = JSON.stringify({prompt: formattedPrompt});

const response = await client.send(new InvokeModelCommand({
    body, modelId, contentType: "application/json",
}));

const result = JSON.parse(new TextDecoder().decode(response.body));
const message = result.outputs[0].text;

console.log(`Response: ${message}`);
