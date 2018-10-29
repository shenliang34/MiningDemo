/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
var Main;
(function (Main) {
    var UI_CoinItem = /** @class */ (function (_super) {
        __extends(UI_CoinItem, _super);
        function UI_CoinItem() {
            return _super.call(this) || this;
        }
        UI_CoinItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CoinItem"));
        };
        UI_CoinItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n55 = (this.getChild("n55"));
            this.m_title = (this.getChild("title"));
        };
        UI_CoinItem.URL = "ui://43jwvuthid724y";
        return UI_CoinItem;
    }(fairygui.GLabel));
    Main.UI_CoinItem = UI_CoinItem;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CoinItem.js.map