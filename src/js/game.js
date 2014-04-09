(function() {
  'use strict';
  function Elemento (parent) {
      
      this.molecule = parent.elementName[1];
      //this.molecule = this.parent.elementName[Math.floor(Math.random() * 80)];
      this.sprite=null;
      this.initSprite= function (x, y) {
        this.sprite = parent.add.sprite(x, y, this.molecule);
      };
      this.text = null;
      this.style = { font: '30px Arial', fill: '#ff0044', align: 'center' };

      this.initText = function(x, y) {
        this.text = parent.add.text(x, y, this.molecule, this.style);
      };
      this.getType = function() {
        console.log(this.molecule);
      };
    }
  function Game() {
    this.elementName = ['H','Li','Na','K','Rb','Ce','Fr','Be','Mg','Ca','Sr','Ba','Ra','Sc','Y','Ti','Zr','Hf','Rf','V','Nb','Ta','Db','Cr','Mo','W','Sg',
      'Mn','Tc','Re','Bh','Fe','Ru','Os','Hs','Co','Rh','Ir','Mt','Ni','Pd','Pt','Ds','Cu','Ag','Au','Rg','Zn','Cd','Hg','B','Al','Ga','In','Tl','C','Si',
      'Ge','Sn','Pb','N','P','As','Sb','Bi','O','Se','Te','Po','F','Cl','Br','I','At','He','Ne','Ar','Kr','Xe','Rn'];

  }

  Game.prototype = {

    create: function () {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 100;

      this.bromo = new Elemento(this);
      this.bromo.initSprite(100,100);
      this.bromo.initText(50,50);
      this.bromo.getType();
      this.bromo.sprite.pivot.x = 37.5;
      this.bromo.sprite.pivot.y = 37.5;

    },

    update: function () {
      this.bromo.sprite.rotation += 0.01 * this.time.elapsed;



      /*
      var i;
      for(i=0; i< 1000; i++) {
        console.log(i);
        if (i>=999){
          this.bromo.sprite.kill();                   // Stop showing element
          this.bromo.text.visible = false;            //Delete text
        }
        
      }
      /*
      /*
      for (i=0, x=this.elementName.length; i < x; i++){
        console.log(this.elementName[i]);
      }
      */
      
      

     
    },
    
    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
