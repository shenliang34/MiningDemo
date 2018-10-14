/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_BuyBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n4:fairygui.GLoader;

		public static URL:string = "ui://43jwvuthennx4u";

		public static createInstance():UI_BuyBtn {
			return <UI_BuyBtn><any>(fairygui.UIPackage.createObject("Main","BuyBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n4 = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}