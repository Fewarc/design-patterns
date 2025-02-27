interface Charger {
  chargePhone(): string;
}

export class LightningCharger implements Charger {
  chargePhone(): string {
    return "Charging with lightning";
  }
}

export class USBCCharger implements Charger {
  chargePhone(): string {
    return "Charging with USB-C";
  }
}

export class LightningAdapter implements USBCCharger {
  constructor(lightningCharger: LightningCharger) {
    this.lightningCharger = lightningCharger;
  }

  lightningCharger: LightningCharger;

  chargePhone(): string {
    return this.lightningCharger.chargePhone();
  }
}
