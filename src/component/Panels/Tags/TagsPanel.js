import React from 'react';
import PropTypes from 'prop-types';
import './TagsPanel.sass';

import { AddButton } from '../../Buttons/AddButton';
import { TagsTable } from '../../Tables/TagsTable/TagsTable';

export const TagsPanel = ({guestLists}) => (
    <div className="tags-panel mb-4">
        <nav className="header flex-row-center">
            <div className="tags-title">Tags</div>
            <AddButton buttonName="Add a tag" onClick={() => {}}/>
        </nav>
        <TagsTable/>
    </div>
)

TagsPanel.propTypes = {
    guestLists: PropTypes.object
}