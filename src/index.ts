import * as Phaser from 'phaser';
/*
class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}
*/

const sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

class GameScene extends Phaser.Scene{
    //private square: Phaser.GameObjects.Rectangle & {body: Phaser.Physics.Arcade.Body};
    private square: any;
    
    constructor(){
        super(sceneConfig);
    }
    
    public create(){
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
        this.physics.add.existing(this.square);
    }
    
    public update(){
        const cursorKeys = this.input.keyboard.createCursorKeys();
 
        if (cursorKeys.up.isDown) {
          this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
          this.square.body.setVelocityY(500);
        } else {
          this.square.body.setVelocityY(0);
        }
         
        if (cursorKeys.right.isDown) {
          this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
          this.square.body.setVelocityX(-500);
        } else {
          this.square.body.setVelocityX(0);
        }
    }
}

const config = {
    title: 'Example',
    type: Phaser.AUTO,
    scale: {
        width: window.outerWidth,
        height: window.outerHeight,
    },
    scene: GameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    backgroundColor: '#000000',
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
    game.scale.refresh();
});