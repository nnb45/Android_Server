const { json } = require('express');
var express = require('express');
var router = express.Router();

const providerController = require('../controller/ProviderControllers');

/* GET providers listing. */
router.get('/', async function (req, res, next) {
  // get provider list
  const result = await providerController.getAll();
  res.render('provider/providers', { providers: result });
  //return res.json(result);
});

/* GET provider detail. */
router.get('/:id/detail', async function (req, res, next) {
  // get provider detail
  const { id } = req.params;
  const result = await providerController.getDetail(id);
  res.render('provider/edit', { edit: result });
});

/**
 * Xóa nhà cung cấp
 * http://localhost:3000/provider/:id
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let { id } = req.params;
    await providerController.delete(id);
    res.json({ status: true });
  } catch (error) {
    console.error(error);
    res.json({ status: false });
  }
});
module.exports = router;
