export default class MainScene extends Phaser.Scene {
    constructor (){
        super("MainScene");
    }

    preload(){
        console.log("preload");
        this.preload.atlas('female', 'assets/images/female.png', 'assets/images/female_atlases.json');
    }

    create(){
        console.log("create")
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world,0,0,'female','townsfolk_f_idle_1');
        this.inputKeys = this.inputKeys.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }

    update(){
        console.log("update")
        const speed = 2.5;
        let playerVelocity = new haser.Math.Vector2();
        if(this.inputKeys.left.isDown){
            playerVelocity.x = -1;
        } else if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1;
        }
        if (this.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        } else if (this.inputKeys.down.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.scale(speed);
        this.player.setVelocity(playerVelocity.x,playerVelocity.y);
        
    }
}