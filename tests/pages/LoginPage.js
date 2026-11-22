// LoginPage.js
// A "page object": one class per page, holding that page's locators and actions.
// Put this file in a folder called "pages" in your project.

class LoginPage {
  static users =["standard_user",
"locked_out_user",
"problem_user",
"performance_glitch_user",
"error_user",
"visual_user"]
  constructor(page) {
    this.page = page;

    // Locators: how we find things on the page.
    // saucedemo uses data-test attributes, so we use getByTestId
    // (this needs testIdAttribute: 'data-test' in playwright.config.js).
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }
 
  // Actions: things a user can do on this page.
    async goto() {
    await this.page.goto('https://www.saucedemo.com/'); // uses baseURL from the config
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
// export default new LoginPage