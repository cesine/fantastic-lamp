import { expect, test } from '@playwright/test'

test.describe('cryptogram tests', () => {
  test('should be able to get several hints', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByLabel('How to play').getByRole('button').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    await page.getByLabel('Show Hint').click()
    expect(page.getByLabel('There is an message')).toBeVisible()
    expect(page.getByLabel('There is an message')).toHaveText(
      'No more hints available.'
    )
  })
})
