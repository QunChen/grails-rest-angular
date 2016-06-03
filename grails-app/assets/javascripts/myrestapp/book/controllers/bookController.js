//= wrapped
angular.module('myrestapp.book').controller("BookController",BookController);

function BookController(bookService,contextPath) {

   var bookCtrl=this;

    bookCtrl.bookData =[]

    bookCtrl.selected=""

    bookCtrl.updated=""

    bookCtrl.contextPath=contextPath

    getAll()

    bookCtrl.add = function(book){
        if(book.title!=""){
            saveNewBook(book)
        }
    }

    function saveNewBook(book){
        var data={'title':book.title}
        bookService.add(data).then(function(response){
            getAll()
            book.title = ""
        })
    }

    function getAll(){
        bookService.get().then(function (resposnse) {
            bookCtrl.bookData=resposnse.data

        })
    }

    bookCtrl.delete = function deleteBook(id){
        bookService.delete(id).then(function(response){
            getAll()
        })

    }

    bookCtrl.show = function show(id){
        bookService.show(id).then(function(response){
           bookCtrl.selected=response.data
        })
    }

    bookCtrl.edit = function edit(id){
        bookService.show(id).then(function(response){
            bookCtrl.updated=response.data
        })
    }

    bookCtrl.update = function update(book){
        var data={'id':book.id,'title':book.title}
        bookService.update(book.id,data).then(function(response){
            getAll()
            bookCtrl.updated=""
        })
    }
}