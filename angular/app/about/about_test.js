'use strict';

describe('myApp.about module', function() {

  beforeEach(module('myApp.about'));

  describe('about controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutCtrl = $controller('aboutCtrl');
      expect(aboutCtrl).toBeDefined();
    }));

  });
});