class LoginPage{
    constructor(page){
        //web elements
        this.page=page
        this.username="#email"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton= "//button[text()='Sign in']"
    }
    async loginToApplication(){
        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
    }
}
module.exports=LoginPage;