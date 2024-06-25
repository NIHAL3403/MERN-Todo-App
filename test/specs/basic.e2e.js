// test/specs/basic.e2e.js
describe('My Todo App', () => {
    it('should have the right title', () => {
      browser.url('http://localhost:3000');
      const title = browser.getTitle();
      expect(title).toEqual('Todo App');
    });
  });
  