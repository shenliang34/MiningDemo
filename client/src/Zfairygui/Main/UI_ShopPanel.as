/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_ShopPanel extends GComponent
	{
		public var m_n0:GImage;
		public var m_list:GList;
		public var m_close:UI_CloseBtn;

		public static const URL:String = "ui://43jwvuthennx4v";

		public static function createInstance():UI_ShopPanel
		{
			return UI_ShopPanel(UIPackage.createObject("Main","ShopPanel"));
		}

		public function UI_ShopPanel()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_n0 = GImage(this.getChildAt(0));
			m_list = GList(this.getChildAt(1));
			m_close = UI_CloseBtn(this.getChildAt(2));
		}
	}
}