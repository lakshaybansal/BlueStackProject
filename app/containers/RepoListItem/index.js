/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';
import DateTimePicker from 'react-datetime-picker';

export function RepoListItem(props) {
  const { item } = props;
  let nameprefix = '';

  

  var changeDate= function changeDate(date){
    console.log(" Here date  is ",date);
    
    return item.createdOn=date;
  }
  // Put together the content of the Compaigns
  const content = (
    <Wrapper>
      <div>
        {nameprefix + new Date(item.createdOn).getMonth()+"/" + new Date(item.createdOn).getFullYear() +"/"
        + new Date(item.createdOn).getDate()}
      </div>
      {" "}
      <div>
        {item.name}
        <div>
        {item.region}
        </div>
      </div>
      {" "}
      <div>
        {item.price}
      </div>
      {" "}
      <div>
        {item.csv}
      </div>
      {" "}
      <div>
        {item.report}
      </div>
      {" "}
      <div>
        Schedule Again
        <DateTimePicker
        onChange={changeDate}
          value={item.createdOn}
        />
        </div>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
