import React from 'react';

const NotificationComp = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Vous avez déjà saisi cette lettre</p>
    </div>
  );
};

export default NotificationComp;
