import React from 'react'
import {setOptions} from '@storybook/addon-options'
import {addDecorator, configure} from '@storybook/react'
import '../components/deckr/main.scss'

setOptions({
    name: 'Deckr',
    url: 'http://interconnectit.github.io/deckr/',
    showDownPanel: false
})

addDecorator(story => (
    <div style={{padding: '24px'}}>
        {story()}
    </div>
))

const stories = require.context('../components', true, /stories.*\.js$/)

configure(() => stories.keys().forEach(stories), module)
