import exerciseEndpoint from "./exercises.endpoint";
import workoutEndpoint from "./workout.endpoint";

const routes = (router) => {
  exerciseEndpoint(router);
  workoutEndpoint(router);
};

export default routes;
