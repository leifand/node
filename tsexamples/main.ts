export {}
enum Skill {Novice, Apprentice, Journeyman, Technician};
let s: Skill = Skill.Technician;
let hasResource: boolean = false;
let total: number = 0;
let proxy: object = null;
let person: [string, number] = ['Caleb', 21];
let threat_lvl: number[] = [0,1,2];
let msg: string = 'error!';
let sentence: string = `Control Code: ${msg}
Auth: ${person}
Level: ${s}
Verified: ${hasResource}
Defcon: ${threat_lvl}
Target Lock: ${total}
Logistics: ${proxy}
Launch Attack: Y/N?`;
console.log(sentence);
let userData: unknown = 10;
function hasName(obj: any): obj is {name: string}{
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if(hasName(userData)) {
    console.log(userData.name);
}
function fullTitle(operator: {name: string, level: Skill}) {
    console.log(`Full Title: ${operator.name} ${operator.level}`);
}
let p = {
    name: person[0],
    level: s
};
fullTitle(p);
