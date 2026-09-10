import { LoginElements } from '../pageobject/login.page';
import { expect, Page } from "playwright/test";

export class LoginController {
    private loginElements: LoginElements;

    constructor(page: Page) {
        this.loginElements = new LoginElements(page);
    }

    async inputUsername(username: string): Promise<void> {
        await this.loginElements.fieldUsername().fill(username);
    }

    async inputPassword(password: string): Promise<void> {
        await this.loginElements.fieldPassword().fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginElements.loginButton().click();
    }

    async verifyLoginSuccess(): Promise<void> {
        await expect(this.loginElements.dashboardText()).toBeVisible();
    }

    async verifyButtonLoginDisabled(): Promise<void> {
        await expect(this.loginElements.loginButtonDisabled()).toBeVisible();
    }

    async verifyLoginError(errMessage: string): Promise<void> {
        await expect(this.loginElements.loginErrorMessage()).toContainText(errMessage);
    }

    async login(username: string, password: string): Promise<void> {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
        await this.verifyLoginSuccess();
    }
}