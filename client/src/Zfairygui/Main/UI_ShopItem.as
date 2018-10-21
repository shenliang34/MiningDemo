/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

package Main
{
	import fairygui.*;

	public class UI_ShopItem extends GComponent
	{
		public var m_c_state:Controller;
		public var m_c_icon:Controller;
		public var m_n0:GLoader;
		public var m_icon:GLoader;
		public var m_priece:GTextField;
		public var m_num:GTextField;
		public var m_sec:GTextField;
		public var m_daily:GTextField;
		public var m_n6:GLoader;
		public var m_buy:UI_BuyBtn;

		public static const URL:String = "ui://43jwvuthennx4t";

		public static function createInstance():UI_ShopItem
		{
			return UI_ShopItem(UIPackage.createObject("Main","ShopItem"));
		}

		public function UI_ShopItem()
		{
		}

		protected override function constructFromXML(xml:Object):void
		{
			super.constructFromXML(xml);

			m_c_state = this.getControllerAt(0);
			m_c_icon = this.getControllerAt(1);
			m_n0 = GLoader(this.getChildAt(0));
			m_icon = GLoader(this.getChildAt(1));
			m_priece = GTextField(this.getChildAt(2));
			m_num = GTextField(this.getChildAt(3));
			m_sec = GTextField(this.getChildAt(4));
			m_daily = GTextField(this.getChildAt(5));
			m_n6 = GLoader(this.getChildAt(6));
			m_buy = UI_BuyBtn(this.getChildAt(7));
		}
	}
}