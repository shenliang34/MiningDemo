/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_CoinMinItem extends GLabel
	{
		public var m_n55:GImage;
		public var m_title:GTextField;

		public static const URL:String = "ui://43jwvuthid724z";

		public static function createInstance():UI_CoinMinItem
		{
			return UI_CoinMinItem(UIPackage.createObject("Main","CoinMinItem"));
		}

		public function UI_CoinMinItem()
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