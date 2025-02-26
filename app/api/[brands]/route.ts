/* eslint-disable */
import { apiGet, apiDelete } from "../database.ts";
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

export default async function handler(req, res) {
  // Only allow DELETE requests
  if (req.method !== "DELETE") {
    res.setHeader("Allow", "DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Extract the record ID from the query parameters
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "Missing record ID" });
  }

  try {
    // Open a connection to your SQLite database
    const db = await open({
      filename: "./mydb.sqlite", // update the path if needed
      driver: sqlite3.Database,
    });

    // Execute the DELETE query
    const result = await db.run("DELETE FROM records WHERE id = ?", id);

    // Check if any row was affected (i.e. record existed)
    if (result.changes === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    // Respond with a success message
    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error deleting record:", error);
    return res.status(500).json({ error: "Error deleting record" });
  }
}
