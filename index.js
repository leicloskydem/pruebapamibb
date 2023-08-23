const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
alert('quee biennnn vas a ser mía el resto de tu vida y t voy a hacer feli con muchos perritos y gatitos')

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
 noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

})