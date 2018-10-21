/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_CloseBtn extends GButton
	{
		public var m_button:Controller;
		public var m_n0:GImage;
		public var m_n1:GImage;
		public var m_n2:GImage;
		public var m_n3:GImage;

		public static const URL:String = "ui://43jwvuthennx4s";

		public static function createInstance():UI_CloseBtn
		{
			return UI_CloseBtn(UIPackage.createObject("Main","CloseBtn"));
		}

		public function UI_CloseBtn()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_button = this.getControllerAt(0);
			m_n0 = GImage(this.getChildAt(0));
			m_n1 = GImage(this.getChildAt(1));
			m_n2 = GImage(this.getChildAt(2));
			m_n3 = GImage(this.getChildAt(3));
		}
	}
}