const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalsController');


router.get('/', goalsController.getAllGoals);
router.get('/create', goalsController.getCreateGoalForm);
router.post('/create', goalsController.createGoal);
router.get('/:id/edit', goalsController.getEditGoalForm);
router.post('/:id/edit', goalsController.updateGoal);
router.post('/:id/delete', goalsController.deleteGoal);

 
module.exports = router;
