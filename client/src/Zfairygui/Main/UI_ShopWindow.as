/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_ShopWindow extends GComponent
	{
		public var m_c_show_sure:Controller;
		public var m_n3:GGraph;
		public var m_panel:UI_ShopPanel;
		public var m_n5:GGraph;
		public var m_sure:UI_SurePanel;
		public var m_t0:Transition;
		public var m_t1:Transition;
		public var m_t2:Transition;
		public var m_t3:Transition;

		public static const URL:String = "ui://43jwvuthennx4p";

		public static function createInstance():UI_ShopWindow
		{
			return UI_ShopWindow(UIPackage.createObject("Main","ShopWindow"));
		}

		public function UI_ShopWindow()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_c_show_sure = this.getControllerAt(0);
			m_n3 = GGraph(this.getChildAt(0));
			m_panel = UI_ShopPanel(this.getChildAt(1));
			m_n5 = GGraph(this.getChildAt(2));
			m_sure = UI_SurePanel(this.getChildAt(3));
			m_t0 = this.getTransitionAt(0);
			m_t1 = this.getTransitionAt(1);
			m_t2 = this.getTransitionAt(2);
			m_t3 = this.getTransitionAt(3);
		}
	}
}