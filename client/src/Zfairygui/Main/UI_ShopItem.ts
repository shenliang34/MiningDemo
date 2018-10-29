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

			this.m_c_state = this.getController("c_state");
			this.m_c_icon = this.getController("c_icon");
			this.m_n0 = <fairygui.GLoader><any>(this.getChild("n0"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			this.m_priece = <fairygui.GTextField><any>(this.getChild("priece"));
			this.m_num = <fairygui.GTextField><any>(this.getChild("num"));
			this.m_sec = <fairygui.GTextField><any>(this.getChild("sec"));
			this.m_daily = <fairygui.GTextField><any>(this.getChild("daily"));
			this.m_n6 = <fairygui.GLoader><any>(this.getChild("n6"));
			this.m_buy = <UI_BuyBtn><any>(this.getChild("buy"));
		}
	}
}