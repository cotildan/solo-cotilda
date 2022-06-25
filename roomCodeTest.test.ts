
import { string } from "yargs";
import { Basket } from "./soloPage";

const room = new Basket()
/*
test("TC#5: Valid Code", async () => {
    await room.navigate()
    await room.click(room.username)
    await room.setInput(room.username, "eatPrayLove#&$^")
    await room.click(room.homepageEnterBtn)

    await room.click(room.enterCodeTextbox)
    await room.setInput(room.enterCodeTextbox, "EXKENC")
    // other potential codes: FXRDQD, YBXBKJ
    await room.driver.sleep(3000)
    await room.click(room.joinBtn)

    await room.driver.sleep(3000)
    let validArea = await room.getText(room.placeShiptoStartTitle)
    expect(validArea.toLowerCase()).toContain("place")
    let validCode = await room.getText(room.codeNum)
    expect(validCode.toUpperCase()).toContain("BNIJDT")
    await room.driver.quit()
})


test("TC#6: Invalid Code", async () => {
    await room.navigate()
    await room.click(room.username)
    await room.setInput(room.username, "q")
    await room.click(room.homepageEnterBtn)

    await room.click(room.enterCodeTextbox)
    let potentialCode: string = 'jvnRIG45'
    await room.setInput(room.enterCodeTextbox, potentialCode)
    await room.driver.sleep(3000)
    await room.click(room.joinBtn)

    await room.driver.sleep(3000)

    let buildingArea = await room.getText(room.joinBtn)
    expect(buildingArea.toLowerCase()).toContain("join")

    await room.driver.quit()
})
*/
