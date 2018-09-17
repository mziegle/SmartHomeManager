describe('TodoListController', function () {

    beforeEach(module('todoApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter 
        // names when matching
        $controller = _$controller_;
    }));

    describe('todos.remaining', function () {
        it('calculates the number of remaining todos', function () {
            var $scope = {};
            var controller = $controller('TodoListController', { $scope: $scope });

            expect(controller.remaining()).toBe(1);
        });
    });

    describe('todos.remove', function () {
        it('the function should exist', function () {
            var $scope = {};
            var controller = $controller('TodoListController', { $scope: $scope });

            expect(controller.remove).not.toBe(undefined);
        });
    });

    describe('todos.remove', function () {
        it('should remove a item from the todo list', function () {

            var $scope = {};
            var controller = $controller('TodoListController', { $scope: $scope });

            controller.todos = [
                { text: 'learn AngularJS', done: true },
                { text: 'build an AngularJS app', done: false }];

            var expected = [{ text: 'learn AngularJS', done: true }];
            controller.remove({ text: 'build an AngularJS app', done: false })

            expect(controller.todos).toEqual(expected);
        });
    });

    describe('todos.remove', function () {
        it('removing a item from a empty todo list should have no effect', function () {

            var $scope = {};
            var controller = $controller('TodoListController', { $scope: $scope });

            controller.todos = [];

            var expected = [];
            controller.remove({ text: 'learn AngularJS', done: true })

            expect(controller.todos).toEqual(expected);
        });
    });

});