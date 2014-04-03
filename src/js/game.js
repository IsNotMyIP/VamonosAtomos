(function() {
  'use strict';
  function Elemento (parent) {
      this.parent = parent;
      this.molecule = this.parent.elementName[Math.floor(Math.random() * 80)];
      this.sprite=null;
      this.init= function (x, y) {
        this.sprite = this.parent.add.sprite(x, y, 'Prueba');
      };
      this.getType = function() {
        console.log(this.nombre);
      };
    }
  function Game() {
    this.elementName = null;
    this.elementName = ['H','Li','Na','K','Rb','Ce','Fr','Be','Mg','Ca','Sr','Ba','Ra','Sc','Y','Ti','Zr','Hf','Rf','V','Nb','Ta','Db','Cr','Mo','W','Sg',
      'Mn','Tc','Re','Bh','Fe','Ru','Os','Hs','Co','Rh','Ir','Mt','Ni','Pd','Pt','Ds','Cu','Ag','Au','Rg','Zn','Cd','Hg','B','Al','Ga','In','Tl','C','Si',
      'Ge','Sn','Pb','N','P','As','Sb','Bi','O','Se','Te','Po','F','Cl','Br','I','At','He','Ne','Ar','Kr','Xe','Rn'];

  }

  Game.prototype = {

    create: function () {
      this.bromo = new Elemento(this);
      this.bromo.init(100,100);
    },

    update: function () {
      var i, x;
      /*
      for (i=0, x=this.elementName.length; i < x; i++){
        console.log(this.elementName[i]);
      }
      */
      
      this.bromo.getType();

     
    },
    
    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
