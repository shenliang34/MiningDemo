var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Games;
(function (Games) {
    var Dirction;
    (function (Dirction) {
        Dirction[Dirction["Left"] = 0] = "Left";
        Dirction[Dirction["Right"] = 1] = "Right";
        Dirction[Dirction["Up"] = 2] = "Up";
        Dirction[Dirction["Down"] = 3] = "Down";
        Dirction[Dirction["Left_Up"] = 4] = "Left_Up";
        Dirction[Dirction["Left_Down"] = 5] = "Left_Down";
        Dirction[Dirction["Right_Up"] = 6] = "Right_Up";
        Dirction[Dirction["Right_Down"] = 7] = "Right_Down";
    })(Dirction = Games.Dirction || (Games.Dirction = {}));
    var GameWindow = (function (_super) {
        __extends(GameWindow, _super);
        function GameWindow() {
            var _this = _super.call(this) || this;
            _this.singleAngle = 360.0 / 8;
            _this.singleHalfAngle = 360.0 / 8 / 2;
            _this.curCars = [];
            _this.pools = [];
            return _this;
        }
        GameWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "GameUI"));
        };
        //显示
        GameWindow.prototype.show = function () {
            // this.m_t0.play(Handler.create(null, () =>
            // {
            // }), -1);
            this.car = this.createCar();
            this.m_container.displayListContainer.addChild(this.car);
            Laya.Tween.to(this.car, { x: -500, y: 100 }, 10000, Laya.Ease.quintInOut);
        };
        //创建一个
        GameWindow.prototype.createCar = function () {
            var car;
            if (this.pools.length > 0) {
                car = this.pools.pop();
            }
            else {
                car = new Games.Car();
            }
            return car;
        };
        return GameWindow;
    }(Main.UI_GameUI));
    Games.GameWindow = GameWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GameWindow.js.map