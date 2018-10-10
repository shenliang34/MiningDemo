var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Games;
(function (Games) {
    var GameWindow = (function (_super) {
        __extends(GameWindow, _super);
        function GameWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "GameUI"));
        };
        GameWindow.prototype.show = function () {
            this.m_t0.play(Handler.create(null, function () {
            }), -1);
        };
        GameWindow.prototype.playAnima = function () {
        };
        return GameWindow;
    }(Main.UI_GameUI));
    Games.GameWindow = GameWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GameWindow.js.map