describe('Homepage', () => {
    it('should have the correct title', () => {
      browser.url('/');
      expect(browser).toHaveTitle('Todo App');
    });
  
    it('should navigate to Signup page', () => {
      browser.url('/');
      const signupButton = $('a[href="/register"]');
      signupButton.click();
      expect(browser).toHaveUrlContaining('/register');
    });
  
    it('should navigate to Login page', () => {
      browser.url('/');
      const loginButton = $('a[href="/login"]');
      loginButton.click();
      expect(browser).toHaveUrlContaining('/login');
    });
  });
  