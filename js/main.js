var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', ClickTheFourElementsFsm.Boot);

game.state.start('Boot');