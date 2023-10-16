import exercisesManager from "./exercises.manager";
import workoutManager from "./workout.manager";
function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
  getExerciseManager: getter(exercisesManager),
  getWorkoutManager: getter(workoutManager),
};
