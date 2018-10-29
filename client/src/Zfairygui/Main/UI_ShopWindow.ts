/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_ShopWindow extends fairygui.GComponent {

		public m_c_show_sure:fairygui.Controller;
		public m_n3:fairygui.GGraph;
		public m_panel:UI_ShopPanel;
		public m_n5:fairygui.GGraph;
		public m_sure:UI_SurePanel;
		public m_t0:fairygui.Transition;
		public m_t1:fairygui.Transition;
		public m_t2:fairygui.Transition;
		public m_t3:fairygui.Transition;

		public static URL:string = "ui://43jwvuthennx4p";

		public static createInstance():UI_ShopWindow {
			return <UI_ShopWindow><any>(fairygui.UIPackage.createObject("Main","ShopWindow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c_show_sure = this.getController("c_show_sure");
			this.m_n3 = <fairygui.GGraph><any>(this.getChild("n3"));
			this.m_panel = <UI_ShopPanel><any>(this.getChild("panel"));
			this.m_n5 = <fairygui.GGraph><any>(this.getChild("n5"));
			this.m_sure = <UI_SurePanel><any>(this.getChild("sure"));
			this.m_t0 = this.getTransition("t0");
			this.m_t1 = this.getTransition("t1");
			this.m_t2 = this.getTransition("t2");
			this.m_t3 = this.getTransition("t3");
		}
	}
}