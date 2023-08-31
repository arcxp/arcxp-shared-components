import React, { useState, useEffect } from 'react';

import OovvuuSearchComponent from './_children/search';
import OovvuuViewComponent from './_children/view';
import './../index.css';

const OovvuuPowerUpComponent = () => {
  const [actionID, setActionID] = useState('');

  const getActionParam = () => {
    const actionHash = window.location.hash || 'NONE'
    setActionID(actionHash.toUpperCase());
  };

  useEffect(() => getActionParam(), []);

  return (
    <div>
        {actionID.includes('#SEARCH') && <OovvuuSearchComponent />}
        {actionID.includes('#VIEW') && <OovvuuViewComponent />}
        {actionID.includes('#EDIT') && <OovvuuSearchComponent />}
    </div>
  );
};

OovvuuPowerUpComponent.label = 'PowerUp: Oovvuu Integration';

export default OovvuuPowerUpComponent;
