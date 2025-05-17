import { RequestQueue, CheerioCrawler } from "crawlee";

// request queue is list of shit you wanna scrape, whereas
// request handler is what you want to do on each one.
//
// There is an implicit request queue in each crawler,
// and you can implicitly add requests to it with the first parameter of crawler.run:


const crawler = new CheerioCrawler({
    async requestHandler({ $, request }) {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`)
    }
});

await crawler.run(['https://crawlee.dev']);
