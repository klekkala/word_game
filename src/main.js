var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a background...
var background = PIXI.Sprite.fromImage('_assets/background.png');
background.width = renderer.width;
background.height = renderer.height;

// add background to stage...
stage.addChild(background);

// create some textures from an image path
var texture1 = PIXI.Texture.fromImage('_assets/balloon.png');
var texture2 = PIXI.Texture.fromImage('_assets/cursor.png');
var texture3 = PIXI.Texture.fromImage('_assets/pop.png');

var noop = function () {
	console.log('click');
};


    var balloon = new PIXI.Sprite(texture1);
    balloon.buttonMode = true;

    balloon.anchor.set(0.5);

    balloon.position.x = 300;
    balloon.position.y =200;

    // make the button interactive...
    balloon.interactive = true;
	
		balloon
        // set the mousedown and touchstart callback...
        .on('mousedown', onButtonDown)
        .on('touchstart', onButtonDown)

        // set the mouseup and touchend callback...
        .on('mouseup', onButtonUp)
        .on('touchend', onButtonUp)
        .on('mouseupoutside', onButtonUp)
        .on('touchendoutside', onButtonUp);



        // you can also listen to click and tap events :

        //.on('click', noop)
        
	balloon.tap = noop;
	balloon.click = noop;


    // add it to the stage
    stage.addChild(balloon);

	

animate();

function animate() {
    // render the stage
  
    for(var i=0;i<100000;i++)
    {
      balloon.position.y+=0.00001;
    }
    renderer.render(stage);

    requestAnimationFrame(animate);
}

function onButtonDown()
{
    this.isdown = true;
    this.texture = texture3;
    this.alpha = 1;
}

function onButtonUp()
{
    this.isdown = false;

    if (this.isOver)
    {
        this.texture = texture3;
    }
    else
    {
        this.texture = texture3;
    }
}


