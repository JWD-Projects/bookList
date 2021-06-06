// BookManager class
class BookManager {
// constructor with a paramater currentId set to 0 by default
  constructor(currentId = 0) {
      // initialize an empty array called books
      this._books = [];
    
      //initialize a currentId set to currentId
      this.currentId = currentId;
  }

  // function addBook creates an object and pushes it to our books array
  // should take in a name, genre and author and by default have an empty string
  addBook(name = '', genre = '', author = '') {
      // create an object for the newBook
      const newBook = {
          id: this.currentId++,
          name,
          genre,
          author
      }
          // your object should consist of properties id, name,genre and author with values added when we call this method
          // don't forget that this may require some parameters to be used as values
          // id should be unique and increment by 1 every new instance
          // if no argument is given, the properties should equal an empty string

      // push the newly created object to our books array
      // hint: best practice would be to access our books array using the get method
     this.books.push(newBook);
      
  }

  incrementID(){
     return this._currentid++
  }

  // function getter should return the value of our books array
  get books() { 
      return this._books;
  }

}

//outside the class, create an instance of BookManager

// add two books with the following properties
// "The Alchemist", "Life", "Paulo Coelho"
// "Time to Play", "Children's Book", "Bluey"

// console log our books array to check that the new books were added


const bookManagerInstance = new BookManager();


bookManagerInstance.addBook("The Alchemist", "Life", "Paulo Coelho");

bookManagerInstance.addBook("Time to Play", "Children's Book", "Bluey");

console.log(bookManagerInstance.books);


