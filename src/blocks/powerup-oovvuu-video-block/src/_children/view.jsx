import React, { useEffect, useState } from 'react';
import * as ComposerHandler from '@arcxp/shared-powerup-composer-utils';

const OovvuuViewComponent = () => {
  const [timestamp] = useState(Date.now());
  const containerId = `oovvuu_container_${timestamp}`;

  const [embedId, setEmbedId] = useState(null);
  const [playerScriptUrl, setPlayerScriptUrl] = useState(null);

  useEffect(() => {
    const { config } = ComposerHandler.getPayload() || {};
    setEmbedId(config.embedId);
    setPlayerScriptUrl(config.playerScriptUrl);
  }, []);

  useEffect(() => {
    if (playerScriptUrl) {
      // add script async client side
      const oScript = document.createElement('script');
      oScript.src = playerScriptUrl;
      oScript.id = 'oovvuu-player-sdk-v2';
      oScript.type = 'module';
      oScript.onload = () => {
        if (typeof window.oovvuuRuntime !== 'undefined') window.oovvuuRuntime();
        setTimeout(() => {
          ComposerHandler.sendMessage('ready', { height: (document.getElementById(containerId).offsetHeight || (window.outerWidth / 1.7)) + 100 });
          // this is to have a proper height for preview - it requires the content to be loaded within 2.5s
          // if Oovvuu ever allows a callback for finished loading, use that instead
        }, 2500);
      };
      document.getElementById(containerId).appendChild(oScript);
    }
  }, [playerScriptUrl]);

  if (!embedId || !playerScriptUrl) {
    return <div>
      {'Required fields are unset. No video load will be attempted. '}
      { !embedId && 'No embedId is provided. ' }
      { !playerScriptUrl && 'No playerScriptUrl is provided.' }
    </div>;
  }

  return <div id={containerId}>
    <div data-oovvuu-embed={embedId}></div>
  </div>;
};

export default OovvuuViewComponent;
