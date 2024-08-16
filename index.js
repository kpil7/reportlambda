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

  
  const category = body.category;

  switch (category) {
    case "lite":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Lite category" }),
      };

    case "advance":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Advanced category" }),
      };

    case "dynamic":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Dynamic category" }),
      };

    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid category" }),
      };
  }
};
