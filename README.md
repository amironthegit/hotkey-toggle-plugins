# Hotkey Toggle Plugins (Obsidian Plugin)

[English](#english) | [فارسی](#فارسی)

---

<a name="english"></a>
## English

**Hotkey Toggle Plugins** is an Obsidian plugin that dynamically registers toggle commands for every installed community plugin in your vault. This allows you to assign custom hotkeys to quickly enable or disable specific plugins on the fly without digging into the settings menu.

### Features

- ⚡ **Instant Command Generation**: Automatically creates a toggle command for every installed plugin upon loading.
- ⌨️ **Hotkey Support**: Easily assign keyboard shortcuts via Obsidian's native Hotkeys settings.
- 🔔 **Visual Feedback**: Clean notification notices showing the state change when toggled (e.g., 🟢 Enabled / 🔴 Disabled).
- 🪶 **Ultra Lightweight**: Zero bloat, fast load times, and minimal memory footprint.

---

### How to Use

1. **Install and enable** the plugin.
2. Open Obsidian settings and navigate to **Hotkeys** (`Ctrl + ,` / `Cmd + ,` > **Hotkeys**).
3. Search for:
   ```text
   Toggle Plugin: [Name of the target plugin]
   ```
4. Assign your desired shortcut key combination.
5. Press the shortcut anytime to toggle the target plugin on or off!

---

### Manual Installation

Since this plugin is not yet in the official Obsidian Community Plugins directory, you can install it manually:

1. Locate your Obsidian vault directory on your computer.
2. Navigate to `.obsidian/plugins/` (Note: `.obsidian` is a hidden directory).
3. Create a new folder named `hotkey-toggle`.
4. Copy `manifest.json` and `main.js` into this newly created folder:
   ```text
   YourVault/
   └── .obsidian/
       └── plugins/
           └── hotkey-toggle/
               ├── main.js
               └── manifest.json
   ```
5. Open Obsidian, go to **Settings** > **Community plugins**, reload, and enable **Hotkey Toggle Plugins**.

---

### Author & License

- **Author**: Mohammad Amir Nazarpour
- **License**: MIT (or your preferred open-source license)

---

<br/>

<a name="فارسی"></a>
## فارسی

افزونه **Hotkey Toggle Plugins** یک افزونه سبک و کاربردی برای نرم‌افزار ابسیدین (Obsidian) است که برای تمامی افزونه‌های نصب‌شده در والت شما، یک دستور (Command) اختصاصی جهت روشن/خاموش کردن تعریف می‌کند. با استفاده از این افزونه می‌توانید برای هر پلاگین دلخواه، کلید میانبر (Hotkey) اختصاص دهید و بدون نیاز به مراجعه به منوی تنظیمات، آن را سریعاً فعال یا غیرفعال کنید.

### قابلیت‌ها

- ⚡ **تولید خودکار دستورات**: در زمان اجرای برنامه، برای تک‌تک افزونه‌های نصب‌شده یک دستور مجزا ثبت می‌شود.
- ⌨️ **پشتیبانی از کلیدهای میانبر**: امکان تخصیص کلید میانبر از طریق بخش تنظیمات Hotkeys در ابسیدین.
- 🔔 **پیام‌های وضعیت فارسی**: نمایش نوتیفیکیشن وضعیت افزونه پس از فعال‌سازی (🟢 روشن شد) یا غیرفعال‌سازی (🔴 خاموش شد).
- 🪶 **بسیار سبک و بهینه**: بدون بار اضافی روی پردازش و سرعت اجرای نرم‌افزار.

---

### نحوه استفاده

۱. افزونه را نصب و فعال کنید.  
۲. وارد تنظیمات ابسیدین شوید و به بخش **Hotkeys** بروید.  
۳. در کادر جستجو، نام پلاگین مورد نظرتان را جستجو کنید:
   ```text
   Toggle Plugin: [نام افزونه مورد نظر]
   ```
۴. کلید میانبر دلخواه خود را تعیین کنید.  
۵. اکنون با فشردن کلید میانبر، افزونه انتخاب‌شده به سرعت روشن یا خاموش می‌شود.

---

### راهنمای نصب دستی

برای نصب افزونه به صورت دستی مراحل زیر را دنبال کنید:

۱. پوشه والت (Vault) خود را باز کنید.  
۲. به مسیر `.obsidian/plugins/` بروید (پوشه `.obsidian` به صورت پیش‌فرض مخفی است).  
۳. یک پوشه جدید با نام `hotkey-toggle` بسازید.  
۴. فایل‌های `main.js` و `manifest.json` را درون این پوشه قرار دهید:
   ```text
   YourVault/
   └── .obsidian/
       └── plugins/
           └── hotkey-toggle/
               ├── main.js
               └── manifest.json
   ```
۵. ابسیدین را باز کرده یا مجدداً بارگذاری کنید، به مسیر **Settings** > **Community plugins** رفته و افزونه **Hotkey Toggle Plugins** را فعال نمایید.

---

### سازنده

- **توسعه‌دهنده**: محمدامیر نظرپور