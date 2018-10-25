/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main;
(function (Main) {
    var UI_FlashEffect = (function (_super) {
        __extends(UI_FlashEffect, _super);
        function UI_FlashEffect() {
            return _super.call(this) || this;
        }
        UI_FlashEffect.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "FlashEffect"));
        };
        UI_FlashEffect.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_t0 = this.getTransitionAt(0);
        };
        return UI_FlashEffect;
    }(fairygui.GComponent));
    UI_FlashEffect.URL = "ui://43jwvuthaiq557";
    Main.UI_FlashEffect = UI_FlashEffect;
})(Main || (Main = {}));
//# sourceMappingURL=UI_FlashEffect.js.map