(function() {
  'use strict';

  function Game() {
    this.elementName = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      
    },

    
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
