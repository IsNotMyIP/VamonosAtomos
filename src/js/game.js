(function() {
  'use strict';
  function Elemento (parent) {
      
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
      this.style = { font: '30px Arial', fill: '#ff0044', align: 'center' };

      this.letter1 = 0;
      this.letter2 = 0;

      this.text = this.game.add.text(80, 30, 'Atom :' + this.letter1 + this.letter2 , this.style);
      this.text.anchor.setTo(0.5, 0.5);

      this.atoms = new Array(10);
      
      this.counter = 0;
      this.waveCounter = this.time.now;

      this.run = 0;

      this.resetLetter = this.time.now;
      window['vamonosatomos'].Global.score = 0;

      this.waves = this.game.add.sprite(-60, 530, 'olas');

      this.rght = true;
      this.lft = false;

      while(this.counter < window['vamonosatomos'].Global.level) {
        var rand = Math.random()* this.game.width;

        this.atoms[this.counter] = new Elemento(this);
        this.atoms[this.counter].initSprite (rand, 0);
        this.atoms[this.counter].initText (rand -50 , -70);
        this.atoms[this.counter].getType();
        this.atoms[this.counter].sprite.pivot.x = 37.5;
        this.atoms[this.counter].sprite.pivot.y = 37.5;

        this.counter++;
      }
    },

    update: function () {

      if(this.time.now - this.waveCounter > 2000) {
        this.waveCounter = this.time.now;
        if(this.rght){
          this.rght = false;
          this.lft = true;
        }
        else if(this.lft){
          this.rght = true;
          this.lft = false;
        }
      }

      if(this.rght){
        this.waves.x -= 0.07 * this.time.elapsed;
      }
      if(this.lft){
        this.waves.x += 0.07 * this.time.elapsed;
      }

      if(this.time.now - this.resetLetter > 500) {
        this.letter1 = 0;
        this.letter2 = 0;
      }

      this.text.setText('Score: ' + window['vamonosatomos'].Global.score);

      if(this.letter1 === 0){     
        if(this.input.keyboard.isDown(Phaser.Keyboard.A)){
          this.letter1 = 'a';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.B)){
          this.letter1 = 'b';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.C)){
          this.letter1 = 'c';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
          this.letter1 = 'd';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.E)){
          this.letter1 = 'e';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.F)){
          this.letter1 = 'f';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.G)){
          this.letter1 = 'g';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.H)){
          this.letter1 = 'h';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.I)){
          this.letter1 = 'i';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.J)){
          this.letter1 = 'j';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.K)){
          this.letter1 = 'k';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.L)){
          this.letter1 = 'l';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.M)){
          this.letter1 = 'm';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.N)){
          this.letter1 = 'n';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.O)){
          this.letter1 = 'o';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.P)){
          this.letter1 = 'p';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Q)){
          this.letter1 = 'q';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.R)){
          this.letter1 = 'r';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.S)){
          this.letter1 = 's';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.T)){
          this.letter1 = 't';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.U)){
          this.letter1 = 'u';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.V)){
          this.letter1 = 'v';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.W)){
          this.letter1 = 'w';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.X)){
          this.letter1 = 'x';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Y)){
          this.letter1 = 'y';
          this.resetLetter = this.time.now;
        }
        else if(this.input.keyboard.isDown(Phaser.Keyboard.Z)){
          this.letter1 = 'z';
          this.resetLetter = this.time.now;
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

      for(var i = 0; i < window['vamonosatomos'].Global.level; i++) {
         if(this.letter1 + this.letter2 === this.atoms[i].molecule.toLowerCase()){
           this.atoms[i].text.visible = false;
           this.atoms[i].sprite.kill();
           this.letter1 = 0;
           this.letter2 = 0;
           this.run += 0.1;
           window['vamonosatomos'].Global.score++;
           
           var rand = Math.random()* this.game.width;
           this.atoms[i] = new Elemento(this);
           this.atoms[i].initSprite (rand, 0);
           this.atoms[i].initText (rand -50 , -70);
           this.atoms[i].getType();
           this.atoms[i].sprite.pivot.x = 37.5;
           this.atoms[i].sprite.pivot.y = 37.5;
          }
        
      }

      for(var i = 0; i < window['vamonosatomos'].Global.level; i++) {
         if(this.letter1 === this.atoms[i].molecule.toLowerCase()){
           this.atoms[i].text.visible = false;
           this.atoms[i].sprite.kill();
           this.letter1 = 0; 
           this.letter2 = 0;
           this.run += 0.1;
           window['vamonosatomos'].Global.score++;


           var rand = Math.random()* this.game.width;
           this.atoms[i] = new Elemento(this);
           this.atoms[i].initSprite (rand, 0);
           this.atoms[i].initText (rand -50 , -70);
           this.atoms[i].getType();
           this.atoms[i].sprite.pivot.x = 37.5;
           this.atoms[i].sprite.pivot.y = 37.5;
         }
      }
     
      for(var i = 0; i < window['vamonosatomos'].Global.level; i++) {
          this.atoms[i].sprite.rotation += 0.01 * this.time.elapsed;
          this.atoms[i].sprite.y += 0.08 * this.time.elapsed + this.run;
          this.atoms[i].text.y += 0.08 * this.time.elapsed + this.run;
      }

      for(var i = 0; i < window['vamonosatomos'].Global.level; i++) {
        if(this.atoms[i].sprite.x < 50){
          this.atoms[i].sprite.x += 50;
          this.atoms[i].text.x += 50;
        }
      }

      for(var i = 0; i < window['vamonosatomos'].Global.level; i++) {
        if(this.atoms[i].sprite.y > 640){
          this.game.state.start('menu');
        }
      }
     
    },
    
    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Game = Game;

}());
