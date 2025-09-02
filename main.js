class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this.length = ((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2) ** (1 / 2);
    }

    draw() {
        draw.fillStyle = "#a12c2c";
        line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
    }
}

class Wireframe {
    constructor() {
        this.points = [];
        this.lines = [];
    }

    addPoint(x, y) {
        this.points.push(new Point(x, y));
        this.lines = [];
        let j;
        let k;
        for (j = 0; j < this.points.length; j++) {
            for (k = 0; k < this.points.length; k++) {
                this.lines.push(new Line(this.points[j], this.points[k]));
            }
        }
    }

    centerX() {
        let sum = 0;
        for (i = 0; i < this.points.length; i++) {
            sum += this.points[i].x;
        }
        return x;
    }

    centerY() {
        let sum = 0;
        for (i = 0; i < this.points.length; i++) {
            sum += this.points[i].y;
        }
        return y;
    }

    draw() {
        let j;
        for (j = 0; j < this.lines.length; j++) {
            this.lines[j].draw();
        }
    }
}

window.onload = function () {
    canvasOnLoad();
    drawRandomTriangle();
}
window.onresize = function () {
    canvasResize();
    change = true;
}

let x;
let y;
let groundY = 260;
let change = true;

document.onmousemove = function (e) {
    x = Math.floor(e.clientX / (canvas.width / bufferImage.width));
    y = Math.floor(e.clientY / (canvas.height / bufferImage.height));
}

document.onclick = function () {
    let scaled_x = x * window.devicePixelRatio;
    let scaled_y = y * window.devicePixelRatio;
    wireframe.addPoint(scaled_x, scaled_y);
    change = true;
}
let wireframe = new Wireframe();


function drawLoop(timestamp) {

    if (keyboard.SPACE) {
        drawRandomTriangle();
    }

    if (change) {
        clear();
        wireframe.draw();
        applyBufferImage();
        change = false;
    }
    requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);

function drawRandomTriangle() {
    clear();
    wireframe = new Wireframe();
    wireframe.addPoint(Math.random() * bufferImage.width, Math.random() * bufferImage.height);
    wireframe.addPoint(Math.random() * bufferImage.width, Math.random() * bufferImage.height);
    wireframe.addPoint(Math.random() * bufferImage.width, Math.random() * bufferImage.height);
    wireframe.addPoint(Math.random() * bufferImage.width, Math.random() * bufferImage.height);
    wireframe.draw();
    applyBufferImage();
}

function line(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let magnitude = (deltaX ** 2 + deltaY ** 2) ** (1 / 2)
    let unitX = deltaX / magnitude;
    let unitY = deltaY / magnitude;
    let x = x1;
    let y = y1;
    for (i = 0; i < magnitude; i++) {
        rainbowPixel(Math.floor(x), Math.floor(y))
        x += unitX;
        y += unitY;
    }
}

function rainbowPixel(x, y) {
    let height = bufferImage.height;
    let width = bufferImage.width;
    draw.fillStyle = "rgb(" + 255 * x / width + "," + 255 * (y) / height + "," + 150 * (width - x) / width + ")";
    draw.fillRect(x, y, 1, 1);
}
