import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import businessContainer from "../business/business.container";

const bmiEndpoint = (router) => {
  router.post("/api/bmi/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getBmiManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/bmi/remove/:id",
    auth,
    async (request, response, next) => {
      console.log(request.body.id);
      try {
        let result = await businessContainer
          .getBmiManager(request)
          .remove(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get("/api/bmi/getAll", async (request, response, next) => {
    try {
      let result = await businessContainer.getBmiManager(request).getAll();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/bmi/get/:id", auth, async (request, response, next) => {
    try {
      let result = await businessContainer
        .getBmiManager(request)
        .get(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default bmiEndpoint;
