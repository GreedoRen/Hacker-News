import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import GlobalStyles from './styles/globals';
import registerServiceWorker from './registerServiceWorker';

const RenderApp = () => (
          <div>
            <GlobalStyles />
          </div>
);

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();