/**
* name 
*/
module Games
{
	export class ShopData
	{
		public index: number = 1;
		public name: string;
		public isBuyed: boolean = false;
		public price: number = 10;//价格
		public dayOutPut: number = 10;//日产
		public total: number = 10;//总量
		public sl: number = 10;//算力
		public outPutDay: number = 10;//周期

		public scale: number = 1;
		constructor(index: number = 1, name: string = "", price: number = 1, scale: number = 1, dayOutPut: number = 1, outPutDay: number = 1, total: number = 1, sl: number = 1)
		{
			this.index = index;
			this.price = price;
			this.scale = scale;
			this.dayOutPut = dayOutPut;
			this.total = total;
			this.outPutDay = outPutDay;
			this.sl = sl;
		}
	}
}