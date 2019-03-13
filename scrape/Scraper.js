const axios = require('axios');
const cheerio = require('cheerio');

class Scraper {
    
    /*state = {
        ERROR : new Symbol('error'),
        WAITING : new Symbol('waiting'),
        SUCCESS : new Symbol('success')
    };*/
    
    constructor() {
        this.sym = new Symbol();
        this.data = [];
        this.url = null;
    }
}

let get_data = html => {
    data = [];
    const $ = cheerio.load(html);
    $('table.itemlist tr td:nth-child(3)').each((i,elem)=>{
        data.push({
            title:$(elem).text(),
            link:$(elem).find('a.storylink').attr('href')
        });
    });
    console.log(data);
}

const url = 'https://news.ycombinator.com';
axios.get(url).then(response=>{get_data(response.data);}).catch(error=>{console.log(error);})