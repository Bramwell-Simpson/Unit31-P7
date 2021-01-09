import anime from './anime-master/lib/anime.es.js'

//Targets the main serato image and fades it in over 3 seconds
//Then pauses for 5 seconds, then fades out again
anime({
    targets: '.serato-img-1',
    opacity: 1,
    duration: 3000,
    delay: 3000,
    endDelay: 3000,
    direction: 'alternate',
    easing: 'linear'
});

anime({
    targets: '.serato-img-2',
    opacity: 1,
    duration: 3000,
    delay: 13000,
    endDelay: 3000,
    direction: 'alternate',
    easing: 'linear'
});