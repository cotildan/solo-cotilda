import { Basket } from "./soloPage";
import { until } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

const user = new Basket()

describe("Warfare Boat: Homepage", () => {
    beforeAll(async () => {
        await user.navigate()
        await user.driver.sleep(2000)
    })

    afterAll(async () => {
        await user.driver.sleep(5000)
        await user.driver.quit()
    })
/*
    test("TS#3: Username login", async () =>{
        // click text box
        await user.click(user.username)

        //click the enter button
        await user.click(user.homepageEnterBtn)
        //wait for popup to show up
        await user.driver.wait(until.alertIsPresent())

        await user.driver.sleep(5000)

        // put alert in variable
        let alert = await user.driver.switchTo().alert()
        // click ok on popup
        await alert.accept()

        // click text box again
        await user.click(user.username)
        // type a blank space 
        await user.setInput(user.username, " ")

        await user.driver.sleep(5000)

        // expecting error message pop up and stay on homepage
        if (!(user.click(user.homepageEnterBtn))) await user.click(user.username)
        else
        console.log("IT'S A BUG")
        console.log("Error Message did not appear")
    })
  
*/
    test("TC#4: Username Login Combination", async () => {

        //Name searches
        let names: Array<string> = [
            "q",
           "SamuelLJackson",
           "!+_)(*&^%$#-=`<>?\u201C{}|\u005C][';/.,:@",
            "qxxCd4DKU4@SfN$6{"
        ]

   let enterName = async (enterName) => {
            await user.click(user.username)
            await user.setInput(user.username,`${enterName}`)
            await user.click(user.homepageEnterBtn)
        }

        for(let i = 0; i < names.length; i++){
            await enterName(names[i])
            console.log ("entered name:", names[i] )
            if((user.click(user.logoutLink)||(user.click(user.logoutLink)))){
                console.log("Cannot get out")
                break;
            } 
            else{
            console.log("Signed out and continuing loop")
            }
            await user.driver.sleep(2000)
        }

        

    })

})