import { type } from "arktype";

const shouldNotError = type({
  email: "string.email",
});

const shouldError = type({
  // @ts-expect-error
  email: "email",
});

export async function POST({ request, locals }) {
  return new Response(null, { status: 200 });
}
