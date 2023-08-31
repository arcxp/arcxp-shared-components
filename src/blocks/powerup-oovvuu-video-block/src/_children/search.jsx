import React, { useEffect } from 'react';
import { ENVIRONMENT, OOVVUU_CLIENTID, OOVVUU_SCRIPT_PATH } from 'fusion:environment';
import * as ComposerHandler from '@arcxp/shared-powerup-composer-utils';

const OovvuuSearchComponent = () => {
  useEffect(() => {
    ComposerHandler.sendMessage('ready');
    const urlPayload = ComposerHandler.getPayload(); // only available on Edit
    const payload = urlPayload || ComposerHandler.getStarterPowerUpANS('oovvuu-video');

    if (OOVVUU_CLIENTID) {
      window.oovvuuPluginConfig = {
        clientId: OOVVUU_CLIENTID,
        cmsName: ENVIRONMENT,
        articleId: null,
        onAddEmbed: (embed) => {
          const {
            embedId,
            playerScriptUrl,
            linkToDownloadThumbnail,
            displayTitle,
          } = embed || {};

          const tmpPayload = {
            ...payload,
            config: {
              embedId,
              playerScriptUrl,
              thumbnailImageUrl: linkToDownloadThumbnail,
              displayTitle,
            },
          };

          ComposerHandler.sendMessage('data', tmpPayload);
        },
      };

      // add script async client side
      const oScript = document.createElement('script');
      oScript.src = OOVVUU_SCRIPT_PATH;
      oScript.onload = () => { window.oovvuuPlugin.open(); };
      document.body.appendChild(oScript);
    }
  }, []);

  return <>
    {!OOVVUU_CLIENTID && 'Oovvuu Client ID has not been set in the environment files.'}
  </>;
};

export default OovvuuSearchComponent;
