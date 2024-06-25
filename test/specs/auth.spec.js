describe('Authentication', () => {
    it('should register a new user', () => {
      browser.url('/register');
      $('#name').setValue('Test User');
      $('#email').setValue('testuser@example.com');
      $('#password').setValue('testpassword');
      $('#password2').setValue('testpassword');
      $('button[type="submit"]').click();
      expect(browser).toHaveUrlContaining('/login');
    });
  
    it('should login a user', () => {
      browser.url('/login');
      $('#email').setValue('testuser@example.com');
      $('#password').setValue('testpassword');
      $('button[type="submit"]').click();
      expect(browser).toHaveUrlContaining('/dashboard');
    });
  });
  