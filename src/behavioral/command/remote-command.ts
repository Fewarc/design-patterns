// Command interface
interface Command {
  execute(): void;
}

// Receiver interface
interface Device {
  turnOn(): void;
  turnOff(): void;
}

// Concrete receiver for a TV
class TV implements Device {
  turnOn(): void {
    console.log("turn tv on");
  }

  turnOff(): void {
    console.log("turn tv off");
  }

  changeChannel() {
    console.log("change tv channel");
  }
}

// Concrete receiver for a stereo
class Stereo implements Device {
  turnOn(): void {
    console.log("turn stereo on");
  }

  turnOff(): void {
    console.log("turn stereo off");
  }

  adjustVolume() {
    console.log("adjust stereo volume");
  }
}

// Concrete command for turning a device on
class TurnDeviceOnCommand implements Command {
  constructor(device: Device) {
    this.device = device;
  }

  device: Device;

  execute(): void {
    this.device.turnOn();
  }
}

// Concrete command for turning a device off
class TurnDeviceOffCommand implements Command {
  constructor(device: Device) {
    this.device = device;
  }

  device: Device;

  execute(): void {
    this.device.turnOff();
  }
}

// Concrete command for adjusting the volume of a stereo
class AdjustStereoVolumeCommand implements Command {
  constructor(stere: Stereo) {
    this.stereo = stere;
  }

  stereo: Stereo;

  execute(): void {
    this.stereo.adjustVolume();
  }
}

// Concrete command for changing the channel of a TV
class ChangeTVChannelCommand implements Command {
  constructor(tv: TV) {
    this.tv = tv;
  }

  tv: TV;

  execute(): void {
    this.tv.changeChannel();
  }
}

// Invoker
class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command?.execute();
  }
}

function testRemote() {
  const tv: TV = new TV();
  const stereo: Stereo = new Stereo();

  const turnTvOnCommand = new TurnDeviceOnCommand(tv);
  const turnTvOffCommand = new TurnDeviceOffCommand(tv);
  const changeChannelCommand = new ChangeTVChannelCommand(tv);
  const adjustVolume = new AdjustStereoVolumeCommand(stereo);

  const remote = new RemoteControl();

  remote.setCommand(turnTvOnCommand);
  remote.pressButton();

  remote.setCommand(turnTvOffCommand);
  remote.pressButton();

  remote.setCommand(changeChannelCommand);
  remote.pressButton();

  remote.setCommand(adjustVolume);
  remote.pressButton();
}
