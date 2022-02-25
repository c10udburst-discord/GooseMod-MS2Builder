export default [
  {
    meta: {
      name: 'Cloudburst\'s Store',
      description: '',
    },

    filename: 'main',
    modules: [
      // GooseMod
      ['c10udburst-discord/GooseMod-Plugins', '', '/SendEmbeds', undefined, { notice: 2 }],
      ['c10udburst-discord/GooseMod-Plugins', '', '/Token'],
      ['c10udburst-discord/GooseMod-Plugins', '', '/Sessions'],
      //['luimu64/nitro-spoof', ''],
      //['smartfrigde/GM-friend-count', ''],
      //['xirreal/GM-Hidden-Channels', ''],

      // PCThemes
      ['leeprky/MaterialYouTheme', '', '/powercord_manifest.json', 'pcTheme'],
	    
      // PCPlugins
      ['CaptainBoggle/Streamiun', '', '/manifest.json', 'pcPlugin', {
      	authors: ["306249172032552980"]
      }],
      ['notsapinho/powercord-together', '', '/manifest.json', 'pcPlugin'],
      ['powercord-community/multitask', '', '/manifest.json', 'pcPlugin'],

      // BdThemes
 //     ['discord-addons/discord-addons', '', '/download-themes-here/ClassicSending/ClassicSending.theme.css', 'bdTheme', {
//  authors: ["875809253875671090"],
//	images: ['https://discord-addons.github.io/screenshots/ClassicSending.png']
 //     }],
  //    ['discord-addons/discord-addons', '', '/download-themes-here/ServerlistAtBottom/ServerlistAtBottom.theme.css', 'bdTheme', {
//authors: ["875809253875671090"],
//	images: ['https://discord-addons.github.io/screenshots/ServerlistAtBottom.png']
   //   }],
    //  ['discord-addons/discord-addons', '', '/download-themes-here/ShowFullOriginalMessageInReplies/ShowFullOriginalMessageInReplies.theme.css', 'bdTheme', {
	//authors: ["875809253875671090"],
//	images: ['https://discord-addons.github.io/screenshots/ShowFullOriginalMessageInReplies.png']
   //   }],
      //['discord-addons/discord-addons', '', '/download-themes-here/BlurAccountInfos/BlurAccountInfos.theme.css', 'bdTheme', {
	//authors: ["875809253875671090"],
	//images: ['https://discord-addons.github.io/screenshots/BlurAccountInfos.png']
      //}],
      //['discord-addons/discord-addons', '', '/download-themes-here/TextareaMaxHeightModifier/TextareaMaxHeightModifier.theme.css', 'bdTheme', {
	//authors: ["875809253875671090"],
	//images: ['https://discord-addons.github.io/screenshots/TextareaMaxHeightModifier.png']
     // }],
     // ['discord-addons/discord-addons', '', '/download-themes-here/CompactChannels/CompactChannels.theme.css', 'bdTheme', {
	//authors: ["875809253875671090"],
	//images: ['https://discord-addons.github.io/screenshots/CompactChannels.png']
     // }],
      //['mwittrien/BetterDiscordAddons', '', '/Themes/ServerColumns/ServerColumns.theme.css', 'bdTheme', {
      // images: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/_res/cover.png']
      //}]
    ]
  },

];
