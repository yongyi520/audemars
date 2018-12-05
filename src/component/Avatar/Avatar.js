import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.sass';
import classnames from 'classnames';

export const Avatar = ({profile, label, small}) => (
    <div className={classnames("avatar", small?"small": "")}>
    {/* { profile.firstname.charAt(0) }{profile.lastname.charAt(0)} */}
    {label && small? label:"JD"}
    </div>
)

Avatar.propTypes = {
    profile: PropTypes.object,
    label: PropTypes.string,
    small: PropTypes.bool
}

