import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'

const store = configureStore();

const _render = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

_render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => { _render(App) })
}