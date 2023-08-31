import React, { useEffect } from "react";
import Static from "fusion:static";

const OovvuuVideoPlayer = ({ element }) => {
	const { embed, _id: id } = element || {};
	const { config, id: containerId } = embed || {};

	const { embedId, playerScriptUrl } = config;

	useEffect(() => {
		const scriptId = 'oovvuu-player-sdk-v2';
		if (document.querySelectorAll(`script#${scriptId}`).length === 0) {
			const oScript = document.createElement('script');
			oScript.src = playerScriptUrl;
			oScript.id = scriptId;
			oScript.type = 'module';
			oScript.onload = () => {
				if (typeof window.oovvuuRuntime !== 'undefined') window.oovvuuRuntime();
			};
			document.getElementById(containerId).appendChild(oScript);
		} else {
			if (typeof window.oovvuuRuntime !== 'undefined') window.oovvuuRuntime();
		}		
	}, []);

	return <Static id={`article-oovvuu-video-${id}`}>
		<div id={containerId}>
			<div data-oovvuu-embed={embedId}></div>
		</div>
	</Static>;
};

export default OovvuuVideoPlayer;
