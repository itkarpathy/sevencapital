/* eslint-disable no-alert, no-console */

import './index.html';
import './index.scss';
import './scripts/script.js';
import { networkInterfaces } from 'os';
// import { isContext } from 'vm';

/* The flag that determines whether the wheel event is supported. */

/* The function that will run when the events are triggered. */

// const text = document.querySelector('.w-test');
const nav = document.querySelector('.navbar');
const contact = document.querySelector('#btn-side');
const close = document.querySelector('.close-btn');
const burger = document.querySelector('.icon');
const links = document.querySelectorAll('.menu-right li');
const openTab = document.querySelector('.container');

burger.addEventListener('click', e => {
  nav.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', e => {
    nav.classList.remove('open');
  });
});

// contact-form: //

function custom() {
  openTab.classList.add('active');
}

function closeBtn() {
  openTab.classList.remove('active');
}

contact.addEventListener('click', custom);
close.addEventListener('click', closeBtn);

/////////////////////////
///* sticky navbar *//

function scrollCheck() {
  return window.pageYOffset;
}
window.addEventListener('scroll', scrollCheck);

function sticky() {
  const sc = scrollCheck();

  if (sc >= 50 && window.innerWidth > 675) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

/////////////////////********//////////////////// */

// function change() {
//   const top = document.body.scrollTop;
//   const eTop = document.documentElement.scrollTop;
//   const fix = document.querySelector('.fix-p');

//   console.log('%c WORKS', 'background:green');

//   if (eTop > 13500 && eTop < 16000) {
//     fix.classList.add('test');
//   } else if (eTop > 16001 && eTop < 18000) {
//     fix.classList.add('test2');
//   } else {
//     fix.classList.remove('test', 'test2');
//   }
// }

/////////////////////////////////////////////

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from('blockquote', 1, { x: -400, opacity: 0 });
tl.from('.box-img', 1, { x: 300, opacity: 0, scale: '1.2' });
tl.from('span', 1, { width: 0 }, '=-.5');
tl.from('#img-1', 1, { x: -250, opacity: 0 }, '=-1');
tl.from('#img-2', 1, { x: 200, opacity: 0 }, '=-1');
tl3.from('#f10', 500, { x: 200, opacity: 0 }, '=-1');
tl3.from('#f09', 600, { x: -200, opacity: 0 }, '=-1');
tl3.from('#f11', 400, { x: 200, opacity: 0 }, '=-1');

tl4.from('#p-1', 2490, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-2', 3310, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-7', 480, { x: 0, opacity: 0 }, '=-1');
tl4.from('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-1', 5200, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-2', 5300, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-3', 5400, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-4', 5500, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-5', 5600, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-6', 5700, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-7', 6700, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-9', 4490, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-10', 5310, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-11', 4240, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-12', 5490, { y: -100, opacity: 0 }, '=-1');

/////
tl4.to('#p-1', 2490, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-2', 3310, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-7', 480, { x: 0, opacity: 0 }, '=-1');
tl4.to('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-1', 5200, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-2', 5300, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-3', 5400, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-4', 5500, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-5', 5600, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-6', 5700, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-7', 6700, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-9', 4490, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-10', 5310, { x: 0, opacity: 0 }, '=-1');
tl4.to('#pa-11', 4240, { x: 0, opacity: 0 }, '=-1');
tl4.from('#pa-12', 5490, { y: -100, opacity: 0 }, '=-1');
tl4.from('#pa-13', 7810, { x: 150, opacity: 0 }, '=-1');
tl4.from('#pa-14', 9240, { x: 300, opacity: 0 }, '=-1');
tl4.from('#pa-15', 3990, { x: 0, opacity: 0 }, '=-1');

tl5.from('.bg3', 1, { backgroundColor: 'red' }, '=-1');
tl5.from('.bg3 h3:last-child', 0.3, { transform: 'translateX(0%)' }, '=-1');
tl5.from('.bg4', 1, { backgroundColor: 'green' }, '=-1');
tl6.from('.bg5', 1, { backgroundColor: 'grey' }, '=-1');
tl7.from('#p-1', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-2', 3310, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-7', 480, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-1', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-2', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-3', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-4', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-5', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-6', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.to('#p-8', 5800, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-9', 1490, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-10', 3310, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-11', 2240, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-12', 1250, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-13', 4260, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-14', 2700, { x: 0, opacity: 0 }, '=-1');
tl7.from('#p-15', 480, { x: 0, opacity: 0 }, '=-1');
// tl8.from('.fix-box', 2480, { x: 0, opacity: 0 }, '=-1');
tl8.from('#imgOne', 2480, { x: 0, opacity: 0 }, '=-1');
tl8.from('.title-5', 2480, { x: -200, opacity: 0 }, '=-1');
tl8.to('.title-5', 2480, { y: 200, opacity: 1 }, '=-1');

////////

const scene8 = new ScrollMagic.Scene({
  triggerElement: '.sec-5',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('#imgOne')
  .setTween(tl8)
  .addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: '.sec9',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec9')
  .setTween(tl7)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: '.sec12',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec12')
  .setTween(tl6)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: '.sec11',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec11')
  .setTween(tl5)
  .addTo(controller);

const scene = new ScrollMagic.Scene({
  triggerElement: '.sec-7',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-7')
  .setTween(tl)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.sec-4',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-4')
  .setTween(tl3)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.sec-6',
  triggerHook: 'onLeave',
  duration: '100%'
})

  .setPin('.sec-6')
  .setTween(tl4)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: 'blockquote'
})

  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

window.addEventListener('scroll', sticky);
