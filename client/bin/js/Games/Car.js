var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* name
*/
var Games;
(function (Games) {
    var Point = Laya.Point;
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(aniIndex) {
            var _this = _super.call(this) || this;
            _this.nextPosList = [];
            _this.stayPosList = [];
            _this.onLoaded(aniIndex);
            return _this;
            // Laya.loader.load("res/atlas/anima/che1.atlas", Handler.create(this, this.onLoaded));
        }
        //清除数组
        Car.prototype.clearList = function () {
            this.nextPosList.splice(0, this.nextPosList.length);
            this.stayPosList.splice(0, this.stayPosList.length);
        };
        //
        Car.prototype.setParent = function (window) {
            this.window = window;
        };
        //加载完成
        Car.prototype.onLoaded = function (aniIndex) {
            this.anima = new Laya.Animation();
            this.anima.loadAnimation("anima/car" + aniIndex + ".ani");
            this.addChild(this.anima);
            var scale = user.shopDatas[aniIndex - 1].scale;
            console.log(this.anima.scaleX, this.anima.scaleY, scale);
            this.anima.scale(scale, scale);
        };
        //初始化位置点		
        Car.prototype.initPosList = function (index) {
            this.index = index;
            this.clearList();
            var arr = (user["road" + index]);
            this.nextPosList = arr.posList.concat();
            var pos = this.nextPosList.shift();
            this.anima.pos(pos.x, pos.y);
            // //endpos
            for (var index = 1; index <= 6; index++) {
                var element = new Point();
                var gobject = this.window.getChild("endPos" + index);
                element.x = gobject.x;
                element.y = gobject.y;
                this.stayPosList.push(element);
            }
            this.startTween();
        };
        //开始欢动
        Car.prototype.startTween = function () {
            var _this = this;
            if (this.nextPosList.length > 0) {
                var pos_1 = this.nextPosList.shift();
                var duration = pos_1.distance(this.anima.x, this.anima.y) / 2;
                var speed_1 = duration / 80;
                var vx = pos_1.x - this.anima.x;
                var vy = this.anima.y - pos_1.y;
                var angle_1 = Math.atan2(vy, vx) * 180 / Math.PI;
                console.log("原位置：x" + this.anima.x + "原位置：y" + this.anima.y);
                console.log("位置：x" + pos_1.x + "位置：y" + pos_1.y);
                console.log("位置：vx" + vx + "位置：vy" + vy);
                console.log("原角度", angle_1);
                console.log("角度", (angle_1 + 360) % 360);
                //
                var delay = 0;
                var effect_1;
                if (this.isInStayPos) {
                    this.anima.play(0, true, "move_up");
                    // effect = new Laya.Animation;
                    // effect.loadAnimation("anima/smothEffect.ani");
                    // effect.play(0, true, "up");
                    // this.anima.addChild(effect);
                    // effect.y = -100;
                    // effect.scale(0.2, 0.2);
                    delay = 5000;
                    Games.SoundManager.stopSound(Games.SoundKey.car_move);
                    Games.SoundManager.playSound(Games.SoundKey.wa_guangsu, null, 1);
                }
                setTimeout(function () {
                    if (effect_1) {
                        effect_1.clear();
                        _this.anima.removeChild(effect_1);
                    }
                    _this.setDir((angle_1 + 360) % 360);
                    Laya.Tween.to(_this.anima, { x: pos_1.x, y: pos_1.y }, speed_1 * 1000, Laya.Ease.linearNone, Handler.create(null, function () {
                        //
                        _this.startTween();
                    }));
                    Games.SoundManager.playSound(Games.SoundKey.car_move, null, 0, 0.3);
                    // Laya.SoundManager.playSound(SoundKey.car_move, 0,null,);
                }, delay);
            }
            else {
                Games.SoundManager.stopSound(Games.SoundKey.car_move);
                // let coin: CoinMinItem = CoinMinItem.createInstance();
                var data = user.shopDatas[this.index - 1];
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
                Games.SoundManager.playSound(Games.SoundKey.bag_com, true);
                setTimeout(function () {
                    user.curBagCarNum--;
                    // this.updateEffectSmoke();
                    _this.initPosList(_this.index);
                }, 5000);
            }
        };
        Car.prototype.updateEffectSmoke = function () {
            // if (user.curBagCarNum > 0)
            // {
            // user.gameWindow.m_c_visible_mapyan.selectedIndex = 1;
            // }
            // else
            // {
            // 	user.gameWindow.m_c_visible_mapyan.selectedIndex = 0;
            // }
        };
        Object.defineProperty(Car.prototype, "isInStayPos", {
            /**
             *
             * @param pos
             */
            get: function () {
                for (var index = 0; index < this.stayPosList.length; index++) {
                    var element = this.stayPosList[index];
                    if (element.distance(this.anima.x, this.anima.y) < 1) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置方向
         * @param angle
         */
        Car.prototype.setDir = function (angle) {
            var dir;
            var singleAngle = 360.0 / 8;
            var singleHalfAngle = 360.0 / 8 / 2;
            if ((angle >= 0 && angle < singleHalfAngle) || ((angle > 360 - singleHalfAngle) && angle <= 360)) {
                //right
                dir = Games.Dirction.Right;
                this.anima.play(0, true, "move_right");
                console.log('方向 右边', angle);
            }
            if (angle >= singleHalfAngle && angle < singleAngle * 2 - singleHalfAngle) {
                //right up
                dir = Games.Dirction.Right_Up;
                this.anima.play(0, true, "move_up_right");
                console.log('方向 右上边', angle);
            }
            if ((angle >= singleAngle * 2 - singleHalfAngle && angle < singleAngle * 3 - singleHalfAngle)) {
                //up
                dir = Games.Dirction.Up;
                this.anima.play(0, true, "move_up");
                console.log('方向 上边', angle);
            }
            if (angle >= singleAngle * 3 - singleHalfAngle && angle < singleAngle * 4 - singleHalfAngle) {
                //left up
                dir = Games.Dirction.Left_Up;
                this.anima.play(0, true, "move_up_left");
                console.log('方向 左上边', angle);
            }
            if (angle >= singleAngle * 4 - singleHalfAngle && angle < singleAngle * 5 - singleHalfAngle) {
                //left
                dir = Games.Dirction.Left;
                this.anima.play(0, true, "move_left");
                console.log('方向 左边', angle);
            }
            if (angle >= singleAngle * 5 - singleHalfAngle && angle < singleAngle * 6 - singleHalfAngle) {
                //left down
                dir = Games.Dirction.Left_Down;
                this.anima.play(0, true, "move_down_left");
                console.log('方向 左下边', angle);
            }
            if (angle >= singleAngle * 6 - singleHalfAngle && angle < singleAngle * 7 - singleHalfAngle) {
                //down
                dir = Games.Dirction.Down;
                this.anima.play(0, true, "move_down");
                console.log('方向 下边', angle);
            }
            if (angle >= singleAngle * 7 - singleHalfAngle && angle <= singleAngle * 8 - singleHalfAngle) {
                //right down
                dir = Games.Dirction.Right_Down;
                this.anima.play(0, true, "move_down_right");
                console.log('方向 右下边', angle);
            }
            return dir;
        };
        return Car;
    }(Laya.Sprite));
    Games.Car = Car;
})(Games || (Games = {}));
//# sourceMappingURL=Car.js.map