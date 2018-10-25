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
    var UI_CoinMinItem = /** @class */ (function (_super) {
        __extends(UI_CoinMinItem, _super);
        function UI_CoinMinItem() {
            return _super.call(this) || this;
        }
        UI_CoinMinItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CoinMinItem"));
        };
        UI_CoinMinItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n55 = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
        };
        UI_CoinMinItem.URL = "ui://43jwvuthid724z";
        return UI_CoinMinItem;
    }(fairygui.GLabel));
    Main.UI_CoinMinItem = UI_CoinMinItem;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CoinMinItem.js.map