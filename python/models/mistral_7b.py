import boto3
import json

client = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")

prompt = "Hello, how are you today?"
model_id = "mistral.mistral-7b-instruct-v0:2"

formatted_prompt = f"<s>[INST] {prompt} [/INST]"

request_body = json.dumps({"prompt": formatted_prompt})

response = client.invoke_model(
    modelId=model_id,
    body=request_body
)

result = json.loads(response.get("body").read())
message = result["outputs"][0]["text"]

print(f"Response: {message}")
