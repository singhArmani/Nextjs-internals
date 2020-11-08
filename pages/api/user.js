const data = require("./user-data.json");

export default async function handler(_, res) {
  const result = await new Promise((res) => setTimeout(res, 2000, data));
  console.log({ result });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result));
}
