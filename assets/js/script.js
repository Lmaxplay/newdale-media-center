var iframe = document.querySelector('#iframe'); 
iframe.setAttribute('src', 'http://newdale.mywire.org:8080'); 

console.clear();

let timeout;

function myFunction() {
    timeout = setTimeout(alertFunc, 3000);
}
  
function alertFunc() {
    console.clear();
}

(function () {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {        
        console.warn = function () { };
        window['console']['warn'] = function () { }; // For confirmation again
        this.addEventListener('load', function () {                        
            console.warn('Something bad happened.');
            window['console']['warn'] = function () { };
        });        
    };
})();