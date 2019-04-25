/**
 * @description index
 */

abc => {}
var funcObj =  {
    draw: () => {
        document.querySelector(".inner").innerHTML = '<p>' + Math.floor(Math.random() * (88 + 1)) + '</p>';
    }
}
funcObj.draw();