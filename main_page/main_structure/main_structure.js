"use strict";

import { pubsub } from "../../pubsub/pubsub.js";

export const main_structure = {

    render_main_structure: function (parent_id) {

        parent_id.innerHTML = `
        <header></header>
        <div id="top"></div>
        <div id="middle"></div>
        <div id="bottom"></div>
        `;


    }
}