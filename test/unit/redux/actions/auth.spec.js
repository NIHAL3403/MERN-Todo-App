const { expect } = require('chai');
const { login, logout } = require('../../../src/redux/actions/auth');
const { LOGIN_SUCCESS, LOGOUT } = require('../../../src/redux/actions/types');

describe('auth actions', () => {
  it('should create an action to login', () => {
    const userData = { token: '123', user: { name: 'Test User' } };
    const expectedAction = { type: LOGIN_SUCCESS, payload: userData };
    expect(login(userData)).to.deep.equal(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).to.deep.equal(expectedAction);
  });
});
