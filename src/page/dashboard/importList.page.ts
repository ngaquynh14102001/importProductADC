import { Locator, Page } from "@playwright/test";
import { DashBoard } from "./dashboard.page";

export class ImportListPage extends DashBoard {
    btnImport: Locator;
    theURLofProduct: Locator;
    btnImportProduct: Locator;
    btnCancel: Locator;

    btnDelete: Locator;
    btnDeleteProduct: Locator;

    constructor(page: Page) {
        super(page);
        this.btnImport = page.locator("//span[contains(text(),'Import')]");
        this.theURLofProduct = page.locator("//input[@placeholder='Please enter the URL of products on AliExpress']");
        this.btnImportProduct = page.locator("//button[@class='s-button is-primary is-disabled']//span[@class='s-flex s-flex--align-center'][normalize-space()='Import']");
        this.btnCancel = page.locator("//span[normalize-space()='Cancel']");

        this.btnDelete = page.locator("(//span[@class='s-flex s-flex--align-center'][normalize-space()='Delete'])[1]");
        this.btnDeleteProduct = page.locator("//button[@class='s-button btn-confirm-delete is-danger']");
    }

    async importProductByLink() {
        this.btnImport.click();
        this.theURLofProduct.fill("https://vi.aliexpress.com/item/1005004762372115.html");
        this.btnImportProduct.click();

    }

    async deleteProduct() {
        this.btnDelete.click();
        this.btnDeleteProduct.click();
        this.page.waitForTimeout(2 * 1000);
    }
}