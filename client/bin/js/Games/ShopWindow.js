var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var Games;
(function (Games) {
    var ShopWindow = /** @class */ (function (_super) {
        __extends(ShopWindow, _super);
        function ShopWindow() {
            return _super.call(this) || this;
        }
        ShopWindow.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
        };
        ShopWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "ShopWindow"));
        };
        ShopWindow.prototype.show = function () {
            user.shopWindow = this;
            this.visible = true;
            this.m_panel.show(this);
            this.m_c_show_sure.selectedIndex = 0;
            this.m_t0.play(Handler.create(null, function () {
            }), 1);
        };
        ShopWindow.prototype.hide = function () {
            this.visible = false;
        };
        return ShopWindow;
    }(Main.UI_ShopWindow));
    Games.ShopWindow = ShopWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ShopWindow.js.map