import deepmerge from "../framework/Merge";
// IMPORT_LINES
// IMPORT_LINES

/**
 * Collect all config.js each extension module
 *
 * @return {*}
 */
function getConfig() {
    return deepmerge.all([
        {},
        {},
        // MODULE_LINES
        // MODULE_LINES
    ])
}

let cachedConfig = getConfig();

/**
 *
 * cache config
 *
 * @return {*}
 */
export default () => {
    if (!cachedConfig) {
        cachedConfig = getConfig()
    }

    return cachedConfig
}

export function updateConfig(newConfig) {
    cachedConfig = newConfig;
}
