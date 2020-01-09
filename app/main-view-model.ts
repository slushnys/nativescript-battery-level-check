import { isAndroid } from "tns-core-modules/platform";
import { Observable } from "tns-core-modules/data/observable";
import * as appModule from "tns-core-modules/application";
export class BatteryLevelModel extends Observable {
    public batteryLevel: number;

    constructor() {
        super();
        this.initBatteryStatus();
    }

    private initBatteryStatus(): void {
        if (isAndroid) {
            appModule.android.registerBroadcastReceiver(
                android.content.Intent.ACTION_BATTERY_CHANGED,
                (context, intent: android.content.Intent) => {
                    const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    this.set("batteryLevel", Math.round((level / scale) * 100));
                }
            );
        } else {
            UIDevice.currentDevice.batteryMonitoringEnabled = true;
            this.set("batteryLevel", Math.round(UIDevice.currentDevice.batteryLevel * 100));

            appModule.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, () => {
                const newLevel = Math.round(UIDevice.currentDevice.batteryLevel * 100);
                this.set("batteryLevel", newLevel);
            });
        }
    }
}
