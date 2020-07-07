import React from 'react';
import styles from './Header.module.sass';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CONSTANTS from '../../constants';
import {getUserAction, clearUserStore, headerRequest} from '../../actions/actionCreator';
import Icon from '@mdi/react'
import { mdiPhone, mdiChevronDown, mdiMenu } from '@mdi/js'
const classNames = require('classnames/bind');

class Header extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          isMenuClosed: true
      }
  }

  componentDidMount () {
    if ( !this.props.data) {
      this.props.getUser();
    }

  }

  logOut = () => {
    localStorage.clear();
    this.props.clearUserStore();
    this.props.history.replace('/login');
  };

    startContests = () => {
        this.props.history.push('/startContest');
    };
    renderLoginButtons = () => {
        if (this.props.data) {
            return (
                <>
                    <div className={styles.userInfo}>
                        <img
                            src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                            alt='user'/>
                        <span>{`Hi, ${this.props.data.displayName}`}</span>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
                        <ul>
                            <li><Link to='/dashboard'
                                      style={{textDecoration: 'none'}}><span>View Dashboard</span></Link></li>
                            <li><Link to='/account' style={{textDecoration: 'none'}}><span>My Account</span></Link></li>
                            <li><Link to='http:/www.google.com'
                                      style={{textDecoration: 'none'}}><span>Messages</span></Link></li>
                            <li><Link to='http:/www.google.com' style={{textDecoration: 'none'}}><span>Affiliate Dashboard</span></Link>
                            </li>
                            <li><span onClick={this.logOut}>Logout</span></li>
                        </ul>
                    </div>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt='email'/>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/login' style={{textDecoration: 'none'}}><span className={styles.btn}>LOGIN</span></Link>
                    <Link to='/registration' style={{textDecoration: 'none'}}><span
                        className={styles.btn}>SIGN UP</span></Link>
                </>
            )
        }
    };

    handleClick = () => {
        this.setState(state => ({
            isMenuClosed: !state.isMenuClosed
        }));
    }

    render() {
        const cx = classNames.bind(styles);
        const nav = cx({
            nav: true,
            closedNavMenu: this.state.isMenuClosed
        });

        if (this.props.isFetching) {
            return null;
        }
        return (
            <header className={styles.headerContainer}>
                <div className={styles.loginSignUpHeaders}>
                    <div className={styles.widthContainer}>
                        <div className={styles.numberFlexContainer}>
                            <div className={styles.numberContainer}>
                            <Icon path={mdiPhone}
                                  size={0.7}
                                  color='#28D2D0'/>
                            <a href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
                        </div>
                        </div>
                        <div className={styles.loginFlexContainer}>
                            <div className={styles.userButtonsContainer}>
                                {this.renderLoginButtons()}
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={styles.navContainer + ' ' + styles.widthContainer}>
                    <div className={styles.logoMenuContainer}>
                        <Link to='/'>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt='blue_logo'/>
                        </Link>
                        <div className={styles.hamburgerContainer} onClick={this.handleClick}>
                            <span className={styles.HamburgerBtn}/>
                            <span className={styles.HamburgerBtn}/>
                            <span className={styles.HamburgerBtn}/>
                        </div>
                    </div>
                    <div className={styles.leftNav}>
                        <div className={nav}>
                            <ul>
                                <li className={styles.menuPhone}>
                                    <a href="tel:(877)355-3585">
                                        <Icon path={mdiPhone}
                                              size={0.7}
                                              color='#bdbdbd'/>
                                        <span>(877)&nbsp;355-3585</span>
                                    </a>
                                </li>
                                <li>
                                    <span>NAME IDEAS</span>
                                    <Icon path={mdiChevronDown}
                                         size={0.7}
                                         color="#CCCCCC"/>
                                    <ul>
                                        <li><a href="http://www.google.com">Beauty</a></li>
                                        <li><a href="http://www.google.com">Consulting</a></li>
                                        <li><a href="http://www.google.com">E-Commerce</a></li>
                                        <li><a href="http://www.google.com">Fashion & Clothing</a></li>
                                        <li><a href="http://www.google.com">Finance</a></li>
                                        <li><a href="http://www.google.com">Real Estate</a></li>
                                        <li><a href="http://www.google.com">Tech</a></li>
                                        <li className={styles.divider}></li>
                                        <li><a href="http://www.google.com">More Categories</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>CONTESTS</span>
                                    <Icon path={mdiChevronDown}
                                          size={0.7}
                                          color="#CCCCCC"/>
                                    <ul>
                                        <li><a href="http://www.google.com">HOW IT WORKS</a></li>
                                        <li><a href="http://www.google.com">PRICING</a></li>
                                        <li><a href="http://www.google.com">AGENCY SERVICE</a></li>
                                        <li><a href="http://www.google.com">ACTIVE CONTESTS</a></li>
                                        <li><a href="http://www.google.com">WINNERS</a></li>
                                        <li><a href="http://www.google.com">LEADERBOARD</a></li>
                                        <li className={styles.divider}></li>
                                        <li><a href="http://www.google.com">BECOME A
                                            CREATIVE</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Our Work</span>
                                    <Icon path={mdiChevronDown}
                                          size={0.7}
                                          color="#CCCCCC"/>
                                    <ul>
                                        <li><a href="http://www.google.com">NAMES</a></li>
                                        <li><a href="http://www.google.com">TAGLINES</a></li>
                                        <li><a href="http://www.google.com">LOGOS</a></li>
                                        <li className={styles.divider}></li>
                                        <li><a href="http://www.google.com">TESTIMONIALS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Names For Sale</span>
                                    <Icon path={mdiChevronDown}
                                          size={0.7}
                                          color="#CCCCCC"/>
                                    <ul>
                                        <li><a href="http://www.google.com">POPULAR NAMES</a></li>
                                        <li><a href="http://www.google.com">SHORT NAMES</a></li>
                                        <li><a href="http://www.google.com">INTRIGUING NAMES</a></li>
                                        <li><a href="http://www.google.com">NAMES BY CATEGORY</a></li>
                                        <li><a href="http://www.google.com">VISUAL NAME SEARCH</a></li>
                                        <li className={styles.divider}></li>
                                        <li><a href="http://www.google.com">SELL YOUR
                                            DOMAINS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Blog</span>
                                    <Icon path={mdiChevronDown}
                                          size={0.7}
                                          color="#CCCCCC"/>
                                    <ul>
                                        <li><a href="http://www.google.com">ULTIMATE NAMING GUIDE</a></li>
                                        <li><a href="http://www.google.com">POETIC DEVICES IN BUSINESS NAMING</a></li>
                                        <li><a href="http://www.google.com">CROWDED BAR THEORY</a></li>
                                        <li className={styles.divider}></li>
                                        <li><a href="http://www.google.com">ALL ARTICLES</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className={styles.menuLogin}>
                                        <Link to='/login' style={{textDecoration: 'none'}}>LOGIN</Link>
                                        &nbsp;&nbsp;/&nbsp;&nbsp;
                                        <Link to='/registration' style={{textDecoration: 'none'}}>SIGN UP</Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>
                    </div>

                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
  return{
      userStore: state.userStore,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(headerRequest()),
    clearUserStore: () => dispatch(clearUserStore()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));