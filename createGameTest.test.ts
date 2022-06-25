import { Basket } from "./soloPage";

const fs = require('fs')
const createGame = new Basket()
/*
test("TC#11: Text (Create Game)", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "Tom Hanks")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    //Verify that “Place Ships To Start” text is visible before placing any ships on the blue grid
    let placeText = await createGame.getText(createGame.placeShiptoStartTitle)
    expect(placeText.toLowerCase()).toContain("place ships")

    //Click the random button twice times
    await createGame.click(createGame.randomBtn)
    await createGame.driver.sleep(3000)
    await createGame.click(createGame.randomBtn)

    //Verify that Start Game button is visible and over the  “Place Ships To Start” text
    let startText = await createGame.getText(createGame.startGameBtn)
    expect(startText.toLowerCase()).toContain("start game")

    await createGame.driver.sleep(3000)    
    //Click the reset button
    await createGame.click(createGame.resetBtn) 

    //Verify that there is a code at the bottom 
    let codeText = await createGame.getText(createGame.codeNum)
    console.log("the code is:", codeText)

    //Verify that “Place Ships To Start” text is visible again
    let placeText2 = await createGame.getText(createGame.placeShiptoStartTitle)
    expect(placeText2.toLowerCase()).toContain("place ships")
    

    //Click the flip button 
    await createGame.driver.sleep(3000) 
    await createGame.click(createGame.flipBtn)


    //Click the reset button again
    await createGame.click(createGame.resetBtn)

    await createGame.driver.sleep(3000)
    //Click the random button
    await createGame.click(createGame.randomBtn) 

    //Verify that Start Game button is visible and over the  “Place Ships To Start” text
    let startText2 = await createGame.getText(createGame.startGameBtn)
    expect(startText2).toEqual(expect.not.stringContaining(placeText))
    
    await createGame.driver.quit()

})


test("TC#12: Back button (Create Game)", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "letsDoQA")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    await createGame.driver.sleep(5000)
    //Click on the back button
    await createGame.click(createGame.backBtn)

    await createGame.driver.sleep(5000)

    let dashboard = await createGame.getText(createGame.createGameBtn)
    expect( dashboard.toLowerCase()).toContain("create game")

    await createGame.driver.quit()
})


test("TC#10: Reset Button (Create Game)", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "sleepyBaby")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    await createGame.driver.sleep(5000)
   // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
   //vertival
   expect(createGame.battleshipVertical).toEqual(By.className('vertical'))

    await createGame.driver.sleep(5000)
    //Click the random button three times
    await createGame.click(createGame.randomBtn)
    await createGame.driver.sleep(5000)
    await createGame.click(createGame.randomBtn)
    await createGame.driver.sleep(5000)
    await createGame.click(createGame.randomBtn)

    await createGame.driver.sleep(5000)
    //Click the reset button
    await createGame.click(createGame.resetBtn)

    await createGame.driver.sleep(5000)
    //Click the flip button
    await createGame.click(createGame.flipBtn)
    //veritical
    expect(createGame.battleshipVertical).toEqual(By.className('vertical'))
    

    await createGame.driver.sleep(5000)
    //Click the reset button twice
    await createGame.click(createGame.resetBtn)
    await createGame.driver.sleep(5000)
    await createGame.click(createGame.resetBtn)
    //horiz

    //let blah = await createGame.click(createGame.battleshipHorizonal)
    expect(createGame.battleshipHorizonal).toEqual(By.className('horizontal'))

    await createGame.driver.quit()
})



test("TC#8: Flip Button (Create Game)", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "sillyLilly")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //vertival
    expect(createGame.battleshipVertical).toEqual(By.className('vertical'))

    //Click the flip button again four more times slowly. Observing the gray area

    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //horizontal
    expect(createGame.battleshipHorizonal).toEqual(By.className('horizontal'))


    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //vertival
    expect(createGame.battleshipVertical).toEqual(By.className('vertical'))


    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //horizontal
    expect(createGame.battleshipHorizonal).toEqual(By.className('horizontal'))


    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //vertival
    expect(createGame.battleshipVertical).toEqual(By.className('vertical'))

    await createGame.driver.quit()
})




test("TC#9: Flip Button (Create Game) in blue grid", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "woodrow")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //vertival
    expect(createGame.battleshipVertical).toEqual(By.className('vertical'))

    await createGame.driver.sleep(5000)
    //Click the random button (once)
    await createGame.click(createGame.randomBtn)
    //in the blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])

    await createGame.driver.sleep(5000)
    // Click the flip button (once) 
    await createGame.click(createGame.flipBtn)
    //still in the blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])


    //Click the flip button again four more times slowly. Observing the gray area
    await createGame.driver.sleep(5000) 
    await createGame.click(createGame.flipBtn)
    //blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])

    await createGame.driver.sleep(5000)
    await createGame.click(createGame.flipBtn)
    //blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])

    await createGame.driver.sleep(5000)
    await createGame.click(createGame.flipBtn)
    //blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])

    await createGame.driver.sleep(5000)
    await createGame.click(createGame.flipBtn)
    //blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])

    await createGame.driver.quit()
})



test("TC#7: Random Button (Create Game)", async () => {

    await createGame.navigate()

    await createGame.click(createGame.username)
    await createGame.setInput(createGame.username, "Peanut")
    await createGame.click(createGame.homepageEnterBtn)

    await createGame.driver.sleep(3000)
    //Click on the Create Game button
    await createGame.click(createGame.createGameBtn)

    await createGame.driver.sleep(3000)
    //Click the random button (once)
    await createGame.click(createGame.randomBtn)
    //check that battleship is in the blue grid
    expect(createGame.battleshipInBlue).toEqual(By.xpath('//div[contains(@class,"ship-grid-square")]')[0])
    //take a pic
   await fs.writeFile(`${__dirname}/cgFirstFlip.png`, 
   await createGame.driver.takeScreenshot(), "base64",
   (e => {
       if (e) console.error(e)
       else console.log("Saved screenshot")
   })
   )

    await createGame.driver.sleep(10000)
    //Click the random button again twice more times slowly. Observing the blue grid
    await createGame.click(createGame.randomBtn)
    //take a pic
    await fs.writeFile(`${__dirname}/cgSecondFlip.png`, 
    await createGame.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved second screenshot")
    })
    )

    await createGame.driver.sleep(10000)
    await createGame.click(createGame.randomBtn)
    //take a pic
    await fs.writeFile(`${__dirname}/cgThirdFlip.png`, 
    await createGame.driver.takeScreenshot(), "base64",
    (e => {
        if (e) console.error(e)
        else console.log("Saved third screenshot")
    })
    )

    await createGame.driver.quit()

    })


    test("TC#13: Cancel Building A Layout (Create Game)", async () => {

        await createGame.navigate()
        await createGame.login("popPop")

        //Click on the Create Game button
        await createGame.click(createGame.createGameBtn)

        await createGame.driver.sleep(3000)
        //Click the random button
        await createGame.click(createGame.randomBtn)

        await createGame.driver.sleep(3000)
        //Click the random button five times
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)

        await createGame.driver.sleep(3000)
        //click flip button
        await createGame.click(createGame.flipBtn)

        await createGame.driver.sleep(3000)
        //Click the reset button three more times
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)

        await createGame.driver.sleep(3000)
        //Click on the back button
        await createGame.click(createGame.backBtn)

        // verify that game is created
        if (!createGame.getText(createGame.currentGamesWho)) console.log("bug is fixed")
        else
        console.log("BUG IS STILL THERE ")

        await createGame.driver.quit()

    })
    */

    test("TC#20: Cancel Building A Layout (VS Bot))", async () => {

        await createGame.navigate()
        await createGame.login("Lou6lou")
    
        //Click on the VS Bot button
        await createGame.click(createGame.vsBotBtn)
    
        let botLocation = await createGame.getText(createGame.botDifficultyTitle)
        expect(botLocation.toLowerCase()).toContain("difficulty")
    
        await createGame.driver.sleep(3000)
        //Click the random button
        await createGame.click(createGame.randomBtn)

        await createGame.driver.sleep(3000)
        //Click the random button five times
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
    
        await createGame.driver.sleep(3000)
        //click flip button
        await createGame.click(createGame.flipBtn)

        await createGame.driver.sleep(3000)
        //Click the reset button three more times
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)
        await createGame.driver.sleep(3000)
        await createGame.click(createGame.resetBtn)

        await createGame.driver.sleep(3000)
        //Click on the back button
        await createGame.click(createGame.backBtn)

        // verify that game is created
        if (createGame.getText(createGame.currentGamesWho)) console.log("BUG BUG BUG BUG ")
        else
        console.log("EVERYTHING WORKS PROPERLY")

        await createGame.driver.quit()

    })
