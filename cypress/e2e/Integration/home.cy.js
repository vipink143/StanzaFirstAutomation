import homePage from "../PageObjects/PageActions/HomePageActions";

describe("Home page actions",()=>{


    it("Home page details",()=>{



        let home=new homePage()
        home.homePageActions();
        home.close();
     
    })
})