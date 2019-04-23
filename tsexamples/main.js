"use strict";
exports.__esModule = true;
var Skill;
(function (Skill) {
    Skill[Skill["Novice"] = 0] = "Novice";
    Skill[Skill["Apprentice"] = 1] = "Apprentice";
    Skill[Skill["Journeyman"] = 2] = "Journeyman";
    Skill[Skill["Technician"] = 3] = "Technician";
})(Skill || (Skill = {}));
;
var s = Skill.Technician;
var hasResource = false;
var total = 0;
var proxy = null;
var person = ['Caleb', 21];
var threat_lvl = [0, 1, 2];
var msg = 'error!';
var sentence = "Control Code: " + msg + "\nAuth: " + person + "\nLevel: " + s + "\nVerified: " + hasResource + "\nDefcon: " + threat_lvl + "\nTarget Lock: " + total + "\nLogistics: " + proxy + "\nLaunch Attack: Y/N?";
console.log(sentence);
var userData = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(userData)) {
    console.log(userData.name);
}
function fullTitle(operator) {
    console.log("Full Title: " + operator.name + " " + operator.level);
}
var p = {
    name: person[0],
    level: s
};
fullTitle(p);
