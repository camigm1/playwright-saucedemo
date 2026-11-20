// login.spec.js
// Put this file in your "tests" folder.
// Run it with:  npx playwright test login.spec.js --headed

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertion: after login we should land on the inventory page.
  await expect(page).toHaveURL(/inventory/);
});

test('wrong password shows an error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');

  await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
});