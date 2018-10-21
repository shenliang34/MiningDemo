/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_SurePanel extends GLabel
	{
		public var m_n0:GImage;
		public var m_title:GTextField;
		public var m_buy:UI_CommonBtn;
		public var m_close:UI_CommonBtn;

		public static const URL:String = "ui://43jwvuthid7250";

		public static function createInstance():UI_SurePanel
		{
			return UI_SurePanel(UIPackage.createObject("Main","SurePanel"));
		}

		public function UI_SurePanel()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_n0 = GImage(this.getChildAt(0));
			m_title = GTextField(this.getChildAt(1));
			m_buy = UI_CommonBtn(this.getChildAt(2));
			m_close = UI_CommonBtn(this.getChildAt(3));
		}
	}
}