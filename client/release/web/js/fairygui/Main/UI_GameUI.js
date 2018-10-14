/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_GameUI = (function (_super) {
        __extends(UI_GameUI, _super);
        function UI_GameUI() {
            return _super.call(this) || this;
        }
        UI_GameUI.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "GameUI"));
        };
        UI_GameUI.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_n2 = (this.getChildAt(1));
            this.m_n4 = (this.getChildAt(2));
            this.m_n5 = (this.getChildAt(3));
            this.m_n7 = (this.getChildAt(4));
            this.m_n6 = (this.getChildAt(5));
            this.m_n3 = (this.getChildAt(6));
            this.m_t0 = this.getTransitionAt(0);
        };
        return UI_GameUI;
    }(fairygui.GComponent));
    UI_GameUI.URL = "ui://43jwvuthgcz40";
    Main.UI_GameUI = UI_GameUI;
})(Main || (Main = {}));
//# sourceMappingURL=UI_GameUI.js.map