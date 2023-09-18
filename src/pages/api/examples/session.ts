// This is an example of how to access a session from an API route

import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth(req, res);
  res.send(JSON.stringify(session, null, 2));
}
