function Magazine(title, author, year){
    this.title = title;
    this.author = author;
    this.year  = year;
}

Magazine.prototype.getTitle = function(){
    return `Book title is ${this.title} written by ${this.author} anf produded year in ${this.year}.`;
};

Magazine.prototype.getYear = function(){
    const year  = new Date().getFullYear - this.year;
    return `Book title is ${this.title} written by ${this.author} anf produded year in ${this.year}.`;
};

// Inheritence 

function News (title, author , year , month) {
    Magazine.call(this , title, author, year); // inhertence call 
    this.month = month;

}

News.prototype = Object.create(Magazine.prototype); // inheritence prototype

var page = new News("Myanmar", "U LK", "2022", "June");
console.log(page);
console.log(page.getTitle());
console.log(page.getYear());