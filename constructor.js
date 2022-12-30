// Constructor
 var str = "hello";
 var ob = new String("hello_string");

 console.log(typeof str);
 console.log(typeof ob);

// literal constructor

const book = {
    title : "Myanmar",
    year : "2021",
    price : "1200 mmk",

    getTitle : function () {
        return `this title is ${this.title}`;
    }
}

console.log(book);
console.log(book.getTitle());
console.log(Object.keys(book));
console.log(Object.values(book));


// way of constructor

function Magazine(a,b,c){
    this.title = a;
    this.author = b;
    this.year = c;
    this.getTitle = function(){
        return `this title is ${this.title}`;
    }
}

var mega = new Magazine("English","Sit","2022");
console.log(mega);
console.log(mega.getTitle());