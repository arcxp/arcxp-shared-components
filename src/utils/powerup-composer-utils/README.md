# Power Up Composer Utils
This packages provides functions to communicate with Composer from inside a Power Up. The communication is based on postMessage and these functions will simplify the communication for Power Ups.

## Available Functions

### getStarterPower UpANS(idPrefix)
To be called within Search-iFrame, when no data is available. It returns an object with the following format: 
```
{
  id: `${idPrefix}_${dateNow}`,
  url: '/',
  config: {},
}
```

This is the minimum of required fields necessary for Composer to add the Power Up to the ANS. Custom fields can be added within the `config` field. Following guidelines outlined in the [ANS Schema](https://github.com/washingtonpost/ans-schema/blob/master/src/main/resources/schema/ans/0.10.10/story_elements/custom_embed.json)

### sendMessage(action, data)
To be called for any postMessage interaction between Power Up and Composer. 

#### action: ready
Every iFrame will need to send a `ready` to Composer, otherwise the iFrame will time-out.

data (optional): { height: INTEGER } - to set the height of the iFrame, most commonly used for VIEW-iFrame

#### action: data
Expected action after Search- and Edit-iFrame, contains the new or updated data added to the ANS. Minimum requirements for the data is build from `getStarterPower UpANS`


### getPayload
All communication from Composer to iFrame is through URL paramters. `getPayload` reads and parses the data from the URL and returns as JS Object


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
