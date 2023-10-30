import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import businessContainer from "../business/business.container";

const recipeEndpoint = (router) => {
  router.post("/api/recipe/create", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getRecipeManager(request)
        .createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/recipe/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getRecipeManager(request)
          .remove(request.body.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get("/api/recipe/getAll", async (request, response, next) => {
    try {
      let result = await businessContainer.getRecipeManager(request).getAll();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.get("/api/recipe/get/:id", async (request, response, next) => {
    try {
      let result = await businessContainer
        .getRecipeManager(request)
        .get(request.params.id);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default recipeEndpoint;
