const { Plugin, Notice } = require('obsidian');

module.exports = class HotkeyToggle extends Plugin {
  async onload() {
    const plugins = this.app.plugins;

    for (const id of Object.keys(plugins.manifests)) {
      if (id === this.manifest.id) continue;
      const name = plugins.manifests[id].name || id;

      this.addCommand({
        id: `toggle-${id}`,
        name: `Toggle Plugin: ${name}`,
        callback: async () => {
          const isEnabled = plugins.enabledPlugins.has(id);
          if (isEnabled) {
            await plugins.disablePluginAndSave(id);
            new Notice(`🔴 ${name} خاموش شد`);
          } else {
            await plugins.enablePluginAndSave(id);
            new Notice(`🟢 ${name} روشن شد`);
          }
        }
      });
    }
  }
}