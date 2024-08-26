import { type } from "arktype";

export const shouldNotError = type({
  email: "string.email",
});