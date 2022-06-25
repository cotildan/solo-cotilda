import { until } from "selenium-webdriver";
import { Basket } from "./soloPage";

const confirm = new Basket()

describe("Confirmation Tests for Warfare Boat", () => {
  
    beforeAll(async () => {
        await confirm.navigate()
        await confirm.driver.sleep(2000)
    })

    afterAll(async () => {
       // await confirm.driver.sleep(5000)
        await confirm.driver.quit()
    })
/*
test("CT#29: Confirmation Test -- No Restriction on Username", async () => {
        // click text box
        await confirm.click(confirm.username)

        //click the enter button
        await confirm.click(confirm.homepageEnterBtn)
        //wait for popup to show up
        await confirm.driver.wait(until.alertIsPresent())

        await confirm.driver.sleep(5000)

        // put alert in variable
        let alert = await confirm.driver.switchTo().alert()
        // click ok on popup
        await alert.accept()

        // click text box again
        await confirm.click(confirm.username)
        // type a blank space 
        await confirm.setInput(confirm.username, " ")

        await confirm.driver.sleep(5000)

        // expecting error message pop up and stay on homepage
        if (confirm.click(confirm.homepageEnterBtn)) console.log("BUG STILL EXISTS")
        else
        await confirm.click(confirm.username)
    })


    test("CT#32: Confirmation Test -- Cannot Press Enter Key", async () => {

        await confirm.login("INTHEGAME")
    
        //Click on the VS Bot button
        await confirm.click(confirm.vsBotBtn)
    
        let botLocation = await confirm.getText(confirm.botDifficultyTitle)
        expect(botLocation.toLowerCase()).toContain("difficulty")
    
        await confirm.driver.sleep(3000)
        //Click the random button
        await confirm.click(confirm.randomBtn)
    
        await confirm.driver.sleep(3000)
        //Click on the button next to the Easy text for difficulty level
        await confirm.click(confirm.easyDifficulty)
    
        await confirm.driver.sleep(3000)
        //Click on the Start Game button
        await confirm.click(confirm.startGameBtn)
    
        //Click on the text box
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.chatInputMessage)
        await confirm.driver.sleep(3000)
    
        //type qwertyuiopasdfghjklzxcvbnm
        //older message
        await confirm.setInput(confirm.chatInputMessage, "qwertyuiopasdfghjklzxcvbnm")
        await confirm.click(confirm.chatEnterBtn)
        await confirm.driver.sleep(3000)
    
        await confirm.click(confirm.chatInputMessage)
        // Type 1234567890.
        await confirm.setInput(confirm.chatInputMessage, "1234567890.\n")
        await confirm.driver.sleep(3000)
    
        //Verify that bottom lower is new message
        if (confirm.getText(confirm.chatInputMessage)) console.log("BUG IS STILL THERE ")
        else
        console.log("bug is fixed")
       
        //verify that top message is older message
        let olderMes = await confirm.getText(confirm.chatBoxOlderMessage)
        expect(olderMes.toLowerCase()).toContain("qwerty")
    })



    test("CT#31: Confirmation Test -- Cannot Cancel New Game (against Bot)", async () => {

        await confirm.login("hero")
    
        //Click on the VS Bot button
        await confirm.click(confirm.vsBotBtn)
    
        let botLocation = await confirm.getText(confirm.botDifficultyTitle)
        expect(botLocation.toLowerCase()).toContain("difficulty")
    
        await confirm.driver.sleep(3000)
        //Click the random button
        await confirm.click(confirm.randomBtn)

        await confirm.driver.sleep(3000)
        //Click the random button five times
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
    
        await confirm.driver.sleep(3000)
        //click flip button
        await confirm.click(confirm.flipBtn)

        await confirm.driver.sleep(3000)
        //Click the reset button three more times
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)

        await confirm.driver.sleep(3000)
        //Click on the back button
        await confirm.click(confirm.backBtn)


        // verify that game is created
        if (confirm.getText(confirm.currentGamesWho)) console.log("BUG IS STILL THERE ")
        else
        console.log("bug is fixed")

    })
*/

test("CT#30: Confirmation Test -- Cannot Cancel New Game", async () => {

        await confirm.login("darkness")

        //Click on the Create Game button
        await confirm.click(confirm.createGameBtn)

        await confirm.driver.sleep(3000)
        //Click the random button
        await confirm.click(confirm.randomBtn)

        await confirm.driver.sleep(3000)
        //Click the random button five times
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)

        await confirm.driver.sleep(3000)
        //click flip button
        await confirm.click(confirm.flipBtn)

        await confirm.driver.sleep(3000)
        //Click the reset button three more times
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)
        await confirm.driver.sleep(3000)
        await confirm.click(confirm.resetBtn)

        await confirm.driver.sleep(3000)
        //Click on the back button
        await confirm.click(confirm.backBtn)

        // verify that game is created
        if (confirm.getText(confirm.currentGamesWho)) console.log("BUG IS STILL THERE ")
        else
        console.log("bug is fixed")

    })


/*
test("CT#28: Confirmation Test -- Cannot Logout", async () => {

        //Name search
        let names: Array<string> = [
            "q",
           "SamuelLJackson"
        ]

        let enterName = async (enterName) => {
            await confirm.click(confirm.username)
            await confirm.setInput(confirm.username,`${enterName}`)
            await confirm.click(confirm.homepageEnterBtn)
        }

        for(let i = 0; i < names.length; i++){
            await enterName(names[i])
            console.log ("entered name:", names[i] )
            if((!confirm.click(confirm.logoutLink)||(!confirm.click(confirm.logoutLink)))) console.log("Signed out and continuing loop")
            else{
            console.log("Cannot get out")
            break
            }
            await confirm.driver.sleep(2000)
        }

})
*/
})