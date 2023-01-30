import { ImportListPage } from "../src/page/dashboard/importList.page";
import { expect, test } from "../src/fixture/importList.fixture";

test('test_importProductByLink', async ({ importListPage }) => {
    await test.step('Import product to Import List by link from Ali Express', async () => {
        await importListPage.importProductByLink();
    })

    // verify new product import by link
    await test.step('Verify new product', async () => {
        const newProduct = await importListPage.page.locator("//a[@class='original-title text-bold text-gray1000' and normalize-space()='Disney Iron Man Infinity Glove Gauntlet Marvels Thanos Avengers Ironman Heroes Weapon GROOT Toy Building Block Brick Gift']").textContent();
        console.log(newProduct);
        expect(newProduct?.trim()).toEqual("Disney Iron Man Infinity Glove Gauntlet Marvels Thanos Avengers Ironman Heroes Weapon GROOT Toy Building Block Brick Gift");
    })

})
