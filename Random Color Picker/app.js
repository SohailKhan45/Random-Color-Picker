const getColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, '0'); 
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    const colorCode = '#' + redHex + greenHex + blueHex;
    document.getElementById('color').innerText = colorCode;
    document.body.style.backgroundColor = colorCode;
}
document.getElementById('btn').addEventListener('click',getColor);