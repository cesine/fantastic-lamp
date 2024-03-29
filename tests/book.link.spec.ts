import { expect, test } from '@playwright/test'

test.describe('cryptogram tests', () => {
  test('should go to the Amazon book link', async ({ page }) => {
    await page.goto('/?beta')
    await page.locator('.absolute').click()
    await page.getByLabel('Open Heart Modal').click()
    await page.getByRole('link', { name: 'Book cover' }).click()
    expect(await page.url()).toEqual(
      'https://www.amazon.com/dp/B0CKKF3T3Z?ref_=cm_sw_r_cp_ud_dp_ZMQ0AYWGKSXTGP5S3JQ4'
    )
  })
})
