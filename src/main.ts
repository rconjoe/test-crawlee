import { RequestQueue, CheerioCrawler } from "crawlee";

// request queue is list of shit you wanna scrape, whereas
// request handler is what you want to do on each one?

const requestQueue = await RequestQueue.open();
await requestQueue.addRequest({ url: 'https://crawlee.dev' });

const crawler = new CheerioCrawler({
    requestQueue,
    async requestHandler({ $, request }) {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}`)
    }
})

await crawler.run();
