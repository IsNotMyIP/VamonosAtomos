(function() {
  'use strict';
  function Elemento (parent) {
      
      //this.molecule = parent.elementName[1];
      this.molecule = parent.elementName[Math.floor(Math.random() * 80)];
      this.sprite=null;
      this.initSprite= function (x, y) {
        this.sprite = parent.add.sprite(x, y, 'H');
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

      this.starfield = this.game.add.sprite(0, 0, 'starfield');

      this.bromo = new Elemento(this);
      this.bromo.initSprite(100,100);
      this.bromo.initText(50,50);
      this.bromo.getType();
      this.bromo.sprite.pivot.x = 37.5;
      this.bromo.sprite.pivot.y = 37.5;

      this.letter1 = 0;
      this.letter2 = 0;

      //this.letter1text = null;
      //this.letter2text = null;
      //this.letter1text = this.game.add.text(100, 100, '0', this.style);
      //this.letter2text = this.game.add.text(120, 100, '0', this.style);

      this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY,'', { fontSize: '84px', fill: '#fff' });
      this.stringAtom = this.game.add.text(70, 100, 'Atom: ' , this.style);
      this.stringAll = this.game.add.text(100, 100, this.stringAtom + this.letter1 + this.letter2 , this.style);


    },

    update: function () {
      this.bromo.sprite.rotation += 0.01 * this.time.elapsed;
      this.bromo.sprite.y += 0.08 * this.time.elapsed;
      this.bromo.text.y += 0.08 * this.time.elapsed;


      this.stateText.anchor.setTo(0.5, 0.5);
      this.stateText.visible = false;
      this.stringAll.content = this.stringAtom + this.letter1 + this.letter2;

      if(this.letter1 === 0){     
        if(this.input.keyboard.isDown(Phaser.Keyboard.A)){
          this.letter1 = 'a';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.B)){
          this.letter1 = 'b';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.C)){
          this.letter1 = 'c';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
          this.letter1 = 'd';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.E)){
          this.letter1 = 'e';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.F)){
          this.letter1 = 'f';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.G)){
          this.letter1 = 'g';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.H)){
          this.letter1 = 'h';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.I)){
          this.letter1 = 'i';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.J)){
          this.letter1 = 'j';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.K)){
          this.letter1 = 'k';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.L)){
          this.letter1 = 'l';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.M)){
          this.letter1 = 'm';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.N)){
          this.letter1 = 'n';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.O)){
          this.letter1 = 'o';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.P)){
          this.letter1 = 'p';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Q)){
          this.letter1 = 'q';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.R)){
          this.letter1 = 'r';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.S)){
          this.letter1 = 's';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.T)){
          this.letter1 = 't';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.U)){
          this.letter1 = 'u';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.V)){
          this.letter1 = 'v';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.W)){
          this.letter1 = 'w';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.X)){
          this.letter1 = 'x';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Y)){
          this.letter1 = 'y';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Z)){
          this.letter1 = 'z';
        }
      }
      if(this.letter1 !== 0){
        if(this.input.keyboard.isDown(Phaser.Keyboard.A)){
          this.letter2 = 'a';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.B)){
          this.letter2 = 'b';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.C)){
          this.letter2 = 'c';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
          this.letter2 = 'd';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.E)){
          this.letter2 = 'e';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.F)){
          this.letter2 = 'f';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.G)){
          this.letter2 = 'g';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.H)){
          this.letter2 = 'h';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.I)){
          this.letter2 = 'i';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.J)){
          this.letter2 = 'j';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.K)){
          this.letter2 = 'k';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.L)){
          this.letter2 = 'l';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.M)){
          this.letter2 = 'm';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.N)){
          this.letter2 = 'n';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.O)){
          this.letter2 = 'o';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.P)){
          this.letter2 = 'p';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Q)){
          this.letter2 = 'q';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.R)){
          this.letter2 = 'r';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.S)){
          this.letter2 = 's';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.T)){
          this.letter2 = 't';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.U)){
          this.letter2 = 'u';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.V)){
          this.letter2 = 'v';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.W)){
          this.letter2 = 'w';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.X)){
          this.letter2 = 'x';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Y)){
          this.letter2 = 'y';
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Z)){
          this.letter2 = 'z';
        }
      }
      if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && ((this.letter1 !== 0) || (this.letter2 !== 0))){
        console.log('adios');
        this.letter1 = 0;
        this.letter2 = 0;
      }

     
    },
    
    onInputDown: function () {
      this.game.state.start('menu');
    }

    /*compare: function (element) {
      if(this.letter1 + this.letter2 == element.molecule) {
        element.sprite.kill();
      }
    }*/

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
