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
    var UI_GameUI = /** @class */ (function (_super) {
        __extends(UI_GameUI, _super);
        function UI_GameUI() {
            return _super.call(this) || this;
        }
        UI_GameUI.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "GameUI"));
        };
        UI_GameUI.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_c_visible_mapyan = this.getControllerAt(0);
            this.m_n0 = (this.getChildAt(0));
            this.m_gold1 = (this.getChildAt(1));
            this.m_gold2 = (this.getChildAt(2));
            this.m_gold3 = (this.getChildAt(3));
            this.m_gold4 = (this.getChildAt(4));
            this.m_gold5 = (this.getChildAt(5));
            this.m_starContainer = (this.getChildAt(6));
            this.m_container = (this.getChildAt(7));
            this.m_n3 = (this.getChildAt(8));
            this.m_npcPos = (this.getChildAt(9));
            this.m_coin = (this.getChildAt(10));
            this.m_startPos1 = (this.getChildAt(11));
            this.m_startPos2 = (this.getChildAt(12));
            this.m_startPos3 = (this.getChildAt(13));
            this.m_startPos4 = (this.getChildAt(14));
            this.m_startPos5 = (this.getChildAt(15));
            this.m_startPos6 = (this.getChildAt(16));
            this.m_startPos7 = (this.getChildAt(17));
            this.m_startPos8 = (this.getChildAt(18));
            this.m_startPos9 = (this.getChildAt(19));
            this.m_startPos10 = (this.getChildAt(20));
            this.m_startPos11 = (this.getChildAt(21));
            this.m_startPos12 = (this.getChildAt(22));
            this.m_startPos13 = (this.getChildAt(23));
            this.m_pos1 = (this.getChildAt(24));
            this.m_pos2 = (this.getChildAt(25));
            this.m_pos3 = (this.getChildAt(26));
            this.m_pos4 = (this.getChildAt(27));
            this.m_pos5 = (this.getChildAt(28));
            this.m_pos6 = (this.getChildAt(29));
            this.m_pos7 = (this.getChildAt(30));
            this.m_pos8 = (this.getChildAt(31));
            this.m_pos9 = (this.getChildAt(32));
            this.m_pos10 = (this.getChildAt(33));
            this.m_pos11 = (this.getChildAt(34));
            this.m_pos12 = (this.getChildAt(35));
            this.m_pos13 = (this.getChildAt(36));
            this.m_endPos1 = (this.getChildAt(37));
            this.m_endPos2 = (this.getChildAt(38));
            this.m_endPos3 = (this.getChildAt(39));
            this.m_endPos4 = (this.getChildAt(40));
            this.m_endPos5 = (this.getChildAt(41));
            this.m_endPos6 = (this.getChildAt(42));
            this.m_endPos7 = (this.getChildAt(43));
            this.m_endPos8 = (this.getChildAt(44));
            this.m_endPos9 = (this.getChildAt(45));
            this.m_endPos10 = (this.getChildAt(46));
            this.m_endPos11 = (this.getChildAt(47));
            this.m_endPos12 = (this.getChildAt(48));
            this.m_endPos13 = (this.getChildAt(49));
            this.m_n66 = (this.getChildAt(50));
            this.m_n93 = (this.getChildAt(51));
        };
        UI_GameUI.URL = "ui://43jwvuthgcz40";
        return UI_GameUI;
    }(fairygui.GComponent));
    Main.UI_GameUI = UI_GameUI;
})(Main || (Main = {}));
//# sourceMappingURL=UI_GameUI.js.map