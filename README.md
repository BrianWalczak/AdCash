# AdCash

> AdCash is an unofficial Node.js library that allows you to effortlessly automate your AdCash campaigns through Node.js, all powered by the [Puppeteer](https://www.npmjs.com/package/puppeteer) framework.

## Getting Started

### Installation

To use AdCash in your project, you'll also need to install [Puppeteer](https://www.npmjs.com/package/puppeteer). To install all the necessary libraries, run:

```bash
# Install the AdCash library
npm i adcash

# Install the Puppeteer framework
npm i puppeteer
```

In order for AdCash to work properly, you need to download a supported browser that can be used to automate Chrome. When you install Puppeteer, a recent version of
[Chrome for Testing](https://goo.gle/chrome-for-testing) will be automatically downloaded at the `$HOME/.cache/puppeteer` folder. This browser is known to work with Puppeteer.

To learn more about Puppeteer, you can visit the [Puppeteer documentation](https://pptr.dev/).


### Usage

To get started with automating your AdCash campaigns, you'll first need to authenticate with your AdCash account. Please note that you'll need to run the commands asynchronously. To do this, you can use:

```js
const AdCash = require('adcash');

(async () => {
	const adCash = new AdCash();
	await adCash.login('test@example.org', 'password123');
})();
```

By default, Puppeteer will use headless mode to automate your AdCash campaigns. If you would like to pass an argument for the Puppeteer browser, you can use:

```js
const AdCash = require('adcash');

(async () => {
	const adCash = new AdCash();
	await adCash.login('test@example.org', 'password123', { headless: false, args: ['--start-fullscreen'] });
})();
```


Please make sure to replace the email and password provided in the example above with your AdCash account credentials.

### Start or Stop

To start and stop your AdCash campaign, you can use the start() and stop() functions. An example of this would be:

```js
const AdCash = require('adcash');

(async () => {
	const adCash = new AdCash();
	await adCash.login('test@example.org', 'password123');

	adCash.start(12345678); //Starts the campaign
	//...//
	adCash.stop(12345678); //Stops the campaign
})();
```
When using this example, make sure to replace the digits with your AdCash Campaign ID. You do **NOT** need to run these command asynchronously.
