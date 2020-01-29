import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway');
 
export class CdkGithubActionsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
 
    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,      // execution environment
      code: lambda.Code.asset('src/'),  // code loaded from the "lambda" directory
      handler: 'lambda/hello.handler'                // file is "hello", function is "handler"
    });
 
    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello,
      endpointTypes: [ apigw.EndpointType.EDGE ],
    });
 
  }
}