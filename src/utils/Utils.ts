import { Platform, Dimensions, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { initialWindowMetrics, Metrics } from 'react-native-safe-area-context';

export class Utils {
    private static instance: Utils;

    private static idealWidth: number = 375;
    private static idealHeight: number = 812;
    private static initialWindow: Metrics;
    private static _isIOS: boolean = Platform.OS === 'ios';
    private static _size: { width: number, height: number } = Dimensions.get('window');
    private static _ratio: number = PixelRatio.getFontScale();

    constructor() {
        if (Utils.instance) {
            return Utils.instance;
        }
        Utils.instance = this;
    }

    static get isIOS() {
        return Utils._isIOS;
    }

    static get size() {
        return { ...Utils._size };
    }

    static get getFrameHeight() {
        const initialWindow = Utils.getInitialWindowMetrics;
        return initialWindow.frame.height - initialWindow.insets.bottom - initialWindow.insets.top;
    }

    static getVersion = () => {
        const version = DeviceInfo.getVersion();
        return version;
    }

    static getBuild = () => {
        const build = DeviceInfo.getBuildNumber();
        return build;
    }

    static get getInitialWindowMetrics() {
        if (Utils.initialWindow) {
            return Utils.initialWindow;
        } else if (initialWindowMetrics) {
            Utils.initialWindow = initialWindowMetrics;
            return Utils.initialWindow;
        } else {
            const { width, height } = Dimensions.get('window');
            return { frame: { height, width, x: 0, y: 0 }, insets: { bottom: 0, left: 0, right: 0, top: 0 } };
        }
    }

    static declOfNum = (number: number, translates: string[]): string => {
        const newNumber = number % 10;
        if (number > 10 && number < 20) {
            return translates[2];
        }
        if (newNumber > 1 && newNumber < 5) {
            return translates[1];
        }
        if (newNumber === 1) {
            return translates[0];
        }
        return translates[2];
    };

    /* Scale */

    static scaleHorizontal = (inWidth: number = 1): number => {
        const delimiter: number = Utils.idealWidth / inWidth;
        return Utils._size.width / delimiter;
    };

    static scaleVertical = (inHeight: number = 1) => {
        const delimiter: number = Utils.idealHeight / inHeight;
        return Utils._size.height / delimiter;
    };

    static scaleFontSize = (fontSize: number = 1): number => {
        const divisionRatio: number = Utils.idealWidth / (fontSize / Utils._ratio);
        return Utils._size.width / divisionRatio;
    };

    static scaleLineHeight = (lineHeight: number = 1): number => {
        const divisionRatio: number = Utils.idealHeight / (lineHeight / Utils._ratio);
        return Utils._size.height / divisionRatio;
    };

}
