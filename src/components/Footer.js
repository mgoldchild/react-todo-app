import React from 'react';
import FilterLink from '../containers/FilterLink';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constraints/filter';

// Footerの実体は<p>~</p>に囲まれた3種類のフィルタリングリンク
export default class extends React.Component {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter={SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
      </p>
    );
  }
}

