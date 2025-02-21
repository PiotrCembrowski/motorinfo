import { apiGet, apiPost } from "../database.ts";
import { headers } from "next/headers";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, imageUrl } = body;

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

export async function GET(req: Request, res: Response) {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");
  console.log(name);
  const query = `SELECT *
                  FROM brands
                  WHERE name = '${name}';`;

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json({ error: error }, { status: 400 });
  }
}
