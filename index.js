
// Book Class: Represents a Book
class Book {
    constructor (title,author){
        this.title=title;
        this.author=author;
    }
}

// Add a Book Event
function showForm() {
    document.getElementById("book-form").style.display = "block";
    document.getElementById("add-button").style.display = "none";
}

// Submit research Book
function searchBook(){
    document.getElementById("result-research").style.display = "block";
    

    //Get form values
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;

     //Instantiate book
     const book=new Book(title,author); 

}
