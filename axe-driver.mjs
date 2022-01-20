import AxeBuilder from '@axe-core/webdriverjs';
import { Builder } from 'selenium-webdriver';


const driver = new Builder().forBrowser('chrome').build();

driver.get('https://dequeuniversity.com/demo/mars/').then(() => {
  new AxeBuilder(driver).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results);
  });
});