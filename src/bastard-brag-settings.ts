/**
 * the settings used in a game of Bastard Brag
 */

import { CardGameSettings, ENumSetting, NumericSetting } from "@brendangooch/card-game-settings";

export class BastardBragSettings extends CardGameSettings {

    public get difficulty(): ENumSetting {
        return this.enum[1];
    }

    public get numPlayers(): NumericSetting {
        return this.numeric[1];
    }

    public get numLives(): NumericSetting {
        return this.numeric[2];
    }

    public get numJokers(): NumericSetting {
        return this.numeric[3];
    }

    protected loadSettings(): void {
        this.enum[1] = new ENumSetting([1, 2, 3, 4, 5]);
        this.numeric[1] = new NumericSetting(2, 8, 5);
        this.numeric[2] = new NumericSetting(1, 10, 3);
        this.numeric[3] = new NumericSetting(0, 3, 2);
    }

}