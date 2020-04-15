const SeleniumInfra = require("./SeleniumInfra");

class WebPoratPage {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    constructor(selenium) {
        this.selenium = new SeleniumInfra()
    }
//this Function Navigate to User Admin Page
    async navigateToUserAdminPage() {
        await this.selenium.getURL("http://v10uaapp/web/") // Navigate to Web Portal Page
 
        await this.selenium.write("id" , "username" , "admin") // Enter Usarname
        await this.selenium.sleepFunction(1000)
        await this.selenium.write("id" , "password" , "nicecti1!") //Enter Password
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/div/div[2]/div/div/div/div/form/div[4]/input")
        await this.selenium.sleepFunction(3000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[2]/lib-search/lib-search-start/div/errors-display/div/mcr-new-dialog/div/p-dialog/div/div[2]/div/div[2]/div/mcr-button/div/button/span")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[1]/mcr-side-bar/div/mcr-side-bar-header/div/i[1]")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/popover-container/div[2]/div/mcr-app-picker/div/li[1]/i")

    }

    async SearchUser() {
        await this.selenium.getURL("http://v10uaapp/web/") // Navigate to Web Portal Page
 
        await this.selenium.write("id" , "username" , "admin") // Enter Usarname
        await this.selenium.sleepFunction(1000)
        await this.selenium.write("id" , "password" , "nicecti1!") //Enter Password
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/div/div[2]/div/div/div/div/form/div[4]/input")
        await this.selenium.sleepFunction(5000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[2]/lib-search/lib-search-start/div/errors-display/div/mcr-new-dialog/div/p-dialog/div/div[2]/div/div[2]/div/mcr-button/div/button/span")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[1]/mcr-side-bar/div/mcr-side-bar-header/div/i[1]")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/popover-container/div[2]/div/mcr-app-picker/div/li[1]/i")
        await this.selenium.sleepFunction(1000)
        await this.selenium.write("id" , "quickFilterInput" , "cohen")
        await this.selenium.isElementExists
    }

    async ValidateUser() {
        await this.selenium.getURL("http://v10uaapp/web/") // Navigate to Web Portal Page
 
        await this.selenium.write("id" , "username" , "admin") // Enter Usarname
        await this.selenium.sleepFunction(1000)
        await this.selenium.write("id" , "password" , "nicecti1!") //Enter Password
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/div/div[2]/div/div/div/div/form/div[4]/input")
        await this.selenium.sleepFunction(5000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[2]/lib-search/lib-search-start/div/errors-display/div/mcr-new-dialog/div/p-dialog/div/div[2]/div/div[2]/div/mcr-button/div/button/span")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[1]/mcr-side-bar/div/mcr-side-bar-header/div/i[1]")
        await this.selenium.sleepFunction(1000)
        await this.selenium.clickButton("xpath" , "/html/body/popover-container/div[2]/div/mcr-app-picker/div/li[1]/i")
        await this.selenium.sleepFunction(1000)
        await this.selenium.write("id" , "quickFilterInput" , "cohen")
        let FirstName1 = await this.selenium.getTextFromElement("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[2]/lib-user-admin-overview/div/div[2]/div/mcr-grid/div/ag-grid-angular/div/div[1]/div/div[3]/div[2]/div/div/div[1]/div[1]/lib-user-name-cell/div")
        let FirstName2 = await this.selenium.getTextFromElement("xpath" , "/html/body/portal-root/portal-home-layout/div[3]/div[2]/lib-user-admin-overview/div/div[2]/div/mcr-grid/div/ag-grid-angular/div/div[1]/div/div[3]/div[2]/div/div/div[2]/div[1]/lib-user-name-cell/div")
        
        if(FirstName1 == "Cohen, Droon"){
            console.log("Validation of Line 1 success")
        }

        if(FirstName2 == "cohen, dani"){
            console.log("Validation of Line 2 success")
        }

    }

}

module.exports = WebPoratPage


let WebPortalTest = new WebPoratPage();

//WebPortalTest.navigateToUserAdminPage()
//WebPortalTest.SearchUser()
WebPortalTest.ValidateUser()
