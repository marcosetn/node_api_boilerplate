module.exports = function (app) {
  const templateController = require('../controllers/templateController');

  app.route('/template')
    .get(templateController.list_all)
    .post(templateController.create);

  app.route('/template/:id')
    .get(templateController.read)
    .put(templateController.update)
    .delete(templateController.delete);
};
