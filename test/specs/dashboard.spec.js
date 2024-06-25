describe('Dashboard', () => {
    before(() => {
      // Login before running dashboard tests
      browser.url('/login');
      $('#email').setValue('john@gmail.com');
      $('#password').setValue('123456');
      $('button[type="submit"]').click();
      expect(browser).toHaveUrlContaining('/dashboard');
    });
  
    it('should display todos', () => {
      const todoList = $$('.todo-item');
      expect(todoList).toBeElementsArrayOfSize({ gte: 1 });
    });
  
    it('should add a new todo', () => {
      $('#new-todo').setValue('New Todo Item');
      $('#add-todo-button').click();
      const newTodo = $('.todo-item:last-child');
      expect(newTodo).toHaveTextContaining('New Todo Item');
    });
  
    it('should complete a todo', () => {
      const todoCheckbox = $('.todo-item:last-child input[type="checkbox"]');
      todoCheckbox.click();
      expect(todoCheckbox).toBeChecked();
    });
  });
  