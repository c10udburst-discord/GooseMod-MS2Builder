export default [
  {
    meta: {
      name: 'Cloudburst\'s Store',
      description: 'Janky plugins.',
    },

    filename: 'main',
    modules: [
      // GooseMod
      ['c10udburst-discord/GooseMod-Plugins', '', '/SendEmbeds', undefined, { notice: 2 }],
      ['c10udburst-discord/GooseMod-Plugins', '', '/Token'],
      ['c10udburst-discord/GooseMod-Plugins', '', '/Sessions'],
      ['c10udburst-discord/GooseMod-Plugins', '', '/EmbedMessageLinks'],
      ['luimu64/nitro-spoof', ''],
      //['smartfrigde/GM-friend-count', ''],
      ['xirreal/GM-Hidden-Channels', '', undefined, undefined, {
        images: [
          'https://raw.githubusercontent.com/xirreal/GM-Hidden-Channels/main/images/0.png',
          'https://raw.githubusercontent.com/xirreal/GM-Hidden-Channels/main/images/1.png',
          'https://raw.githubusercontent.com/xirreal/GM-Hidden-Channels/main/images/2.png'
        ]
      }],
      
      // BdThemes
      ['discord-addons/discord-addons', '', '/download-themes-here/GreenSpotifyControls/GreenSpotifyControls.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/GreenSpotifyControls.png']
      }],
      ['discord-addons/discord-addons', '', '/download-themes-here/ClassicSending/ClassicSending.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/ClassicSending.png']
      }],
      ['discord-addons/discord-addons', '', '/download-themes-here/ServerlistAtBottom/ServerlistAtBottom.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/ServerlistAtBottom.png']
      }],
      ['discord-addons/discord-addons', '', '/download-themes-here/ShowFullOriginalMessageInReplies/ShowFullOriginalMessageInReplies.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/ShowFullOriginalMessageInReplies.png']
      }],
      ['discord-addons/discord-addons', '', '/download-themes-here/BlurAccountInfos/BlurAccountInfos.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/BlurAccountInfos.png']
      }],
      ['discord-addons/discord-addons', '', '/download-themes-here/TextareaMaxHeightModifier/TextareaMaxHeightModifier.theme.css', 'bdTheme', {
        authors: ["875809253875671090"],
        images: ['https://discord-addons.github.io/screenshots/TextareaMaxHeightModifier.png']
      }]
    ]
  },

];
