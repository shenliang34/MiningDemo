/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_CommonBtn extends GButton
	{
		public var m_button:Controller;
		public var m_icon:GLoader;

		public static const URL:String = "ui://43jwvuthaiq554";

		public static function createInstance():UI_CommonBtn
		{
			return UI_CommonBtn(UIPackage.createObject("Main","CommonBtn"));
		}

		public function UI_CommonBtn()
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