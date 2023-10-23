# Oovvuu Video Component
This packages provides the React JSX Component for Oovvuu Video with the expected input from the Power Up OOvvuu Video Block.

This Component requires to be part of the Server Side render and does not support lazy-loading Client Side.

Full integration steps available in [Arc XP's Oovvuu Power Up](https://docs.arcxp.com/alc/en/arc-xp-s-oovvuu-power-up?sys_kb_id=9e662a7c474abd10eee38788436d430f&id=kb_article_view&sysparm_rank=2&sysparm_tsqueryId=fab355f587ce3110637f315d0ebb3588)

## required fields
If the provided Power Up is used to place the `custom_embed` data, then it is already following the expected format. If a custom Power Up is used or the data is provided through migration, add the following format as the prop `element` on the Component:

```
{
  embed: {
    config: {
      embedId: String // unique ID inside of Oovvuu Video, to display selected Video(s)
      playerScriptUrl: String // public script path for the embed selected above
    }
    id: String // unqiue ID inside this page-load (commonly inside a story), placed by Power Up
  }
  _id: String // unqiue Arc UUID inside this page-load (commonly inside a story), placed by Composer
}
```
## Included functionality

### Conditional script include
The public script path for Oovvuu is included as part of the the Power Up data. The script will only be loaded if the Component is part of the page load.

### Single script load
The public script path for Oovvuu is only added once, even if multiple Components are loaded on the page. Once the script is included, only `window.oovvuuRuntime();` is called to trigger Oovvuu to look for new Video data on the page.

## How to use
Add this Component as a dependency in `package.json` with the newest version. Then import and use the Component as displayed in the following example: 

```
import React from 'react';
import { useFusionContext } from 'fusion:context';
import OovvuuVideoPlayer from '@arcxp/shared-oovvuu-video-component';

export default ArticleBody = () => {
  const { globalContent = {}, arcSite, id } = useFusionContext();
  const { content_elements: contentElements = [] } = globalContent;

  const content = contentElements.map((element) => {
    const {
      _id: key, type, subtype,
    } = element;
    switch (type) {
      case 'custom_embed': {
        switch (subtype) {
          case 'oovvuu-video':
            return <OovvuuVideoPlayer element={element} />;
          // treat all other Power Ups
          default:
            return <></>;
        }
      }
      ... // treat all other types
      default:
        return null;
    }
  });

  return <>{content}</>;
}
```

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
