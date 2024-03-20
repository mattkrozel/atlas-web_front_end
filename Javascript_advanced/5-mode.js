function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
};

function main () {
    spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    theParagraph = document.createElement('p');
    theParagraph.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(theParagraph);
    spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.onclick = function() {
        spooky();
    };
    document.body.appendChild(spookyButton);
    darkButton = document.createElement('button');
    darkButton.innerHTML = 'Dark mode';
    darkButton.onclick = function() {
        darkMode();
    };
    document.body.appendChild(darkButton);
    screamButton = document.createElement('button');
    screamButton.innerHTML = 'Scream mode';
    screamButton.onclick = function() {
        screamMode();
    };
    document.body.appendChild(screamButton);

};

main();