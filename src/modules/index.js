export default [
  {
    meta: {
      name: 'Cloudburst\'s Store',
      description: '',
    },

    filename: 'main',
    modules: [
      // GooseMod
      ['c10udburst-discord/GooseMod-Plugins', '', '/Token'],
      ['c10udburst-discord/GooseMod-Plugins', '', '/Sessions'],

      // PCPlugins
      ['CaptainBoggle/Streamiun', '', '/manifest.json', 'pcPlugin', {
        authors: ["306249172032552980"]
      }],
      ['notsapinho/powercord-together', '', '/manifest.json', 'pcPlugin'],

    ]
  },

];
