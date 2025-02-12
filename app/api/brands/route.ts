import { apiPost } from "../database.ts";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, imageUrl } = body;

  console.log(name, imageUrl);

  const query = `
        INSERT INTO brands(name, imageUrl)
        VALUES(?,?)
    `;
  const values = [name, imageUrl];

  let status, respBody;
  await apiPost(query, values)
    .then(() => {
      status = 200;
      respBody = { message: "Successfuly created brand!" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  return Response.json(respBody, {
    status,
  });
}
