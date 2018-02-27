import React from 'react'
import {setOptions} from '@storybook/addon-options'
import {addDecorator, configure} from '@storybook/react'

setOptions({
    name: 'Deckr',
    url: 'http://interconnectit.github.io/deckr/'
})

addDecorator(story => (
    <div style={{padding: '24px'}}>
        {story()}
    </div>
))

const stories = require.context('../components', true, /stories.*\.js$/)

function loadStories() {
    stories.keys().forEach(story => stories(story))
}

configure(loadStories, module)
