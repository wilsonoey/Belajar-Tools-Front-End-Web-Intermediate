import ApiEndpoint from '../config/api-endpoint';
import instance from '../config/api-instance';

const Auth = {
  async register({ name, email, password }) {
    return await instance('application/json')({
      method: 'post',
      url: ApiEndpoint.REGISTER,
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  async login({ email, password }) {
    return await instance('application/json')({
      method: 'post',
      url: ApiEndpoint.LOGIN,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};

export default Auth;
