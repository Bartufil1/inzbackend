import exerciseEndpoint from "./exercises.endpoint";
import recipeEndpoint from "./recipe.endpoint";
import userEndpoint from "./user.endpoint";
import workoutEndpoint from "./workout.endpoint";

const routes = (router) => {
  exerciseEndpoint(router);
  workoutEndpoint(router);
  recipeEndpoint(router);
  userEndpoint(router);
};

export default routes;
