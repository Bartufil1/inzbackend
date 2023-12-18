import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import businessContainer from "../business/business.container";

const exerciseEndpoint = (router) => {
  router.post("/api/exercise/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getExerciseManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/exercise/remove/:id",
    //auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getExerciseManager(request)
          .remove(request.body.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get("/api/exercise/getAll", async (request, response, next) => {
    try {
      let result = await businessContainer.getExerciseManager(request).getAll();
      console.log(result);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default exerciseEndpoint;
