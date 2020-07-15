import React, { Fragment } from 'react';
import Header              from '../../components/Header/Header';
import SpinnerLoader       from '../../components/Spinner/Spinner';
import Footer              from '../../components/Footer/Footer';
import { connect }         from 'react-redux';
import styles              from './HowItWorks.module.sass';
import LOCAL_CONSTANTS     from './HowItWorksConstants';
import { Link }            from 'react-router-dom';
import Icon                from '@mdi/react'
import { mdiEmailOutline } from '@mdi/js';
import ScrollToTop         from '../../components/ScrollToTop/ScrollToTop.js';

const stepsItemsRender = (item, index) => {
  return (
    <div key={index} className={styles.stepContainer}>
      <div className={styles.stepCircle}>
        {index + 1}
      </div>
      <h4 className={styles.stepTitle}>
        {item.title}
      </h4>
      <p className={styles.stepText}>
        {item.text}
      </p>
    </div>);
};

const stepsRender = () => {
  return LOCAL_CONSTANTS.steps.map( (item, index) => stepsItemsRender( item, index ) );
};

const FAQTextItemRender = (item, index) => {
  return <Fragment key={index}>
    {item.text}
    <a key={index} href={item.link}>{item.linkText}</a>
  </Fragment>;
};

const FAQTextRender = (textArr) => {
  return textArr.map( (item, index) => FAQTextItemRender( item, index ) );
};

const FAQBoldListRender = (item, index) => {
  return <p key={index} className={styles.boldList}>
    <strong>
      {item.title}
    </strong>
    {item.text}
  </p>;
};

const FAQRegularListRender = (item) => {
  return <ul className={styles.regularList}>
    {item.regularList.map( (item, index) => FAQRegularListItemsRender( item, index ) )}
  </ul>;
};

const FAQRegularListItemsRender = (item, index) => {
  return <li key={index}>
    -
    <a href={item.link}>
      {item.linkText}
    </a>
  </li>;
};

const FAQListRender = (item) => {
  if (item.hasOwnProperty('boldList')) {
    return item.boldList.map( (item, index) => FAQBoldListRender( item, index ) );

  } else if (item.hasOwnProperty('regularList')) {
    return <>{FAQRegularListRender(item)}</>;
  }
};

const FAQItemsRender = (item, index) => {
  return (
      <li key={index} className={styles.FAQSectionListElem}>
        <h4 className={styles.FAQSectionListElemTitle}>
          {item.title}
        </h4>
        <p className={styles.FAQSectionListElemText}>
          {FAQTextRender( item.textArr )}
        </p>
        {FAQListRender( item )}
      </li>
    );
};

const FAQRender = () => {
  return LOCAL_CONSTANTS.FAQ.map( (item, index) => FAQItemsRender( item, index ) );
};

const HowItWorks = (props) => {

  const { isFetching } = props;

  return (
    <>
      <Header/>
      {isFetching
       ? <SpinnerLoader/>
       : (<>

          <section className={styles.body}>
            <div className={styles.widthContainer}>
              <section className={styles.headerSection}>
                <iframe allowtransparency="true" title="Wistia video player" allowFullScreen frameBorder="0"
                        scrolling="no" className="wistia_embed" name="wistia_embed"
                        src="https://fast.wistia.net/embed/iframe/vfxvect60o" width="555" height="312"/>
                <div className={styles.description}>
                  <h2>How Does Squadhelp Work?</h2>
                  <p>Squadhelp allows you to host branding competitions to engage with the most creative
                    people across the globe and get high-quality results, fast. Thousands of creatives
                    compete with each other, suggesting great name ideas. At the end of the
                    collaborative contest, you select one winner. The winner gets paid, and you get a
                    strong brand name that will help you succeed! It's quick, simple, and costs a
                    fraction of an agency. </p>
                </div>
              </section>

              <section className={styles.stepsSection}>
                <h2 className={styles.stepsSectionHeader}>5 Simple Steps</h2>
                <div className={styles.stepsSectionContainer}>
                  {stepsRender()}
                </div>
              </section>

              <section className={styles.startContestSection}>
                <Link to="/startContest" className={styles.startContestBtn}>START A CONTEST</Link>
              </section>

              <section className={styles.FAQSection}>
                <header className={styles.FAQSectionHeader}>
                  <div className={styles.FAQSectionHeaderIcon}>
                    ?
                  </div>
                  <h5 className={styles.FAQSectionHeaderTitle}>
                    Frequently Asked Questions
                  </h5>
                </header>
                <ul className={styles.FAQSectionList}>
                  {FAQRender()}
                </ul>
              </section>
            </div>

            <section className={styles.questionSection}>
              <div className={styles.widthContainer + ' ' + styles.questionSectionContainer}>
                <div className={styles.questionSectionMailIcon}>
                  <Icon path={mdiEmailOutline}
                        size="45px"
                        color="#455a89"/>
                </div>

                <div className={styles.questionSectionTextContainer}>
                  <h1 className={styles.questionSectionTextContainerTitle}>
                    Questions?
                  </h1>

                  <p>
                    Check out our&nbsp;
                    <a href={"http://www.google.com"}>FAQs</a>
                    &nbsp;or send us a&nbsp;
                    <a href={"http://www.google.com"}>message</a>
                    &nbsp;. For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a&nbsp;
                    <a href={"http://www.google.com"}>Branding Consultation</a>
                  </p>
                </div>

                <a className={styles.questionSectionBtn} href="http://www.google.com">GET IN TOUCH</a>

              </div>
            </section>
          </section>

          <Footer/>
          <ScrollToTop/>
        </>)}
    </>

  );
};

const mapStateToProps = (state) => {
  const { isFetching } = state.userStore;
  return { isFetching };
};

export default connect( mapStateToProps, null )( HowItWorks );