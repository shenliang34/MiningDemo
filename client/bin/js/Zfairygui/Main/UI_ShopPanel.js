/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_ShopPanel = (function (_super) {
        __extends(UI_ShopPanel, _super);
        function UI_ShopPanel() {
            return _super.call(this) || this;
        }
        UI_ShopPanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "ShopPanel"));
        };
        UI_ShopPanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_list = (this.getChildAt(1));
            this.m_close = (this.getChildAt(2));
        };
        return UI_ShopPanel;
    }(fairygui.GComponent));
    UI_ShopPanel.URL = "ui://43jwvuthennx4v";
    Main.UI_ShopPanel = UI_ShopPanel;
})(Main || (Main = {}));
//# sourceMappingURL=UI_ShopPanel.js.map