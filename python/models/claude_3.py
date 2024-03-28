import boto3
import json

client = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")

prompt = "Hello, how are you today?"
model_id = "anthropic.claude-3-haiku-20240307-v1:0"

request_body = json.dumps({
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 1000,
    "messages": [{
        "role": "user",
        "content": [{"type": "text", "text": prompt}]
    }
    ]
})

response = client.invoke_model(
    modelId=model_id,
    body=request_body
)

result = json.loads(response.get("body").read())
message = result["content"][0]["text"]

print(f"Response: {message}")
