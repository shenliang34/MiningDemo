/**
* name
*/
var Games;
(function (Games) {
    var ShopData = (function () {
        function ShopData(index, price, daily, schedule, scale, total, suanli) {
            this.isBuyed = false;
            this.price = 10; //价格
            this.daily = 10; //日产
            this.total = 10; //总量
            this.suanli = 10; //算力
            this.schedule = 10; //周期
            this.index = 1;
            this.scale = 1;
            this.index = index;
            this.price = price;
            this.scale = scale;
            this.schedule = schedule;
            this.daily = daily;
            this.total = total;
            this.suanli = suanli;
        }
        return ShopData;
    }());
    Games.ShopData = ShopData;
})(Games || (Games = {}));
//# sourceMappingURL=ShopData.js.map