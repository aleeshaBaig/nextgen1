import { When, Then } from 'cucumber';
import builder from 'cucumber/lib/formatter/builder';

When('we request the side bar', function () {
    this.driver = new Builder().forBrowser('chrome').build();
    this.driver.wait(until.elementLocated(By.tagName('h2')));
    await this.driver.get('http://localhost:3000')
 });

Then('we should receive', function (menuBar) {
    var sidebarMenu = await this.driver.findElement(By.className('Menu'));
    var expectations = menuBar.hashes();
    for (let i = 0; i < expectations.length; i++){
        const menuItem = await sidebarMenu[i].findElement(By.tagName('h3')).getText();
        assert.equal(menuItem, expectations[i].name);

         
    }
});

After(async function() {
    this.driver.close();
});