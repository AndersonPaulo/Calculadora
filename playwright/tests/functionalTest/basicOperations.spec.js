// @ts-check
import { test, expect } from '@playwright/test'

test.describe('Operações Basicas' , () =>{
    test('Adição', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="5"]').click()
        await page.locator('[data-qa="+"]').click()
        await page.locator('[data-qa="3"]').click()
        await page.locator('[data-qa="7"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('62')
       
    })
    
    test('Subtração', async ({page}) =>{
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="5"]').click()
        await page.locator('[data-qa="-"]').click()
        await page.locator('[data-qa="1"]').click()
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('13')
    
    
    })
    
    test('Divisão', async ({page}) =>{
    
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="5"]').click()
        await page.locator('[data-qa="/"]').click()
        await page.locator('[data-qa="4"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('6.25')
    
    })
    
    test('multiplicação', async ({page}) =>{
    
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="5"]').click()
        await page.locator('[data-qa="*"]').click()
        await page.locator('[data-qa="3"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('75')
    
    })
    
    

})
