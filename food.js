class Food {
    constructor() {
        this.image = loadImage('images/Milk.png')

    }

    display() {
        image(this.image, 100, 100)
    }

}