# Bedrock examples with the AWS SDK for Python (boto3)

## Prerequisites:

- You must have an AWS account, and have your default credentials and AWS Region
  configured as described in the
  [AWS Tools and SDKs Shared Configuration and
  Credentials Reference Guide](https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html).
- [Python 3.6.0 or later](https://www.python.org/)
- Install dependencies by running `pip install -r requirements.txt` from the same path as this document.

## Run the examples

### Text generation with Claude 3:
```commandline
python models/claude_3.py
```

### Text generation with Jurassic2:
```commandline
python models/jurassic2.py
```

### Text generation with Mistral 7B:
```commandline
python models/mistral_7b.py
```

### Image generation with Amazon Titan:
```commandline
python models/titan_image.py
```