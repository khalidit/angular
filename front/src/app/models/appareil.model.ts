import { Status } from '../enums/status.enum';

/**
 * Classe Appareil
 */
export class Appareil {
    /**
     * Default constructor
     * @param name
     * @param status
     */
    constructor(public name: string, public status: Status) { }

    /**
     * Permet de savoir si un appareil est allumé
     */
    isOn(): boolean {
        return this.status === Status.Allume;
    }

    /**
    * Permet de savoir si un appareil est éteint
    */
    isOff(): boolean {
        return !this.isOn();
    }

    /**
     * To String
     */
    toString(): string {
        return 'name : ' + this.name + ', status : ' + this.status;
    }
}
