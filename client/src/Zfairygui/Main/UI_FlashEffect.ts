/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_FlashEffect extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://43jwvuthaiq557";

		public static createInstance():UI_FlashEffect {
			return <UI_FlashEffect><any>(fairygui.UIPackage.createObject("Main","FlashEffect"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_t0 = this.getTransition("t0");
		}
	}
}