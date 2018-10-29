/**
* name
*/
var Games;
(function (Games) {
    var ShopData = /** @class */ (function () {
        function ShopData(index, name, price, scale, dayOutPut, outPutDay, total, sl) {
            if (index === void 0) { index = 1; }
            if (name === void 0) { name = ""; }
            if (price === void 0) { price = 1; }
            if (scale === void 0) { scale = 1; }
            if (dayOutPut === void 0) { dayOutPut = 1; }
            if (outPutDay === void 0) { outPutDay = 1; }
            if (total === void 0) { total = 1; }
            if (sl === void 0) { sl = 1; }
            this.index = 1;
            this.isBuyed = false;
            this.price = 10; //价格
            this.dayOutPut = 10; //日产
            this.total = 10; //总量
            this.sl = 10; //算力
            this.outPutDay = 10; //周期
            this.scale = 1;
            this.index = index;
            this.price = price;
            this.scale = scale;
            this.dayOutPut = dayOutPut;
            this.total = total;
            this.outPutDay = outPutDay;
            this.sl = sl;
        }
        return ShopData;
    }());
    Games.ShopData = ShopData;
})(Games || (Games = {}));
//# sourceMappingURL=ShopData.js.map