// Function constructor
function FourWheeler(w,m, c, s, f) {
    this.wheels=w;
    this.model=m;
    this.color=c;
    this.speed=s;
    this.fuel=f;
}


// Parent object fro Object.create
let FourWheelerObject = {
    wheels:"metal",
    model:"root",
    color:"vibgyor",
    speed:"50",
    fuel:"petrol",
    setSpeed:function(speed1){
        this.speed=speed1
    }
}

// Store function contructor object here
var car1 = new FourWheeler("silver","boom","red",100,"petrol")


// Store Object.create here
var car2 = Object.create(FourWheelerObject)

export {car1, car2}