/*
    SuitCount.js

    Leif Anderson
    copyright 2018-2019
    Dec. 27th, 2018
*/

class SuitCount { // an abstract notion of suit counting for card players

    constructor() {
        this.combinations = [];
    }

    generate_suit_combinations(low, high, sum) { 
        let combination = (p1,p2,p3,p4) => {
            this.p1 = p1;
            this.p2 = p2;
            this.p3 = p3;
            this.p4 = p4;
            return {'p1':this.p1,'p2':this.p2,'p3':this.p3,'p4':this.p4};
        };

        // brute force ftw
        for (let w=low; w<high; w++) {
            for (let x=low; x<high; x++) {
                for (let y=low; y<high; y++) {
                    for (let z=low; z<high; z++) {
                        if (w+x+y+z == sum) {
                            this.combinations.push(combination(w,x,y,z));
                        }
                    }
                }
            }
        }
    }

    shuffle() {
        let currentindex = this.combinations.length, temp, randomindex;
        while(0 !== currentindex) {
                randomindex = Math.floor(Math.random() * currentindex);
                currentindex--;
            temp = this.combinations[currentindex];
            this.combinations[currentindex] = this.combinations[randomindex];
            this.combinations[randomindex] = temp;
        };
    }

    print() {
        for (let i=0; i<this.combinations.length; i++) {
            console.log(this.combinations[i]);
        };
    }

    test() {
        this.generate_suit_combinations(0,8,13);
        this.shuffle();
        this.print();
    }
}

/*x = new SuitCount();
x.test();
console.log('100:',x.combinations[100]);*/
