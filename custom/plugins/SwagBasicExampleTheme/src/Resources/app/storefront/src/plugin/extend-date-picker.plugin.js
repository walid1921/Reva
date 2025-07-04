import DatePickerPlugin from 'src/plugin/date-picker/date-picker.plugin.js';

export default class ExtendDatePickerPlugin extends DatePickerPlugin {
    init() {
        super.init();
        console.log('ExtendDatePickerPlugin initialized.');
    }
}
