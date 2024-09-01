"use strict";

export const pubsub = {
    listeners: {},
    subscribe: function (data) {
        const { event, listener } = data;

        if (this.listeners[event] === undefined) {
            this.listeners[event] = [listener];
        } else {
            this.listeners[event].push(listener);
        }
    },
    publish: function (data) {
        const { event, details } = data;

        if (this.listeners[event] === undefined) {
            return;
        } else {
            this.listeners[event].forEach(listener => {
                listener(details);
            })
        }
    }
}