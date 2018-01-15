const type = 'USER_';

const providerLogin = (email, password) => ({
  type: `${type}LOGIN`,
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  }),
});

export default {
  providerLogin,
};
