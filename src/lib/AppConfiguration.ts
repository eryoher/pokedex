//TODO jfarina implement: should load config from a JS/JSON file as first thing, then load the rest of the app

class AppConfiguration {
  configuration: Object = null;
  shortcutsHandler: ShortcutsHandler;

  constructor(configuration: Object) {
    this.configuration = this.parseConfiguration(configuration);
    this.shortcutsHandler = new ShortcutsHandler(
      this.configuration["shortcuts"]
    );
  }

  private parseConfiguration(configuration: Object): Object {
    // TODO jfarina implement
    return {};
  }

  getShortcutsHandler(): ShortcutsHandler {
    return this.shortcutsHandler;
  }

  loadConfiguration(configuration: Object) {
    // replace current configuration with the one provided
  }
}

class Shortcut {
  keys = null;

  constructor(keys: Array<string>) {
    // TODO jfarina validate each key
    this.keys = keys;
  }

  getKeys(): Array<string> {
    return this.keys;
  }
}

class ShortcutsHandler {
  /**
   * Registry of enabled shortcuts, with keys created out of the shortcut's keys combination.
   * Shortcut structure:
   * {
   *  "shift+ctrl+T": {
   *      action: "START_SALES_PROCESS"
   *  }
   * }
   */
  shortcutsRegistry = {};
  shortcuts: Array<Shortcut>;

  constructor(shortcutsConfig: Object) {
    this.shortcuts = this.parseConfiguration(shortcutsConfig);
  }

  /**
   * Loads the shortcuts associated to the specified actions from the AppConfiguration and starts listening for those shortcuts (combination of keys)
   * @param {Array<string>} actions: the IDs of the actions whose shortcuts configuration are to be loaded
   */
  enableShortcuts(actions) {
    /**
     * foreach action:
     * 1- retrieve it's metadata from the shortcuts registry
     * 2- check whether the keys associated to it are already registered.
     * 2.1- if so, raise error or warning and replace existing shortcut
     * 2.2- otherwise, register shortcut for specified action, as per configuration
     * */
  }

  /**
   * Unloads the shortcuts associated to the specified actions from the registry and stops listening for their associated combination of keys.
   * @param {Array<string>} actions: the IDs of the actions whose shortcuts configuration are to be unloaded
   */
  disableShortcuts(actions) {}

  getShortcutConfiguration(actionID: string): Shortcut {
    return actionID && actionID in this.shortcuts
      ? this.shortcuts[actionID]
      : null;
  }
  
  parseConfiguration(shortcutsConfig: Object): Shortcut[] {
    throw new Error("Method not implemented.");
  }
}

export default function getAppConfiguration() {
  const config = {
    apiURL: ""
  };
  return config;
}
