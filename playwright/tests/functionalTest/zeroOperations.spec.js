// @ts-check
import { test, expect } from '@playwright/test'

test.describe('Operações com Zero', ()=>{

    test('Adição', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="0"]').click()
        await page.locator('[data-qa="+"]').click()
        await page.locator('[data-qa="1"]').click()
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('12')
       
    })
    
    test('Subtração', async ({page}) =>{
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="3"]').click()
        await page.locator('[data-qa="2"]').click()
        await page.locator('[data-qa="-"]').click()
        await page.locator('[data-qa="0"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('32')
    
    
    })
    
    test('Divisão', async ({page}) =>{
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="9"]').click()
        await page.locator('[data-qa="/"]').click()
        await page.locator('[data-qa="0"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('não é possível dividir por zero')
    
    })
    
    test('multiplicação', async ({page}) =>{
    
        await page.goto('http://localhost:3000/')
        await page.locator('[data-qa="0"]').click()
        await page.locator('[data-qa="*"]').click()
        await page.locator('[data-qa="9"]').click()
        await page.locator('[data-qa="="]').click()
        await expect(page.locator('[data-qa="display"]')).toContainText('0')
    
    })
    
    


})
