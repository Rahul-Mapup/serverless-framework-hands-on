module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        Gretting: "Hi there, this is a test",
      },
      null,
      2
    ),
  };
};
