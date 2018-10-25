/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_BuyBtn = (function (_super) {
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
            this.m_icon = (this.getChildAt(0));
        };
        return UI_BuyBtn;
    }(fairygui.GButton));
    UI_BuyBtn.URL = "ui://43jwvuthennx4u";
    Main.UI_BuyBtn = UI_BuyBtn;
})(Main || (Main = {}));
//# sourceMappingURL=UI_BuyBtn.js.map