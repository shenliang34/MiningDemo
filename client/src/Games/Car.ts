/**
* name 
*/
module Games
{
	import Point = Laya.Point;
	export class Car extends Laya.Sprite
	{
		private anima: Laya.Animation;

		private window: GameWindow;

		private nextPosList: Array<Point>;
		private stayPosList: Array<Point>;

		private data: ShopData;

		constructor(data: ShopData)
		{
			super();
			this.data = data;

			this.nextPosList = [];
			this.stayPosList = [];

			this.onLoaded(this.data.index - 6);
			// Laya.loader.load("res/atlas/anima/che1.atlas", Handler.create(this, this.onLoaded));
		}


		//清除数组
		private clearList(): void
		{
			this.nextPosList.splice(0, this.nextPosList.length);
			this.stayPosList.splice(0, this.stayPosList.length)
		}

		//
		public setParent(window: GameWindow)
		{
			this.window = window;
		}

		//加载完成
		private onLoaded(aniIndex: number): void
		{
			this.anima = new Laya.Animation();
			this.anima.loadAnimation("anima/car" + aniIndex + ".ani");
			this.addChild(this.anima);

			let scale = user.shopDatas[aniIndex - 1].scale;
			console.log(this.anima.scaleX, this.anima.scaleY, scale);
			this.anima.scale(scale, scale);
		}

		private index: number;

		//初始化位置点		
		public initPosList(index: number): void
		{
			this.index = index;
			this.clearList();

			let arr = <Road>(user.roads[index - 1]);
			this.nextPosList = arr.posList.concat();
			let pos = this.nextPosList.shift();
			this.anima.pos(pos.x, pos.y);

			// //endpos
			for (var index = 1; index <= 13; index++)
			{
				var element = new Point();
				let gobject = this.window.getChild("endPos" + index);
				gobject.localToGlobal(0, 0, element);
				this.stayPosList.push(element);
			}

			this.startTween();
		}

		//开始欢动
		public startTween(): void
		{
			if (this.nextPosList.length > 0)
			{
				let pos = this.nextPosList.shift();
				let duration = pos.distance(this.anima.x, this.anima.y) / 2;
				let speed = duration / 80;

				let vx = pos.x - this.anima.x;
				let vy = this.anima.y - pos.y;
				let angle = Math.atan2(vy, vx) * 180 / Math.PI;

				console.log("原位置：x" + this.anima.x + "原位置：y" + this.anima.y);
				console.log("位置：x" + pos.x + "位置：y" + pos.y);
				console.log("位置：vx" + vx + "位置：vy" + vy);
				console.log("原角度", angle);
				console.log("角度", (angle + 360) % 360);

				//
				let delay: number = 0;
				let effect: Laya.Animation;
				if (this.isInStayPos)
				{
					this.anima.play(0, true, "move_up");
					// effect = new Laya.Animation;
					// effect.loadAnimation("anima/smothEffect.ani");
					// effect.play(0, true, "up");
					// this.anima.addChild(effect);
					// effect.y = -100;
					// effect.scale(0.2, 0.2);
					delay = 5000;
					SoundManager.stopSound(SoundKey.car_move);
					SoundManager.playSound(SoundKey.wa_guangsu, null, 1, SoundKey.wa_guangsu_vol);
				}

				setTimeout(() =>
				{
					if (effect)
					{
						effect.clear();
						this.anima.removeChild(effect);
					}
					this.setDir((angle + 360) % 360);
					Laya.Tween.to(this.anima, { x: pos.x, y: pos.y }, speed * 1000, Laya.Ease.linearNone, Handler.create(null, () =>
					{
						//
						this.startTween();
					}));

					SoundManager.playSound(SoundKey.car_move, null, 0, SoundKey.car_move_vol);
					// Laya.SoundManager.playSound(SoundKey.car_move, 0,null,);
				}, delay)
			}
			else
			{
				SoundManager.stopSound(SoundKey.car_move);
				// let coin: CoinMinItem = CoinMinItem.createInstance();
				//let data = user.shopDatas[this.index - 1];
				// coin.text = "+" + data.daily;
				// user.gameWindow.addChild(coin);
				// coin.setXY(user.gameWindow.m_startPos.x - (coin.width >> 1), user.gameWindow.m_startPos.y - 100);
				// Laya.Tween.to(coin, { x: user.gameWindow.m_coin.x, y: user.gameWindow.m_coin.y }, 1000, null, Handler.create(null, () =>
				// {
				// 	coin.removeFromParent();
				// }), 500);

				// user.curBagCarNum++;
				// this.updateEffectSmoke();

				this.anima.stop();

				SoundManager.playSound(SoundKey.bag_com, true, 1, SoundKey.bag_com_vol);
				setTimeout(() =>
				{
					user.curBagCarNum--;
					// this.updateEffectSmoke();
					this.initPosList(this.index);
				}, 5000);
			}
		}

		private updateEffectSmoke()
		{
			// if (user.curBagCarNum > 0)
			// {
			// user.gameWindow.m_c_visible_mapyan.selectedIndex = 1;
			// }
			// else
			// {
			// 	user.gameWindow.m_c_visible_mapyan.selectedIndex = 0;
			// }
		}

		/**
		 * 
		 * @param pos 
		 */
		private get isInStayPos(): boolean
		{
			for (var index = 0; index < this.stayPosList.length; index++)
			{
				var element = this.stayPosList[index];
				console.log(element.distance(this.anima.x, this.anima.y));
				if (element.distance(this.anima.x, this.anima.y) < 1)
				{
					return true;
				}
			}
			return false;
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
				this.anima.play(0, true, "move_right");
				console.log('方向 右边', angle);
			}

			if (angle >= singleHalfAngle && angle < singleAngle * 2 - singleHalfAngle)
			{
				//right up
				dir = Dirction.Right_Up;
				this.anima.play(0, true, "move_up_right");
				console.log('方向 右上边', angle);
			}

			if ((angle >= singleAngle * 2 - singleHalfAngle && angle < singleAngle * 3 - singleHalfAngle))
			{
				//up
				dir = Dirction.Up;
				this.anima.play(0, true, "move_up");
				console.log('方向 上边', angle);
			}

			if (angle >= singleAngle * 3 - singleHalfAngle && angle < singleAngle * 4 - singleHalfAngle)
			{
				//left up
				dir = Dirction.Left_Up;
				this.anima.play(0, true, "move_up_left");
				console.log('方向 左上边', angle);
			}

			if (angle >= singleAngle * 4 - singleHalfAngle && angle < singleAngle * 5 - singleHalfAngle)
			{
				//left
				dir = Dirction.Left;
				this.anima.play(0, true, "move_left");
				console.log('方向 左边', angle);
			}

			if (angle >= singleAngle * 5 - singleHalfAngle && angle < singleAngle * 6 - singleHalfAngle)
			{
				//left down
				dir = Dirction.Left_Down;
				this.anima.play(0, true, "move_down_left");
				console.log('方向 左下边', angle);
			}

			if (angle >= singleAngle * 6 - singleHalfAngle && angle < singleAngle * 7 - singleHalfAngle)
			{
				//down
				dir = Dirction.Down;
				this.anima.play(0, true, "move_down");
				console.log('方向 下边', angle);
			}

			if (angle >= singleAngle * 7 - singleHalfAngle && angle <= singleAngle * 8 - singleHalfAngle)
			{
				//right down
				dir = Dirction.Right_Down;
				this.anima.play(0, true, "move_down_right");
				console.log('方向 右下边', angle);
			}

			return dir;
		}
	}
}