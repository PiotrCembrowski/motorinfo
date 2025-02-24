/* eslint-disable */
import { apiGet } from "../database.ts";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const pathname = headerList.get("x-url");
  const url = pathname?.substring(pathname.lastIndexOf("/") + 1);
  const name = url?.replace(/%20/g, " ");
  console.log(name);
  const query = `SELECT *
                  FROM cars
                  WHERE company = '${name}';`;

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
