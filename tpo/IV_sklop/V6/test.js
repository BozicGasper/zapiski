
/** used for Selenium purposes */

const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const PageLoadStrategy = require('selenium-webdriver/lib/capabilities').PageLoadStrategy;

/** used for mocha and chai */

const { describe, it, after, before } = require("mocha");
const assert = require('chai').assert;
const expect = require("chai").expect;
const should = require('chai').should();

const fs = require('fs');

/** 
 * Test parameters 
 */

const USERNAME = 'nekdo@fri1.uni-lj.si';
const UCILNICA_KEY = 'geslo';
const USER_NAME_SURNAME = 'Marko Novak';
const urlAddress = 'https://ucilnica.fri.uni-lj.si';

const txtLinkLogin = 'Prijava';
const txtLinkLogout = 'Odjavi';
const pageTitle = 'Spletna uÄilnica FRI 19/20';
const TARGET_COURSE = 'Tehnologija programske opreme';


// use strict mode: e.g., you can not use undeclared variables.
"use strict";


let waitUntilElementIsVisible = async function pocakajStranNalozena(driver, casVS, xpath) {
	await driver.wait(function() {
		return driver.findElements(By.xpath(xpath)).then(elementi => {
			return elementi[0];
		});
	}, casVS * 1000, `Stran se ni naloĹžila v ${casVS} s.`);
}


/**
 * Mocha funkcionalni testi
 */

async function testUcilnica() {
	
	var driver = null;
	var sessionID = null;
	
	/**
	 * Funkcionalni testi
	 */
	
	describe("Spletna ucilnica FRI", async function() {

		var options = new chrome.Options();
		options.addArguments("incognito");
		options.addArguments("--lang=sl");
		// options.setPageLoadStrategy(PageLoadStrategy.EAGER);
		before(async () => {
			try {
				driver = await new Builder()
				.forBrowser("chrome")
				.setChromeOptions(options)
				.setFirefoxOptions(options)
				.build();
			} catch (exception) {
				console.log("[Napaka]: " + exception.message);
			}
			if (driver == null)
				process.exit(1);
			
			console.log("-------");
			await driver.getSession().then(function(session){
				sessionID = session.id_;
				console.log('Session ID: ', sessionID); 
				console.log('Test izveden na: ' + urlAddress + ' ' + sessionID)
			});
			console.log("-------");
			
			await driver.get(urlAddress);
		});
		
		after(async () => {
			console.log('[Info]: quitted');
			await driver.quit();
		});
	
		beforeEach(() => {
			
		});	
		
		afterEach(() => {
			
		});
		
		/**
		 * asinhroni testi
		 */

		it ("should check '" + urlAddress + "' locale settings", async function() {
			try {
				// #findElements - ce elementa ni, vrne Exception
				let linkPrijava = await driver.findElement( By.linkText(txtLinkLogin) );
				await linkPrijava.should.exist;
			} catch (e) {
				if (e.name == 'NoSuchElementError') {
					let errMsg = `[Napaka]: ni povezave z imenom '${txtLinkLogin}'. Preveri locale settings...`
					await should.fail(errMsg);
				} else {
					throw e;
				}
			}
		});

		
		it("should check the page title", async () => {
			const title = await driver.getTitle();
			console.log("Naslov: " + title);
			await expect(title).to.be.a('string').and.to.equal(pageTitle);
		});
		
		it('should check if user is not logged in', async function() {
			let linkPrijava = await driver.findElement( By.linkText(txtLinkLogin) );
			let href = await linkPrijava.getAttribute('href');
			await expect(href).to.be.a('string').and.satisfy(msg => msg.startsWith('https://ucilnica.fri.uni-lj.si'));
			
			// UserMenu: <span class='login'> Niste prijavljeni. (<a href="https://ucilnica.fri.uni-lj.si/login/index.php">Prijava</a>)</span>
			let spanPrijava = await driver.findElement(By.xpath("//span[contains(text(), 'Niste prijavljeni.')]"));
			await should.exist(spanPrijava);
			
			let spanVsebina = await spanPrijava.getAttribute('innerHTML');
			await expect(spanVsebina).to.not.be.empty;
			//console.log("Link: " + href);
			//console.log("class: " + await spanPrijava.getAttribute('class'));
			//console.log("span contents: " + spanVsebina);
		});
		
		
		it('user should be able to login', async () => {
			// <span class="login">Niste prijavljeni. (<a href="https://ucilnica.fri.uni-lj.si/login/index.php">Prijava</a>)</span>
			let loginLink = await driver.findElement(By.xpath("//span[@class='login']/a"));
			let hrefLogin = await loginLink.getAttribute('href');
			await expect(hrefLogin).to.satisfy(hrefLogin =>
				['https://ucilnica.fri', '/login/index'].every(bit => hrefLogin.includes(bit))
			);
			await loginLink.click();
			
			// <input type="text" name="username" id="username" class="form-control" value="" placeholder="UporabniĹĄko ime" autocomplete="username">
			// <input type="password" name="password" id="password" value="" class="form-control" placeholder="Geslo" autocomplete="current-password">
			
			// [prijavna stran]
			let inputUsername = await driver.findElement(By.id('username'));
			await driver.wait(until.elementIsVisible(inputUsername),10000);
			await inputUsername.sendKeys(USERNAME, Key.TAB);
			let usernamePlaceholder = await inputUsername.getAttribute('placeholder');
			await assert.typeOf(usernamePlaceholder, 'string');
			
			let inputPassword = await driver.findElement(By.name('password'));
			await driver.wait(until.elementIsVisible(inputPassword),10000);
			await inputPassword.sendKeys(UCILNICA_KEY, Key.TAB);
			let passwordPlaceholder = await inputPassword.getAttribute('placeholder');
			await expect(passwordPlaceholder).to.equal('Geslo');
			//console.log("Link text: " + await loginLink.getAttribute('href'));
			//console.log("username: " + await inputUsername.getAttribute('placeholder'));
			//console.log("password: " + await inputPassword.getAttribute('placeholder'));
			
			// [prijava]
			let buttonPrijava = await driver.findElement(By.css("button[type=submit]")).click();
			// <div class="dropdown"> ... cel menu... </div>
			let menu = await driver.findElement(By.xpath("//div[@class='dropdown']/a"));
			await driver.wait(until.elementIsVisible(menu),10000);
			await assert.exists(menu, 'menu <div> ni niti `null` niti `undefined`');
			// console.log("Ime html: " + await menu.getAttribute('innerHTML'));
			// console.log("Ime text: " + await menu.getAttribute('innerText'));
		});
		
		it('full name of the user should be visible', async function() {
			let menu = await driver.findElement(By.xpath("//div[@class='dropdown']/a"));
			// <a href="#" ><span class="userbutton"><span>Ime Priimek </span><span class="avatars"><span><img src=...></span></span></span><b class="caret"></b></a>
			let fullName = await menu.getAttribute('innerText');
			await fullName.should.be.a('string');
			fullName = fullName.trim();
			console.log("User's full name: " + fullName);
			await assert.equal(fullName, USER_NAME_SURNAME, 'Ime uporabnika ustreza.');
		});
		
		it('should list all current courses', async function() {
			const CURRENT_COURSES = [
				'FRI - informator', 'FRI pedagogi', 'Programiranje 1', 
				'Programiranje 2', 'Sodobne metode razvoja programske opreme', 
				'Tehnologija programske opreme', 'Teden programiranja: osnove programiranja v ...'
			];

			// let karticePredmetov = await driver.findElements(By.xpath("//div[@class='card dashboard-card']/div/div/div[@class='w-100 text-truncate']/a/span[@class='multiline']"));
			await waitUntilElementIsVisible(driver, 10, "//div[@class='card dashboard-card']/div/div/div[@class='w-100 text-truncate']/a/span[@class='multiline']");
			this.timeout(30000);
			
			let karticePredmetov = await driver.findElements(By.xpath("//div[@class='card dashboard-card']/div/div/div[@class='w-100 text-truncate']/a/span[@class='multiline']"));
			await expect(karticePredmetov).to.be.an("array");
						
			// courses 
			var courses = [];
			let i = 0;
			for (let element of karticePredmetov) {
				let cardItem = await element.getAttribute('innerText');
				courses.push(cardItem);
				//console.log("%d. %s", i + 1, cardItem);
				i++;
			}
			await expect(courses).to.have.members(CURRENT_COURSES).and.to.have.lengthOf(CURRENT_COURSES.length);
			//console.log("Dolzina: " + await karticePredmetov.length);
			//await waitUntilElementIsVisible(driver, 10, "//div[@class='card dashboard-card']");
		});

		it('should check for TPO course and click on it', async () => {
			// await waitUntilElementIsVisible(driver, 10, "//div[@class='card dashboard-card']/div/div/div[@class='w-100 text-truncate']/a/span[@class='multiline']");
			let tpoLink = null;
			try {
				let xPathTPO = "//div[@class='card dashboard-card']/div/div/div[@class='w-100 text-truncate']/a[contains(.,'" + TARGET_COURSE + "')]";
				tpoLink = await driver.findElement(By.xpath(xPathTPO));
			} catch (e) {
				if (e.name == 'NoSuchElementError') {
					await should.fail("%s not found...", TARGET_COURSE);
				} else {
					throw e;
				}
			}
			let urlTPO = await tpoLink.getAttribute('href')
			await should.not.equal(tpoLink, null);
			await expect(urlTPO).to.be.a('string').and.satisfy(string => string.startsWith('https://ucilnica.fri.uni-lj.si'));
			
			await tpoLink.click();
			// console.log("URL: " + urlTPO);
			// console.log("inner HTML: " + await tpoLink.getAttribute('innerHTML'));
			// console.log("outer HTML: " + await tpoLink.getAttribute('outerHTML'));
		});
		
		it('should check the target course ' + TARGET_COURSE + ' data', async () => {
			let h1TPO = await driver.findElement(By.css("h1"));
			await driver.wait(until.elementIsVisible(h1TPO), 10000);
			
			// h3 - sections
			let h3s = await driver.findElements(By.css("h3"));
			expect(h3s).to.be.an('array').that.is.not.empty;
			
			var sections = []
			let i = 0;
			for (let element of h3s) {
				let section = (await element.getAttribute('innerText')).trim();
				sections.push(section);
				//console.log("%d. %s", i + 1, section);
				i++;
			}
			expect(sections).to.include('Gradivo').and.to.include('Lastni projekt');
		});

		
		it("should check 'ucilnica.fri.uni-lj.si' menu attributes", async () => {
			let menu = await driver.findElement(By.xpath("//div[@class='dropdown']/a"));
			console.log('-------');
			console.log("menu id: " + await menu.getAttribute('id'));
			console.log("menu label: " + await menu.getAttribute('aria-label'));
			console.log("menu expanded: " + await menu.getAttribute('aria-expanded'));
			console.log('-------');

			this.timeout(30000);
		});
		
		it('should check menu items', async () => {
			const MENU_ITEMS = [
				{a:1, b:'Pregledna ploĹĄÄa'}, {a:2, b:'Profil'}, {a:3, b:'Ocene'}, {a:4, b:'SporoÄila'}, 
				{a:5, b:'Nastavitve'}, {a:6, b:'Odjavi'}, {a:7, b:'Zamenjaj vlogo v...'}
			];
			
			let menuLinks = await driver.findElements(By.xpath("//a[@class='dropdown-item menu-action']"));
			let tmpMenuItem = [];
			for (let element of MENU_ITEMS) {
				tmpMenuItem.push(element.b.toLowerCase());
			}
			
			var menuItems = [];
			let i = 0;
			for (let element of menuLinks) {
				let menuItemName = (await element.	getAttribute('innerText')).trim();
				menuItems.push(menuItemName.toLowerCase());
				i++;
			}
			await expect(menuItems).to.have.members(tmpMenuItem).and.to.have.lengthOf(tmpMenuItem.length);
		});
		
		it('should check user logout', async () => {
			this.timeout(10000);
			
			// <a href="https://ucilnica.fri.uni-lj.si/login/logout.php?sesskey=pM85VMRzcB" class="dropdown-item menu-action" role="menuitem" data-title="logout,moodle" aria-labelledby="actionmenuaction-6">
			//	<i class="icon fa fa-sign-out fa-fw " aria-hidden="true"></i>
			//	<span class="menu-action-text" id="actionmenuaction-6">Odjavi</span>
			//</a>

			// [locate logout]
			let exitLink = await driver.findElement(By.xpath("//a[contains(text(),'Odjavi')]"));
			let exitItem = await exitLink.getAttribute('href');
			let textMenijaOdjava = await exitLink.getAttribute('innerText');
			//console.log("Exit menu: " + textMenijaOdjava);
			
			// [bye!]
			
			await exitLink.click();
			await expect(textMenijaOdjava).to.equal(txtLinkLogout);
		});
		
		it('should check logged out', async () => {
			let linkPrijava = await driver.findElement(By.linkText(txtLinkLogin));
			let href = await linkPrijava.getAttribute('href');
			await expect(href).to.be.a('string').and.satisfy(msg => msg.startsWith('https://ucilnica.fri.uni-lj.si'));
		});	
	});
}

testUcilnica();




/**
 * Meanwhile in the package.json...
 */

/*
seleniumExample
  | -- test
  |      | -- ucilnica-test.js
  | -- package.json
Spodnji del mora biti prisoten, ker vsebuje konfiguracijo za Mocha JavaScript testno skripto.
  "scripts": {
    "test": "npm run primer",
    "primer": "./node_modules/.bin/mocha test/ucilnica-test.js --timeout 10000",
  },
*/

/**
 * Test izvedemo iz osnovne mape projekta z eno od naslednjih dveh ukazov:
 *
 * npm test
 * ali
 * npm run primer
 * 
 */