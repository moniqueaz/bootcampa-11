import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message });
  }
});
export default sessionRoutes;
