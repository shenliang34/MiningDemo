/**
* name 
*/
module Games
{
	export class Car extends Laya.Sprite
	{
		private anima: Laya.Animation;
		constructor()
		{
			super();

			this.onLoaded();
			// Laya.loader.load("res/atlas/anima/che1.atlas", Handler.create(this, this.onLoaded));
		}

		//加载完成
		private onLoaded(): void
		{
			this.anima = new Laya.Animation();
			this.anima.loadAnimation("anima/car1.ani");
			this.addChild(this.anima);
			this.anima.play(0, true, "move_up_right");
			this.anima.scale(-1, 1);
		}

		/**
         * 设置方向
         * @param angle 
         */
		private setDir(angle: number)
		{
			let dir: Dirction;
			let singleAngle = 360.0 / 8;
			let singleHalfAngle = 360.0 / 8 / 2;
			if ((angle >= 0 && angle < singleHalfAngle) || ((angle > 360 - singleHalfAngle) && angle <= 360))
			{
				//right
				dir = Dirction.Right;
				console.log('方向 右边', angle);
			}

			if (angle >= singleHalfAngle && angle < singleAngle * 2 - singleHalfAngle)
			{
				//right up
				dir = Dirction.Right_Up;
				console.log('方向 右上边', angle);
			}

			if ((angle >= singleAngle * 2 - singleHalfAngle && angle < singleAngle * 3 - singleHalfAngle))
			{
				//up
				dir = Dirction.Up;
				console.log('方向 上边', angle);
			}

			if (angle >= singleAngle * 3 - singleHalfAngle && angle < singleAngle * 4 - singleHalfAngle)
			{
				//left up
				dir = Dirction.Left_Up;
				console.log('方向 左上边', angle);
			}

			if (angle >= singleAngle * 4 - singleHalfAngle && angle < singleAngle * 5 - singleHalfAngle)
			{
				//left
				dir = Dirction.Left;
				console.log('方向 左边', angle);
			}

			if (angle >= singleAngle * 5 - singleHalfAngle && angle < singleAngle * 6 - singleHalfAngle)
			{
				//left down
				dir = Dirction.Left_Down;
				console.log('方向 左下边', angle);
			}

			if (angle >= singleAngle * 6 - singleHalfAngle && angle < singleAngle * 7 - singleHalfAngle)
			{
				//down
				dir = Dirction.Down;
				console.log('方向 下边', angle);
			}

			if (angle >= singleAngle * 7 - singleHalfAngle && angle <= singleAngle * 8 - singleHalfAngle)
			{
				//right down
				dir = Dirction.Right_Down;
				console.log('方向 右下边', angle);
			}

			return dir;
		}
	}
}