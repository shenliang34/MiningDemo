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
    var UI_CloseBtn = /** @class */ (function (_super) {
        __extends(UI_CloseBtn, _super);
        function UI_CloseBtn() {
            return _super.call(this) || this;
        }
        UI_CloseBtn.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CloseBtn"));
        };
        UI_CloseBtn.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getController("button");
            this.m_n0 = (this.getChild("n0"));
            this.m_n1 = (this.getChild("n1"));
            this.m_n2 = (this.getChild("n2"));
            this.m_n3 = (this.getChild("n3"));
        };
        UI_CloseBtn.URL = "ui://43jwvuthennx4s";
        return UI_CloseBtn;
    }(fairygui.GButton));
    Main.UI_CloseBtn = UI_CloseBtn;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CloseBtn.js.map