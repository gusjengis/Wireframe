class Keyboard{
    constructor(){
        this.A = false;
        this.B = false;
        this.C = false;
        this.D = false;
        this.E = false;
        this.F = false;
        this.G = false;
        this.H = false;
        this.I = false;
        this.J = false;
        this.K = false;
        this.L = false;
        this.M = false;
        this.N = false;
        this.O = false;
        this.P = false;
        this.Q = false;
        this.R = false;
        this.S = false;
        this.T = false;
        this.U = false;
        this.V = false;
        this.W = false;
        this.X = false;
        this.Y = false;
        this.Z = false;

        this.CTRL = false;
        this.SHIFT = false;
        this.SPACE = false;
        this.ENTER = false;
        
        document.addEventListener('keydown', function(e){
            if(e.key == 'A' || e.key == 'a'){
                keyboard.A = true;
            } else if(e.key == 'B' || e.key == 'b'){
                keyboard.B = true;
            } else if(e.key == 'C' || e.key == 'c'){
                keyboard.C = true;
            } else if(e.key == 'D' || e.key == 'd'){
                keyboard.D = true;
            } else if(e.key == 'E' || e.key == 'e'){
                keyboard.E = true;
            } else if(e.key == 'F' || e.key == 'f'){
                keyboard.F = true;
            } else if(e.key == 'G' || e.key == 'g'){
                keyboard.G = true;
            } else if(e.key == 'H' || e.key == 'h'){
                keyboard.H = true;
            } else if(e.key == 'I' || e.key == 'i'){
                keyboard.I = true;
            } else if(e.key == 'J' || e.key == 'j'){
                keyboard.J = true;
            } else if(e.key == 'K' || e.key == 'j'){
                keyboard.K = true;
            } else if(e.key == 'L' || e.key == 'l'){
                keyboard.L = true;
            } else if(e.key == 'M' || e.key == 'm'){
                keyboard.M = true;
            } else if(e.key == 'N' || e.key == 'n'){
                keyboard.N = true;
            } else if(e.key == 'O' || e.key == 'o'){
                keyboard.O = true;
            } else if(e.key == 'P' || e.key == 'p'){
                keyboard.P = true;
            } else if(e.key == 'Q' || e.key == 'q'){
                keyboard.Q = true;
            } else if(e.key == 'R' || e.key == 'r'){
                keyboard.R = true;
            } else if(e.key == 'S' || e.key == 's'){
                keyboard.S = true;
            } else if(e.key == 'T' || e.key == 't'){
                keyboard.T = true;
            } else if(e.key == 'U' || e.key == 'u'){
                keyboard.U = true;
            } else if(e.key == 'V' || e.key == 'v'){
                keyboard.V = true;
            } else if(e.key == 'W' || e.key == 'w'){
                keyboard.W = true;
            } else if(e.key == 'X' || e.key == 'x'){
                keyboard.X = true;
            } else if(e.key == 'Y' || e.key == 'y'){
                keyboard.Y = true;
            } else if(e.key == 'Z' || e.key == 'z'){
                keyboard.Z = true;
            } else if(e.key == ' '){
                keyboard.SPACE = true;
            } else if(e.key == 'Enter'){
                keyboard.ENTER = true;
            } 
            
            keyboard.CTRL = e.ctrlKey;
            keyboard.SHIFT = e.shiftKey;

            // keyboard.log();
        });

        document.addEventListener('keyup', function(e){
            if(e.key == 'A' || e.key == 'a'){
                keyboard.A = false;
            } else if(e.key == 'B' || e.key == 'b'){
                keyboard.B = false;
            } else if(e.key == 'C' || e.key == 'c'){
                keyboard.C = false;
            } else if(e.key == 'D' || e.key == 'd'){
                keyboard.D = false;
            } else if(e.key == 'E' || e.key == 'e'){
                keyboard.E = false;
            } else if(e.key == 'F' || e.key == 'f'){
                keyboard.F = false;
            } else if(e.key == 'G' || e.key == 'g'){
                keyboard.G = false;
            } else if(e.key == 'H' || e.key == 'h'){
                keyboard.H = false;
            } else if(e.key == 'I' || e.key == 'i'){
                keyboard.I = false;
            } else if(e.key == 'J' || e.key == 'j'){
                keyboard.J = false;
            } else if(e.key == 'K' || e.key == 'j'){
                keyboard.K = false;
            } else if(e.key == 'L' || e.key == 'l'){
                keyboard.L = false;
            } else if(e.key == 'M' || e.key == 'm'){
                keyboard.M = false;
            } else if(e.key == 'N' || e.key == 'n'){
                keyboard.N = false;
            } else if(e.key == 'O' || e.key == 'o'){
                keyboard.O = false;
            } else if(e.key == 'P' || e.key == 'p'){
                keyboard.P = false;
            } else if(e.key == 'Q' || e.key == 'q'){
                keyboard.Q = false;
            } else if(e.key == 'R' || e.key == 'r'){
                keyboard.R = false;
            } else if(e.key == 'S' || e.key == 's'){
                keyboard.S = false;
            } else if(e.key == 'T' || e.key == 't'){
                keyboard.T = false;
            } else if(e.key == 'U' || e.key == 'u'){
                keyboard.U = false;
            } else if(e.key == 'V' || e.key == 'v'){
                keyboard.V = false;
            } else if(e.key == 'W' || e.key == 'w'){
                keyboard.W = false;
            } else if(e.key == 'X' || e.key == 'x'){
                keyboard.X = false;
            } else if(e.key == 'Y' || e.key == 'y'){
                keyboard.Y = false;
            } else if(e.key == 'Z' || e.key == 'z'){
                keyboard.Z = false;
            } else if(e.key == ' '){
                keyboard.SPACE = false;
            } else if(e.key == 'Enter'){
                keyboard.ENTER = false;
            } 

            keyboard.CTRL = e.ctrlKey;
            keyboard.SHIFT = e.shiftKey;

            // keyboard.log();
        });
    }

    log(){
        // console.clear();
        console.log("A: "+this.A+"\n"+
                    "B: "+this.B+"\n"+
                    "C: "+this.C+"\n"+
                    "D: "+this.D+"\n"+
                    "F: "+this.F+"\n"+
                    "G: "+this.G+"\n"+
                    "H: "+this.H+"\n"+
                    "I: "+this.I+"\n"+
                    "J: "+this.J+"\n"+
                    "K: "+this.K+"\n"+
                    "L: "+this.L+"\n"+
                    "M: "+this.M+"\n"+
                    "N: "+this.N+"\n"+
                    "O: "+this.O+"\n"+
                    "P: "+this.P+"\n"+
                    "Q: "+this.Q+"\n"+
                    "R: "+this.R+"\n"+
                    "S: "+this.S+"\n"+
                    "T: "+this.T+"\n"+
                    "U: "+this.U+"\n"+
                    "V: "+this.V+"\n"+
                    "W: "+this.W+"\n"+
                    "X: "+this.X+"\n"+
                    "Y: "+this.Y+"\n"+
                    "Z: "+this.Z+"\n"+
                    "Control: "+this.CTRL+"\n"+
                    "Shift: "+this.SHIFT+"\n"+
                    "Space: "+this.SPACE+"\n"+
                    "Enter: "+this.ENTER+"\n");
    }  
}


class Mouse{
    constructor(){
        this.X = 0;
        this.Y = 0;
        this.XVel = 0;
        this.YVel = 0;
        this.LClick = false;
        this.MClick = false;
        this.RClick = false;
        this.WheelVel = 0;

        this.prevClientX;
        this.prevClientY;

        document.addEventListener('mousedown', function(e){
            if(e.button == 0){
                mouse.LClick = true;
            } else if(e.button == 1){
                mouse.MClick = true;
            } else if(e.button == 2){
                mouse.RClick = true;
            }
            // mouse.log();
        });

        document.addEventListener('mouseup', function(e){
            if(e.button == 0){
                mouse.LClick = false;
            } else if(e.button == 1){
                mouse.MClick = false;
            } else if(e.button == 2){
                mouse.RClick = false;
            }
            // mouse.log();
        });            

        document.addEventListener('mousemove', function(e){
            mouse.X = e.clientX;
            mouse.Y = e.clientY;
            mouse.XVel = e.clientX - mouse.prevClientX;
            mouse.YVel = e.clientY - mouse.prevClientY;
            mouse.prevClientX = e.clientX;
            mouse.prevClientY = e.clientY;
            // mouse.log();
        });

        document.addEventListener('wheel', function(e){
            mouse.WheelVel = e.wheelDelta;
            // mouse.log();
        });
    }

    log(){
        // console.clear();
        console.log("X: "+this.X+"\n"+
                    "Y: "+this.Y+"\n"+
                    "XVel: "+this.XVel+"\n"+
                    "YVel: "+this.YVel+"\n"+
                    "LClick: "+this.LClick+"\n"+
                    "MClick: "+this.MClick+"\n"+
                    "RClick: "+this.RClick+"\n"+
                    "WheelVel: "+this.WheelVel+"\n");
    }   
}

let keyboard = new Keyboard();
let mouse = new Mouse();
