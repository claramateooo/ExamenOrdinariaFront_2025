import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";

type State = {

}

export const handler:MiddlewareHandler<State> = async (req: Request, ctx: FreshContext<State>) => {
 return await ctx.next();
}