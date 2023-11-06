import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import businessContainer from "../business/business.container";

const workoutEndpoint = (router) => {
  router.post("/api/workout/create", async (request, response, next) => {
    console.log(request.body);
    try {
      const result = await businessContainer
        .getWorkoutManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/workout/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getWorkoutManager(request)
          .remove(request.body.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get("/api/workout/getAll", auth, async (request, response, next) => {
    try {
      let result = await businessContainer.getWorkoutManager(request).getAll();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/workout/get/:id", async (request, response, next) => {
    try {
      console.log("work");
      let result = await businessContainer
        .getWorkoutManager(request)
        .get(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default workoutEndpoint;
