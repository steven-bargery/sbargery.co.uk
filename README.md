# sbargery.co.uk

This is a static website hosted on AWS using a serverless architecture. It utilises the following AWS services:

* **S3** - for hosting the actual content of the website
* **CloudFront** - for distributing the content from the S3 bucket (origin) and providing a secure connection (HTTPS)
* **Route 53** - for routing the requests for sbargery.co.uk and www.sbargery.co.uk to the Cloudfront distributions
* **ACM** - for the SSL certificate
* **CodePipeline** - for CI/CD with my GitHub repository

It's very bare at the moment. Over the next few weeks I plan to develop this website to host my resume. It will also use AWS's API Gateway, Lambda and DynamoDB services.
