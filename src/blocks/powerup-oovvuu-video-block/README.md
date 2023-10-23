# Power Up Oovvuu Video
This packages provides the full Power Up to: 
- authenticate with Oovvuu
- find and select Video(s) in Oovvuu Video
- inject Oovvuu data into story ANS

Full integration steps available in [Arc XP's Oovvuu Power Up](https://docs.arcxp.com/alc/en/arc-xp-s-oovvuu-power-up?sys_kb_id=9e662a7c474abd10eee38788436d430f&id=kb_article_view&sysparm_rank=2&sysparm_tsqueryId=fab355f587ce3110637f315d0ebb3588)


## Required environment variables
For this Power Up to work, the following values need to be provided: 

```
 OOVVUU_CLIENTID: 'unqie client ID, provided by Oovvuu',
 OOVVUU_SCRIPT_PATH: 'script to initiate login, provided by Oovvuu',
```

There are additional steps required with Oovvuu, read the document linked above for further information.

## Saved data
The data returned from the Power Up are in the following format: 

```
{
  _id: String // unique ID in context of this story, set by Composer
  embed: {
    config: {
      displayTitle: String // Title of the Video or Playlist, received from Oovvuu
      embedId: String // unique ID for Video or Playlist, received from Oovvuu
      playerScriptUrl: String // public script path to load Oovvuu embed, received from Oovvuu
      thumbnailImageUrl: String // path to thumbnail image at Oovvuu, to be used with resizer, received from Oovvuu
    },
    id: String
    url: String // fixed value '/', set by Power Up
  },
  subtype: 'oovvuu-video', // unique ID as set in Composer Settings, set by Composer
  type: 'custom_embed' // fixed value, set by Composer
}
```

Only the `embedId` and `playerScriptUrl` are used in the matching `oovvvuu-video-component`, but all returned information (excluding the raw embed html) is included to allow for a custom integration, while still being able to use this package.

## How to use
Add this Component as a dependency in `package.json` with the newest version. Then create a folder in `/components/components/powerups` called `oovvuu-video`. Inside create a new file called `powerup.jsx` to create a powerup outputType version for this Block. Then import and use the Component as displayed in the following example: 

```
import React from 'react';
import OovvuuPower UpComponent from '@arcxp/shared-powerup-oovvuu-video-block';

export default (props) => <OovvuuPower UpComponent {...props} />;
```

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
