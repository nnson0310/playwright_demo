import {Page, test} from '@playwright/test';
import MethodHelper from '../../../utils/MethodHelper';

test('Verify clicking to search button in header', async ({page}) => {
   await page.goto('https://ericsson.com');

   await page.locator('a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();

   await MethodHelper.sleepInSeconds(10);
})