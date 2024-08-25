import { type } from "arktype";

const exampleType = type({
  email: "string.email",
});

export async function POST({ request, locals }) {
  return new Response(null, { status: 200 });
}
