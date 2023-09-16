export default class MainScene extends Phaser.Scene {
    constructor (){
        super("MainScene");
    }

    preload(){
        consol.log("preload");
    }

    create(){
        console.log("create")
    }

    update(){
        console.log("update")
    }
}