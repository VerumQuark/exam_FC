import styles              from './FAQ.module.sass';
import React, { Fragment } from 'react';
import LOCAL_CONSTANTS     from '../../constants/HowItWorksConstants.js';

const FAQ = (props) => {

  return (
    <ul className={styles.List}>
      {FAQRender()}
    </ul>
  );
};

const FAQRender = () => {
  return LOCAL_CONSTANTS.FAQ.map( (item, index) => FAQItemsRender( item, index ) );
};

const FAQItemsRender = (item, index) => {
  return (
    <li key={index} className={styles.ListElem}>
      <h4 className={styles.ListElemTitle}>
        {item.title}
      </h4>
      <p className={styles.ListElemText}>
        {FAQTextRender( item.textArr )}
      </p>
      {FAQListRender( item )}
    </li>
  );
};

const FAQTextRender = (textArr) => {
  return textArr.map( (item, index) => FAQTextItemRender( item, index ) );
};

const FAQTextItemRender = (item, index) => {
  return <Fragment key={index}>
    {item.text}
    <a key={index} href={item.link}>{item.linkText}</a>
  </Fragment>;
};

const FAQListRender = (item) => {
  if (item.hasOwnProperty('boldList')) {
    return item.boldList.map( (item, index) => FAQBoldListRender( item, index ) );

  } else if (item.hasOwnProperty('regularList')) {
    return <ul className={styles.regularList}>
      {item.regularList.map( (item, index) => FAQRegularListItemsRender( item, index ) )}
    </ul>;
  }
};

const FAQBoldListRender = (item, index) => {
  return <p key={index} className={styles.boldList}>
    <strong>
      {item.title}
    </strong>
    {item.text}
  </p>;
};

const FAQRegularListItemsRender = (item, index) => {
  return <li key={index}>
    -
    <a href={item.link}>
      {item.linkText}
    </a>
  </li>;
};

export default FAQ;