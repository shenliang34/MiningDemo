/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_SurePanel = (function (_super) {
        __extends(UI_SurePanel, _super);
        function UI_SurePanel() {
            return _super.call(this) || this;
        }
        UI_SurePanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "SurePanel"));
        };
        UI_SurePanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
            this.m_buy = (this.getChildAt(2));
            this.m_close = (this.getChildAt(3));
        };
        return UI_SurePanel;
    }(fairygui.GLabel));
    UI_SurePanel.URL = "ui://43jwvuthid7250";
    Main.UI_SurePanel = UI_SurePanel;
})(Main || (Main = {}));
//# sourceMappingURL=UI_SurePanel.js.map