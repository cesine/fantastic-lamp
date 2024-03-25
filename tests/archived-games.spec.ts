import { expect, test } from '@playwright/test'

test.describe('cryptogram tests', () => {
  test('should be able to choose an archived game', async ({ page }) => {
    const path =
      '/?beta=true&code=eyJndWVzc2VzIjpbXSwiaW5kZXgiOjc5NSwibWVzc2FnZSI6IkFuIGVuY3J5cHRlZCBtZXNzYWdlIiwic29sdXRpb24iOnsiYXV0aG9yIjoiIiwicXVvdGUiOiJoaSJ9fQ=='
    await page.goto(path)

    await page.locator('.absolute').click()

    await page.getByLabel('Open Archived Games').click()
    // const today = new Date().getDate()

    await page.getByRole('button', { name: 'Choose today' }).click()

    const year = new Date().getFullYear()
    expect(await page.url()).not.toContain(`d=${year}`)

    await page.locator('.xxshort\\:h-8').first().click()
    await page.keyboard.type('o')
    expect(await page.locator('.xxshort\\:h-8').first()).toHaveText('O')
  })
})
