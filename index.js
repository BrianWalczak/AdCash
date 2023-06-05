const puppeteer = require('puppeteer');

class AdCash {
	async login(email, password, browserParams) {
		this.browser = await puppeteer.launch(browserParams || { headless: true }); //Launch the browser with user params
		this.page = await this.browser.newPage(); //Open a new tab in the browser
		
		await this.page.goto('https://adcash.myadcash.com/login'); //Go to the AdCash login page
		
		if(this.page.url() == 'https://adcash.myadcash.com/login') {
			await this.page.type('#loginform-username', email); //Fill out email
			await this.page.type('#loginform-password', password); //Fill out password
			await this.page.click('#submit-login'); //Click the login button
			await this.page.waitForNavigation(); //Wait until page gets redirected

			return 'You have been logged in to AdCash successfully.'; //End function
		}else{
			throw new Error("An error occurred with logging in to AdCash.");
			
			return 'An error occurred with logging in to AdCash.';
		}
	}
	
	async logout() {
		await this.browser.close(); //Close the browser which logs out the user

		return 'You have been logged out of AdCash.'; //End function
	}

	async start(id) {
		await this.page.goto(`https://adcash.myadcash.com/campaign/actions/${id}/run`); //Visit API that starts the campaign
		
		if(this.page.url() != `https://adcash.myadcash.com/campaign/actions/${id}/run`) {
			throw new Error("An error occurred with starting your AdCash campaign. Please ensure that you're logged in and you provided a valid Campaign ID.");

			 return "An error occurred with starting your AdCash campaign. Please ensure that you're logged in and you provided a valid Campaign ID."; //End function
		}
		
		return `Campaign #${id} has been started.`; //End function
	}

	async stop(id) {
		await this.page.goto(`https://adcash.myadcash.com/campaign/actions/${id}/pause`); //Visit API that stops the campaign
		
		if(this.page.url() != `https://adcash.myadcash.com/campaign/actions/${id}/pause`) {
			throw new Error("An error occurred with pausing your AdCash campaign. Please ensure that you're logged in and you provided a valid Campaign ID.");

			return "An error occurred with stopping your AdCash campaign. Please ensure that you're logged in and you provided a valid Campaign ID."; //End function
		}
		
		return `Campaign #${id} has been stopped.`; //End function
	}
}

module.exports = AdCash;
