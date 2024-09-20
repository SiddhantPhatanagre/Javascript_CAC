//IIFE (Immediately Invoked Function Expression)
//its executed right after it is defined

(function() {
    console.log('This is an IIFE!'); 
})();

//second set of parentheses () immediately invokes the function.
//it is used to Avoid polluting the global namespace;

//IFE with Parameters:
(function(a, b) {
    console.log(a + b);  // Output: 7
})(3, 4);