'use strict';
$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {
  $('.hamburger-icon').on('click', function () {
    $(this).toggleClass('close');
    $('.nav').toggleClass('open');
  });

  $('.nav_list a').on('click', function () {
    $('.hamburger-icon').removeClass('close');
    $('.nav').removeClass('open');
  });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const speed = 500;
    const headerHeight = $('.main_header').outerHeight() || 0;
    const target = $(this.hash === "#" || this.hash === "" ? 'html' : this.hash);
    const position = target.offset().top - headerHeight;

    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    $('.hamburger-icon').removeClass('close');
    $('.nav').removeClass('open');
  });
});

// fade-in-section の表示制御（←これだけ外に出すのが重要！）
document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
});
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const MIN_LOADING_TIME = 2000; // 最低表示時間（1秒）

  const startTime = performance.now();

  requestAnimationFrame(() => {
    const now = performance.now();
    const elapsed = now - startTime;
    const delay = Math.max(MIN_LOADING_TIME - elapsed, 0);

    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600); // フェードアウトの時間
    }, delay);
  });
});
