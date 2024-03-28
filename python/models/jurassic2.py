import boto3
import json

client = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")

prompt = "Hello, how are you today?"
model_id = "ai21.j2-mid-v1"

request_body = json.dumps({"prompt": prompt})

response = client.invoke_model(
    modelId=model_id,
    body=request_body
)

result = json.loads(response.get("body").read())
message = result["completions"][0]["data"]["text"]

print(f"Response: {message}")
