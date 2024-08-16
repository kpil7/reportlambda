const axios = require("axios");
exports.handler = async (event) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request body" }),
    };
  }


  const config = {
    method: "get",
    url: "https://zevb7for47.execute-api.eu-north-1.amazonaws.com/default/sourcelambda",
    headers: {
      "Content-Type": "application/json",
    }
  };

  const category = body.category;

  switch (category) {
    case "lite":
      try {
        config.data = JSON.stringify({ category: "lite" })
        const response = await axios(config)
        console.log("Response from the lambda function", response.data)
        const data = response.data
        return {
          statusCode: response.status,
          body: JSON.stringify(data),
        };
      } catch (error) {
        console.log("Error from the lambda function", error)
        return {
          statusCode: error.response.status,
          body: JSON.stringify(error.response.data),
        };
      }
      break;


    case "advance":
      try {
        config.data = JSON.stringify({ category: "advance" })
        const response = await axios(config)
        console.log("Response from the lambda function", response.data)
        const data = response.data
        return {
          statusCode: response.status,
          body: JSON.stringify(data),
        };
      } catch (error) {
        console.log("Error from the lambda function", error)
        return {
          statusCode: error.response.status,
          body: JSON.stringify(error.response.data),
        };
      }
      break;

    case "dynamic":
      try {
        config.data = JSON.stringify({ category: "dynamic" })
        const response = await axios(config)
        console.log("Response from the lambda function", response.data)
        const data = response.data
        return {
          statusCode: response.status,
          body: JSON.stringify(data),
        };
      } catch (error) {
        console.log("Error from the lambda function", error)
        return {
          statusCode: error.response.status,
          body: JSON.stringify(error.response.data),
        };
      }
      break;

    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid category" }),
      };
  }
};
