const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Listen for all network requests
  page.on('request', request => {
    console.log('Intercepted request:');
    console.log('  Method:', request.method());
    console.log('  URL:', request.url());
    console.log('  Headers:', request.headers());
    if (request.postData()) {
      console.log('  Request body:', request.postData());
    }
    request.continue(); // Allow the request to continue as usual
  });

  // Navigate to the website
  await page.goto('http://localhost:3000');

  // Close the browser
  await browser.close();
})();

