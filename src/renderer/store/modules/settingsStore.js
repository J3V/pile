import { settings } from '../../store'

settings.defaults({
  windowState: {
    height: 563,
    useContentSize: true,
    width: 1000,
    show: false,
    minWidth: 300,
    x: undefined,
    y: undefined
  },
  appSettings: {
    locale: ""
  }
}).write()

export default {
  getWindowState() {
    return settings.get('windowState')
      .value()
  },
  updateWindowState(updateProp) {
    return settings.get('windowState')
      .assign(updateProp)
      .write()
  },
  getAppSettings() {
    return settings.get('appSettings')
      .cloneDeep()
      .value()
  },
  updateAppSettings(updateProp) {
    return settings.get('appSettings')
      .assign(updateProp)
      .write()
  },
  getLocale() {
    return settings.get('appSettings.locale')
      .value()
  },
  updateLocale(locale) {
    return settings.get('appSettings')
      .set('locale', locale)
      .write()
  }
}