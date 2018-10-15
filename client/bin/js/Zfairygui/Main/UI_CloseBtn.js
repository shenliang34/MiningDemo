/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_CloseBtn = (function (_super) {
        __extends(UI_CloseBtn, _super);
        function UI_CloseBtn() {
            return _super.call(this) || this;
        }
        UI_CloseBtn.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CloseBtn"));
        };
        UI_CloseBtn.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n0 = (this.getChildAt(0));
            this.m_n1 = (this.getChildAt(1));
            this.m_n2 = (this.getChildAt(2));
            this.m_n3 = (this.getChildAt(3));
        };
        return UI_CloseBtn;
    }(fairygui.GButton));
    UI_CloseBtn.URL = "ui://43jwvuthennx4s";
    Main.UI_CloseBtn = UI_CloseBtn;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CloseBtn.js.map