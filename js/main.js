var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', ClickTheFourElementsFsm.Boot);
game.state.add('Preloader', ClickTheFourElementsFsm.Preload);
game.state.add('MainMenu', ClickTheFourElementsFsm.MainMenu);

game.state.start('Boot');