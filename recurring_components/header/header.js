"use strict";

import { pubsub } from "../../pubsub/pubsub.js";

export const header = {

    render_header: function (parent_id) {

        parent_id.innerHTML = `
        <div id="logo">
            <h2>GameShelf</h2>
        </div>
        <div id="header_links">
            <p id="all_games_button">games</p>
            <p id="sign_up">sign up</p>
            <p id="log_in">log in</p>
            <input type="text" id="searchbar" name="search" placeholder="search"></input>
        </div>
        `;

    }
}
