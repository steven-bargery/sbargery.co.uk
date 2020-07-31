# sbargery.co.uk

I built this site to learn and develop my AWS skills. This is a static website hosted on AWS using a serverless architecture. It utilises the following AWS services:

* **S3** - for hosting the actual content of the website
* **CloudFront** - for distributing the content from the S3 bucket (origin) and providing a secure connection (HTTPS)
* **Route 53** - for routing the requests for sbargery.co.uk and www.sbargery.co.uk to the Cloudfront distributions
* **ACM** - for the SSL certificate
* **CodePipeline** - for CI/CD with my GitHub repository

It's very bare at the moment. Over the next few weeks I plan to develop this website to host my resume. It will also use AWS's API Gateway, Lambda and DynamoDB services.

## Update: 21st July 2020 - Visitor Counter Added

I have now added a visitor counter to the footer of this website. It uses the following AWS services:

* **DynamoDB** - to store visitors to the site
* **Lambda** - to read and write to the DynamoDB table using 2 functions written in Python
* **API Gateway** - to accept REST API requests from this site and communicate with the Lambda functions

I then used JavaScript to call the GET and POST API requests.

## Update: 28th July 2020 - CI/CD integration
I created a new GitHub repository for my Lambda functions so I could work on them locally and then deploy them automatically to AWS Lambda.

Once pushed to GitHub, using GitHub Actions and workflow .yml files, both functions are unit tested using pytest with their corresponding test_*.py files and are then deployed to AWS Lambda.

## Update: 30th July 2020 - Resume Added
Today I added a page to this site containing my resume which you can view here: [my resume](https://www.sbargery.co.uk/resume.html).
In a future update my resume will be contained within a json file which the webpage will retrieve its data from.

## Update: 31st July 2020 - Blog written
<p>I wrote a blog on creating this website which you can [read here](https://dev.to/stevenbargery/my-cloudresumechallenge-journey-2de4)
