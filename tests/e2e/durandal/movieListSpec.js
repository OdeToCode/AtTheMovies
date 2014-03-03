var webdriver = require("selenium-webdriver");

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var baseUrl = "http://localhost:3000";
var By = webdriver.By;


describe("The home page movie list", function() {

    beforeEach(function() {
        driver.get(baseUrl + "/durandal/default.html");
    });

    it("should have the title 'at the movies'", function() {

    });

    it("should display 3 movies", function() {
        var rows = driver.findElements(By.xpath("//table/tbody/tr"));
        expect(rows.length).toBe(3);
    });

});

driver.quit();