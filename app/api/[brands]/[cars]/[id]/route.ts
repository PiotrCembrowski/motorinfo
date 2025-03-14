import { apiDelete } from "@/app/api/database";

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;

  const query = `
    DELETE FROM cars WHERE id = ?;
`;

  let status, respBody;
  await apiDelete(query, id)
    .then(() => {
      status = 200;
      respBody = { message: "Successfully deleted car!" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  return Response.json(respBody, {
    status,
  });
}
