const express = require('express')
const puppeteer = require('puppeteer')
const axios = require('axios');


function createServer() {
    const app = express()
    const port = 3000

    app.get('/test', async (req, res) => {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.goto('https://example.com');
      
      /*await page.setRequestInterception(true);
      page.on("request", async (request) => {
        const response = await axios.get(request.url())
        const data = await response.text();
        request.respond({
          status: response.status,
          contentType: response.type,
          body: data,
        });
      });*/

     setTimeout(function() {
      browser.close();
        return res.status(200).json({"done": "done"});
     }, 1000);
     
    })
    return app;
}

module.exports = createServer

