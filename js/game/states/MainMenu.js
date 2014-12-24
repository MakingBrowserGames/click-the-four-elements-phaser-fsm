ClickTheFourElementsFsm.MainMenu = function() {

  var bmdElement1;

};

ClickTheFourElementsFsm.MainMenu.prototype = {
  create: function() {
    var bmdElement1, spriteElement1,
        bmdElement2, spriteElement2,
        bmdElement3, spriteElement3,
        bmdElement4, spriteElement4,
        widthElement, heightElement;

    widthElement =  this.game.width/2;
    heightElement = this.game.height/2;

    bmdElement1 = this.game.add.bitmapData(widthElement, heightElement);
    bmdElement1.ctx.fillStyle = '#800';
    bmdElement1.ctx.fillRect(0,0, widthElement, heightElement);

    bmdElement2 = this.game.add.bitmapData(widthElement, heightElement);
    bmdElement2.ctx.fillStyle = '#f40';
    bmdElement2.ctx.fillRect(0,0, widthElement, heightElement);

    bmdElement3 = this.game.add.bitmapData(widthElement, heightElement);
    bmdElement3.ctx.fillStyle = '#0cf';
    bmdElement3.ctx.fillRect(0,0, widthElement, heightElement);

    bmdElement4 = this.game.add.bitmapData(widthElement, heightElement);
    bmdElement4.ctx.fillStyle = '#29f';
    bmdElement4.ctx.fillRect(0,0, widthElement, heightElement);

    spriteElement1 = this.game.add.sprite(0,0, bmdElement1);
    spriteElement2 = this.game.add.sprite(widthElement,0, bmdElement2);
    spriteElement3 = this.game.add.sprite(0,heightElement, bmdElement3);
    spriteElement4 = this.game.add.sprite(widthElement,heightElement, bmdElement4);

  },
  update: function() {

  }
};