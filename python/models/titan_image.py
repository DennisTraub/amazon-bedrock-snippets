import base64
import boto3
import io
import json
from PIL import Image

client = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")

prompt = "A stylized photograph of a cute old steampunk robot."
model_id = "amazon.titan-image-generator-v1"

request_body = json.dumps({
    "taskType": "TEXT_IMAGE",
    "textToImageParams": {"text": prompt},
})

response = client.invoke_model(
    modelId=model_id,
    body=request_body
)

result = json.loads(response["body"].read())
base64_image_data = result["images"][0]
image_bytes = base64.b64decode(base64_image_data.encode("ascii"))
image = Image.open(io.BytesIO(image_bytes))
image.show()
