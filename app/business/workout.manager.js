import exerciseDAO from "../DAO/exerciseDAO";
import workoutDAO from "../DAO/workoutDAO";

const create = (context) => {
  const createNewOrUpdate = async (userData) => {
    const workout = await workoutDAO.createNewOrUpdate(userData);
    if (workout) {
      return workout;
    }
  };

  const getAll = async () => {
    const workout = await workoutDAO.getAll();
    if (workout) {
      return workout;
    }
  };

  const get = async (id) => {
    const workout = await workoutDAO.get(id);
    if (workout) {
      const exercises = await exerciseDAO.getByIds(workout.exercises);
      const data = workout;
      data.exercises = exercises;
      return data;
    }
  };

  const remove = async (id) => {
    return await workoutDAO.remove(id);
  };

  return {
    createNewOrUpdate: createNewOrUpdate,
    remove: remove,
    getAll,
    get,
  };
};

export default {
  create: create,
};
