import express from "express";
import {
  getArtistById,
  getRandomArtists,
} from "../controllers/artists/getArtistsController";

const router = express.Router();

router.get("/:id", getArtistById);
router.get("/random/:num", getRandomArtists);

export default router;