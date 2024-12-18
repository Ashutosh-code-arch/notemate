import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

async function main() {
    const options = new Options({});
    options.addArguments("--disable-blink-features=AutomationControlled");
    options.addArguments("--use-fake-ui-for-media-stream");
    let driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();
    try {
        await driver.get("https://meet.google.com/czt-cyzm-arj");
        const popupButton = await driver.wait(
            until.elementLocated(
                By.xpath('//span[contains(text(), "Got it")]')
            ),
            10000
        );
        await popupButton.click();
        // const nameInput = await driver.wait(
        //     until.elementLocated(By.id("c12")),
        //     10000
        // );
        const nameInput = await driver.wait(
            until.elementLocated(By.xpath('//input[@placeholder="Your name"]')),
            10000
        );
        await nameInput.click();
        await nameInput.clear();
        await nameInput.sendKeys("Meeting Mate");

        const joinButton = await driver.wait(
            until.elementLocated(
                By.xpath('//span[contains(text(), "Ask to join")]')
            ),
            10000
        );
        await joinButton.click();
        const buttonInput = await driver.wait(
            until.elementLocated(By.id("c12aasxxxsssss")),
            100000
        );
    } finally {
        await driver.quit();
    }
}

main();
