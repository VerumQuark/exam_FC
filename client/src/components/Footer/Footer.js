import React, {Component} from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';
import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter } from '@mdi/js'


class Footer extends Component {

    headerItemsRender = (item) => {
        return (
            <div key={item.title}>
                <h4>{item.title}</h4>
                <ul>
                    {item.items.map(i => <li key={i}><a href="https://google.com">{i}</a></li>)}
                </ul>
            </div>
        );
    };

    headerLastItemsRender = (item) => {
        return (
            <div key={item.title}>
                <h4>{item.title}</h4>
                <ul>
                    {item.items.map(i => <li key={i}><a href="https://google.com">{i}</a></li>)}
                </ul>
                <h4 className={styles.lastItem}>{item.nextItem.title}</h4>
                <ul>
                    {item.nextItem.items.map(i => <li key={i}><a href="https://google.com">{i}</a></li>)}
                </ul>
            </div>
        );
    };

    featuredCategoriesItemsRender = (item, index) => {
        return (
            <div key={index}>
                <ul>
                    {item.map(i => <li key={i}><a href="https://google.com">{i}</a></li>)}
                </ul>
            </div>
        );
    };

    headerRender() {
        return CONSTANTS.FooterItems.map(item => {
            if (item.title === 'IMPORTANT GUIDELINES')
                return this.headerLastItemsRender(item)
            else
                return this.headerItemsRender(item)
        })
    };

    featuredCategoriesRender() {
        return CONSTANTS.FooterFeaturedCategories.map((item, index) => this.featuredCategoriesItemsRender(item, index))
    };

    render() {
        return (
            <footer className={styles.Container}>
                <section className={styles.widthContainer + ' ' + styles.headerSection}>
                    <div className={styles.top}>
                        <div className={styles.topHeader}>
                            {this.headerRender()}
                        </div>
                    </div>
                    <h1 className={styles.featuresHeader}>
                        FEATURED CATEGORIES
                    </h1>
                    <div className={styles.top}>
                        <div>
                            {this.featuredCategoriesRender()}
                        </div>
                        <a href="https://google.com" className={styles.shopper}>
                            squadhelp.com has a Shopper Approved rating of 4.9/5 based on 2685 ratings and reviews.
                        </a>
                    </div>

                </section>

                <footer className={styles.bottom}>
                    <div className={styles.widthContainer + ' ' + styles.bottomContainer}>
                        <section>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}footer-logo.png`} className={styles.logo} alt='footer_logo'/>
                            <span className={styles.copyright}>Copyright © 2017 Squadhelp Inc</span>
                        </section>

                        <section>
                            <ul className={styles.socialLinks}>
                                <li>
                                    <Icon path={mdiFacebook}
                                          size={0.75}
                                          color="#27CDCB"/>
                                </li>
                                <li>
                                    <Icon path={mdiTwitter}
                                          size={0.75}
                                          color="#27CDCB"/>
                                </li>
                            </ul>
                        </section>
                    </div>
                </footer>

            </footer>
        )
    }
}

export default Footer;
