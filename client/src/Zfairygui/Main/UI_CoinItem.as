/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_CoinItem extends GLabel
	{
		public var m_n55:GImage;
		public var m_title:GTextField;

		public static const URL:String = "ui://43jwvuthid724y";

		public static function createInstance():UI_CoinItem
		{
			return UI_CoinItem(UIPackage.createObject("Main","CoinItem"));
		}

		public function UI_CoinItem()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_n55 = GImage(this.getChildAt(0));
			m_title = GTextField(this.getChildAt(1));
		}
	}
}