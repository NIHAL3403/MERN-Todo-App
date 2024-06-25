const { expect } = require('chai');
const authReducer = require('../../../src/redux/reducers/auth');
const { LOGIN_SUCCESS, LOGOUT } = require('../../../src/redux/actions/types');

describe('authReducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const initialState = { isAuthenticated: false, user: null };
    const action = {
      type: LOGIN_SUCCESS,
      payload: { token: '123', user: { name: 'Test User' } },
    };
    const state = authReducer(initialState, action);
    expect(state.isAuthenticated).to.be.true;
    expect(state.user.name).to.equal('Test User');
  });

  it('should handle LOGOUT', () => {
    const initialState = { isAuthenticated: true, user: { name: 'Test User' } };
    const action = { type: LOGOUT };
    const state = authReducer(initialState, action);
    expect(state.isAuthenticated).to.be.false;
    expect(state.user).to.be.null;
  });
});
