const mongoose = require('mongoose');

const Template = mongoose.model('Template');

exports.list_all = function (req, res) {
  Template.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    res.json(data);
  });
};

exports.create = function (req, res) {
  const newTemplate = new Template(req.body);
  newTemplate.save((err, data) => {
    if (err) res.status(500).send(err);
    res.json(data);
  });
};

exports.read = function (req, res) {
  Template.findById(req.params.id, (err, data) => {
    if (err) res.status(500).send(err);
    res.json(data);
  });
};

exports.update = function (req, res) {
  Template.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, data) => {
    if (err) res.status(500).send(err);
    res.json(data);
  });
};

exports.delete = function (req, res) {
  Template.deleteOne({
    _id: req.params.id,
  }, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Deleted' });
  });
};
