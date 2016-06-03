describe("myrestapp module", function() {

    beforeEach(angular.mock.module("myrestapp", function() {
    }));

    describe("bookService", function() {

        var bookService;

        beforeEach(angular.mock.inject(function(_bookService_) {
            bookService = _bookService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
