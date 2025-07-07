import React, { useState } from 'react';
import './styles.css';

function Tabs({ tabs }) {
  const [showContent, setShowContent] = useState(false);
  const [tabId, setTabId] = useState(0);

  const handleTabs = (id) => {
    setTabId(id);
    setShowContent(true);
  };

  return (
    <>
      {tabs.length ? (
        <div className="tab-container">
          {tabs.map((item, index) => (
            <div key={index}>
              <div
                className="tabs"
                style={{
                  borderBottom:
                    tabId === index && showContent
                      ? '2px solid blue'
                      : '2px solid white',
                }}
                onClick={() => handleTabs(index)}
              >
                {item.title || `Tab ${index + 1}`}
              </div>
              <div>
                {tabId === index && showContent && (
                  <div>{item.content || 'No content available'}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No tabs available</div>
      )}
    </>
  );
}

export default Tabs;
