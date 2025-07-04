import ExtendDatePickerPlugin from './plugin/extend-date-picker.plugin';

const PluginManager = window.PluginManager;

PluginManager.override('DatePicker', ExtendDatePickerPlugin, '[data-date-picker]');
