import { thunk } from "redux-thunk";

const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//   const { createLogger } = require("redux-logger");
//   if (process.env.NODE_ENV === "development") {
//     const invariant = require("redux-immutable-state-invariant").default;
//     middleware.push(invariant());
//   }
//   middleware.push(createLogger({ collapsed: true }));
// }
if (process.env.NODE_ENV === "development") {
  // Import only in development to avoid bundling in production
  import("redux-logger").then(({ createLogger }) => {
    middleware.push(createLogger({ collapsed: true }));
  });

  import("redux-immutable-state-invariant").then((module) => {
    const invariant = module.default;
    middleware.push(invariant());
  });
}

export default middleware;
