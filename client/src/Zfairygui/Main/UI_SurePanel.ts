/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_SurePanel extends fairygui.GLabel {

		public m_n0:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_buy:UI_CommonBtn;
		public m_close:UI_CommonBtn;

		public static URL:string = "ui://43jwvuthid7250";

		public static createInstance():UI_SurePanel {
			return <UI_SurePanel><any>(fairygui.UIPackage.createObject("Main","SurePanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_buy = <UI_CommonBtn><any>(this.getChild("buy"));
			this.m_close = <UI_CommonBtn><any>(this.getChild("close"));
		}
	}
}