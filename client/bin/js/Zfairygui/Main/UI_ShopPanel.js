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
    var UI_ShopPanel = /** @class */ (function (_super) {
        __extends(UI_ShopPanel, _super);
        function UI_ShopPanel() {
            return _super.call(this) || this;
        }
        UI_ShopPanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "ShopPanel"));
        };
        UI_ShopPanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChild("n0"));
            this.m_list = (this.getChild("list"));
            this.m_close = (this.getChild("close"));
        };
        UI_ShopPanel.URL = "ui://43jwvuthennx4v";
        return UI_ShopPanel;
    }(fairygui.GComponent));
    Main.UI_ShopPanel = UI_ShopPanel;
})(Main || (Main = {}));
//# sourceMappingURL=UI_ShopPanel.js.map