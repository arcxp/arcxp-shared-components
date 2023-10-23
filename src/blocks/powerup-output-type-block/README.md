# Power Up outputType
This packages provides an outputType to be used for Power Ups with only the bare necessities, excluding any additional functionality commonly added (Analytics, Ads, etc.). It should only be used for internal usage of the Power Up. 

## Restricting Power Up access
If the Power Up should not be reached from outside of Arc XPs tools, add a redirect rule in Delivery > Redirect UI from the Home screen. Inside Composer, only use the *.arcpublishing.com domain.

## How to use
Add this Component as a dependency in `package.json` with the newest version. Then create a new file `powerup.jsx` in `/components/output-types` to create a new outputType. Then import and use the Component as displayed in the following example: 

```
import React from 'react';
import Power UpOutputType from '@arcxp/shared-powerup-output-type-block';

export default (props) => <Power UpOutputType {...props} />;
```

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
