const { json } = require('express');
var express = require('express');
var router = express.Router();

const providerController = require('../controller/ProviderControllers');

/* GET providers listing. */
router.get('/', async function(req, res, next) {
  // get provider list
  const result = await providerController.getAll();
  res.render('providers', {providers:result});
  //return res.json(result);
});

/* GET provider detail. */
router.get('/:id/detail', async function(req, res, next) {
  // get provider detail
  const {id} = req.params;
  const result = await providerController.getDetail(id);
  res.render('provider', {provider:result});
});

module.exports = router;
