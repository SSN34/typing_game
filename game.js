class Word {
    constructor(word) {
        this.sliceIndex = 0;
        this.wordFill = "green";
        this.word = word;
        this.dimension = {
            width: word.length * 8 + 20,
            height: 28,
        };
        this.position = {
            x:
                Math.random() * (WIDTH - 2 * this.dimension.width) +
                this.dimension.width,
            y: 10,
        };
    }

    updatePosition(){
        this.position.y += 1;
    }

    drawWord() {
        ctx.strokeStyle = "#243763";
        ctx.lineWidth = 2;
        ctx.fillStyle = "#FFEBB7";
        ctx.beginPath();
        ctx.roundRect(
            this.position.x,
            this.position.y,
            this.dimension.width,
            this.dimension.height,
            8
        );
        ctx.fill();
        ctx.stroke();
        ctx.textAlign = "center";
        ctx.font = "bolder 16px monospace";
        ctx.fillStyle = this.wordFill;
        ctx.fillText(
            this.word.slice(0, this.sliceIndex) +
                new Array(this.word.length - this.sliceIndex).fill(" ").join(""),
            this.position.x + this.dimension.width / 2,
            this.position.y + 40 / 2
        );
        ctx.fillStyle = "grey";
        ctx.fillText(
            new Array(this.sliceIndex).fill(" ").join("") +
                this.word.slice(this.sliceIndex),
            this.position.x + this.dimension.width / 2,
            this.position.y + 40 / 2
        );
    }
}
