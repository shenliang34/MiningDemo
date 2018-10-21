/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_GameUI extends GComponent
	{
		public var m_c_visible_mapyan:Controller;
		public var m_n0:GImage;
		public var m_gold1:GImage;
		public var m_gold2:GImage;
		public var m_gold3:GImage;
		public var m_gold4:GImage;
		public var m_gold5:GImage;
		public var m_starContainer:GComponent;
		public var m_container:GComponent;
		public var m_n3:GImage;
		public var m_npcPos:GGraph;
		public var m_coin:UI_CoinItem;
		public var m_startPos1:GGraph;
		public var m_startPos2:GGraph;
		public var m_startPos3:GGraph;
		public var m_startPos4:GGraph;
		public var m_startPos5:GGraph;
		public var m_startPos6:GGraph;
		public var m_startPos7:GGraph;
		public var m_startPos8:GGraph;
		public var m_startPos9:GGraph;
		public var m_startPos10:GGraph;
		public var m_startPos11:GGraph;
		public var m_startPos12:GGraph;
		public var m_startPos13:GGraph;
		public var m_pos1:GGraph;
		public var m_pos2:GGraph;
		public var m_pos3:GGraph;
		public var m_pos4:GGraph;
		public var m_pos5:GGraph;
		public var m_pos6:GGraph;
		public var m_pos7:GGraph;
		public var m_pos8:GGraph;
		public var m_pos9:GGraph;
		public var m_pos10:GGraph;
		public var m_pos11:GGraph;
		public var m_pos12:GGraph;
		public var m_pos13:GGraph;
		public var m_endPos1:GGraph;
		public var m_endPos2:GGraph;
		public var m_endPos3:GGraph;
		public var m_endPos4:GGraph;
		public var m_endPos5:GGraph;
		public var m_endPos6:GGraph;
		public var m_endPos7:GGraph;
		public var m_endPos8:GGraph;
		public var m_endPos9:GGraph;
		public var m_endPos10:GGraph;
		public var m_endPos11:GGraph;
		public var m_endPos12:GGraph;
		public var m_endPos13:GGraph;
		public var m_n93:GMovieClip;
		public var m_n94:GMovieClip;

		public static const URL:String = "ui://43jwvuthgcz40";

		public static function createInstance():UI_GameUI
		{
			return UI_GameUI(UIPackage.createObject("Main","GameUI"));
		}

		public function UI_GameUI()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_c_visible_mapyan = this.getControllerAt(0);
			m_n0 = GImage(this.getChildAt(0));
			m_gold1 = GImage(this.getChildAt(1));
			m_gold2 = GImage(this.getChildAt(2));
			m_gold3 = GImage(this.getChildAt(3));
			m_gold4 = GImage(this.getChildAt(4));
			m_gold5 = GImage(this.getChildAt(5));
			m_starContainer = GComponent(this.getChildAt(6));
			m_container = GComponent(this.getChildAt(7));
			m_n3 = GImage(this.getChildAt(8));
			m_npcPos = GGraph(this.getChildAt(9));
			m_coin = UI_CoinItem(this.getChildAt(10));
			m_startPos1 = GGraph(this.getChildAt(11));
			m_startPos2 = GGraph(this.getChildAt(12));
			m_startPos3 = GGraph(this.getChildAt(13));
			m_startPos4 = GGraph(this.getChildAt(14));
			m_startPos5 = GGraph(this.getChildAt(15));
			m_startPos6 = GGraph(this.getChildAt(16));
			m_startPos7 = GGraph(this.getChildAt(17));
			m_startPos8 = GGraph(this.getChildAt(18));
			m_startPos9 = GGraph(this.getChildAt(19));
			m_startPos10 = GGraph(this.getChildAt(20));
			m_startPos11 = GGraph(this.getChildAt(21));
			m_startPos12 = GGraph(this.getChildAt(22));
			m_startPos13 = GGraph(this.getChildAt(23));
			m_pos1 = GGraph(this.getChildAt(24));
			m_pos2 = GGraph(this.getChildAt(25));
			m_pos3 = GGraph(this.getChildAt(26));
			m_pos4 = GGraph(this.getChildAt(27));
			m_pos5 = GGraph(this.getChildAt(28));
			m_pos6 = GGraph(this.getChildAt(29));
			m_pos7 = GGraph(this.getChildAt(30));
			m_pos8 = GGraph(this.getChildAt(31));
			m_pos9 = GGraph(this.getChildAt(32));
			m_pos10 = GGraph(this.getChildAt(33));
			m_pos11 = GGraph(this.getChildAt(34));
			m_pos12 = GGraph(this.getChildAt(35));
			m_pos13 = GGraph(this.getChildAt(36));
			m_endPos1 = GGraph(this.getChildAt(37));
			m_endPos2 = GGraph(this.getChildAt(38));
			m_endPos3 = GGraph(this.getChildAt(39));
			m_endPos4 = GGraph(this.getChildAt(40));
			m_endPos5 = GGraph(this.getChildAt(41));
			m_endPos6 = GGraph(this.getChildAt(42));
			m_endPos7 = GGraph(this.getChildAt(43));
			m_endPos8 = GGraph(this.getChildAt(44));
			m_endPos9 = GGraph(this.getChildAt(45));
			m_endPos10 = GGraph(this.getChildAt(46));
			m_endPos11 = GGraph(this.getChildAt(47));
			m_endPos12 = GGraph(this.getChildAt(48));
			m_endPos13 = GGraph(this.getChildAt(49));
			m_n93 = GMovieClip(this.getChildAt(50));
			m_n94 = GMovieClip(this.getChildAt(51));
		}
	}
}