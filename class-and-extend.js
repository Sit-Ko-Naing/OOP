/*

const book = {
    title: "The MOuntain is You",
    year: "2022",
    getTitle: function () {
        return `this title is ${this.title}`;
    }
};

// var book1 = Object.create(book);
// book1.title = "Educated";
// book1.year = "2000";

var book1 = Object.create(book, {
    title: { value: "Atomic habits" },
    year: { value: "1990" },
});


console.log(book1);

console.log(book);

------------------------------------------------------------------------------------------------------------ */

// class


class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    setTitle() {
        this.title = "english";
        
    }
}

const book1 = new Book('Myanmar', "u anng", 2000);
console.log(book1);
book1.setTitle();
console.log(book1);

// --------------------------------------------------------------------------------------------------------

class greeting{
    static show() {
        console.log("good morning");
    }

    show1() {
        console.log("good nignt");
    }
}

const gre = new greeting();
gre.show1();
// gre.show();
greeting.show();

// ------------------------------------------------------------------------------------------------------------

// Extend

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    
    }
}

var mega = new Magazine("OOp", "kyky", 1876, "august");
console.log(mega);