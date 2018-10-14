/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_ShopItem extends fairygui.GComponent {

		public m_c_state:fairygui.Controller;
		public m_c_icon:fairygui.Controller;
		public m_n0:fairygui.GLoader;
		public m_icon:fairygui.GLoader;
		public m_priece:fairygui.GTextField;
		public m_num:fairygui.GTextField;
		public m_sec:fairygui.GTextField;
		public m_daily:fairygui.GTextField;
		public m_n6:fairygui.GLoader;
		public m_buy:UI_BuyBtn;

		public static URL:string = "ui://43jwvuthennx4t";

		public static createInstance():UI_ShopItem {
			return <UI_ShopItem><any>(fairygui.UIPackage.createObject("Main","ShopItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c_state = this.getControllerAt(0);
			this.m_c_icon = this.getControllerAt(1);
			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_priece = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_num = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_sec = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_daily = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_n6 = <fairygui.GLoader><any>(this.getChildAt(6));
			this.m_buy = <UI_BuyBtn><any>(this.getChildAt(7));
		}
	}
}