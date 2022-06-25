import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Basket extends BasePage{

    // Homepage locators
    header: By = By.xpath('//h1[@class="auth-title"]')
    username: By = By.xpath('//input[@placeholder="Enter a username"]')
    homepageEnterBtn: By = By.xpath('//button[@class="auth-button"]')

    //Dashboard locators
    // sign out
    signoutLink: By = By.xpath('//*[contains(.,"sign")]')
    logoutLink: By = By.xpath('//*[contains(.,"log")]')

    enterCodeTextbox: By = By.xpath('//input[@class="dash-input"]')
    // join button
    joinBtn: By = By.xpath('//button[@class="dash-join-game-button"]')
    // create games button
    createGameBtn: By = By.xpath('//button[@class="dash-create-game-button"]')
    // vs. bot button
    vsBotBtn: By = By.xpath('//button[@class="dash-vs-bot-button"]')
    // current games text
    currentGamesTitle: By = By.xpath('//h1[@class="dash-current-games-title"]')
    // replay games text
    replayGamesTitle: By = By.xpath('//h1[@class="dash-replay-games-title"]')

    //Build A Layout locators (create game)
    // random button
    randomBtn: By = By.xpath('//button[@class="game-random-button"]')
    // flip button
    flipBtn: By = By.xpath('//button[@class="game-flip-button"]')
    // reset button
    resetBtn: By = By.xpath('//button[@class="game-reset-button"]')
    // code num no mater the text
    codeNum: By = By.xpath('//div/h2[contains(text(),"")]')
    // back button
    backBtn: By = By.xpath('//button[@class="game-back-button"]')
    // Place Ships to start text
    placeShiptoStartTitle: By = By.xpath('//div[@class="game-ships-to-start-title"]')
    // Start game button
    startGameBtn: By = By.xpath('//button[@class="game-start-game-button"]')
    // your ships text
    yourShipTitle: By = By.xpath('//h1[@class="your-ships-title"]')

    //ships orientation
    shipYardEmpty: By= By.xpath('//div[@style="display: none;"]')[0]
    shipYardhorizontal: By = By.xpath('//div[contains(@class,"horizontal")]')[0]
    battleshipHorizonal: By = By.className('horizontal')
    battleshipVertical: By = By.className('vertical')
    battleshipInBlue: By = By.xpath('//div[@id="battleship-0"]')[0]
    battleshipRotating: By = By.xpath('//div[@class="ship-grid-row"]/div[contains(@id,"battleship")]')[0]

    //chat input message  box
    chatInputMessage: By = By.xpath('//input[@class="chat-input"]')
    //chat enterbutton
    chatEnterBtn: By = By.xpath('//button[@class="chat-button"]')
    // chat box messages in order
    //note: the bottom message is newer
    chatBoxBNewerMessage:By = By.xpath('//div[text()="1234567890"]')
    chatBoxOlderMessage:By = By.xpath('//div[text()="qwertyuiopasdfghjklzxcvbnm"]')
    
    //blue grid
    // note: 10 x 10 = 100 squares
    // once the ships are place:
    // <div class="ship-grid-square ship vertical" id="battleship-1"></div>
    blueGrid: By = By.xpath('//div[@class="ship-grid-square none "]')

    //Build A Layout locators (VS Bot) 
    // most are the same as Create Game
    // Place Ships to start text
    botplaceShiptoStartTitle: By = By.xpath('//div[@class="game-ships-to-start-title"]')
    // Start game button
    botstartGameBtn: By = By.xpath('//button[@class="game-start-game-button"]')
    // your ships text
    botyourShipTitle: By = By.xpath('//h1[@class="your-ships-title"]')
    // Bot Difficulty
    botDifficultyTitle: By = By.xpath('//h2[text()="BOT DIFFICULTY"]')
    //difficulty: easy
    easyDifficulty: By = By.xpath('//input[@value="easy"]')
    //difficulty: hard
    hardDifficulty: By = By.xpath('//input[@value="hard"]')
    //difficulty: impossible
    impossibleDifficulty: By = By.xpath('//input[@value="impossible"]')

    //Current Games
    currentGamesWho: By = By.xpath('//h3[contains(text(), "")]')
    //currentGameCode: By = By.xpath

    //Playgame locators
    // Radar Grid
   radarGrid:By = By.className("radar-grid-square ship")

    async login (soildname: string){

       await this.driver.sleep(2000)
       await this.click(this.username)
       await this.setInput(this.username, `${soildname}`)
       await this.driver.sleep(3000)
       await this.click(this.homepageEnterBtn)
    }
    
    constructor(){
        super({url: `https://warfareboat.com/`})
    }
}