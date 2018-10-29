/**
* name 
*/
module Games
{
	export class SoundManager
	{
		constructor()
		{

		}

		public static playSound(url: string, stopAllSound: boolean = true, loops: number = 1, soundVolume: number = 1)
		{
			if (stopAllSound)
			{
				Laya.SoundManager.stopAllSound();
			}
			Laya.SoundManager.soundVolume = soundVolume;
			Laya.SoundManager.playSound(url, loops);
		}

		public static playMusic()
		{
			Laya.SoundManager.musicVolume = SoundKey.bg_vol;
			Laya.SoundManager.playMusic(SoundKey.bg, 0);
		}

		public static stopSound(url: string): void
		{
			Laya.SoundManager.stopSound(url);
		}
	}
}