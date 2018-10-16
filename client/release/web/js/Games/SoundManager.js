/**
* name
*/
var Games;
(function (Games) {
    var SoundManager = (function () {
        function SoundManager() {
        }
        SoundManager.playSound = function (url, stopAllSound, loops, soundVolume) {
            if (stopAllSound === void 0) { stopAllSound = true; }
            if (loops === void 0) { loops = 1; }
            if (soundVolume === void 0) { soundVolume = 1; }
            if (stopAllSound) {
                Laya.SoundManager.stopAllSound();
            }
            Laya.SoundManager.soundVolume = soundVolume;
            Laya.SoundManager.playSound(url, loops);
        };
        SoundManager.stopSound = function (url) {
            Laya.SoundManager.stopSound(url);
        };
        return SoundManager;
    }());
    Games.SoundManager = SoundManager;
})(Games || (Games = {}));
//# sourceMappingURL=SoundManager.js.map