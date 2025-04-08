const goalsService = require('../services/goalsService');

exports.getAllGoals = (req, res) => {
  const goals = goalsService.getGoals();
  res.render('goals', { goals, title: 'Your Goals' });
};

exports.getCreateGoalForm = (req, res) => {
  res.render('createGoal', { title: 'Create a Goal' });
};

exports.createGoal = (req, res) => {
  const newGoal = { title: req.body.title };
  goalsService.addGoal(newGoal);
  res.redirect('/goals');
};
exports.getEditGoalForm = (req, res) => {
  const goal = goalsService.getGoalById(req.params.id);
  res.render('editGoal', { goal, title: 'Edit Goal' });
};

exports.updateGoal = (req, res) => {
  goalsService.updateGoal(req.params.id, { title: req.body.title });
  res.redirect('/goals');
};

exports.deleteGoal = (req, res) => {
  goalsService.deleteGoal(req.params.id);
  res.redirect('/goals');
};
