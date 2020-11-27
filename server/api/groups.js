const router = require("express").Router();
const { GroceryList, GroceryItem, Group } = require("../db/models");

//GET /api/groups/groupId
router.get("/:groupId", async (req, res, next) => {
  try {
    const group = await Group.findByPk(req.params.groupId);
    res.json(group);
  } catch (error) {}
});
//GET /api/groups/:groupId/groceries
router.get("/:groupId/groceries", async (req, res, next) => {
  try {
    const groceries = await GroceryItem.findAll({
      where: {
        groceryListId: req.params.groupId,
      },
    });
    res.json(groceries);
  } catch (error) {
    next(error);
  }
});
