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

		}

		private buyIndexs: Array<number> = [];

		private onHttpRequestComplete(e): void
		{/**/
			console.log(this.httpRequest.data);
			switch (this.httpRequest.url)
			{
				case NetWork.KJ_LIST_URL:
					if (this.httpRequest.data["status"] == 0)
					{
						user.gameWindow.showTip(this.httpRequest.data.msg);
					}
					else
					{
						user.formatCarDatas(this.httpRequest.data);
					}
					break;
				case NetWork.KJ_BUY_URL + "?kj_id=1":
				case NetWork.KJ_BUY_URL + "?kj_id=2":
				case NetWork.KJ_BUY_URL + "?kj_id=3":
				case NetWork.KJ_BUY_URL + "?kj_id=4":
				case NetWork.KJ_BUY_URL + "?kj_id=5":
					let index = this.buyIndexs.pop();
					if (this.httpRequest.data.status == 1)
					{
						user.addData(user.typeKeys.getValues()[index - 1]);
					}
					user.gameWindow.showTip(this.httpRequest.data.msg);
					// user.formatCarDatas(this.httpRequest.data);
					break;

				default:
					break;
			}

			GameConfig.event.dispatch(this.httpRequest.url, this.httpRequest.data);
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
		public sendUrl(url: string, data?: any, method?: string, responseType?: string, headers?: Array<any>): void
		{
			this.httpRequest.send(url, data, method, responseType, headers);
		}

		public sendBuy(index: number): void
		{
			this.buyIndexs.push(index);
			this.httpRequest.send(NetWork.KJ_BUY_URL + "?kj_id=" + index, {}, "post", "json", this.getHeaders());
		}

		public getList(): void
		{
			this.httpRequest.send(NetWork.KJ_LIST_URL, {}, "post", "json", ["appid", user.appId, "appkey", user.appKey, "authorization", user.authorization, "Content-Type", "application/json"]);
		}

		public getHeaders(): Array<string>
		{
			return ["appid", user.appId, "appkey", user.appKey, "authorization", user.authorization, "Content-Type", "application/json"];
		}
	}
}