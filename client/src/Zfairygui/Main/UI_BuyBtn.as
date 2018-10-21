/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_BuyBtn extends GButton
	{
		public var m_button:Controller;
		public var m_icon:GLoader;

		public static const URL:String = "ui://43jwvuthennx4u";

		public static function createInstance():UI_BuyBtn
		{
			return UI_BuyBtn(UIPackage.createObject("Main","BuyBtn"));
		}

		public function UI_BuyBtn()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_button = this.getControllerAt(0);
			m_icon = GLoader(this.getChildAt(0));
		}
	}
}