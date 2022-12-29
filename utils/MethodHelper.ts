export default class MethodHelper {
    static sleepInSeconds(miliseconds:number) {
        return new Promise(resolve => setTimeout(resolve, miliseconds * 1000));
    }
}

