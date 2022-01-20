import AxeBuilder from '@axe-core/webdriverjs'
import { Builder } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'

const chromeOptions = new chrome.Options()
  .headless()
  .windowSize({ width: 1920, height: 1080 })

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build()

const axe = new AxeBuilder(driver)

function axeAnalyzePromise () {
  return new Promise((resolve, reject) => {
    axe.analyze((err, results) => {
      if (err) {
        reject(err)
      }
      resolve(results)
    })
  })
}

export function analyseUrl (url) {
  return driver.get(url).then(() => {
    return axeAnalyzePromise()
  })
}
