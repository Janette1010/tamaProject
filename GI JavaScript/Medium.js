/* Medium */
var popout = prompt("Type Something");
if (popout === popout.toUpperCase()) {
    alert("user is shouting");
}
else if (popout === popout.toLowerCase()) {
    alert('user is whispering');
}
else {
    alert('user is speaking normal');
}