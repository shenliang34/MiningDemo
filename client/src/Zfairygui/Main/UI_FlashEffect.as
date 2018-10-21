/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_FlashEffect extends GComponent
	{
		public var m_n0:GImage;
		public var m_t0:Transition;

		public static const URL:String = "ui://43jwvuthaiq557";

		public static function createInstance():UI_FlashEffect
		{
			return UI_FlashEffect(UIPackage.createObject("Main","FlashEffect"));
		}

		public function UI_FlashEffect()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_n0 = GImage(this.getChildAt(0));
			m_t0 = this.getTransitionAt(0);
		}
	}
}