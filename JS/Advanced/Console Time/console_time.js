// The console.time() method starts a timer you can use to track how long an operation takes

// You give each timer a unique name, and may have up to 10,000 timers running on a given page

// When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started

// Let's see how long someone takes to close the alert box

console.time('customTimerName');
alert('Click to continue');
console.timeEnd("customTimerName");