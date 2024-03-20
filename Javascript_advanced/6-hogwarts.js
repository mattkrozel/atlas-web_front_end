class studentHogwarts {
    constructor() {
        this.privateScore = 0;
        this.name = null;
    };
    changeScroreBy(points) {
        this.privateScore = this.privateScore + points;
    };
    setName(newName) {
        this.name = newName;
    };
    rewardStudent() {
        this.changeScroreBy(1);
    };
    penalizeStudent() {
        this.changeScroreBy(-1);
    };
    getScore() {
        return (this.name + ': ' + this.privateScore);
    };
};

let harry = new studentHogwarts();
harry.setName('Harry');
for (let i = 0; i < 4; i++) harry.rewardStudent()
console.log(harry.getScore());
let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for (let i = 0; i < 3; i++) draco.penalizeStudent()
console.log(draco.getScore());