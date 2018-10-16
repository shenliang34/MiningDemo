/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_GameUI extends fairygui.GComponent {

		public m_c_visible_mapyan:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_gold1:fairygui.GImage;
		public m_gold2:fairygui.GImage;
		public m_gold3:fairygui.GImage;
		public m_gold4:fairygui.GImage;
		public m_gold5:fairygui.GImage;
		public m_starContainer:fairygui.GComponent;
		public m_container:fairygui.GComponent;
		public m_n3:fairygui.GImage;
		public m_npcPos:fairygui.GGraph;
		public m_coin:UI_CoinItem;
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
		public m_n63:fairygui.GMovieClip;
		public m_n66:fairygui.GMovieClip;

		public static URL:string = "ui://43jwvuthgcz40";

		public static createInstance():UI_GameUI {
			return <UI_GameUI><any>(fairygui.UIPackage.createObject("Main","GameUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c_visible_mapyan = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_gold1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_gold2 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_gold3 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_gold4 = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_gold5 = <fairygui.GImage><any>(this.getChildAt(5));
			this.m_starContainer = <fairygui.GComponent><any>(this.getChildAt(6));
			this.m_container = <fairygui.GComponent><any>(this.getChildAt(7));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_npcPos = <fairygui.GGraph><any>(this.getChildAt(9));
			this.m_coin = <UI_CoinItem><any>(this.getChildAt(10));
			this.m_startPos1 = <fairygui.GGraph><any>(this.getChildAt(11));
			this.m_startPos2 = <fairygui.GGraph><any>(this.getChildAt(12));
			this.m_startPos3 = <fairygui.GGraph><any>(this.getChildAt(13));
			this.m_startPos4 = <fairygui.GGraph><any>(this.getChildAt(14));
			this.m_startPos5 = <fairygui.GGraph><any>(this.getChildAt(15));
			this.m_startPos6 = <fairygui.GGraph><any>(this.getChildAt(16));
			this.m_startPos7 = <fairygui.GGraph><any>(this.getChildAt(17));
			this.m_startPos8 = <fairygui.GGraph><any>(this.getChildAt(18));
			this.m_startPos9 = <fairygui.GGraph><any>(this.getChildAt(19));
			this.m_startPos10 = <fairygui.GGraph><any>(this.getChildAt(20));
			this.m_startPos11 = <fairygui.GGraph><any>(this.getChildAt(21));
			this.m_startPos12 = <fairygui.GGraph><any>(this.getChildAt(22));
			this.m_startPos13 = <fairygui.GGraph><any>(this.getChildAt(23));
			this.m_pos1 = <fairygui.GGraph><any>(this.getChildAt(24));
			this.m_pos2 = <fairygui.GGraph><any>(this.getChildAt(25));
			this.m_pos3 = <fairygui.GGraph><any>(this.getChildAt(26));
			this.m_pos4 = <fairygui.GGraph><any>(this.getChildAt(27));
			this.m_pos5 = <fairygui.GGraph><any>(this.getChildAt(28));
			this.m_pos6 = <fairygui.GGraph><any>(this.getChildAt(29));
			this.m_pos7 = <fairygui.GGraph><any>(this.getChildAt(30));
			this.m_pos8 = <fairygui.GGraph><any>(this.getChildAt(31));
			this.m_pos9 = <fairygui.GGraph><any>(this.getChildAt(32));
			this.m_pos10 = <fairygui.GGraph><any>(this.getChildAt(33));
			this.m_pos11 = <fairygui.GGraph><any>(this.getChildAt(34));
			this.m_pos12 = <fairygui.GGraph><any>(this.getChildAt(35));
			this.m_pos13 = <fairygui.GGraph><any>(this.getChildAt(36));
			this.m_endPos1 = <fairygui.GGraph><any>(this.getChildAt(37));
			this.m_endPos2 = <fairygui.GGraph><any>(this.getChildAt(38));
			this.m_endPos3 = <fairygui.GGraph><any>(this.getChildAt(39));
			this.m_endPos4 = <fairygui.GGraph><any>(this.getChildAt(40));
			this.m_endPos5 = <fairygui.GGraph><any>(this.getChildAt(41));
			this.m_endPos6 = <fairygui.GGraph><any>(this.getChildAt(42));
			this.m_endPos7 = <fairygui.GGraph><any>(this.getChildAt(43));
			this.m_endPos8 = <fairygui.GGraph><any>(this.getChildAt(44));
			this.m_endPos9 = <fairygui.GGraph><any>(this.getChildAt(45));
			this.m_endPos10 = <fairygui.GGraph><any>(this.getChildAt(46));
			this.m_endPos11 = <fairygui.GGraph><any>(this.getChildAt(47));
			this.m_endPos12 = <fairygui.GGraph><any>(this.getChildAt(48));
			this.m_endPos13 = <fairygui.GGraph><any>(this.getChildAt(49));
			this.m_n63 = <fairygui.GMovieClip><any>(this.getChildAt(50));
			this.m_n66 = <fairygui.GMovieClip><any>(this.getChildAt(51));
		}
	}
}