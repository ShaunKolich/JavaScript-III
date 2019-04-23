/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The value of this in a function will be a window object.
 * 2. If a function is called by a preceding dot. the object before that dot is the this.
 * 3. Whenever a constructor is used this refers that specific instance of the object.
 * 4. If you use call or apply this is explicitly defined.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function hello() {
    console.log(`${this.name} says hello`);
}
let firstName = {
    name: 'Shaun'
}

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding