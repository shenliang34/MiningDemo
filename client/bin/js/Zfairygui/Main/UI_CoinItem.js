/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_CoinItem = (function (_super) {
        __extends(UI_CoinItem, _super);
        function UI_CoinItem() {
            return _super.call(this) || this;
        }
        UI_CoinItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CoinItem"));
        };
        UI_CoinItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n55 = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
        };
        return UI_CoinItem;
    }(fairygui.GLabel));
    UI_CoinItem.URL = "ui://43jwvuthid724y";
    Main.UI_CoinItem = UI_CoinItem;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CoinItem.js.map