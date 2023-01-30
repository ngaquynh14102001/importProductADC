import { Page, Locator } from "@playwright/test";

export class LoginPage {
    page: Page;
    inputUserName: Locator;
    inputPassword: Locator;
    btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputUserName = page.locator("//input[@id = 'email']");
        this.inputPassword = page.locator("//input[@id = 'password']");
        this.btnLogin = page.locator("//button[@type = 'submit']    ");
    }

    async login() {
        await this.page.goto("https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fhpmaidinh.onshopbase.com%2Fadmin%2F");
        await this.inputUserName.fill("tuyetle+1@beeketing.net");
        await this.inputPassword.fill("123456");
        await this.btnLogin.click();
    }
}