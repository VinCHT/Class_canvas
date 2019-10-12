class Canvas {
    constructor(x, y , down) {
        this.x=x;
        this.y=y,
        this.down=down
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const PenColor= document.querySelector('input[name=penColor]')
        const PenWidth= document.querySelector('input[name=penWidth]')
        const annuler = document.querySelector('#annuler') // PE A AFFACER


        ctx.strokeStyle='#FF0000' // en red
        ctx.lineJoin='round';
        ctx.lineCap="round";
        ctx.lineWidth=5;

        annuler.addEventListener('click', effacer);
        canvas.addEventListener('mousedown', penDown);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', noDown);
        canvas.addEventListener('mouseout', noDown);


        function noDown () {
            down= false
           
        }

        function draw(e) {
        console.log('move');
            if(!down)return;
            ctx.lineWidth=PenWidth.value;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(e.offsetX,e.offsetY)
            ctx.stroke();
            ctx.strokeStyle=PenColor.value;
            [this.x,this.y] = [e.offsetX,e.offsetY];            
        }
        
        function penDown(e) {
            console.log('down');
            down=true;
            [this.x,this.y]=[e.offSetX, e.offSetY]
            console.log(e);
        }

        function effacer() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

    }

   


}

let MonCanvas = new Canvas (0,0,false);













  
