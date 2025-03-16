// @ts-check
import { test, expect } from '@playwright/test'

test('Adição', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.locator('[data-qa="7"]').click()
    await page.locator('[data-qa="5"]').click()
    await page.locator('[data-qa="+"]').click()
    await page.locator('[data-qa="3"]').click()
    await page.locator('[data-qa="5"]').click()
    await page.locator('[data-qa="="]').click()
    await expect(page.locator('[data-qa="display"]')).toContainText('110')
   
})

