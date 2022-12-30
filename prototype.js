//Constructor
/*
function Magazine(a,b,c){
    this.title = a;
    this.author = b;
    this.year = c;
    this.getTitle = function(){
        return `Book title is ${this.title} written by ${this.author} and produced at ${this.year} years.`;
    };
}

var mega = new Magazine("OOP","mgmg","2022");
console.log(mega);
console.log(mega.getTitle ());
console.log(mega.title);

*/

function Magazine(a,b,c){
    this.title = a;
    this.author = b;
    this.year = c;

}
  

// prototype

Magazine.prototype.getTitle = function(){

    return `Book title is ${this.title} written by ${this.author} and produced at ${this.year} years.`;
};


var mega = new Magazine("OOP","mgmg","2000");
console.log(mega);
console.log(mega.getTitle ());
console.log(mega.title);

Magazine.prototype.getYears = function(){
    const year = new Date().getFullYear()- this.year;
    console.log(year);
    return `this ${this.title} is written by ${this.author} and years is ${year}`;
}

console.log(mega.getYears());