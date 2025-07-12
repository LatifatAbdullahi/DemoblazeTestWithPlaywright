
import { Browser, chromium, Page, expect } from '@playwright/test';

async  function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const context = await browser.newContext();
  await page.goto('https://www.demoblaze.com/')
   
    // click on the login button
    await page.locator('#login2').click()
    // fill in the username field
    await page.locator('#loginusername').fill('Quiinnxee')
    // fill in the password field
    await page.locator('#loginpassword').fill('TestPassword123')
    // click on the login button
    await page.locator('[onclick="logIn()"]').click()
    // wait for the login to complete
   await expect(page.locator('#logout2')).toBeVisible({ timeout: 60000 });
    
    // Log the successful login
    console.log('User logged in successfully')
    //save the authentication state
    await context.storageState({ path: './auth.json' });
    await browser.close();
}

export default globalSetup;