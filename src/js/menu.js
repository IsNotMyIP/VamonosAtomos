(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.starfield = this.game.add.sprite(0, 0, 'starfield');

      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'Normal   Hard   Heissenberg' );
      this.titleTxt.align = 'center';
      this.titleTxt.x = this.game.width / 2 - this.titleTxt.textWidth / 2;

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'Choose the level of difficulty\nUsing A, S, D');
      this.startTxt.align = 'center';
      this.startTxt.x = this.game.width / 2 - this.startTxt.textWidth / 2;

      this.input.onDown.add(this.onDown, this);

      this.atom1 = this.game.add.sprite(0, 400, 'atom1');
      this.atom1 = this.game.add.sprite(200, 400, 'atom2');
      this.atom1 = this.game.add.sprite(400, 400, 'heisenberg');

      window['vamonosatomos'].Global.level = 0;

      this.rght = true;
      this.lft = false;

      this.waveCounter = this.time.now;

      this.waves = this.game.add.sprite(-60, 530, 'olas');

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


      if(this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
        this.game.state.start('game');
        window['vamonosatomos'].Global.level = 1;
     }

      if(this.input.keyboard.isDown(Phaser.Keyboard.A)){
        window['vamonosatomos'].Global.level = 1;
        this.game.state.start('game');
      }
      if(this.input.keyboard.isDown(Phaser.Keyboard.S)){
        window['vamonosatomos'].Global.level = 2;
        this.game.state.start('game');
      }
      if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
        window['vamonosatomos'].Global.level = 3;
        this.game.state.start('game');
      }

    },

    onDown: function () {
      window['vamonosatomos'].Global.level = 1;
      this.game.state.start('game');
    }
  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Menu = Menu;

}());
