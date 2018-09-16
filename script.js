class SpaceShip {
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }

    colorInfo() {
        console.log('Spaceship color is: ' + this.color + ' !');
        return this;
    }

    sizeInfo() {
        console.log('Size is: ' + this.size + '(m)');
        return this;
    }

    modelInfo() {
        console.log('Type of this spaceship is: ' + this.type + ' !');
        return this;
    }
}

class Cutter extends SpaceShip {
    constructor(color, size, type, model, speed, personal) {
        super(color, size, type);
        this.model = model;
        this.speed = speed;
        this.personal = personal;
    }

    modelInfo() {
        console.log('Spaceship model is: ' + this.model );
        return this;
    }

    speedInfo() {
        console.log("Spaceship's speed is: " + this.speed);
        return this;
    }

    personalInfo() {
        console.log("Personal quantity is: " + this.personal);
        return this;
    }
}

class Corvette extends SpaceShip {
    constructor(color, size, type, weight, hight, tankVolume) {
        super(color, size, type);
        this.weight = weight;
        this.hight = hight;
        this.tankVolume = tankVolume;
    }
    
    weightInfo() {
        console.log('Weight is: ' + this.weight);
        return this;
    }

    hightInfo() {
        console.log('Hight is: ' + this.hight);
        return this;
    }

    tankVolumeInfo() {
        console.log('Tank volume is: ' + this.tankVolume + ' m^3');
        return this;
    }

}

class Frigate extends SpaceShip {
    constructor(color, size, type, company, yearOfStart, timeInSpace) {
        super(color, size, type);
        this.company = company;
        this.yearOfStart = yearOfStart;
        this.timeInSpace = timeInSpace;
    }

    companyInfo() {
        console.log('Company is: ' + this.company);
        return this;
    }

    yearOfStartInfo() {
        console.log('Launch was in ' + this.yearOfStart);
        return this;
    }

    timeInSpaceInfo() {
        console.log('Spaceship was in space ' + this.timeInSpace + ' days.');
        return this;
    }
}


const crew = new Frigate('blue', 52, 'Explorer', 'Nasa');

crew.colorInfo().sizeInfo().modelInfo().companyInfo();