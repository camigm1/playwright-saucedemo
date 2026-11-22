// login.spec.js
// Put this file in your "tests" folder.
// Run it with:  npx playwright test login.spec.js --headed

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');


LoginPage.users.forEach((name) => {
  // One describe block per user, so test names are unique and the report is easy to read.
  test.describe(`Login as ${name}`, () => {
    if (name === 'locked_out_user') {
      test('should be locked out', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(name, 'secret_sauce');
        await expect(loginPage.errorMessage).toContainText(
          'Epic sadface: Sorry, this user has been locked out.'
        );
      });
    } else {
      test('should log in with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(name, 'secret_sauce');

        // performance_glitch_user is slow on purpose, so allow extra time.
        await expect(page).toHaveURL(/inventory/, { timeout: 15000 });
        await expect(page.getByRole('button', { name: 'Open Menu' })).toHaveText('Open Menu', { timeout: 15000 });
      });
    }

    test('should not log in with a wrong password', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(name, 'not_sauce');
      await expect(loginPage.errorMessage).toContainText(
        'Epic sadface: Username and password do not match any user in this service'
      );
    });
  });
});

