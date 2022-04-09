const userController = require('../userController');

describe.skip('***User Controller Tests***', () => {
  it('should add a new user profile', async () => {
    const userProfile = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com'
    };
    const actual = await userController.addNewUserProfile(userProfile);
  });
});
