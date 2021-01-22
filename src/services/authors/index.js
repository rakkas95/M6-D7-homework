const router = require('express').Router();
const db = require('../../utils/db/index');

router.get("/", async (req, res, next) => {
    try {
      const response = await db.findAll("authors");
      res.send(response.rows);
    } catch (err) {
      console.error(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const response = await db.findById("authors", req.params.id);
      res.send(response.rows);
    } catch (err) {
      console.error(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const response = await db.createNewArticle("authors", req.body);
      console.log(response);
      if (response.rowCount === 1) {
        res.send("Successfully added new author");
      } else {
        throw new Error("Error not able to add new author");
      }
    } catch (err) {
      console.error(err);
    }
  });

  router.put("/:id", async (req, res, next) => {
    try {
      const response = await db.findByIdAndUpdate("authors", req.params.id, req.body);
      res.send(response.rows);
    } catch (err) {
      console.error(err);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const response = await db.findByIdAndDelete("authors", req.params.id);
      if (response.rowCount === 1) {
        res.send(response);
      } else {
        throw new Error("Error deleting author");
      }
    } catch (err) {
      console.error(err);
    }
  });
  
  module.exports = router;
  
  