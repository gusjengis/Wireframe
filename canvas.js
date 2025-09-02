// document.body.style.zoom=1/window.devicePixelRatio;

var canvas = document.getElementById('canvas');
var viewportDraw = canvas.getContext('2d');
var bufferImage = document.createElement('canvas');
var draw = bufferImage.getContext('2d');
var glDraw = bufferImage.getContext('webgl');
const BufferHeight = 240;
// draw.translate(0.5, 0.5);

var backgroundColor = "rgba(0,0,0,1)";

function canvasOnLoad() {
        generateBufferImage();
        canvasResize();
}

function canvasResize() {
        // document.body.style.zoom=window.devicePixelRatio;
        document.body.style.zoom = 1 / window.devicePixelRatio;
        canvas.width = window.devicePixelRatio * document.documentElement.clientWidth;
        canvas.height = window.devicePixelRatio * document.documentElement.clientHeight;
        bufferImage.width = canvas.width / (canvas.height / BufferHeight);
        applyBufferImage();
}

function generateBufferImage() {

        bufferImage.width = canvas.width / (canvas.height / BufferHeight);
        bufferImage.height = BufferHeight;
        var height = bufferImage.height;
        var width = bufferImage.width;
        for (x = 0; x < width; x++) {
                for (y = 0; y < height; y++) {

                        var r = 255 * x / width;

                        var g = 255 * (y) / height;

                        var b = 100 * (width - x) / width;

                        draw.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';

                        draw.fillRect(x, y, 1, 1);
                }
        }
}

function applyBufferImage() {
        viewportDraw.imageSmoothingEnabled = false;
        viewportDraw.drawImage(bufferImage, 0, 0, canvas.width, canvas.height);
}

function clear() {
        draw.fillStyle = backgroundColor;
        draw.fillRect(0, 0, bufferImage.width, bufferImage.height);
}
