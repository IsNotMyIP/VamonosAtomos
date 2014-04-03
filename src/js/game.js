(function() {
  'use strict';

  function Game() {
    this.elementName = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;



      this.elementName = ['H','Li','Na','K','Rb','Ce','Fr','Be','Mg','Ca','Sr','Ba','Ra','Sc','Y','Ti','Zr','Hf','Rf','V','Nb','Ta','Db','Cr','Mo','W','Sg',
      'Mn','Tc','Re','Bh','Fe','Ru','Os','Hs','Co','Rh','Ir','Mt','Ni','Pd','Pt','Ds','Cu','Ag','Au','Rg','Zn','Cd','Hg','B','Al','Ga','In','Tl','C','Si',
      'Ge','Sn','Pb','N','P','As','Sb','Bi','O','Se','Te','Po','F','Cl','Br','I','At','He','Ne','Ar','Kr','Xe','Rn'];

    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

     
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
