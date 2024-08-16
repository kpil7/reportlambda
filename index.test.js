const { handler } = require("./index");
const axios = require("axios");

const config = {
  method: "get",
  url: "https://zevb7for47.execute-api.eu-north-1.amazonaws.com/default/sourcelambda",
  headers: {
    "Content-Type": "application/json",
  }
};

// describe("Lambda Function Tests", () => {
//   test("Lite category returns correct message", async () => {
//     const event = {
//       body: JSON.stringify({ category: "lite" }),
//     };
//     const result = await handler(event);

//     expect(result.statusCode).toBe(200);
//     expect(JSON.parse(result.body).message).toBe("Lite category");
//   });

  // test("Advance category returns correct message", async () => {
  //   const event = {
  //     body: JSON.stringify({ category: "advance" }),
  //   };
  //   const result = await handler(event);

  //   expect(result.statusCode).toBe(200);
  //   expect(JSON.parse(result.body).message).toBe("Advanced category");
  // });

  test("Calling the lambda function with lite category returns 200",async()=>{
    const data = JSON.stringify({category:"lite"})
    config.data = data
    const response = await axios(config)
    expect(response.status).toBe(200)
    expect(response.data.message).toBe("Lite category")
    console.log("Calling the lambda function with lite category",response.data)
  })

  
  test("Calling the lambda function with advance category returns 200",async()=>{
    const data = JSON.stringify({category:"advance"})
    config.data = data
    const response = await axios(config)
    expect(response.status).toBe(200)
    expect(response.data.message).toBe("Advanced category")
    console.log("Calling the lambda function with advance category",response.data)
  })

  test("Calling the lambda function with dynamic category returns 200",async()=>{
    const data = JSON.stringify({category:"dynamic"})
    config.data = data
    const response = await axios(config)
    expect(response.status).toBe(200)
    expect(response.data.message).toBe("Dynamic category")
    console.log("Calling the lambda function with dynamic category",response.data)
  })

  test("Invalid category returns 400", async () => {
    const data = JSON.stringify({category:"invalid"})
    config.data = data
    try {
      const response = await axios(config)
      console.log("Unexpected success response:", response.status, response.data)
      expect(response.status).toBe(400)
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.status, error.response.data)
        expect(error.response.status).toBe(400)
        expect(error.response.data.message).toBe("Invalid category")
      } else {
        console.log("Unexpected error:", error.message)
        throw error
      }
    }
  })

  

