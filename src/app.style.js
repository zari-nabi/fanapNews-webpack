import React from "react";
import styled from "styled-components";

const bgLight = "#fff";
const bgDark = "#1c232b";
const colorLight = "#0b2341";
const colorDark = "#d9e4f3";

const generalBgLight = "#f6f9fd";
const generalBgDark = "#1c232b";

const secondaryColorLight = "#0f2f57";
const secondaryColorDark = "#eff";

const colorWhyLight ="#123a6d";
const colorWhyDark ="#d9e4f3";
const bgWhyDark = "#272e35"


const footerBgLight = "#071527";
const footerBgDark = "#97999e";

const shadowLight = "0px 2px 15px rgba(0, 0, 0, 0.1)";
const shadowDark = "0px 2px 15px rgba(255, 255, 255, 0.1)";

const shadowContactLight = "0 0 30px rgba(214, 215, 216, 0.6)";
const shadowContactDark = "0 0 30px rgba(50, 50, 50, 0.6)";


export const AppStyle = styled.div`
/**
* Template Name: Multi - v2.2.1
* Template URL: https://bootstrapmade.com/multi-responsive-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/


  font-family: 'Vazir-FD';
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};


a {
  color: #ed502e;
}

a:hover {
  color: #f1775d;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Vazir-FD';
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #ed502e;
  border-top-color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  display: none;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}

.back-to-top i {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #ed502e;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  transition: all 0.4s;
}

.back-to-top i:hover {
  background: #f06f54;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}

#header.header-scrolled {
  padding: 12px 0;
  box-shadow: ${({ theme }) => theme === true ? shadowLight : shadowDark};
}

#header .logo {
  font-size: 26px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

#header .logo a {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

#header .logo img {
  max-height: 40px;
}

@media (max-width: 992px) {
  #header .logo {
    font-size: 28px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right: 50px;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 28px;
}

.nav-menu a {
  display: block;
  position: relative;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  transition: 0.3s;
  font-size: 14px;
  font-family: 'Vazir-FD';
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #ed502e;
}

.nav-menu .drop-down ul {
  display: block;
  position: absolute;
  left: 15px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
  color: #ed502e;
}

.nav-menu .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
  content: "\eaa0";
  font-family: IcoFont;
  position: absolute;
  right: 15px;
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
  }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
  }
  .nav-menu .drop-down .drop-down > a:after {
    content: "\ea9d";
  }
}

/* Get Startet Button */
.get-started-btn {
  margin-left: 25px;
  background: #ed502e;
  color: #fff;
  border-radius: 4px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.get-started-btn:hover {
  background: #ef6445;
  color: #fff;
}

@media (max-width: 768px) {
  .get-started-btn {
    margin: 0 48px 0 0;
    padding: 6px 20px 7px 20px;
  }
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  top: 23px;
  right: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
}

.mobile-nav-toggle i {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.mobile-nav {
  position: fixed;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  z-index: 9999;
  overflow-y: auto;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  transition: ease-in-out 0.2s;
  opacity: 0;
  visibility: hidden;
  border-radius: 10px;
  padding: 10px 0;
}

.mobile-nav * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-nav a {
  display: block;
  position: relative;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  padding: 10px 20px;
  font-weight: 500;
  outline: none;
}

.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
  color: #ed502e;
  text-decoration: none;
}

.mobile-nav .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 10px;
  position: absolute;
  right: 15px;
}

.mobile-nav .active.drop-down > a:after {
  content: "\eaa1";
}

.mobile-nav .drop-down > a {
  padding-right: 35px;
}

.mobile-nav .drop-down ul {
  display: none;
  overflow: hidden;
}

.mobile-nav .drop-down li {
  padding-left: 20px;
}

.mobile-nav-overly {
  width: 100%;
  height: 100%;
  z-index: 9997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(4, 12, 21, 0.6);
  overflow: hidden;
  display: none;
  transition: ease-in-out 0.2s;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active .mobile-nav {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-active .mobile-nav-toggle i {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background-color: rgba(4, 12, 21, 0.8);
  overflow: hidden;
  position: relative;
}

#hero .carousel, #hero .carousel-inner, #hero .carousel-item, #hero .carousel-item::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

#hero .carousel-item {
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}

#hero .carousel-item::before {
  content: '';
  background-color: rgba(4, 12, 21, 0.5);
}

#hero .carousel-container {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 82px;
  left: 50px;
  right: 50px;
}

#hero h2 {
  color: #fff;
  margin: 0;
  font-size: 48px;
  font-weight: 700;
}

#hero p {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  color: #fff;
  margin-top: 10px;
}

@media (min-width: 1200px) {
  #hero p {
    width: 50%;
  }
}

#hero .carousel-inner .carousel-item {
  transition-property:all;
  background-position: center top;
}

#hero .carousel-inner .carousel-item,
#hero .carousel-inner .active.carousel-item-left,
#hero .carousel-inner .active.carousel-item-right {
  opacity: 0;
}

#hero .carousel-inner .active,
#hero .carousel-inner .carousel-item-next.carousel-item-left,
#hero .carousel-inner .carousel-item-prev.carousel-item-right {
  opacity: 1;
  transition: 0.5s;
}

#hero .carousel-inner .carousel-item-next,
#hero .carousel-inner .carousel-item-prev,
#hero .carousel-inner .active.carousel-item-left,
#hero .carousel-inner .active.carousel-item-right {
  left: 0;
  transform: translate3d(0, 0, 0);
}

#hero .carousel-control-prev, #hero .carousel-control-next {
  width: 10%;
  top: 112px;
}

@media (max-width: 992px) {
  #hero .carousel-control-prev, #hero .carousel-control-next {
    top: 66px;
  }
}

#hero .carousel-control-next-icon, #hero .carousel-control-prev-icon {
  background: none;
  font-size: 36px;
  line-height: 1;
  width: auto;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 10px;
  transition: 0.3s;
  color: rgba(255, 255, 255, 0.5);
}

#hero .carousel-control-next-icon:hover, #hero .carousel-control-prev-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

#hero .carousel-indicators li {
  cursor: pointer;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  overflow: hidden;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  opacity: .6;
  transition: 0.3s;
}

#hero .carousel-indicators li.active {
  opacity: 1;
  background: #ed502e;
}

#hero .btn-get-started {
  font-family: 'Vazir-FD';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 4px;
  transition: 0.5s;
  line-height: 1;
  color: #fff;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  background: #ed502e;
  margin-top: 15px;
}

#hero .btn-get-started:hover {
  background: #ef6445;
}

@media (max-width: 992px) {
  #hero {
    height: 100vh;
  }
  #hero .carousel-container {
    text-align: center;
    top: 74px;
  }
}

@media (max-width: 768px) {
  #hero h2 {
    font-size: 30px;
  }
}

@media (min-width: 1024px) {
  #hero .carousel-control-prev, #hero .carousel-control-next {
    width: 5%;
  }
}

@media (max-height: 500px) {
  #hero {
    height: 120vh;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
}

.section-bg {
  background-color: ${({ theme }) => theme === true ? generalBgLight : generalBgDark};
}

.section-title {
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: 'Vazir-FD';
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #f38b74;
  margin: 4px 10px;
}

.section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Vazir-FD';
  color:  ${({ theme }) => theme === true ? secondaryColorLight : secondaryColorDark};
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-left: 28px;
  position: relative;
}

.about .content ul li + li {
  margin-top: 10px;
}

.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #ed502e;
  line-height: 1;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .btn-learn-more {
  font-family: 'Vazir-FD';
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 5px;
  transition: 0.3s;
  line-height: 1;
  color: #ed502e;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #ed502e;
}

.about .content .btn-learn-more:hover {
  background: #ed502e;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  text-decoration: none;
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding-top: 0;
}

.counts .count-box {
  box-shadow: -10px -5px 40px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
}

.counts .count-box i {
  display: block;
  font-size: 30px;
  color: #ed502e;
  float: left;
}

.counts .count-box span {
  font-size: 42px;
  line-height: 24px;
  display: block;
  font-weight: 700;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  margin-left: 50px;
}

.counts .count-box p {
  padding: 30px 0 0 0;
  margin: 0;
  font-family: 'Vazir-FD';
  font-size: 14px;
}

.counts .count-box a {
  font-weight: 600;
  display: block;
  margin-top: 20px;
  color: #164682;
  font-size: 15px;
  font-family: 'Vazir-FD';
  transition: ease-in-out 0.3s;
}

.counts .count-box a:hover {
  color: #2169c4;
}

/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us {
  padding: 0;
  background:${({ theme }) => theme !== true && bgWhyDark};
}

.why-us .content {
  padding: 60px 100px 0 100px;
}

.why-us .content h3 {
  font-weight: 400;
  font-size: 34px;
  color: ${({ theme }) => theme === true ? colorWhyLight : colorWhyDark};
}

.why-us .content h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}

.why-us .content p {
  font-size: 15px;
  color: #848484;
}

.why-us .video-box {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 400px;
  position: relative;
}

.why-us .accordion-list {
  padding: 0 100px 60px 100px;
}

.why-us .accordion-list ul {
  padding: 0;
  list-style: none;
}

.why-us .accordion-list li + li {
  margin-top: 15px;
}

.why-us .accordion-list li {
  padding: 20px;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  border-radius: 4px;
}

.why-us .accordion-list a {
  display: block;
  position: relative;
  font-family: 'Vazir-FD';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-right: 30px;
  outline: none;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.why-us .accordion-list span {
  color: #ed502e;
  font-weight: 600;
  font-size: 18px;
  padding-right: 10px;
}

.why-us .accordion-list i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}

.why-us .accordion-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.why-us .accordion-list .icon-show {
  display: none;
}

.why-us .accordion-list a.collapsed {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.why-us .accordion-list a.collapsed:hover {
  color: #ed502e;
}

.why-us .accordion-list a.collapsed .icon-show {
  display: inline-block;
}

.why-us .accordion-list a.collapsed .icon-close {
  display: none;
}

.why-us .play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(#ed502e 50%, rgba(237, 80, 46, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  overflow: hidden;
}

.why-us .play-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.why-us .play-btn::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 2s;
  animation: pulsate-btn 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(237, 80, 46, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

.why-us .play-btn:hover::after {
  border-left: 15px solid #ed502e;
  transform: scale(20);
}

.why-us .play-btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

@media (max-width: 1024px) {
  .why-us .content, .why-us .accordion-list {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 992px) {
  .why-us .content {
    padding-top: 30px;
  }
  .why-us .accordion-list {
    padding-bottom: 30px;
  }
}

@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #ed502e;
  border-radius: 5px;
  transition: all .3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
  position: relative;
  z-index: 2;
}

.services .icon-box .icon i {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  font-size: 28px;
}

.services .icon-box .icon::before {
  position: absolute;
  content: '';
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: #f9c6bb;
  border-radius: 5px;
  transition: all .3s ease-out 0s;
  transform: translateZ(-1px);
  z-index: 1;
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  background: #ed502e;
  border-color: #ed502e;
}

.services .icon-box:hover .icon {
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

.services .icon-box:hover .icon i {
  color: #ed502e;
}

.services .icon-box:hover .icon::before {
  background: #f1775d;
}

.services .icon-box:hover h4 a, .services .icon-box:hover p {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}



/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonials .testimonial-wrap {
  padding-left: 50px;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  padding: 30px 30px 30px 60px;
  margin: 30px 15px;
  min-height: 200px;
  box-shadow: 0px 0px 20px 0px rgba(11, 35, 65, 0.1);
  position: relative;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 10px;
  border: 6px solid #fff;
  position: absolute;
  left: -45px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
  color: #fdedea;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

.testimonials .owl-nav, .testimonials .owl-dots {
  margin-top: 5px;
  text-align: center;
}

.testimonials .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.testimonials .owl-dot.active {
  background-color: #ed502e !important;
}

@media (max-width: 767px) {
  .testimonials .testimonial-wrap {
    padding-left: 0;
  }
  .testimonials .testimonial-item {
    padding: 30px;
    margin: 15px;
  }
  .testimonials .testimonial-item .testimonial-img {
    position: static;
    left: auto;
  }
}

/*--------------------------------------------------------------
# Cta
--------------------------------------------------------------*/
.cta {
  padding: 80px 0;
  background: #0b2341;
}

.cta h3 {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  font-size: 28px;
  font-weight: 700;
}

.cta p {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.cta .cta-btn {
  font-family: 'Vazir-FD';
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 35px;
  border-radius: 4px;
  transition: 0.5s;
  margin-top: 10px;
  border: 2px solid #ed502e;
  color: #fff;
}

.cta .cta-btn:hover {
  background: #ed502e;
  border: 2px solid #ed502e;
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  color: #ed502e;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  font-weight: 600;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.portfolio .portfolio-item .portfolio-info p {
  color: #1a5298;
  font-size: 14px;
  margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #123a6d;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover, .portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #ed502e;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

.portfolio .portfolio-item .portfolio-links {
  opacity: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 3;
  position: absolute;
  transition: all ease-in-out 0.3s;
}

.portfolio .portfolio-item .portfolio-links a {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.portfolio .portfolio-item .portfolio-links a:hover {
  color: #f59f8c;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 20px;
}

/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team .member {
  text-align: center;
  margin-bottom: 20px;
  background: #343a40;
  position: relative;
  overflow: hidden;
}

.team .member .member-info {
  opacity: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
}

.team .member .member-info-content {
  position: absolute;
  left: 50px;
  right: 0;
  bottom: 0;
  transition: bottom 0.4s;
}

.team .member .member-info-content h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.team .member .member-info-content span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.team .member .social {
  position: absolute;
  left: -50px;
  top: 0;
  bottom: 0;
  width: 50px;
  transition: left ease-in-out 0.3s;
  background: rgba(11, 35, 65, 0.5);
  text-align: center;
}

.team .member .social a {
  transition: color 0.3s;
  display: block;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  margin-top: 15px;
}

.team .member .social a:hover {
  color: #ed502e;
}

.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}

.team .member:hover .member-info {
  background: linear-gradient(0deg, rgba(11, 35, 65, 0.9) 0%, rgba(11, 35, 65, 0.8) 20%, rgba(0, 212, 255, 0) 100%);
  opacity: 1;
  transition: 0.4s;
}

.team .member:hover .member-info-content {
  bottom: 30px;
  transition: bottom 0.4s;
}

.team .member:hover .social {
  left: 0;
  transition: left ease-in-out 0.3s;
}

/*--------------------------------------------------------------
# Pricing
--------------------------------------------------------------*/
.pricing .row {
  padding-top: 40px;
}

.pricing .box {
  padding: 80px 40px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  text-align: center;
}

.pricing h3 {
  font-weight: 300;
  margin-bottom: 15px;
  font-size: 28px;
}

.pricing h4 {
  font-size: 46px;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  font-weight: 400;
  font-family: 'Vazir-FD';
  margin-bottom: 25px;
}

.pricing h4 span {
  color: #bababa;
  font-size: 18px;
  display: block;
}

.pricing ul {
  padding: 0;
  list-style: none;
  color: #999;
  text-align: left;
  line-height: 20px;
}

.pricing ul li {
  padding-bottom: 12px;
}

.pricing ul i {
  color: #ed502e;
  font-size: 18px;
  padding-right: 4px;
}

.pricing ul .na {
  color: #ccc;
}

.pricing ul .na i {
  color: #ccc;
}

.pricing ul .na span {
  text-decoration: line-through;
}

.pricing .get-started-btn {
  display: inline-block;
  padding: 10px 40px 11px 40px;
  border-radius: 4px;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  transition: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  border: 2px solid #0b2341;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

.pricing .get-started-btn:hover {
  background: #0b2341;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.pricing .featured {
  z-index: 10;
  padding: 100px 40px;
  border: 4px solid #ed502e;
}

.pricing .featured .get-started-btn {
  background: #ed502e;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  border-color: #ed502e;
}

.pricing .featured .get-started-btn:hover {
  background: #ef6445;
}

@media (max-width: 992px) {
  .pricing .box {
    max-width: 60%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 767px) {
  .pricing .box {
    max-width: 80%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 420px) {
  .pricing .box {
    max-width: 100%;
    margin: 0 auto 30px auto;
  }
}

/*--------------------------------------------------------------
# Frequently Asked Questions
--------------------------------------------------------------*/
.faq .faq-item {
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #e9f1fb;
}

.faq .faq-item i {
  color: #669ee5;
  font-size: 20px;
  float: left;
  line-height: 0;
  padding: 13px 0 0 0;
  margin: 0;
}

.faq .faq-item h4 {
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  margin: 0 0 10px 28px;
  font-family: 'Vazir-FD';
}

.faq .faq-item p {
  font-size: 15px;
}


.faq .icon-box {
  text-align: center;
  /* background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1); */
  background: #ed502e;
  border-color: #ed502e;
  padding: 10px 10px;
  transition: all ease-in-out 0.3s;
  border-radius: 10px;
}

.faq .icon-box .icon {
  margin: 0 auto;
  width: 20px;
  height: 14px;
  background: #ed502e;
  border:none;
  border-radius: 10px;
  transition: all .3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  transform-style: preserve-3d;
  position: relative;
  z-index: 2;
}

.faq .icon-box .icon i {
  color: #fff;
  font-size: 18px;
}

.faq .icon-box:hover {
  background: #ed502e;
  border-color: #ed502e;
}

.faq .icon-box:hover .icon {
  width: 24px;
}

.faq .icon-box:hover .icon i {
  font-size: 22px;
}

#faq .carousel-container {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 82px;
  left: 50px;
  right: 50px;
}

#faq .container h1 {
  color: #fff;
  margin: 0;
  font-size: 48px;
  font-weight: 700;
}


/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-box {
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 20px 0 30px 0;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

.contact .info-box i {
  font-size: 32px;
  color: #ed502e;
  border-radius: 50%;
  padding: 8px;
  border: 2px dotted #fbdad2;
}

.contact .info-box h3 {
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 10px 0;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact .php-email-form {
  box-shadow: ${({ theme }) => theme === true ? shadowContactLight : shadowContactDark};
  padding: 30px;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
}

.contact .php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

.contact .php-email-form .error-message {
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  opacity: 0.8;
  border-radius: 5px;
}

.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  opacity: 0.8;
  border-radius: 5px;
}

.contact .php-email-form .loading {
  display: none;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 4px;
}

.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
  border-color: #ed502e;
}

.contact .php-email-form input {
  padding: 20px 15px;
}

.contact .php-email-form textarea {
  padding: 12px 15px;
}

.contact .php-email-form button[type="submit"] {
  background: #ed502e;
  border: 0;
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
  transition: 0.4s;
}

.contact .php-email-form button[type="submit"]:hover {
  background: #ef6445;
}

.contact .php-email-form button[type="register"] {
  background: #ddd;
  border: 0;
  padding: 10px 30px;
  border-radius: 4px;
  color: #ed502e;
  transition: 0.4s;
}

.contact .php-email-form button[type="register"]:hover {
  background: #bbb;
}

.contact .top {
 min-height: 80px;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: ${({ theme }) => theme === true ? generalBgLight : generalBgDark};
  min-height: 40px;
  margin-top: 82px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 74px;
  }
}

.breadcrumbs h2 {
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme === true ? colorLight : colorDark};
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #123a6d;
  content: "/";
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-container {
  position: relative;
}

.portfolio-details .portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
  margin-top: 5px;
  text-align: left;
}

.portfolio-details .portfolio-details-carousel .owl-dot {
  display: inline-block;
  margin: 0 10px 0 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.portfolio-details .portfolio-details-carousel .owl-dot.active {
  background-color: #ed502e !important;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  position: absolute;
  right: 0;
  bottom: -70px;
  background:  ${({ theme }) => theme === true ? bgLight : bgDark};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 50px;
}

.portfolio-details .portfolio-description h2 {
  width: 50%;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0 0 0 0;
}

@media (max-width: 768px) {
  .portfolio-details .portfolio-description h2 {
    width: 100%;
  }
  .portfolio-details .portfolio-info {
    position: static;
    margin-top: 30px;
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: ${({ theme }) => theme === true ? footerBgLight : footerBgDark};
  padding: 0 0 30px 0;
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  font-size: 14px;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
  margin-bottom: 15px;
  background: #05101e;
  border-top: 4px solid #ed502e;
  text-align: center;
  padding: 30px 20px;
}

#footer .footer-top .footer-info h3 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: 'Vazir-FD';
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 4px;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  background: #0a1e38;
}

#footer .footer-top .social-links a:hover {
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  background: #ed502e;
  text-decoration: none;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #ef6445;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  color: #ef6445;
}

#footer .footer-top .footer-newsletter form {
  margin-top: 30px;
  background:  ${({ theme }) => theme === true ? colorDark : colorLight};
  padding: 6px 10px;
  position: relative;
  border-radius: 4px;
}

#footer .footer-top .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px;
  width: calc(100% - 110px);
}

#footer .footer-top .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: -2px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px 2px 20px;
  background: #ed502e;
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
}

#footer .footer-top .footer-newsletter form input[type="submit"]:hover {
  background: #ef6445;
}

#footer .copyright {
  border-top: 1px solid  ${({ theme }) => theme === true ? secondaryColorLight : secondaryColorDark};
  text-align: center;
  padding-top: 30px;
}

#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme === true ? colorDark : colorLight};
}

@media (max-width: 575px) {
  #footer .footer-top .footer-info {
    margin: -20px 0 30px 0;
  }
}

`;