import React from 'react';
import {mount} from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    );
});

it('creates ones LI per comment', () => {

});