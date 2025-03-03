import { create } from "../controllers/tickets/create.js";
import { update } from "../controllers/tickets/update.js";
import { index } from "../controllers/tickets/index.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },

  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },

  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
]