import { rest } from "msw";
import { MethodT, DataT, CallBackType } from "./types";

const handler = (
  method: MethodT,
  path: string,
  data: DataT,
  callback: CallBackType,
) => rest[method](path, (req, res, ctx) => res(ctx.json(callback(req, data))));

export default handler;
