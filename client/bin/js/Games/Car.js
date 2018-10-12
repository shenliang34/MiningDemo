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
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car() {
            var _this = _super.call(this) || this;
            _this.onLoaded();
            return _this;
            // Laya.loader.load("res/atlas/anima/che1.atlas", Handler.create(this, this.onLoaded));
        }
        //加载完成
        Car.prototype.onLoaded = function () {
            this.anima = new Laya.Animation();
            this.anima.loadAnimation("anima/car1.ani");
            this.addChild(this.anima);
            this.anima.play(0, true, "move_up_right");
            this.anima.scale(-1, 1);
        };
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
                console.log('方向 右边', angle);
            }
            if (angle >= singleHalfAngle && angle < singleAngle * 2 - singleHalfAngle) {
                //right up
                dir = Games.Dirction.Right_Up;
                console.log('方向 右上边', angle);
            }
            if ((angle >= singleAngle * 2 - singleHalfAngle && angle < singleAngle * 3 - singleHalfAngle)) {
                //up
                dir = Games.Dirction.Up;
                console.log('方向 上边', angle);
            }
            if (angle >= singleAngle * 3 - singleHalfAngle && angle < singleAngle * 4 - singleHalfAngle) {
                //left up
                dir = Games.Dirction.Left_Up;
                console.log('方向 左上边', angle);
            }
            if (angle >= singleAngle * 4 - singleHalfAngle && angle < singleAngle * 5 - singleHalfAngle) {
                //left
                dir = Games.Dirction.Left;
                console.log('方向 左边', angle);
            }
            if (angle >= singleAngle * 5 - singleHalfAngle && angle < singleAngle * 6 - singleHalfAngle) {
                //left down
                dir = Games.Dirction.Left_Down;
                console.log('方向 左下边', angle);
            }
            if (angle >= singleAngle * 6 - singleHalfAngle && angle < singleAngle * 7 - singleHalfAngle) {
                //down
                dir = Games.Dirction.Down;
                console.log('方向 下边', angle);
            }
            if (angle >= singleAngle * 7 - singleHalfAngle && angle <= singleAngle * 8 - singleHalfAngle) {
                //right down
                dir = Games.Dirction.Right_Down;
                console.log('方向 右下边', angle);
            }
            return dir;
        };
        return Car;
    }(Laya.Sprite));
    Games.Car = Car;
})(Games || (Games = {}));
//# sourceMappingURL=Car.js.map