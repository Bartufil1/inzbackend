import applicationException from "../service/applicationException";
import auth from "../middleware/auth";
import businessContainer from "../business/business.container";

const passwordResetEndpoint = (router) => {
  router.post("/api/password/reset", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getPasswordManager(request)
        .createNewOrUpdate(request.body.email);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.post("/api/password/confirm", async (request, response, next) => {
    try {
      const result = await businessContainer
        .getPasswordManager(request)
        .changepassword(request.body.token, request.body.password);
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });

  router.delete(
    "/api/categoryCard/remove/:id",
    auth,
    async (request, response, next) => {
      try {
        let result = await businessContainer
          .getPasswordManager(request)
          .remove(request.body.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    }
  );

  router.get("/api/categoryCard/getAll", async (request, response, next) => {
    try {
      let result = await businessContainer.getPasswordManager(request).getAll();
      response.status(200).send(result);
    } catch (error) {
      applicationException.errorHandler(error, response);
    }
  });
};

export default passwordResetEndpoint;
