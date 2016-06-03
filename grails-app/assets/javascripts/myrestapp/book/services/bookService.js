//= wrapped

angular
    .module("myrestapp.book")
    .factory("bookService", bookService);

function bookService($http) {
    return {
        get:function () {
            return $http({
                method:'Get',url:'index.json'
            })
        },
        show:function (id) {
            return $http({
                method:'Get',url:'show/'+id
            })
        },
        add:function(data){
            return $http({
                method:'Post',url:'save',data:data
            })
        },
        delete:function (id) {
            return $http.delete('delete/'+id)
        },
        update:function(id,data){
            return $http.put('update/'+id,data)
        }
    }
}