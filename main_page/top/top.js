"use strict";

import { pubsub } from "../../pubsub/pubsub.js";

export const top = {

    render_top: function (parent_id) {

        parent_id.innerHTML = `
        <h1 id="title">GameShelf</h1>
        <p id="short_description">The perfect companion for keeping track of your game collection</p>
        <p id="random_quote">${this.random_quote()}</p>
        `
    },
    random_quote: function () {

        let quotes = ["“What is a man? A Miserable little pile of secrets!” – Castlevania: Symphony of the Night", "“You were almost a Jill sandwich!” – Resident Evil", "“War…war never changes” – Fallout", "“It’s dangerous to go alone, take this!” – The Legend of Zelda", "“Praise the sun!” – Dark Souls", "“Hey! Look! Listen! – The Legend of Zelda: Ocarina of Time", "“Stop right there, criminal scum!” – The Elder Scrolls IV: Oblivion", "“Snake? Snake? SNAKE!” – Metal Gear Solid",];

        let quotes_length = quotes.length;
        let random_number = Math.floor(Math.random() * quotes_length);

        return quotes[random_number];
    }
}