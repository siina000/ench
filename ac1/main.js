enchant();
var game;

Bear = Class.create(Sprite,
{
	initialize: function(x, y){
		Sprite.call(this, 32, 32);
		this.image = game.assets['chara7.png'];
		this.x = x;
		this.y = y;

		this.tx = this.x;
		this.tx = this.y;
		this.frame = 0;
		game.rootScene.addChild(this);
	},
	onenterframe: function(){
		/*if (this.x < this.tx){
			this.x = this.x +1;
		}else{
			this.x = this.x -1;
		}
		if (this.y < this.ty){
			this.y = this.y +1;
		}else{
			this.y = this.y -1;
		}*/
		if (this.age % 4 > 0) return;
		if (this.frame == 2){
			this.frame = 0;
		}
		if (this.frame == 11){
			this.frame = 9;
		}
		if (this.frame == 20){
			this.frame = 18;
		}
		if (this.frame == 29){
			this.frame = 27;
		}
		this.frame++;
		if(game.input.up){
			this.y = this.y-3;
		}
		if(game.input.up){
			this.frame = 27;
		}
		if(game.input.down){
			this.y = this.y+3;
		}
		if(game.input.down){
			this.frame = 0;
		}
		if(game.input.right){
			this.x = this.x+3;
		}
		if(game.input.right){
			this.frame = 18;
		}
		if(game.input.left){
			this.x = this.x-3;
		}
		if(game.input.left){
			this.frame = 9;
		}
	}
});

window.onload = function(){
	game = new Core(320,320);
	game.preload('chara7.png');
	game.onload = function(){
		var bear = new Bear(32,32);
		bear.x = 150;
		bear.y = 150;
		bear.image = game.assets['chara7.png'];
		bear.frame = 0;
		/*bear.addEventListener('touchstart', function(){
			//this.frame = 3-this.frame;
			if(bear.frame == 3){
				this.frame = 0;
			}else{
				this.frame = 3;
			}
		});*/
		game.rootScene.addChild(bear);
		game.rootScene.addEventListener('touchend', function(event) {
			bear.tx = event.x;
			bear.ty = event.y;
		});
	}
	game.start();
}