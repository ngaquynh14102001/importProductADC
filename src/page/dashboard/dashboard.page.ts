import { Page } from "@playwright/test"

export class DashBoard {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToMenu(menuName: string) {
        console.log("Navigate to menu" + menuName);
        await this.page.locator(`//span[@class="unite-ui-dashboard__aside--text" and normalize-space()= "${menuName}"]`).click();
    }

    async navigateToApps(appName: string) {
        await this.page.locator(`//p[@class = 'app_list__items-name type--bold' and normalize-space() = '${appName}']`).click();
    }

    async navigateToMenuADC(menuNameADC: string) {
        await this.page.locator(`//a[normalize-space()='${menuNameADC}']`).click();
    }
}