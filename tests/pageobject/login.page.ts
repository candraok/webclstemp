import { Page } from "@playwright/test";

export class LoginElements {
    constructor (private page : Page) {}

    fieldUsername(){
        return this.page.getByTestId('login-form-phoneInput');
    }

    fieldPassword(){
        return this.page.getByTestId('login-form-passwordInput');
    }

    loginButton(){
        return this.page.getByTestId('login-form-submitBtn');
    }

    loginButtonDisabled(){
        return this.page.locator('//button[@type="submit" and @disabled]');
    }

    loginErrorMessage(){
        return this.page.locator('//div[text()="Gagal Masuk"]/following-sibling::div');
    }

    dashboardText(){
        return this.page.locator('//p[text()="Selamat Datang Kembali di Closio!"]');
    }
}