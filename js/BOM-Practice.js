// BOM IS AN OBJECT
// EXAMPLE OF BOM
// let BOM = {
//     window: {
//         currentPage: 'www.vre.com',
//         previousPage: 'www.vbfei.com',
//     },
//     // METHODS
//     prompt: function (){
//         //PROMPT FUNCTION
//     }
// }


// let object = {
//     numTotal: 50,
//     location: 'TX',
//     time: 1200,
//
//     // METHOD
//     presentAll: function () {
//         return (this.numTotal + ' People in ' + this.location + ' at ' + this.time)
//     }
// }
// console.log(object.presentAll())
//
//
//
// // EXAMPLE FUNCTION
// var favNumber = 10; //GLOBAL//ADDED TO WINDOW OBJECT
//
// function add (num1){
//     var num2 = 10; //LOCAL//NOT ADDED TO WINDOW OBJECT
//     return num1 + num2;
// }
//
// console.log(add(favNumber));



(function detonate () {
    var time = 7;
    var interval = 1000;
    let timer = setInterval(updateTimer, interval);

    function updateTimer() {
        if (time === 0) {
            alert('LOSER');
            document.body.innerHTML = '';
        } else if (time > 0) {
            document.getElementById('timer').innerHTML = time;
        }
        time--;
    }

    function defuse(){
        clearInterval(timer);
        document.getElementById('header').innerHTML = 'Hello, World !';
        document.getElementById('message').innerHTML = 'You live to fight another day !'
        document.getElementById('body').innerHTML = '<video autoplay muted loop class="puppiness">\n' +
            '    <source src="../assets/puppiness.webm">\n' +
            '    <source src="../assets/puppiness.mp4">\n' +
            '    <source src="../assets/puppiness.ogv">\n' +
            '</video>';
        document.getElementById('button').innerHTML = 'Or do you ?'
        document.getElementById('button').addEventListener('click', newButton);
    }
    let newButton = function (){
        location.reload();

    }
    var defuser = document.getElementById('button');
    defuser.addEventListener('click', defuse);

})();


// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     window.location = 'https://www.google.com';
// }, delay);


