
(function () {

  'use strict';
    
  MyOD.module('HomeModule', function (HomeModule, App, Backbone, Marionette, $, _) {
          
    HomeModule.Controller = Marionette.Controller.extend({ 

      initUi: function () {
        var view = new HomeModule.View();
        App.appLayout.getRegion('main').show(view);
      }

    });

  });

})();
