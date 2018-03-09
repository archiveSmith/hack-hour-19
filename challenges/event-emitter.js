'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.listeners = {};
}

EventEmitter.prototype.on = function(event, func) {
  if (this.listeners.hasOwnProperty(event)) this.listeners[event].push(func);
  else {
    this.listeners[event] = [];
    this.listeners[event].push(func);
  }
};

EventEmitter.prototype.trigger = function(event, ...args) {
  console.log(args);
  if (this.listeners.hasOwnProperty(event)) {
    this.listeners[event].forEach(func => {
      func(args);
    });
  }
};

let instance = new EventEmitter();
instance.on('Cheerio', function() {
  console.log('Suck my D');
});
instance.on('Cheerio', function(x) {
  console.log('Suck my C');
  console.log('This is my number: ', x[0]);
});
instance.on('Cheerio', function() {
  console.log('Suck my P');
});
instance.trigger('Cheerio',1,2,3);

module.exports = EventEmitter;