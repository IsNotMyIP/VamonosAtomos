(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);
      this.load.image('H', 'assets/h1.png');

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.image('atom1', 'assets/atom1.png');
      this.load.image('atom2', 'assets/atom2.png');
      this.load.image('heisenberg', 'assets/heissenberg.png');
      this.load.image('olas', 'assets/olas.png')

      this.load.image('starfield', 'assets/textura_fondo.jpg');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['vamonosatomos'] = window['vamonosatomos'] || {};
  window['vamonosatomos'].Preloader = Preloader;

}());
