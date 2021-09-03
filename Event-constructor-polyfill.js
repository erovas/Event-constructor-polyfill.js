/*!
 * Event-constructor-polyfill.js v1.0.0
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * MIT License
 * https://github.com/erovas/Event-constructor-polyfill.js
 */
if(typeof Event != 'function'){
    //Save native object
    let native = Event;
    
    //Override
    window.Event = function(type, eventInitDict){
        eventInitDict = eventInitDict || { bubbles: false, cancelable: false }
        let evt = document.createEvent('Event');
        evt.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
        return evt;
    }

    //Copy native prototypes
    Object.setPrototypeOf(Event, native.prototype);
}