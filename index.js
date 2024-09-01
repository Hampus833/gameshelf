"use strict";

//import all files except pubsub

import { main_structure } from "./main_page/main_structure/main_structure.js";
import { header } from "./recurring_components/header/header.js";

//start app
function start_app() {

    main_structure.render_main_structure(document.querySelector("main"));
    header.render_header(document.querySelector("header"));
}
start_app()

// header.render_header(document.querySelector("main"));