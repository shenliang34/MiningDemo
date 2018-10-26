/**
* name 
*/
module Games
{
	import HttpRequest = Laya.HttpRequest;
	export interface KjList
	{
		appid: string;
		appkey: string;
		authorization: string;
	}

	export interface KjBuy
	{
		kj_id: number;
		appid: string;
		appkey: string;
		authorization: string;
	}


	export class NetWork
	{
		public static URL: string = "";
		public static APP_ID: string = "7269076665587380";
		public static APP_KEY: string = "4c8rz2Zouw5bmAO3RDzL5yu1hUDBPKpS";

		public static KJ_LIST_URL: string = "https://www.okhehe.com/api/member/kj/lists";
		public static KJ_BUY_URL: string = "https://www.okhehe.com/api/member/kj/buy";

		private httpRequest: HttpRequest;

		private static _instance: NetWork;
		constructor()
		{
			this.httpRequest = new HttpRequest();
			this.httpRequest.on(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
			this.httpRequest.on(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
			this.httpRequest.on(Laya.Event.ERROR, this, this.onHttpRequestError);
		}

		private onHttpRequestError(e): void
		{
			console.log(e);
		}

		private onHttpRequestComplete(e): void
		{
			console.log(this.httpRequest.data);
			switch (this.httpRequest.data)
			{
				case NetWork.KJ_LIST_URL:

					break;

				default:
					break;
			}

			Game.event.dispatch(this.httpRequest.url, this.httpRequest.data);
		}

		private onHttpRequestProgress(e): void
		{

		}

		public static get getInstance(): NetWork
		{
			if (this._instance == null)
			{
				this._instance = new NetWork();
			}
			return this._instance;
		}

		/**
		 * 
		 * @param url 
		 * @param data 
		 * @param method 
		 * @param responseType 
		 * @param headers 
		 */
		public sendUrl(url: string, data?: any, method?: string): void
		{
			this.httpRequest.send(url, data, "post");
			// this.httpRequest.send('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData', 'name=myname&psword=xxx', 'post', 'text');
		}
	}
}