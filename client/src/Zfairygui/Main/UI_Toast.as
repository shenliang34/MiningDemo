/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_Toast extends GComponent
	{
		public var m_n0:GImage;
		public var m_msg:GTextField;

		public static const URL:String = "ui://43jwvuthennx4w";

		public static function createInstance():UI_Toast
		{
			return UI_Toast(UIPackage.createObject("Main","Toast"));
		}

		public function UI_Toast()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_n0 = GImage(this.getChildAt(0));
			m_msg = GTextField(this.getChildAt(1));
		}
	}
}