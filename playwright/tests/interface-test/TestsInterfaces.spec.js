import { test, expect } from '@playwright/test'
import { CalculadoraPage } from '../../page/calculadoraPage'

test.beforeEach(async ({ page }) =>{

    await page.goto('http://localhost:3000/')
})

test.describe('estes de Interface',()=>{

    test('Verificar se Botões de 9-0 Funcionam Corretamente', async ({ page }) => {
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.numbersButton()
       
    })
    
    test('Botões de operações (+, -, ×, ÷, .) funcionam corretamente', async ({page}) =>{
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.operationsButton()    
    
    })
    
    test('O botão AC (limpar) apaga corretamente os valores', async ({page}) =>{
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.cleanButton()
    
    })
    
    test('Display Respeita o numero máximo de 10 Digitos', async ({page}) =>{
    
      
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.maxDigitoButton(expect)

    
    })
    
    

})
