import exercisesManager from "./exercises.manager";
import workoutManager from "./workout.manager";
import categoryManager from "./categoryCard.manager";
import trendingManager from "./trendingCard.manager";
import recipeManager from "./recipe.manager";
import userManager from "./user.manager";

function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
  getExerciseManager: getter(exercisesManager),
  getWorkoutManager: getter(workoutManager),
  getRecipeManager: getter(recipeManager),
  getUserManager: getter(userManager),
};
