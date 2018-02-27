import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Typography', module)
    .add('Headings', () => (
        <div>
            <h1>h1 heading</h1>
            <h2>h2 heading</h2>
            <h3>h3 heading</h3>
            <h4>h4 heading</h4>
            <h5>h5 heading</h5>
            <h6>h6 heading</h6>
        </div>
    ))
    .add('Lists', () => (
        <div>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit
                    <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                    </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
            </ul>
        </div>
    ))
