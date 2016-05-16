angular.module('adminApp')
.service('ModalService',
  function () {
        var property = 'First';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            },
            test: function() {
              console.log("hello world form service")
            }
        };
    });