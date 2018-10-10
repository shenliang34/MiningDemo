/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_GameUI extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_n7:fairygui.GMovieClip;
		public m_n6:fairygui.GMovieClip;
		public m_n3:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://43jwvuthgcz40";

		public static createInstance():UI_GameUI {
			return <UI_GameUI><any>(fairygui.UIPackage.createObject("Main","GameUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_n7 = <fairygui.GMovieClip><any>(this.getChildAt(4));
			this.m_n6 = <fairygui.GMovieClip><any>(this.getChildAt(5));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}