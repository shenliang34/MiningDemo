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
    var UI_BuyBtn = /** @class */ (function (_super) {
        __extends(UI_BuyBtn, _super);
        function UI_BuyBtn() {
            return _super.call(this) || this;
        }
        UI_BuyBtn.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "BuyBtn"));
        };
        UI_BuyBtn.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n4 = (this.getChildAt(0));
        };
        UI_BuyBtn.URL = "ui://43jwvuthennx4u";
        return UI_BuyBtn;
    }(fairygui.GButton));
    Main.UI_BuyBtn = UI_BuyBtn;
})(Main || (Main = {}));
//# sourceMappingURL=UI_BuyBtn.js.map