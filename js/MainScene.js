import Player from "./Player.js";
export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    Player.preload(this);
  }

  create() {
    console.log("create");
    this.player = new Player({
      scene:this,
      x:40,
      y:40,
      texture:'female',
      frame:'townfolk_f_idle_1'
  });
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }
update(){
  this.player.update();
}
}
