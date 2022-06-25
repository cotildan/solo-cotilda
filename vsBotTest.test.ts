import { create } from "istanbul-reports";
import { By } from "selenium-webdriver";
import { Basket } from "./soloPage";

const fs = require('fs')
const bot = new Basket()
/*
test("TC#18: Text & Difficulty (VS Bot)", async () => {

    await bot.navigate()

    await bot.login("QAEveryday247365")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    //Verify that “Place Ships To Start” text is visible before placing any ships on the blue grid
    let placeText = await bot.getText(bot.placeShiptoStartTitle)
    expect(placeText.toLowerCase()).toContain("place ships")

    //Click the random button twice times
    await bot.click(bot.randomBtn)
    await bot.driver.sleep(3000)
    await bot.click(bot.randomBtn)

    //Verify that Start Game button is visible and over the  “Place Ships To Start” text
    let startText = await bot.getText(bot.startGameBtn)
    expect(startText.toLowerCase()).toContain("start game")

    await bot.driver.sleep(3000)    
    //Click the reset button
    await bot.click(bot.resetBtn) 

    //Verify that there is a code at the bottom 
    let codeText = await bot.getText(bot.codeNum)
    console.log("the code is:", codeText)

    //Verify that “Place Ships To Start” text is visible again
    let placeText2 = await bot.getText(bot.placeShiptoStartTitle)
    expect(placeText2.toLowerCase()).toContain("place ships")
    
    //Click the flip button 
    await bot.driver.sleep(3000) 
    await bot.click(bot.flipBtn)

    //Click the reset button again
    await bot.click(bot.resetBtn)

    await bot.driver.sleep(3000)
    //Click the random button
    await bot.click(bot.randomBtn) 

    await bot.driver.sleep(3000)
    //Click on the button next to the Easy text
    await bot.click(bot.easyDifficulty)

    await bot.driver.sleep(3000)
    //Click on the button next to the Impossible text
    await bot.click(bot.impossibleDifficulty)
   
    await bot.driver.sleep(3000)
    //Click on the button next to the Hard text
    await bot.click(bot.hardDifficulty)

    await bot.driver.sleep(3000)
    //Click on the button next to the Impossible text
    await bot.click(bot.impossibleDifficulty)

    await bot.driver.sleep(3000)
    //Click on the button next to the Easy text
    await bot.click(bot.easyDifficulty)

    await bot.driver.sleep(3000)
    //Click on the button next to the Hard text
    await bot.click(bot.hardDifficulty)

    //Verify that Start Game button is visible and over the  “Place Ships To Start” text
    let startText2 = await bot.getText(bot.startGameBtn)
    expect(startText2).toEqual(expect.not.stringContaining(placeText))
    
    await bot.driver.quit()

})

test("TC#19: Back button (VS Bot)", async () => {

    await bot.navigate()

    await bot.login("6S3@sons&@m0v!}")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    await bot.driver.sleep(5000)
    //Click on the back button
    await bot.click(bot.backBtn)

    await bot.driver.sleep(5000)

    let dashboard = await bot.getText(bot.vsBotBtn)
    expect( dashboard.toLowerCase()).toContain("bot")

    await bot.driver.quit()
})



test("TC#14: Random Button (VS Bot)", async () => {

    await bot.navigate()

    await bot.login("six seasons and a movie")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    await bot.driver.sleep(5000)
   // Click the flip button (once) 
    await bot.click(bot.flipBtn)
   //vertical
   expect(bot.battleshipVertical).toEqual(By.className('vertical'))

    await bot.driver.sleep(5000)
    //Click the random button twice times
    await bot.click(bot.randomBtn)
    await bot.driver.sleep(5000)
    await bot.click(bot.randomBtn)

    await bot.driver.sleep(5000)
    //Click the reset button
    await bot.click(bot.resetBtn)

    await bot.driver.sleep(5000)
    //Click the flip button
    await bot.click(bot.flipBtn)
    //veritical
    expect(bot.battleshipVertical).toEqual(By.className('vertical'))
    

    await bot.driver.sleep(5000)
    //Click the reset button twice
    await bot.click(bot.resetBtn)
    await bot.driver.sleep(5000)
    await bot.click(bot.resetBtn)
    //horiz

    //let blah = await bot.click(bot.battleshipHorizonal)
    expect(bot.battleshipHorizonal).toEqual(By.className('horizontal'))

    await bot.driver.quit()
})



test("TC#15: Flip Button (VS Bot)", async () => {

    await bot.navigate()

    await bot.login("johnnyboi4evrl8tr")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    await bot.driver.sleep(5000)
    // Click the flip button (once) 
    await bot.click(bot.flipBtn)
    //vertival
    expect(bot.battleshipVertical).toEqual(By.className('vertical'))

    //Click the flip button again two more times slowly. Observing the gray area
    await bot.driver.sleep(5000)
    await bot.click(bot.flipBtn)
    //horizontal
    expect(bot.battleshipHorizonal).toEqual(By.className('horizontal'))


    await bot.driver.sleep(5000)
    await bot.click(bot.flipBtn)
    //vertical
    expect(bot.battleshipVertical).toEqual(By.className('vertical'))
    await bot.driver.sleep(5000)


    await bot.driver.quit()
})
*/



test("TC#16: Flip Button (VS Bot) in blue grid", async () => {

    await bot.navigate()

    await bot.login("codeSlayer")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    await bot.driver.sleep(5000)
    // Click the flip button (once) 
    await bot.click(bot.flipBtn)
    //vertival
    expect(bot.battleshipVertical).toEqual(By.className('vertical'))

    await bot.driver.sleep(5000)
    //Click the random button (once)
    await bot.click(bot.randomBtn)
    //still in the blue grid because ship yard is empty
    expect(bot.shipYardEmpty).toEqual(By.xpath('//div[@style="display: none;"]')[0])

    await bot.driver.sleep(5000)
    // Click the flip button (once) 
    await bot.click(bot.flipBtn)
    //still in the blue grid because ship yard is empty
    expect(bot.shipYardEmpty).toEqual(By.xpath('//div[@style="display: none;"]')[0])

    //Click the flip button again three more times slowly. Observing the gray area
    await bot.driver.sleep(5000) 
    await bot.click(bot.flipBtn)
    //still in the blue grid because ship yard is empty
    expect(bot.shipYardEmpty).toEqual(By.xpath('//div[@style="display: none;"]')[0])

    await bot.driver.sleep(5000) 
    await bot.click(bot.flipBtn)
    //still in the blue grid because ship yard is empty
    expect(bot.shipYardEmpty).toEqual(By.xpath('//div[@style="display: none;"]')[0])

    await bot.driver.sleep(5000)
    await bot.click(bot.flipBtn)
    //still in the blue grid because ship yard is empty
    expect(bot.shipYardEmpty).toEqual(By.xpath('//div[@style="display: none;"]')[0])
    
    await bot.driver.quit()
})

/*

test("TC#14: Random Button (VS Bot)", async () => {

    await bot.navigate()

    await bot.login("prunePopth3P0p")

    await bot.driver.sleep(3000)
    //Click on the VS Bot button
    await bot.click(bot.vsBotBtn)

    let location = await bot.getText(bot.botDifficultyTitle)
    expect(location.toLowerCase()).toContain("difficulty")

    await bot.driver.sleep(3000)
    //Click the random button (once)
    await bot.click(bot.randomBtn)
    //check that battleship is in the blue grid
    expect(bot.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])
    //take a pic
   await fs.writeFile(`${__dirname}/botFirstFlip.png`, 
   await bot.driver.takeScreenshot(), "base64",
   (e => {
       if (e) console.error(e)
       else console.log("Saved screenshot")
   })
   )

    await bot.driver.sleep(10000)
    //Click the random button again three more times slowly. Observing the blue grid
    await bot.click(bot.randomBtn)
    //take a pic
    await fs.writeFile(`${__dirname}/botSecondFlip.png`, 
    await bot.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved second screenshot")
    })
    )

    await bot.driver.sleep(10000)
    await bot.click(bot.randomBtn)
    //take a pic
    await fs.writeFile(`${__dirname}/botThirdFlip.png`, 
    await bot.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved third screenshot")
    })
    )

    await bot.driver.quit()

    })

*/