let goals = [];
let id = 1;

exports.getGoals = () => goals;

exports.addGoal = (goal) => {
  goal.id = id++;
  goals.push(goal);
};

exports.getGoalById = (goalId) => {
  return goals.find((g) => g.id === parseInt(goalId));
};

exports.updateGoal = (goalId, updatedGoal) => {
  const goal = goals.find((g) => g.id === parseInt(goalId));
  if (goal) goal.title = updatedGoal.title;
};

exports.deleteGoal = (goalId) => {
  goals = goals.filter((g) => g.id !== parseInt(goalId));
};
