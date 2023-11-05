// skip 1st line
// **********************************************************************************
// ffProfile user.js | Firefox mobile
// **********************************************************************************
//
// Author    : Cyfire    : 
//
// Based on  : Narsil    : https://git.nixnet.services/Narsil
//             arkenfox  : https://github.com/arkenfox/user.js
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// START: internal custom pref to test for syntax error
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// STARTUP
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);
// -------------------------------------
// Set startup page [SETUP-CHROME]
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
user_pref("browser.startup.page", 0);
// -------------------------------------
// Set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:blank");
// -------------------------------------
// Set NEWTAB page
// true=Activity Stream (default), false=blank page
user_pref("browser.newtabpage.enabled", false);
// -------------------------------------
// Disable sponsored content on Firefox Home (Activity Stream)
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Pocket > Sponsored Stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
// -------------------------------------
// Clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GEOLOCATION / LANGUAGE / LOCALE
// >>>>>>>>>>>>>>>>>>>>>
//
// Use Mozilla geolocation service instead of Google if permission is granted [FF74+]
user_pref("geo.provider.network.url", "");
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable using the OS's geolocation service
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
// -------------------------------------
// Disable region updates
user_pref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
user_pref("browser.region.update.enabled", false); // [FF79+]
// -------------------------------------
// Set search region
user_pref("browser.search.region", "US"); // [HIDDEN PREF]
// -------------------------------------
// Set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en");
// -------------------------------------
// Use en-US locale regardless of the system or region locale
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
user_pref("privacy.spoof_english", 2);
user_pref("intl.locale.requested", "en-US");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUIETER FOX
// >>>>>>>>>>>>>>>>>>>>>
//
// RECOMMENDATIONS
//
// Disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// -------------------------------------
// Disable recommendations in about:addons' Extensions and Themes panes [FF68+]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// -------------------------------------
// Disable personalized Extension Recommendations in about:addons and AMO [FF65+]
user_pref("browser.discovery.enabled", false);
// -------------------------------------
// Disable shopping experience [FF116+]
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]
//
// TELEMETRY
//
// Disable new data submission [FF41+]
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// -------------------------------------
// Disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// -------------------------------------
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
// -------------------------------------
// Disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
// -------------------------------------
// Disable PingCentre telemetry (used in several System Add-ons) [FF57+]
user_pref("browser.ping-centre.telemetry", false);
// -------------------------------------
// Disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
// -------------------------------------
// Disable WebVTT logging and test events
user_pref("media.webvtt.debug.logging", false);
user_pref("media.webvtt.testing.events", false);
// -------------------------------------
// Disable send content blocking log to about:protections
user_pref("browser.contentblocking.database.enabled", false);
//
// STUDIES
//
// Disable Studies
user_pref("app.shield.optoutstudies.enabled", false);
// -------------------------------------
// Disable Normandy/Shield [FF60+]
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
//
// CRASH REPORTS
//
// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
// -------------------------------------
// Enforce no submission of backlogged Crash Reports [FF58+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
//
// OTHER
//
// Disable contentblocking reports
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
// -------------------------------------
// Block unwanted connections
user_pref("app.feedback.baseURL", "");
user_pref("app.feedbackURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.supportURL", "");
user_pref("app.update.channel", "");
user_pref("app.channelURL", "");
user_pref("app.creditsURL", "");
user_pref("app.faqURL", "");
user_pref("app.privacyURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.autodownload", "never");
user_pref("app.update.url.android", "");
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);
// -------------------------------------
// Manage other urls and handlers
user_pref("media.decoder-doctor.new-issue-endpoint", "");
user_pref("identity.sync.tokenserver.uri", "");
user_pref("browser.translation.engine", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.uitour.themeOrigin", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");
// -------------------------------------
// Disable SSDP (Simple Service Discovery Protocol)
user_pref("browser.casting.enabled", false);
// -------------------------------------
// Disable connections to Mozilla servers
user_pref("services.settings.server", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SAFE BROWSING (SB)
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable SB (Safe Browsing)
user_pref("browser.safebrowsing.malware.enabled", false); //[NOT WORKING ON FENIX]
user_pref("browser.safebrowsing.phishing.enabled", false); //[NOT WORKING ON FENIX]
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Disable SB checks for downloads (both local lookups + remote)
user_pref("browser.safebrowsing.downloads.enabled", false);
// -------------------------------------
// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// -------------------------------------
// Disable SB checks for unwanted software
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// -------------------------------------
// Disable "ignore this warning" on SB warnings [FF45+]
// user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Google connections
user_pref("browser.safebrowsing.features.cryptomining.update", false);
user_pref("browser.safebrowsing.features.fingerprinting.update", false);
user_pref("browser.safebrowsing.features.malware.update", false);
user_pref("browser.safebrowsing.features.phishing.update", false);
user_pref("browser.safebrowsing.features.trackingAnnotation.update", false);
user_pref("browser.safebrowsing.features.trackingProtection.update", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google.advisory", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable location bar making speculative connections [FF56+]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// -------------------------------------
// Disable location bar contextual suggestions [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// -------------------------------------
// Disable urlbar trending search suggestions [FF118+]
user_pref("browser.urlbar.trending.featureGate", false);
// -------------------------------------
// Disable urlbar suggestions
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
// -------------------------------------
// Disable urlbar clipboard suggestions [FF118+]
// user_pref("browser.urlbar.clipboard.featureGate", false); // [DEFAULT: false]
// -------------------------------------
// Disable search and form history
user_pref("browser.formfill.enable", false);
// -------------------------------------
// Disable merino
user_pref("browser.urlbar.merino.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PASSWORDS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable password alerts.
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
// -------------------------------------
// Set when Firefox should prompt for the primary password
// 0=once per session (default), 1=every time it's needed, 2=after n minutes
user_pref("security.ask_for_password", 2);
// -------------------------------------
// Set how long in minutes Firefox should remember the primary password (0901)
user_pref("security.password_lifetime", 5); // [DEFAULT: 30]
// -------------------------------------
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// -------------------------------------
// Disable formless login capture for Password Manager [FF51+]
user_pref("signon.formlessCapture.enabled", false);
// -------------------------------------
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
// 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
// 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)
user_pref("network.auth.subresource-http-auth-allow", 1);
// -------------------------------------
// Enforce no automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+]
// user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DISK AVOIDANCE
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
// -------------------------------------
// Disable media cache from writing to disk in Private Browsing
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
// -------------------------------------
// Disable storing extra session data [SETUP-CHROME]
// 0=everywhere, 1=unencrypted sites, 2=nowhere
user_pref("browser.sessionstore.privacy_level", 2);
// -------------------------------------
// Disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]
user_pref("toolkit.winRegisterApplicationRestart", false);
// -------------------------------------
// Disable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable CRLite [FF73+]
// 0 = disabled
// 1 = consult CRLite but only collect telemetry (default)
// 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
// 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (FF99+)
user_pref("security.remote_settings.intermediates.enabled", false);
user_pref("security.remote_settings.intermediates.bucket", "");
user_pref("security.remote_settings.intermediates.collection", "");
user_pref("security.remote_settings.intermediates.signer", "");
user_pref("security.remote_settings.crlite_filters.enabled", false);
user_pref("security.remote_settings.crlite_filters.bucket", "");
user_pref("security.remote_settings.crlite_filters.collection", "");
user_pref("security.remote_settings.crlite_filters.signer", "");
user_pref("security.pki.crlite_mode", 0);
//
// UI (User Interface)
//
// Display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// -------------------------------------
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONTAINERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Container Tabs and its UI setting [FF50+]
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
// -------------------------------------
// Set behavior on "+ Tab" button to display container menu on left click [FF74+]
// user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOM (DOCUMENT OBJECT MODEL)
// >>>>>>>>>>>>>>>>>>>>>
//
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MISCELLANEOUS
// >>>>>>>>>>>>>>>>>>>>>
//
// Remove temp files opened from non-PB windows with an external application
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
// -------------------------------------
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// -------------------------------------
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// -------------------------------------
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// -------------------------------------
// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
// -------------------------------------
// Disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0 (default) or 1=allow, 2=block
// user_pref("permissions.default.shortcuts", 2);
// -------------------------------------
// Remove special permissions for certain mozilla domains [FF35+]
user_pref("permissions.manager.defaultsUrl", "");
// -------------------------------------
// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// -------------------------------------
// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// -------------------------------------
// Enforce PDFJS, disable PDFJS scripting
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
// -------------------------------------
// Disable middle click on new tab button opening URLs or searches using clipboard [FF115+]
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]
// -------------------------------------
// Disable the default checkedness for "Save card and address to Firefox" checkboxes
user_pref("dom.payments.defaults.saveAddress", false);
user_pref("dom.payments.defaults.saveCreditCard", false);
//
// DOWNLOADS
//
// Enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// -------------------------------------
// Disable downloads panel opening on every download [FF96+]
user_pref("browser.download.alwaysOpenPanel", false);
// -------------------------------------
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// -------------------------------------
// Enable user interaction for security by always asking how to handle new mimetypes [FF101+]
user_pref("browser.download.always_ask_before_handling_new_types", true);
//
// EXTENSIONS
//
// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// -------------------------------------
// Disable bypassing 3rd party extension install prompts [FF82+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// -------------------------------------
// Disable webextension restrictions on certain mozilla domains [FF60+]
// user_pref("extensions.webextensions.restrictedDomains", "");
// -------------------------------------
// Disable extensions suggestions
user_pref("extensions.webservice.discoverURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ETP (ENHANCED TRACKING PROTECTION)
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable ETP Strict Mode [FF86+]
user_pref("browser.contentblocking.category", "strict");
// -------------------------------------
// Disable ETP web compat features [FF93+]
// user_pref("privacy.antitracking.enableWebcompat", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL OPSEC
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable favicons in history and bookmarks
user_pref("browser.chrome.site_icons", false);
// -------------------------------------
// Disable location bar suggestion types
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.suggest.weather", false);
// -------------------------------------
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
// -------------------------------------
// Disable browsing and download history
user_pref("places.history.enabled", false);
// -------------------------------------
// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T TOUCH
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable Firefox blocklist
user_pref("extensions.blocklist.enabled", false); // [DEFAULT: true]
user_pref("extensions.blocklist.addonItemURL", "");	
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.addons.signer", "");
user_pref("services.blocklist.plugins.collection", "");	
user_pref("services.blocklist.plugins.signer", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.gfx.signer", "");
// -------------------------------------
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", true); // [DEFAULT: false]
// -------------------------------------
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
// -------------------------------------
// Enforce no First Party Isolation [FF51+]
user_pref("privacy.firstparty.isolate", true); // [DEFAULT: false] [dFPI doesn't work yet]
// -------------------------------------
// Enforce SmartBlock shims [FF81+]
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
// -------------------------------------
// Enforce no TLS 1.0/1.1 downgrades
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
// -------------------------------------
// Enforce disabling of Web Compatibility Reporter [FF56+]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
// -------------------------------------
// Disable quarantined domains [FF115+]
user_pref("extensions.quarantinedDomains.enabled", false); // [DEFAULT: true]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable APIs
user_pref("geo.enabled", false);
// user_pref("full-screen-api.enabled", false);
// -------------------------------------
// Set default permissions
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2); // Virtual Reality
// -------------------------------------
// Disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// -------------------------------------
// Disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);
// -------------------------------------
// Disable System Add-on updates
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// -------------------------------------
// Enable the DNT (Do Not Track) HTTP header
user_pref("privacy.donottrackheader.enabled", false);
// -------------------------------------
// Customize ETP settings
user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5]
user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.query_stripping.enabled", true); // [FF101+] [ETP FF102+]
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
// -------------------------------------
// Disable Push Notifications [FF44+]
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// -------------------------------------
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
// -------------------------------------
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER: FINGERPRINTING
// >>>>>>>>>>>>>>>>>>>>>
//
user_pref("ui.use_standins_for_native_colors", true);
user_pref("browser.display.use_document_fonts", 0);
user_pref("device.sensors.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 1); // [FENIX BUG]
user_pref("dom.webaudio.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
// -------------------------------------
// Disable API for measuring text width and height.
user_pref("dom.textMetrics.actualBoundingBox.enabled", false);
user_pref("dom.textMetrics.baselines.enabled", false);
user_pref("dom.textMetrics.emHeight.enabled", false);
user_pref("dom.textMetrics.fontBoundingBox.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NON-PROJECT RELATED
// >>>>>>>>>>>>>>>>>>>>>
//
// WELCOME & WHAT'S NEW NOTICES
//
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
//
// WARNINGS
//
user_pref("browser.tabs.warnOnClose", false); // [DEFAULT: false FF94+]
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuitShortcut", false); // [FF94+]
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.warnOnQuit", false);
//
// UPDATES
//
// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]
user_pref("app.update.auto", false);
// -------------------------------------
// Disable auto-CHECKING for extension and theme updates
// user_pref("extensions.update.enabled", false);
// user_pref("extensions.autoupdate.enabled", false);
// -------------------------------------
// Disable auto-INSTALLING extension and theme updates
// user_pref("extensions.update.autoUpdateDefault", false);
// -------------------------------------
// Disable extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
// -------------------------------------
// Disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);
//
// CONTENT BEHAVIOR
//
user_pref("accessibility.typeaheadfind", false); // enable "Find As You Type"
user_pref("layout.spellcheckDefault", 0); // 0=none, 1-multi-line, 2=multi-line & single-line
//
// FIREFOX HOME CONTENT
//
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//
// UX FEATURES
//
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", false); // Reader View
user_pref("browser.tabs.firefox-view", false); // Firefox-view
//
// OTHER
//
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.sessionstore.interval", 30000); // minimum interval between session save operations
user_pref("network.manage-offline-status", false);
// user_pref("xpinstall.signatures.required", false); // enforced extension signing (Nightly/ESR)
//
// MORE
//
// user_pref("security.insecure_connection_icon.enabled", ""); // [DEFAULT: true FF70+]
// user_pref("security.mixed_content.block_active_content", ""); // [DEFAULT: true since at least FF60]
user_pref("security.ssl.enable_ocsp_stapling", false); // [DEFAULT: true FF26+]
// user_pref("webgl.disable-fail-if-major-performance-caveat", ""); // [DEFAULT: true FF86+]
user_pref("webgl.enable-webgl2", false);
// user_pref("webgl.min_capability_mode", "");
user_pref("device.camera.enabled", false);
user_pref("media.realtime_decoder.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DEPRECATED / RENAMED
// >>>>>>>>>>>>>>>>>>>>>
//
// FF117
//
// Disable Windows Microsoft Family Safety cert [FF50+] [WINDOWS]
user_pref("security.family_safety.mode", 0);
//
// END OF user.js
user_pref("_user.js", "File has been applied");
//