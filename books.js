// Declare the class 
class Books {
    /* constructor() */
    //Use a constructor method to set up the template for the object
    constructor(title, author, ISBN, copies){
        this.title = title;
        this.author = author
        this.ISBN = ISBN
        this.copies = copies
    }
    /*avail()*/
    //Set up a getter method to run the getAvailability method
    get avail() {
        return this.getAvailability();
    }

    /*getAvailability()*/
    // This method checks if there are no copies, low on stock, or in stock.
    getAvailability(){
        if(this.copies === 0){
            return 'out of stock'
        } else if ( this.copies < 10 && this.copies > 0){
            return 'low stock'
        }
        return 'In stock'    
    }

    /*sell()*/
    /*This method decreases the amount of copies by the number of books sold. You can pass the number of books sold as an 
    argument. It also defaults to 1 if no argument is given */
    sell(numSold = 1){
        this.copies -= numSold

        return `${this.copies} left in inventory`
    }

    /*restock()*/
    /* This method will increase the amount of copies based the number you pass in as an aarugument. It also defaults
     to 5 if no argument is given */
    restock(numCopies = 5){
        this.copies += numCopies
        return `You now have ${this.copies} in stock.`
    }

    
}

/* TEST TEST TEST */
// Instantiate a new book
let book1 = new Books('Harry Potter & The Sorcerors Stone', 'JK Rowling', '1234asdf', 20 )
//Checking to make sure the book is all there.
console.log(book1)
//checking to see how many books are avail
console.log(book1.avail())
// Testing the sell method
console.log(book1.sell(5))
//Restock method
console.log(book1.restock(20))