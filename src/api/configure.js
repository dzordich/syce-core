import Amplify from "aws-amplify";

const configure = Amplify.configure({
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4hbarxamzk.execute-api.us-east-1.amazonaws.com/dev/",
  },
  API: {
    endpoints: [
      {
        name: "syce-api-dev",
        endpoint: "https://4hbarxamzk.execute-api.us-east-1.amazonaws.com/dev/",
      },
    ],
  },
});

export default configure;
