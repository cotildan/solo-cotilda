import { By, until, WebElement } from "selenium-webdriver"
import {Basket} from "./soloPage"

const fs = require('fs')
const letsPlay = new Basket()

/*
test("TC#21: Playing A Game (VS Bot) Blue Grid", async () => {

    await letsPlay.navigate()
    await letsPlay.login("prettycool12749")

    //Click on the VS Bot button
    await letsPlay.click(letsPlay.vsBotBtn)

    let botLocation = await letsPlay.getText(letsPlay.botDifficultyTitle)
    expect(botLocation.toLowerCase()).toContain("difficulty")

    await letsPlay.driver.sleep(3000)
    //Click the random button four times
    await letsPlay.click(letsPlay.randomBtn)
    await letsPlay.driver.sleep(3000)
    await letsPlay.click(letsPlay.randomBtn)
    await letsPlay.driver.sleep(3000)
    await letsPlay.click(letsPlay.randomBtn)
    await letsPlay.driver.sleep(3000)
    await letsPlay.click(letsPlay.randomBtn)

    await letsPlay.driver.sleep(3000)
    //Click on the button next to the Easy text for difficulty level
    await letsPlay.click(letsPlay.easyDifficulty)

    //take a pic
    await fs.writeFile(`${__dirname}/buildLayout.png`, 
    await letsPlay.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved third screenshot")
    })
    )

    await letsPlay.driver.sleep(3000)
    //Click on the Start Game button
    await letsPlay.click(letsPlay.startGameBtn)

    await letsPlay.driver.sleep(3000)
    //take a pic
    await fs.writeFile(`${__dirname}/gameLayout.png`, 
    await letsPlay.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved third screenshot")
    })
    )

    //Verify that ships are in the submitted position
    expect(letsPlay.battleshipInBlue).toEqual(By.xpath('//div[@id="battleship-0"]')[0])

    await letsPlay.driver.quit()
})



test("TC#22: Playing A Game (VS Bot) Chat Box", async () => {

    await letsPlay.navigate()
    await letsPlay.login("sayWhattt?")

    //Click on the VS Bot button
    await letsPlay.click(letsPlay.vsBotBtn)

    let botLocation = await letsPlay.getText(letsPlay.botDifficultyTitle)
    expect(botLocation.toLowerCase()).toContain("difficulty")

    await letsPlay.driver.sleep(3000)
    //Click the random button
    await letsPlay.click(letsPlay.randomBtn)

    await letsPlay.driver.sleep(3000)
    //Click on the button next to the Easy text for difficulty level
    await letsPlay.click(letsPlay.easyDifficulty)

    await letsPlay.driver.sleep(3000)
    //Click on the Start Game button
    await letsPlay.click(letsPlay.startGameBtn)

    //Click on the text box
    await letsPlay.driver.sleep(3000)
    await letsPlay.click(letsPlay.chatInputMessage)
    await letsPlay.driver.sleep(3000)

    //type qwertyuiopasdfghjklzxcvbnm
    //older message
    await letsPlay.setInput(letsPlay.chatInputMessage, "qwertyuiopasdfghjklzxcvbnm")
    await letsPlay.click(letsPlay.chatEnterBtn)
    await letsPlay.driver.sleep(3000)

    await letsPlay.click(letsPlay.chatInputMessage)
    // Type 1234567890.
    await letsPlay.setInput(letsPlay.chatInputMessage, "1234567890.")
    await letsPlay.click(letsPlay.chatEnterBtn)
    await letsPlay.driver.sleep(3000)

    //Verify that bottom lower is new message
    let newerMes = await letsPlay.getText(letsPlay.chatBoxBNewerMessage)
    console.log("got new message")
    expect(newerMes).toContain("1234")
   

    //verify that top message is older message
    let olderMes = await letsPlay.getText(letsPlay.chatBoxOlderMessage)
    expect(olderMes.toLowerCase()).toContain("qwerty")
    await letsPlay.driver.quit()
})
*/
test("TC#22: Playing A Game (VS Bot) Chat Box", async () => {

    await letsPlay.navigate()
    await letsPlay.login("Weezer$^*9j99")

    await letsPlay.driver.sleep(5000)
    //Click on the VS Bot button
    await letsPlay.click(letsPlay.vsBotBtn)

    let botLocation = await letsPlay.getText(letsPlay.botDifficultyTitle)
    expect(botLocation.toLowerCase()).toContain("difficulty")

    await letsPlay.driver.sleep(2000)
    //Click the random button
    await letsPlay.click(letsPlay.randomBtn)

    await letsPlay.driver.sleep(2000)
    //Click on the button next to the Easy text for difficulty level
    await letsPlay.click(letsPlay.impossibleDifficulty)

    await letsPlay.driver.sleep(2000)
    //Click on the button next to the Easy text for difficulty level
    await letsPlay.click(letsPlay.easyDifficulty)


    await letsPlay.driver.sleep(2000)
    //Click on the Start Game button
    await letsPlay.click(letsPlay.startGameBtn)

    //Click on the click on the Radar Grid
    for (let i = 0; i <=99; i++){

        await letsPlay.driver.sleep(10000)
        await letsPlay.click(letsPlay.radarGrid)
/*
        //if popup is present break out of loop
        if(letsPlay.driver.wait(until.alertIsPresent())){
            await letsPlay.driver.sleep(3000)
            // put alert in variable
            let alert = await letsPlay.driver.switchTo().alert()
            // click ok on popup
            await alert.accept()
           // break;
        }
*/
        
    }
  
    //await letsPlay.driver.wait(until.alertIsPresent())
    await letsPlay.driver.sleep(3000)


    //await letsPlay.driver.quit()
})