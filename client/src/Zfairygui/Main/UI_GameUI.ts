/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_GameUI extends fairygui.GComponent {

		public m_c_visible_mapyan:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_endPos1:fairygui.GGraph;
		public m_endPos2:fairygui.GGraph;
		public m_endPos3:fairygui.GGraph;
		public m_endPos4:fairygui.GGraph;
		public m_endPos5:fairygui.GGraph;
		public m_endPos6:fairygui.GGraph;
		public m_endPos7:fairygui.GGraph;
		public m_endPos8:fairygui.GGraph;
		public m_endPos9:fairygui.GGraph;
		public m_endPos10:fairygui.GGraph;
		public m_endPos11:fairygui.GGraph;
		public m_endPos12:fairygui.GGraph;
		public m_endPos13:fairygui.GGraph;
		public m_gold1:fairygui.GImage;
		public m_gold2:fairygui.GImage;
		public m_gold3:fairygui.GImage;
		public m_gold4:fairygui.GImage;
		public m_gold5:fairygui.GImage;
		public m_n96:fairygui.GGroup;
		public m_starContainer:fairygui.GComponent;
		public m_container:fairygui.GComponent;
		public m_npcPos:fairygui.GGraph;
		public m_coin:UI_CoinItem;
		public m_pos1:fairygui.GGraph;
		public m_pos2:fairygui.GGraph;
		public m_pos3:fairygui.GGraph;
		public m_pos4:fairygui.GGraph;
		public m_pos5:fairygui.GGraph;
		public m_pos6:fairygui.GGraph;
		public m_pos7:fairygui.GGraph;
		public m_pos8:fairygui.GGraph;
		public m_pos9:fairygui.GGraph;
		public m_pos10:fairygui.GGraph;
		public m_pos11:fairygui.GGraph;
		public m_pos12:fairygui.GGraph;
		public m_pos13:fairygui.GGraph;
		public m_n3:fairygui.GImage;
		public m_n93:fairygui.GMovieClip;
		public m_n94:fairygui.GMovieClip;
		public m_startPos1:fairygui.GGraph;
		public m_startPos2:fairygui.GGraph;
		public m_startPos3:fairygui.GGraph;
		public m_startPos4:fairygui.GGraph;
		public m_startPos5:fairygui.GGraph;
		public m_startPos6:fairygui.GGraph;
		public m_startPos7:fairygui.GGraph;
		public m_startPos8:fairygui.GGraph;
		public m_startPos9:fairygui.GGraph;
		public m_startPos10:fairygui.GGraph;
		public m_startPos11:fairygui.GGraph;
		public m_startPos12:fairygui.GGraph;
		public m_startPos13:fairygui.GGraph;
		public m_n97:fairygui.GGroup;

		public static URL:string = "ui://43jwvuthgcz40";

		public static createInstance():UI_GameUI {
			return <UI_GameUI><any>(fairygui.UIPackage.createObject("Main","GameUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c_visible_mapyan = this.getController("c_visible_mapyan");
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_endPos1 = <fairygui.GGraph><any>(this.getChild("endPos1"));
			this.m_endPos2 = <fairygui.GGraph><any>(this.getChild("endPos2"));
			this.m_endPos3 = <fairygui.GGraph><any>(this.getChild("endPos3"));
			this.m_endPos4 = <fairygui.GGraph><any>(this.getChild("endPos4"));
			this.m_endPos5 = <fairygui.GGraph><any>(this.getChild("endPos5"));
			this.m_endPos6 = <fairygui.GGraph><any>(this.getChild("endPos6"));
			this.m_endPos7 = <fairygui.GGraph><any>(this.getChild("endPos7"));
			this.m_endPos8 = <fairygui.GGraph><any>(this.getChild("endPos8"));
			this.m_endPos9 = <fairygui.GGraph><any>(this.getChild("endPos9"));
			this.m_endPos10 = <fairygui.GGraph><any>(this.getChild("endPos10"));
			this.m_endPos11 = <fairygui.GGraph><any>(this.getChild("endPos11"));
			this.m_endPos12 = <fairygui.GGraph><any>(this.getChild("endPos12"));
			this.m_endPos13 = <fairygui.GGraph><any>(this.getChild("endPos13"));
			this.m_gold1 = <fairygui.GImage><any>(this.getChild("gold1"));
			this.m_gold2 = <fairygui.GImage><any>(this.getChild("gold2"));
			this.m_gold3 = <fairygui.GImage><any>(this.getChild("gold3"));
			this.m_gold4 = <fairygui.GImage><any>(this.getChild("gold4"));
			this.m_gold5 = <fairygui.GImage><any>(this.getChild("gold5"));
			this.m_n96 = <fairygui.GGroup><any>(this.getChild("n96"));
			this.m_starContainer = <fairygui.GComponent><any>(this.getChild("starContainer"));
			this.m_container = <fairygui.GComponent><any>(this.getChild("container"));
			this.m_npcPos = <fairygui.GGraph><any>(this.getChild("npcPos"));
			this.m_coin = <UI_CoinItem><any>(this.getChild("coin"));
			this.m_pos1 = <fairygui.GGraph><any>(this.getChild("pos1"));
			this.m_pos2 = <fairygui.GGraph><any>(this.getChild("pos2"));
			this.m_pos3 = <fairygui.GGraph><any>(this.getChild("pos3"));
			this.m_pos4 = <fairygui.GGraph><any>(this.getChild("pos4"));
			this.m_pos5 = <fairygui.GGraph><any>(this.getChild("pos5"));
			this.m_pos6 = <fairygui.GGraph><any>(this.getChild("pos6"));
			this.m_pos7 = <fairygui.GGraph><any>(this.getChild("pos7"));
			this.m_pos8 = <fairygui.GGraph><any>(this.getChild("pos8"));
			this.m_pos9 = <fairygui.GGraph><any>(this.getChild("pos9"));
			this.m_pos10 = <fairygui.GGraph><any>(this.getChild("pos10"));
			this.m_pos11 = <fairygui.GGraph><any>(this.getChild("pos11"));
			this.m_pos12 = <fairygui.GGraph><any>(this.getChild("pos12"));
			this.m_pos13 = <fairygui.GGraph><any>(this.getChild("pos13"));
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_n93 = <fairygui.GMovieClip><any>(this.getChild("n93"));
			this.m_n94 = <fairygui.GMovieClip><any>(this.getChild("n94"));
			this.m_startPos1 = <fairygui.GGraph><any>(this.getChild("startPos1"));
			this.m_startPos2 = <fairygui.GGraph><any>(this.getChild("startPos2"));
			this.m_startPos3 = <fairygui.GGraph><any>(this.getChild("startPos3"));
			this.m_startPos4 = <fairygui.GGraph><any>(this.getChild("startPos4"));
			this.m_startPos5 = <fairygui.GGraph><any>(this.getChild("startPos5"));
			this.m_startPos6 = <fairygui.GGraph><any>(this.getChild("startPos6"));
			this.m_startPos7 = <fairygui.GGraph><any>(this.getChild("startPos7"));
			this.m_startPos8 = <fairygui.GGraph><any>(this.getChild("startPos8"));
			this.m_startPos9 = <fairygui.GGraph><any>(this.getChild("startPos9"));
			this.m_startPos10 = <fairygui.GGraph><any>(this.getChild("startPos10"));
			this.m_startPos11 = <fairygui.GGraph><any>(this.getChild("startPos11"));
			this.m_startPos12 = <fairygui.GGraph><any>(this.getChild("startPos12"));
			this.m_startPos13 = <fairygui.GGraph><any>(this.getChild("startPos13"));
			this.m_n97 = <fairygui.GGroup><any>(this.getChild("n97"));
		}
	}
}