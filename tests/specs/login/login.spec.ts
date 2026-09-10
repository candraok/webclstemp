import { test } from '@playwright/test';
import { LoginController } from '../../controller/login.controller';
import { variable } from '../../../resources/variables';

let loginController: LoginController;

test.describe.configure({ mode: 'parallel' });

test.describe('Login Test', () => {
    test.beforeEach(async ({ page }) => {
        loginController = new LoginController(page);
        await page.goto(variable.closioUrl);
    });
  
    test('Negative - Invalid Phone Number',{tag: ['@regression', '@sanity']}, async () => {
        await loginController.inputUsername(variable.invalidPhoneNumber);
        await loginController.inputPassword(variable.validPassword);
        await loginController.clickLoginButton();
        await loginController.verifyLoginError('No. Telepon atau password yang Anda masukkan salah.');
    });

    test('Negative - Invalid Password',{tag: ['@regression', '@sanity']}, async () => {
        await loginController.inputUsername(variable.validPhoneNumber);
        await loginController.inputPassword(variable.invalidPassword);
        await loginController.clickLoginButton();
        await loginController.verifyLoginError('No. Telepon atau password yang Anda masukkan salah.');
    });

    test('Negative - Empty Phone Number',{tag: '@regression'}, async () => {
        await loginController.inputPassword(variable.validPassword);
        await loginController.verifyButtonLoginDisabled();
    });

    test('Negative - Empty Password',{tag: '@regression'}, async () => {
        await loginController.inputUsername(variable.validPhoneNumber);
        await loginController.verifyButtonLoginDisabled();
    });

    test('Positive - Valid Login',{tag: ['@regression', '@sanity']}, async () => {
        await loginController.login(variable.validPhoneNumber, variable.validPassword);
    });
});