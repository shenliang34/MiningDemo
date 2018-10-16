/**
* name 
*/
module Games
{
	export class ShopData
	{
		public isBuyed: boolean = false;
		public price: number = 10;//价格
		public daily: number = 10;//日产
		public total: number = 10;//总量
		public suanli: number = 10;//算力
		public schedule: number = 10;//周期
		public index: number = 1;
		public scale: number = 1;
		constructor(index: number, price: number, daily: number, schedule: number, scale: number, total: number, suanli: number)
		{
			this.index = index;
			this.price = price;
			this.scale = scale;
			this.schedule = schedule;
			this.daily = daily;
			this.total = total;
			this.suanli = suanli;
		}
	}
}