# Android Config
Just some phone description for my daily usage.

## F-Droid
To make our life of ROM and/or just general phone switching easy, this simple PowerShell implementation of [FdroidCL](https://github.com/mvdan/fdroidcl) allows for bulk-app installation.

### Requirements:
- [FdroidCL](https://github.com/mvdan/fdroidcl): Follow its README to install and use.
- (preferably) The latest version of PowerShell 7
- Any Android phone *(works with non-root)*

### Usage:
1. Maintain your own list of F-Droid apps, example: `/fdroid/fdroidApps.txt`
   - Write down your list of custom repositories for your own convenience, like this: `/fdroid/fdroidRepo.ps1`
2. From your Android device: Enable "Developer options" > "USB Debugging", then connect to your PC/laptop through USB cable.
3. Execute from PowerShell 7: `./InstallApps.ps1 ./fdroidApps.txt`

### Why though?
- Wired connection > wireless connection, installing 60+ apps literally takes a minute.
- Nobody got time to manually operate a tiny phone screen to search & install over 60 apps.
- Simple app overview: Makes sharing your list of apps as easy as sharing a text file.

## Mobile Firefox config
1. Install [Fennec F-Droid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) or [Mull](https://f-droid.org/en/packages/us.spotco.fennec_dos/)
2. On a file explorer with root access, navigate to... 
   - **Fennec F-Droid** - `data/data/org.mozilla.fennec_froid/files/mozilla/[xxxxxxx].default`
   - **Mull** - `data/data/us.spotco.fennec_dos/files/mozilla/[xxxxxxx].default`
3. ...And paste my `user.js`
4. Go to settings, about Fennec and tap the logo 5 times to unlock Debug Mode.
5. Back to settings, under Advanced, Custom Add-on collection:
   - Collection owner (User ID) = **10938336**
   - Collection name = **mconfig**
6. Install your favorite Add-ons from [my list](https://addons.mozilla.org/en-US/firefox/collections/10938336/Mobile-config/). And if it's not there, that means you don't need it.

