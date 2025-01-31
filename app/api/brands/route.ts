import { apiPost } from "../migrations";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, image_url } = body;

  const query = `
        INSERT INTO brands(name, image_url)
        VALUES(?,?)
    `;
  const values = [name, image_url];

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
