/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_ShopWindow = (function (_super) {
        __extends(UI_ShopWindow, _super);
        function UI_ShopWindow() {
            return _super.call(this) || this;
        }
        UI_ShopWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "ShopWindow"));
        };
        UI_ShopWindow.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_c_show_sure = this.getControllerAt(0);
            this.m_n3 = (this.getChildAt(0));
            this.m_panel = (this.getChildAt(1));
            this.m_n5 = (this.getChildAt(2));
            this.m_sure = (this.getChildAt(3));
            this.m_t0 = this.getTransitionAt(0);
            this.m_t1 = this.getTransitionAt(1);
            this.m_t2 = this.getTransitionAt(2);
            this.m_t3 = this.getTransitionAt(3);
        };
        return UI_ShopWindow;
    }(fairygui.GComponent));
    UI_ShopWindow.URL = "ui://43jwvuthennx4p";
    Main.UI_ShopWindow = UI_ShopWindow;
})(Main || (Main = {}));
//# sourceMappingURL=UI_ShopWindow.js.map