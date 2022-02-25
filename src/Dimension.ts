export default class Dimension {
    constructor (readonly width: number, readonly height: number, readonly lenght: number) {}

    getVolume() {
        return (this.width/100 * this.height/100 * this.lenght/100) 
    }
}