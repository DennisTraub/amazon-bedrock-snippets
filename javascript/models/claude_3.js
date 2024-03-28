import {BedrockRuntimeClient, InvokeModelCommand} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({region: "us-east-1"});

const prompt = "Hello, how are you today?";
const modelId = "anthropic.claude-3-haiku-20240307-v1:0";

const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 1000,
    messages: [{
        role: "user",
        content: [{type: "text", text: prompt}]
    }]
});

const response = await client.send(new InvokeModelCommand({
    body, modelId, contentType: "application/json",
}));

const result = JSON.parse(new TextDecoder().decode(response.body));
const message = result.content[0].text;

console.log(`Response: ${message}`);
