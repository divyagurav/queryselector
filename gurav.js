var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
// var secondItem = document.querySelectorAll('li:nth-child(2)');
// secondItem.style.Color = 'green';
