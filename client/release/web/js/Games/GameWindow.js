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
    var Point = Laya.Point;
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
        GameWindow.prototype.constructFromXML = function (xml) {
            var _this = this;
            _super.prototype.constructFromXML.call(this, xml);
            user.gameWindow = this;
            this.tips = [];
            user.road1.posList = [new Point(this.m_startPos1.x, this.m_startPos1.y), new Point(this.m_pos1.x, this.m_pos1.y), new Point(this.m_pos1_1.x, this.m_pos1_1.y), new Point(this.m_endPos1.x, this.m_endPos1.y), new Point(this.m_pos1_1.x, this.m_pos1_1.y), new Point(this.m_pos1.x, this.m_pos1.y), new Point(this.m_startPos1.x, this.m_startPos1.y)];
            user.road2.posList = [new Point(this.m_startPos2.x, this.m_startPos2.y), new Point(this.m_pos2.x, this.m_pos2.y), new Point(this.m_pos2_1.x, this.m_pos2_1.y), new Point(this.m_endPos2.x, this.m_endPos2.y), new Point(this.m_pos2_1.x, this.m_pos2_1.y), new Point(this.m_pos2.x, this.m_pos2.y), new Point(this.m_startPos2.x, this.m_startPos2.y)];
            user.road3.posList = [new Point(this.m_startPos3.x, this.m_startPos3.y), new Point(this.m_pos3.x, this.m_pos3.y), new Point(this.m_pos3_1.x, this.m_pos3_1.y), new Point(this.m_endPos3.x, this.m_endPos3.y), new Point(this.m_pos3_1.x, this.m_pos3_1.y), new Point(this.m_pos3.x, this.m_pos3.y), new Point(this.m_startPos3.x, this.m_startPos3.y)];
            user.road4.posList = [new Point(this.m_startPos4.x, this.m_startPos4.y), new Point(this.m_pos4.x, this.m_pos4.y), new Point(this.m_endPos4.x, this.m_endPos4.y), new Point(this.m_pos4.x, this.m_pos4.y), new Point(this.m_startPos4.x, this.m_startPos4.y)];
            user.road5.posList = [new Point(this.m_startPos5.x, this.m_startPos5.y), new Point(this.m_pos5.x, this.m_pos5.y), new Point(this.m_endPos5.x, this.m_endPos5.y), new Point(this.m_pos5.x, this.m_pos5.y), new Point(this.m_startPos5.x, this.m_startPos5.y)];
            this.npc = new Laya.Animation;
            this.npc.loadAnimation("anima/npc.ani");
            this.npc.pos(this.m_npcPos.x, this.m_npcPos.y);
            this.displayListContainer.addChild(this.npc);
            this.npc.play(0, true, "idle");
            this.npc.scale(2, 2);
            var rect = new Laya.Rectangle(-100, -100, 200, 200);
            this.npc.hitArea = rect;
            this.npc.on(Laya.Event.CLICK, this, this.onClickNpc);
            var npcTip = new Laya.Text();
            npcTip.text = "进入商店";
            npcTip.color = "#ffffff";
            npcTip.fontSize = 20;
            npcTip.x = -npcTip.width >> 1;
            npcTip.y = npcTip.height - 90;
            npcTip.align = "center";
            npcTip.valign = "middle";
            npcTip.autoSize = true;
            this.npc.addChild(npcTip);
            this.updateGold();
            setInterval(function () {
                _this.startFlash();
            }, 5000);
            this.startFlash();
        };
        GameWindow.prototype.startFlash = function () {
            for (var index = 0; index < 3; index++) {
                var random = Math.random();
                this.timeOutFlash(index);
            }
        };
        GameWindow.prototype.timeOutFlash = function (index) {
            var _this = this;
            for (var i = 0; i < 3; i++) {
                setTimeout(function () {
                    var flash = Main.UI_FlashEffect.createInstance();
                    var gold = _this.getChild("gold" + (index + 1));
                    _this.addChild(flash);
                    flash.x = gold.x + gold.width * 0.8 * Math.random();
                    flash.y = gold.y + gold.height * 0.8 * Math.random();
                    flash.m_t0.play(Handler.create(null, function () {
                        flash.removeFromParent();
                    }), 1);
                }, Math.random() * 4 * 1000);
            }
        };
        GameWindow.prototype.updateGold = function () {
            this.m_coin.text = user.gold + "";
        };
        GameWindow.prototype.onClickNpc = function () {
            // this.m_c_show_shop.selectedIndex = 1;
            this.shopWindow.show();
        };
        GameWindow.prototype.showTip = function (msg) {
            var _this = this;
            var tip;
            if (this.tips.length > 0) {
                tip = this.tips.pop();
            }
            else {
                tip = Games.Toast.createInstance();
            }
            fairygui.GRoot.inst.addChild(tip);
            tip.m_msg.text = msg;
            tip.x = fairygui.GRoot.inst.width - tip.width >> 1;
            tip.y = fairygui.GRoot.inst.height - tip.height >> 1;
            tip.alpha = 1;
            Laya.Tween.to(tip, { alpha: 0, y: tip.y - 100 }, 1000, Laya.Ease.quadIn, Handler.create(null, function () {
                tip.removeFromParent();
                _this.tips.push(tip);
            }), 1000);
        };
        Object.defineProperty(GameWindow.prototype, "shopWindow", {
            get: function () {
                if (this._shopWindow == null) {
                    this._shopWindow = Games.ShopWindow.createInstance();
                    fairygui.GRoot.inst.addChild(this._shopWindow);
                }
                return this._shopWindow;
            },
            enumerable: true,
            configurable: true
        });
        GameWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "GameUI"));
        };
        //显示
        GameWindow.prototype.show = function () {
            if (this.curCars.length < 5) {
            }
        };
        //创建一个
        GameWindow.prototype.createCar = function (index) {
            var car;
            if (this.pools.length > 0) {
                car = this.pools.pop();
            }
            else {
                car = new Games.Car(index);
                car.setParent(this);
                this.m_container.displayListContainer.addChild(car);
                car.initPosList(this.curCars.length % 4 + 1);
                this.curCars.push(car);
            }
            return car;
        };
        return GameWindow;
    }(Main.UI_GameUI));
    Games.GameWindow = GameWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GameWindow.js.map