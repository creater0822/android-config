# Android Config
Just some phone description for my daily usage

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