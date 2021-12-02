import { rest } from "msw";

export const handlers = [
  rest.get("/user/checktoken", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: 1,
          name: "marco",
          email: "marco@marco.it",
          picture: "https://magal.li/i/800/600",
          contrattoSelezionato: 1,
        },
      })
    );
  }),
  rest.post("user/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ user: "marco" }));
  }),
];
