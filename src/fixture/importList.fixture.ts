import { test as base, expect } from "@playwright/test"
import { LoginPage } from "../page/authentication/login.page"
import { ImportListPage } from "../page/dashboard/importList.page"

const test = base.extend<{
    importListPage: ImportListPage
}>({
    importListPage: async ({ page }, use) => {
        //login
        const loginPage = new LoginPage(page);
        const importListPage = new ImportListPage(page);

        await loginPage.login();
        await loginPage.page.waitForTimeout(5 * 1000);

        await importListPage.navigateToMenu("Apps");
        await importListPage.navigateToMenu("Apps");
        await importListPage.navigateToApps("Ali Dropship Connector");
        await importListPage.navigateToMenuADC("Import List")

        //use   
        await use(importListPage);
        await importListPage.page.waitForTimeout(5 * 1000);
        //after
        await importListPage.deleteProduct();
    },
})

export {
    test,
    expect,
}