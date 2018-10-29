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
            this.m_c_visible_mapyan = this.getController("c_visible_mapyan");
            this.m_n0 = (this.getChild("n0"));
            this.m_endPos1 = (this.getChild("endPos1"));
            this.m_endPos2 = (this.getChild("endPos2"));
            this.m_endPos3 = (this.getChild("endPos3"));
            this.m_endPos4 = (this.getChild("endPos4"));
            this.m_endPos5 = (this.getChild("endPos5"));
            this.m_endPos6 = (this.getChild("endPos6"));
            this.m_endPos7 = (this.getChild("endPos7"));
            this.m_endPos8 = (this.getChild("endPos8"));
            this.m_endPos9 = (this.getChild("endPos9"));
            this.m_endPos10 = (this.getChild("endPos10"));
            this.m_endPos11 = (this.getChild("endPos11"));
            this.m_endPos12 = (this.getChild("endPos12"));
            this.m_endPos13 = (this.getChild("endPos13"));
            this.m_gold1 = (this.getChild("gold1"));
            this.m_gold2 = (this.getChild("gold2"));
            this.m_gold3 = (this.getChild("gold3"));
            this.m_gold4 = (this.getChild("gold4"));
            this.m_gold5 = (this.getChild("gold5"));
            this.m_n96 = (this.getChild("n96"));
            this.m_starContainer = (this.getChild("starContainer"));
            this.m_container = (this.getChild("container"));
            this.m_npcPos = (this.getChild("npcPos"));
            this.m_coin = (this.getChild("coin"));
            this.m_pos1 = (this.getChild("pos1"));
            this.m_pos2 = (this.getChild("pos2"));
            this.m_pos3 = (this.getChild("pos3"));
            this.m_pos4 = (this.getChild("pos4"));
            this.m_pos5 = (this.getChild("pos5"));
            this.m_pos6 = (this.getChild("pos6"));
            this.m_pos7 = (this.getChild("pos7"));
            this.m_pos8 = (this.getChild("pos8"));
            this.m_pos9 = (this.getChild("pos9"));
            this.m_pos10 = (this.getChild("pos10"));
            this.m_pos11 = (this.getChild("pos11"));
            this.m_pos12 = (this.getChild("pos12"));
            this.m_pos13 = (this.getChild("pos13"));
            this.m_n3 = (this.getChild("n3"));
            this.m_n93 = (this.getChild("n93"));
            this.m_n94 = (this.getChild("n94"));
            this.m_startPos1 = (this.getChild("startPos1"));
            this.m_startPos2 = (this.getChild("startPos2"));
            this.m_startPos3 = (this.getChild("startPos3"));
            this.m_startPos4 = (this.getChild("startPos4"));
            this.m_startPos5 = (this.getChild("startPos5"));
            this.m_startPos6 = (this.getChild("startPos6"));
            this.m_startPos7 = (this.getChild("startPos7"));
            this.m_startPos8 = (this.getChild("startPos8"));
            this.m_startPos9 = (this.getChild("startPos9"));
            this.m_startPos10 = (this.getChild("startPos10"));
            this.m_startPos11 = (this.getChild("startPos11"));
            this.m_startPos12 = (this.getChild("startPos12"));
            this.m_startPos13 = (this.getChild("startPos13"));
            this.m_n97 = (this.getChild("n97"));
        };
        UI_GameUI.URL = "ui://43jwvuthgcz40";
        return UI_GameUI;
    }(fairygui.GComponent));
    Main.UI_GameUI = UI_GameUI;
})(Main || (Main = {}));
//# sourceMappingURL=UI_GameUI.js.map