package myrestapp


import grails.rest.*
import grails.converters.*
import grails.transaction.Transactional
import static org.springframework.http.HttpStatus.*
import static org.springframework.http.HttpMethod.*

@Transactional(readOnly=true)
class BookController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]


    def index() {
        respond Book.list()
    }

    @Transactional
    def save(Book book){

        if(book.hasErrors()){
            respond book.errors, view:'create'
        }

        book.save flush:true
        withFormat {
            '*' {
                render status: CREATED
            }
        }
    }

    def show(Book book) {
        if(book == null) {
            render status:NOT_FOUND
        }
        else {
            respond book
        }
    }

    @Transactional
    def delete(Book book){

        if(book == null) {
            render status: NOT_FOUND
        }

        if(book.hasErrors()){
            respond book.errors, view:'create'
        }

        book.delete flush:true
        withFormat {
            '*' {
                render status: NO_CONTENT
            }
        }
    }

    @Transactional
    def update(Book book){
        if(book==null){
            render status: NOT_FOUND
        }

        if(book.hasErrors()){
            respond book.errors, view:'edit'
        }

        book.save flush: true

        withFormat{
            '*' {
                render status: OK
            }
        }
    }

    def bookPanel(){
    }
}
