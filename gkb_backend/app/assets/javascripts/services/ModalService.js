angular.module('adminApp')
.service('ModalService',
  function () {

        return {
            //returns value
            getProperty: function () {
                return property;
            },
            //sets property
            setProperty: function(value) {
                property = value;
            },
            test: function() {
              console.log("hello world form service")
            }
        };
    });