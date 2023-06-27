import express from "express";

const router = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";
//controllers
import { create, update, remove, list, read } from "../controllers/category.js";

// /: is for route param, categoryId is an arbitary name for the id of the category
// /:categoryId - you can choose a category by id
router.post("/category", requireSignin, isAdmin, create);
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/categories", list);
// get a single category
router.get("/category/:slug", read);

export default router;
