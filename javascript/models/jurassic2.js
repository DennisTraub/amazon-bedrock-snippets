import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({region: "us-east-1"});

const prompt = "Hello, how are you today?";
const modelId = "ai21.j2-mid-v1";

const body = JSON.stringify({prompt});

const response = await client.send(new InvokeModelCommand({
    body, modelId, contentType: "application/json",
}));

const result = JSON.parse(new TextDecoder().decode(response.body));
const message = result.completions[0].data.text;

console.log(`Response: ${message}`);
