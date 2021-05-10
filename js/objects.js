(function () {

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    // 	firstName : "nathan",
    // 	lastName : "rodriguez"
    // }


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function (){
    // 	return `Hello from ${this.firstName} ${this.lastName}!`
    // }
    //
    // console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    // 	shoppers.forEach(function (name){
    // 		if(name.amount > 200) {
    // 			console.log(`Hello, ${name.name}, your total is ${name.amount}, your discount is ${name.amount * .12} your price after discount is ${name.amount - (name.amount * .12)}`)
    // 		}else{
    // 			console.log(`Hello, ${name.name}, you unfortunately do not meet the requirements for the discount.`)
    // 		}
    // 	});





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "Exile", author: {firstName: "Robert Anthony", lastName: "Salvatore" }},
        {title: "The Hobbit", author: {firstName: "J.R.R", lastName: "Tolkien" }},
        {title: "The Eye of the World", author: {firstName: "Robert", lastName: "Jordan"}},
        {title: "Alice's Adventures in Wonderland", author: {firstName: "Lewis", lastName: "Carol"}},
        {title: "The Way of Kings", author: {firstName: "Brandon", lastName: "Sanderson"}}
    ];



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (name,array){
        console.log(`Book #${array + 1} 
		Title: ${name.title}
		Author: ${name.author.firstName} ${name.author.lastName}
		--------`)
    })





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author){
        return newBooks = {title: title,
            author: author,
        }
    }

    createBook("The God of High School", "Yongje Park")

    console.log(newBooks)


    function showBookInfo(bookObj){
        console.log(`Title: ${bookObj.title}
		Author: ${bookObj.author}`)
    }


    showBookInfo(newBooks)

})()