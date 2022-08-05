const {test, expect } = require('@playwright/test');



test.describe("This feature will make sure that the shop page is navigable and usable", async() => {

    test('Navigate to Deals Page', async({page}) => {

        await page.goto('https://sky.com', {waitUntil: "domcontentloaded"});

        //expect playwright to click on the pop-up content

        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();

        //expect user to click on the deals page

        await page.locator('[data-test-id="primary-nav-list"] >> text="Deals"').click();

        //user to verify the url are not matching

        await expect(page.url()).toEqual('https://www.sky.com/deals', 'deal url does not match');

    })

})

test.describe("The user sign in to sky.com with incorrect credentials", async() => {

    test('Sign to sky.com with invalid id', async({page}) => {

        await page.goto('https://sky.com', {waitUntil: "domcontentloaded"});

        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();

        await page.locator('[data-test-id="sign-in-link"]').click();

      await page.locator('[data-test-id="AUTHN__INPUT"]').fill("Parkavipaarthi@gmail.com");
      await page.locator('[data-testid="AUTHN__SUBMIT_BTN"]').click();
      await page.locator('data-testid="PASSWORD__INPUT"').fill("Test@123");
      await page.locator('[data-testid="AUTHN__SUBMIT_BTN"]').click();

      await expect ((page.locator('[data-testid="AUTHN__INLINE_ERROR"]').innerText,'Oops! Incorrect password. Please try again or click forgotten your password below'));
     
        

    })

})

