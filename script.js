AOS.init({ disable: "mobile" });
if (window.innerWidth > 991) {
  // const hoverSection = document.getElementById("hoverSection");
  // const followCard = document.getElementById("full-screen-hover-card");

  // // Variables for smooth following
  // let targetX = 0;
  // let targetY = 0;
  // let currentX = 0;
  // let currentY = 0;
  // let isAnimating = false;

  // // Easing factor (0.1 = slow, 0.3 = fast)
  // const easingFactor = 0.12;

  // // Add styles for better performance
  // followCard.style.willChange = "transform";

  // // Function to check if mouse is within section bounds
  // function isMouseInSection(mouseX, mouseY) {
  //   const rect = hoverSection.getBoundingClientRect();
  //   return (
  //     mouseX >= rect.left &&
  //     mouseX <= rect.right &&
  //     mouseY >= rect.top &&
  //     mouseY <= rect.bottom
  //   );
  // }

  // // Animation function
  // function animate() {
  //   // Calculate the difference
  //   const dx = targetX - currentX;
  //   const dy = targetY - currentY;

  //   // Apply easing
  //   currentX += dx * easingFactor;
  //   currentY += dy * easingFactor;

  //   // Update position
  //   followCard.style.left = currentX + "px";
  //   followCard.style.top = currentY + "px";

  //   // Continue animation if there's still movement
  //   if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
  //     requestAnimationFrame(animate);
  //   } else {
  //     isAnimating = false;
  //   }
  // }

  // // Global mouse position tracking
  // let globalMouseX = 0;
  // let globalMouseY = 0;

  // // Track global mouse position
  // document.addEventListener("mousemove", (e) => {
  //   globalMouseX = e.clientX;
  //   globalMouseY = e.clientY;

  //   // Check if mouse is still in section after any movement
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // // Handle scroll events to check mouse position
  // window.addEventListener("scroll", () => {
  //   // After scroll, check if mouse is still within section bounds
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // // Handle window resize
  // window.addEventListener("resize", () => {
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // hoverSection.addEventListener("mouseenter", () => {
  //   followCard.classList.add("active");
  // });

  // hoverSection.addEventListener("mouseleave", () => {
  //   followCard.classList.remove("active");
  // });

  // hoverSection.addEventListener("mousemove", (e) => {
  //   const rect = hoverSection.getBoundingClientRect();

  //   // Calculate mouse position
  //   const x = e.clientX;
  //   const y = e.clientY;

  //   // Show card if mouse is in section
  //   followCard.classList.add("active");

  //   // Get card dimensions
  //   const cardWidth = 550;
  //   const cardHeight = followCard.offsetHeight || 400;

  //   // CENTER THE CARD ON MOUSE
  //   let centeredX = x - cardWidth / 15;
  //   let centeredY = y - cardHeight / 15;

  //   // Keep card within section boundaries
  //   const minX = rect.left;
  //   const maxX = rect.right - cardWidth;
  //   const minY = rect.top;
  //   const maxY = rect.bottom - cardHeight / 2;

  //   targetX = Math.max(minX, Math.min(maxX, centeredX));
  //   targetY = Math.max(minY, Math.min(maxY, centeredY));

  //   // Start animation if not already running
  //   if (!isAnimating) {
  //     isAnimating = true;
  //     requestAnimationFrame(animate);
  //   }
  // });

  // var myAnimation = new hoverEffect({
  //   parent: document.querySelector(".fullscreen-hover-card"),
  //   intensity: 0.1,
  //   image1: "images/thumbnail.jpg",
  //   image2: "images/thumbnail.jpg",
  //   displacementImage: "images/7.jpg",
  //   imagesRatio: 0.429,
  // });
  // var myAnimation = new hoverEffect({
  //   parent: document.querySelector(".card-middle"),
  //   intensity: 0.01,
  //   image1: "images/thumbnail.png",
  //   image2: "images/thumbnail.png",
  //   displacementImage: "images/7.jpg",
  //   imagesRatio: 0.56,
  // });

  // gsap function for hover card tilt
  const el = document.getElementById("full-screen-hover-card");

  // Set initial 3D properties using GSAP 3.x syntax
  gsap.set(el, {
    transformPerspective: 5000,
    transformOrigin: "center center 0px",
  });

  function onMouseMove(e) {
    const rect = el.getBoundingClientRect();
    const elXPos = rect.left;
    const elYPos = rect.top;
    const width = rect.width;
    const height = rect.height;

    const elRelativeXPos = e.pageX - elXPos;
    const elRelativeYPos = e.pageY - elYPos;
    const xPos = (elRelativeXPos / width - 0.5) * 2;
    const yPos = (elRelativeYPos / height - 0.5) * 2;
    const rotationXValue = 1.5 * yPos;
    const rotationYValue = 1.5 * xPos;

    // Use gsap.to instead of TweenLite.to
    gsap.to(el, {
      duration: 1,
      rotationY: rotationYValue,
      rotationX: rotationXValue,
      ease: "expo.out", // Updated ease syntax
      transformOrigin: "center center 0px",
    });
  }

  function onMouseLeave() {
    // Reset rotation when mouse leaves
    gsap.to(el, {
      duration: 1,
      rotationY: 0,
      rotationX: 0,
      ease: "expo.out",
    });
  }

  el.addEventListener("mousemove", onMouseMove);
  el.addEventListener("mouseleave", onMouseLeave);
}

// let lastScrollTop = 0;
// const header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     // Scrolling down
//     header.style.transform = "translateY(-100%)";
//   } else {
//     // Scrolling up
//     header.style.transform = "translateY(0)";
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile
// });

// const scrollignCardsContainer = document.getElementById(
//   "scrolling-card-wrapper"
// );

// // gsap code for scrolling cards
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let horizontalSection = document.querySelector(".horizontal");
// let scrollingCardWrapper = document.getElementById("scrolling-card-wrapper");
// let tween;
// let currentScrollTrigger;

// // Navigation elements
// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");
// const dayButtons = document.querySelectorAll(".day-btn");

// // Day navigation buttons
// dayButtons.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetSelector = btn.getAttribute("data-target");
//     scrollToTarget(targetSelector);
//     updateDayButtonActive(targetSelector);
//   });
// });

// function scrollToTarget(targetSelector) {
//   let targetElem = document.querySelector(targetSelector);
//   let y = targetElem;

//   if (targetElem && scrollingCardWrapper.contains(targetElem)) {
//     // If target is within the horizontal scroll section
//     let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
//     let totalMovement = scrollingCardWrapper.scrollWidth - window.innerWidth;
//     let targetPosition = targetElem.offsetLeft;
//     y = Math.round(
//       tween.scrollTrigger.start + (targetPosition / totalMovement) * totalScroll
//     );
//   }

//   gsap.to(window, {
//     scrollTo: {
//       y: y,
//       autoKill: false,
//     },
//     duration: 1,
//     ease: "power2.out",
//   });
// }

// function updateDayButtonActive(targetSelector) {

//   console.log(targetSelector, "targetkjdshvc")
//   dayButtons.forEach((btn) => {
//     btn.classList.toggle(
//       "active",
//       btn.getAttribute("data-target") === targetSelector
//     );
//   });
// }

// // Create the ScrollTrigger animation
// let createHorizontalScroll = () => {
//   gsap.to(".horizontal", {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//       trigger: ".horizontal",
//       start: "center center",
//       end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`, // Dynamic end calculation
//       pin: "#horizontal-scoll",
//       scrub: true,
//       invalidateOnRefresh: true,
//       // markers: true,
//       onUpdate: (self) => {
//         updateActiveStatesOnScroll(self.progress);
//       },
//     },
//   });
//   currentScrollTrigger = tween.scrollTrigger;
// };

// // Update active states based on scroll position
// function updateActiveStatesOnScroll(progress) {
//   const dayCards = document.querySelectorAll(".card[id]");
//   const totalWidth = scrollingCardWrapper.scrollWidth - window.innerWidth;
//   const currentPosition = progress * totalWidth;

//   let activeDay = "#day-12"; // default

//   dayCards.forEach((card) => {
//     const cardPosition = card.offsetLeft;
//     if (currentPosition >= cardPosition - 100) {
//       // 100px threshold
//       activeDay = "#" + card.id;
//     }
//   });

//   updateDayButtonActive(activeDay);
// }

//
//
//
//
//
//
//
//
//
//
//
//
//

// // Get the ScrollTrigger instance AFTER it's created
// currentScrollTrigger = ScrollTrigger.getAll().find(
//   (st) => st.trigger === horizontalSection
// );

// function scrollToPosition(progress) {
//   if (currentScrollTrigger) {
//     const scrollPosition =
//       currentScrollTrigger.start +
//       (currentScrollTrigger.end - currentScrollTrigger.start) * progress;
//     window.scrollTo({
//       top: scrollPosition,
//       behavior: "smooth",
//     });
//   }
// }

// // Previous button - scroll backwards
// if (prevButton) {
//   prevButton.addEventListener("click", () => {
//     // Get fresh reference to ScrollTrigger
//     currentScrollTrigger = ScrollTrigger.getAll().find(
//       (st) => st.trigger === horizontalSection
//     );
//     const currentProgress = currentScrollTrigger
//       ? currentScrollTrigger.progress
//       : 0;
//     const newProgress = Math.max(0, currentProgress - 0.1); // Move back by 10%
//     console.log(
//       "Previous clicked - Current progress:",
//       currentProgress,
//       "New progress:",
//       newProgress
//     );
//     scrollToPosition(newProgress);
//   });
// }

// // Next button - scroll forwards
// if (nextButton) {
//   nextButton.addEventListener("click", () => {
//     // Get fresh reference to ScrollTrigger
//     currentScrollTrigger = ScrollTrigger.getAll().find(
//       (st) => st.trigger === horizontalSection
//     );
//     const currentProgress = currentScrollTrigger
//       ? currentScrollTrigger.progress
//       : 0;
//     const newProgress = Math.min(1, currentProgress + 0.1); // Move forward by 10%
//     console.log(
//       "Next clicked - Current progress:",
//       currentProgress,
//       "New progress:",
//       newProgress
//     );
//     scrollToPosition(newProgress);
//   });
// }

// createHorizontalScroll();

// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });

//  working from here

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Variables
// let horizontalSection = document.querySelector(".horizontal");
// let scrollingCardWrapper = document.getElementById("scrolling-card-wrapper");
// let tween;
// let currentScrollTrigger;

// // Navigation elements
// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");
// const dayButtons = document.querySelectorAll(".day-btn");
// const toggleDayBtn = document.getElementById("toggle-day");
// const toggleNightBtn = document.getElementById("toggle-night");

// let currentMode = "day"; // 'day' or 'night'

// // Day/Night toggle functionality
// toggleDayBtn.addEventListener("click", function () {
//   currentMode = "day";
//   updateToggleButtons();
//   // Navigate to current day's day section
//   const activeDay = document.querySelector(".day-btn.active");
//   if (activeDay) {
//     const target = activeDay.getAttribute("data-target");
//     scrollToTarget(target);
//   }
// });

// toggleNightBtn.addEventListener("click", function () {
//   currentMode = "night";
//   updateToggleButtons();
//   // Navigate to current day's night section
//   const activeDay = document.querySelector(".day-btn.active");
//   if (activeDay) {
//     const target = activeDay.getAttribute("data-night-target");
//     scrollToTarget(target);
//   }
// });

// function updateToggleButtons() {
//   toggleDayBtn.classList.toggle("active", currentMode === "day");
//   toggleNightBtn.classList.toggle("active", currentMode === "night");
// }

// // Individual day buttons - MODIFIED TO AUTO SWITCH TO DAY MODE
// dayButtons.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();

//     // Update active day button
//     dayButtons.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");

//     // AUTOMATICALLY SWITCH TO DAY MODE when any date button is clicked
//     currentMode = "day";
//     updateToggleButtons();

//     // Always navigate to the day target (not night)
//     const target = btn.getAttribute("data-target");
//     scrollToTarget(target);
//   });
// });

// function scrollToTarget(targetSelector) {
//   let targetElem = document.querySelector(targetSelector);
//   let y = targetElem;

//   if (targetElem && scrollingCardWrapper.contains(targetElem)) {
//     // If target is within the horizontal scroll section
//     let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
//     let totalMovement = scrollingCardWrapper.scrollWidth - window.innerWidth;
//     let targetPosition = targetElem.offsetLeft;
//     y = Math.round(
//       (tween.scrollTrigger.start + (targetPosition / totalMovement) * totalScroll) - 150
//     );
//   }

//   gsap.to(window, {
//     scrollTo: {
//       y: y,
//       autoKill: false,
//     },
//     duration: 1,
//     ease: "power2.out",
//   });
// }

// function updateTimeButtonActive(activeTarget) {
//   // Update day button based on target
//   dayButtons.forEach((btn) => {
//     const dayTarget = btn.getAttribute("data-target");
//     const nightTarget = btn.getAttribute("data-night-target");

//     if (dayTarget === activeTarget) {
//       btn.classList.add("active");
//       currentMode = "day";
//     } else if (nightTarget === activeTarget) {
//       btn.classList.add("active");
//       currentMode = "night";
//     } else {
//       btn.classList.remove("active");
//     }
//   });

//   updateToggleButtons();
// }

// // Create horizontal scroll animation
// function createHorizontalScroll() {
//   tween = gsap.to(scrollingCardWrapper, {
//     x: () => -(scrollingCardWrapper.scrollWidth - window.innerWidth),
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#horizontal-scroll",
//       pin: true,
//       start: "center-=50px center",
//       scrub: 1,
//       // markers:true,
//       end: () => `+=${scrollingCardWrapper.scrollWidth - window.innerWidth}`,
//       invalidateOnRefresh: true,
//       onUpdate: (self) => {
//         updateActiveStatesOnScroll(self.progress);
//       },
//     },
//   });

//   currentScrollTrigger = tween.scrollTrigger;
// }

// // Update active states based on scroll position
// function updateActiveStatesOnScroll(progress) {
//   const targetCards = document.querySelectorAll(".card[id]");
//   const totalWidth = scrollingCardWrapper.scrollWidth - window.innerWidth;
//   const currentPosition = progress * totalWidth;

//   let activeTarget = "#day-12-day"; // default

//   targetCards.forEach((card) => {
//     const cardPosition = card.offsetLeft;
//     if (currentPosition >= cardPosition - 200) {
//       // 100px threshold
//       activeTarget = "#" + card.id;
//     }
//   });

//   // Update active button based on current target
//   updateTimeButtonActive(activeTarget);
// }

// // Navigation buttons functionality
// function scrollToPosition(progress) {
//   if (currentScrollTrigger) {
//     const scrollPosition =
//       currentScrollTrigger.start +
//       (currentScrollTrigger.end - currentScrollTrigger.start) * progress;
//     gsap.to(window, {
//       scrollTo: {
//         y: scrollPosition,
//         autoKill: false,
//       },
//       duration: 0.8,
//       ease: "power2.out",
//     });
//   }
// }

// prevButton?.addEventListener("click", () => {
//   const currentProgress = currentScrollTrigger
//     ? currentScrollTrigger.progress
//     : 0;
//   const newProgress = Math.max(0, currentProgress - 0.15);
//   scrollToPosition(newProgress);
// });

// nextButton?.addEventListener("click", () => {
//   const currentProgress = currentScrollTrigger
//     ? currentScrollTrigger.progress
//     : 0;
//   const newProgress = Math.min(1, currentProgress + 0.15);
//   scrollToPosition(newProgress);
// });

// // Initialize
// createHorizontalScroll();

// // Handle resize
// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });

// working till here

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Variables
let horizontalSection = document.querySelector(".horizontal");
let scrollingCardWrapper = document.getElementById("scrolling-card-wrapper");
let tween;
let currentScrollTrigger;

// Navigation elements
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const dayButtons = document.querySelectorAll(".day-btn");
const toggleDayBtn = document.getElementById("toggle-day");
const toggleNightBtn = document.getElementById("toggle-night");

let currentMode = "day"; // 'day' or 'night'

// Day/Night toggle functionality
toggleDayBtn.addEventListener("click", function () {
  currentMode = "day";
  updateToggleButtons();
  // Navigate to current day's day section
  const activeDay = document.querySelector(".day-btn.active");
  if (activeDay) {
    const target = activeDay.getAttribute("data-target");
    scrollToTarget(target);
  }
});

toggleNightBtn.addEventListener("click", function () {
  currentMode = "night";
  updateToggleButtons();
  // Navigate to current day's night section
  const activeDay = document.querySelector(".day-btn.active");
  if (activeDay) {
    const target = activeDay.getAttribute("data-night-target");
    scrollToTarget(target);
  }
});

function updateToggleButtons() {
  toggleDayBtn.classList.toggle("active", currentMode === "day");
  toggleNightBtn.classList.toggle("active", currentMode === "night");
}

// Individual day buttons - MODIFIED TO AUTO SWITCH TO DAY MODE
dayButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Update active day button
    dayButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // AUTOMATICALLY SWITCH TO DAY MODE when any date button is clicked
    currentMode = "day";
    updateToggleButtons();

    // Always navigate to the day target (not night)
    const target = btn.getAttribute("data-target");
    scrollToTarget(target);
  });
});

function scrollToTarget(targetSelector) {
  let targetElem = document.querySelector(targetSelector);
  let y = targetElem;

  if (targetElem && scrollingCardWrapper.contains(targetElem)) {
    // If target is within the horizontal scroll section
    let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
    let totalMovement = scrollingCardWrapper.scrollWidth - window.innerWidth;
    let targetPosition = targetElem.offsetLeft;

    // Calculate the desired scroll position
    let calculatedY = Math.round(
      tween.scrollTrigger.start +
        (targetPosition / totalMovement) * totalScroll -
        150
    );

    // Ensure we don't scroll beyond the end of the horizontal section
    let maxScrollY = tween.scrollTrigger.end;
    y = Math.min(calculatedY, maxScrollY);
  }

  gsap.to(window, {
    scrollTo: {
      y: y,
      autoKill: false,
    },
    duration: 1,
    ease: "power2.out",
  });
}

function updateTimeButtonActive(activeTarget) {
  // Update day button based on target
  dayButtons.forEach((btn) => {
    const dayTarget = btn.getAttribute("data-target");
    const nightTarget = btn.getAttribute("data-night-target");

    if (dayTarget === activeTarget) {
      btn.classList.add("active");
      currentMode = "day";
    } else if (nightTarget === activeTarget) {
      btn.classList.add("active");
      currentMode = "night";
    } else {
      btn.classList.remove("active");
    }
  });

  updateToggleButtons();
}

// Create horizontal scroll animation
function createHorizontalScroll() {
  tween = gsap.to(scrollingCardWrapper, {
    x: () => -(scrollingCardWrapper.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#horizontal-scroll",
      pin: true,
      start: "center-=50px center",
      scrub: 1,
      // markers:true,
      end: () => `+=${scrollingCardWrapper.scrollWidth - window.innerWidth}`,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        updateActiveStatesOnScroll(self.progress);
      },
    },
  });

  currentScrollTrigger = tween.scrollTrigger;
}

// Update active states based on scroll position
function updateActiveStatesOnScroll(progress) {
  const targetCards = document.querySelectorAll(".card[id]");
  const totalWidth = scrollingCardWrapper.scrollWidth - window.innerWidth;
  const currentPosition = progress * totalWidth;

  let activeTarget = "#day-12-day"; // default

  targetCards.forEach((card) => {
    const cardPosition = card.offsetLeft;
    if (currentPosition >= cardPosition - 200) {
      // 100px threshold
      activeTarget = "#" + card.id;
    }
  });

  // Update active button based on current target
  updateTimeButtonActive(activeTarget);
}

// Navigation buttons functionality
function scrollToPosition(progress) {
  if (currentScrollTrigger) {
    const scrollPosition =
      currentScrollTrigger.start +
      (currentScrollTrigger.end - currentScrollTrigger.start) * progress;
    gsap.to(window, {
      scrollTo: {
        y: scrollPosition,
        autoKill: false,
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }
}

prevButton?.addEventListener("click", () => {
  const currentProgress = currentScrollTrigger
    ? currentScrollTrigger.progress
    : 0;
  const newProgress = Math.max(0, currentProgress - 0.15);
  scrollToPosition(newProgress);
});

nextButton?.addEventListener("click", () => {
  const currentProgress = currentScrollTrigger
    ? currentScrollTrigger.progress
    : 0;
  const newProgress = Math.min(1, currentProgress + 0.15);
  scrollToPosition(newProgress);
});

// Initialize
createHorizontalScroll();

// Handle resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

$(document).ready(function () {
  // Always run this (independent of above)
  const nmaModalVideoEl = document.getElementById("my-video-nma-modal");
  if (nmaModalVideoEl && typeof videojs !== "undefined") {
    const nmaModalVideo = videojs("my-video-nma-modal");

    $(".nma-modal").on("hidden.bs.modal", function () {
      nmaModalVideo.pause();
      nmaModalVideo.currentTime(0); // Optional: rewind to beginning
    });
  }

  let player;

  // Initialize video player when modal is shown
  $(".nma-modal").on("shown.bs.modal", function () {
    if (!player) {
      player = videojs("my-video-nma-modal", {
        fluid: false,
        responsive: true,
        aspectRatio: "16:9",
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        controls: true,
        preload: "auto",
      });
    }

    // Adjust modal size based on screen height
    adjustModalSize();
  });

  // Clean up video player when modal is hidden
  $(".nma-modal").on("hidden.bs.modal", function () {
    if (player) {
      player.pause();
    }
  });

  // Adjust modal size on window resize
  $(window).on("resize", function () {
    if ($(".nma-modal").hasClass("show")) {
      adjustModalSize();
    }
  });

  function adjustModalSize() {
    const modal = $(".nma-modal");
    const modalDialog = modal.find(".modal-dialog");
    const modalContent = modal.find(".modal-content");
    const videoContainer = modal.find(".video-container");

    const windowHeight = $(window).height();
    const windowWidth = $(window).width();

    // Calculate maximum dimensions based on screen size
    const maxModalHeight = windowHeight * 0.9;
    const maxModalWidth = windowWidth * 0.9;

    // Calculate video dimensions maintaining 16:9 ratio
    let videoWidth = maxModalWidth;
    let videoHeight = videoWidth * (9 / 16);

    // If calculated height exceeds max height, adjust based on height
    if (videoHeight > maxModalHeight - 60) {
      // 60px buffer for header
      videoHeight = maxModalHeight - 60;
      videoWidth = videoHeight * (16 / 9);
    }

    // Apply calculated dimensions
    modalDialog.css({
      "max-width": videoWidth + "px",
      width: videoWidth + "px",
    });

    modalContent.css({
      height: videoHeight + 60 + "px", // Add header height
    });

    // For very short screens, make additional adjustments
    if (windowHeight <= 480) {
      modalDialog.css("margin", "0.25rem auto");
    } else if (windowHeight <= 600) {
      modalDialog.css("margin", "0.5rem auto");
    }
  }
});
$(document).ready(function () {
  // Always run this (independent of above)
  const nmaModalVideoEl = document.getElementById("ctn-modal");
  if (nmaModalVideoEl && typeof videojs !== "undefined") {
    const nmaModalVideo = videojs("ctn-modal");

    $(".ctn-modal").on("hidden.bs.modal", function () {
      nmaModalVideo.pause();
      nmaModalVideo.currentTime(0); // Optional: rewind to beginning
    });
  }

  let player;

  // Initialize video player when modal is shown
  $(".ctn-modal").on("shown.bs.modal", function () {
    if (!player) {
      player = videojs("ctn-modal", {
        fluid: false,
        responsive: true,
        aspectRatio: "16:9",
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        controls: true,
        preload: "auto",
      });
    }

    // Adjust modal size based on screen height
    adjustModalSize();
  });

  // Clean up video player when modal is hidden
  $(".ctn-modal").on("hidden.bs.modal", function () {
    if (player) {
      player.pause();
    }
  });

  // Adjust modal size on window resize
  $(window).on("resize", function () {
    if ($(".ctn-modal").hasClass("show")) {
      adjustModalSize();
    }
  });

  function adjustModalSize() {
    const modal = $(".ctn-modal");
    const modalDialog = modal.find(".modal-dialog");
    const modalContent = modal.find(".modal-content");
    const videoContainer = modal.find(".video-container");

    const windowHeight = $(window).height();
    const windowWidth = $(window).width();

    // Calculate maximum dimensions based on screen size
    const maxModalHeight = windowHeight * 0.9;
    const maxModalWidth = windowWidth * 0.9;

    // Calculate video dimensions maintaining 16:9 ratio
    let videoWidth = maxModalWidth;
    let videoHeight = videoWidth * (9 / 16);

    // If calculated height exceeds max height, adjust based on height
    if (videoHeight > maxModalHeight - 100) {
      // 60px buffer for header
      videoHeight = maxModalHeight - 100;
      videoWidth = videoHeight * (16 / 9);
    }

    // Apply calculated dimensions
    modalDialog.css({
      "max-width": videoWidth + "px",
      width: videoWidth + "px",
    });

    modalContent.css({
      height: videoHeight + 100 + "px", // Add header height
    });

    // For very short screens, make additional adjustments
    if (windowHeight <= 480) {
      modalDialog.css("margin", "0.25rem auto");
    } else if (windowHeight <= 600) {
      modalDialog.css("margin", "0.5rem auto");
    }
  }
});

class SmoothMarquee {
  constructor(containerId, contentId) {
    this.container = document.getElementById(containerId);
    this.content = document.getElementById(contentId);
    this.startX = 0;
    this.currentX = 0;
    this.lastX = 0;
    this.direction = "left";
    this.baseSpeed = 1;
    this.currentSpeed = 1;
    this.isPaused = false;
    this.animationId = null;
    this.position = 0;
    this.contentWidth = 0;
    this.containerWidth = 0;
    this.dragSensitivity = 0.8;
    this.swipeThreshold = 30;
    this.velocity = 0;
    this.dragOffset = 0;

    // Scroll control variables
    this.lastScrollY = window.scrollY;
    this.scrollThreshold = 10;
    this.scrollDebounceTimer = null;
    this.scrollSensitivity = 1;

    this.init();
  }

  init() {
    this.calculateDimensions();
    this.setupEventListeners();
    this.startAnimation();
    this.updateStatus();
  }

  calculateDimensions() {
    this.containerWidth = this.container.offsetWidth;
    this.contentWidth = this.content.scrollWidth / 4; // Divide by number of repeated texts
    console.log("Dimensions:", {
      container: this.containerWidth,
      content: this.contentWidth,
    });
  }

  setupEventListeners() {
    // Scroll events for direction control
    window.addEventListener("scroll", this.handleScroll.bind(this), {
      passive: true,
    });

    // Wheel events for more responsive scroll detection
    window.addEventListener("wheel", this.handleWheel.bind(this), {
      passive: true,
    });

    // Window resize
    window.addEventListener("resize", () => {
      this.calculateDimensions();
    });

    // Prevent default drag behavior on images/elements
    this.container.addEventListener("dragstart", (e) => e.preventDefault());
  }

  handleScroll(e) {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;

    // Only respond to significant scroll changes
    if (Math.abs(scrollDelta) > this.scrollThreshold) {
      const newDirection = scrollDelta > 0 ? "right" : "left";

      if (this.direction !== newDirection) {
        this.changeDirection(newDirection);
        this.showScrollFeedback(newDirection, scrollDelta);
      }

      this.lastScrollY = currentScrollY;
    }
  }

  handleWheel(e) {
    // More responsive wheel-based direction control
    const wheelDelta = e.deltaY;

    if (Math.abs(wheelDelta) > 5) {
      const newDirection = wheelDelta > 0 ? "right" : "left";

      if (this.direction !== newDirection) {
        this.changeDirection(newDirection);
        this.showScrollFeedback(newDirection, wheelDelta);
      }
    }
  }

  showScrollFeedback(direction, delta) {
    const scrollIndicator = document.getElementById("scrollIndicator");
    const statusIndicator = document.getElementById("statusIndicator");

    // Update scroll indicator
    scrollIndicator.style.background =
      direction === "left"
        ? "rgba(100, 150, 255, 0.3)"
        : "rgba(255, 150, 100, 0.3)";
    scrollIndicator.textContent = `🖱️ Scrolled ${direction.toUpperCase()}! Direction changed`;

    // Update status with scroll info
    statusIndicator.style.background =
      direction === "left"
        ? "rgba(100, 150, 255, 0.2)"
        : "rgba(255, 150, 100, 0.2)";

    // Clear feedback after delay
    clearTimeout(this.scrollDebounceTimer);
    this.scrollDebounceTimer = setTimeout(() => {
      scrollIndicator.style.background = "rgba(255, 255, 255, 0.1)";
      scrollIndicator.textContent =
        "🖱️ Scroll to control: Up = Left | Down = Right";
      statusIndicator.style.background = "rgba(0, 0, 0, 0.2)";
      this.updateStatus();
    }, 1500);
  }

  handleStart(e) {
    // Only handle mouse events, not touch
    if (e.type.includes("touch")) return;

    this.startX = e.clientX;
    this.lastX = this.startX;
    this.container.style.cursor = "grabbing";
    this.dragOffset = 0;

    console.log("Mouse drag start at:", this.startX);
    e.preventDefault();
  }

  handleMove(e) {
    if (e.type.includes("touch")) return;

    this.currentX = e.clientX;
    const deltaX = this.currentX - this.lastX;
    const totalDelta = this.currentX - this.startX;

    this.lastX = this.currentX;
    e.preventDefault();
  }

  handleEnd(e) {
    // if (!this.isMouseDown) return;

    const totalDelta = this.currentX - this.startX;

    console.log("Mouse drag end:", {
      totalDelta,
      velocity: this.velocity,
      threshold: this.swipeThreshold,
    });

    // Check for swipe gesture
    if (Math.abs(totalDelta) > this.swipeThreshold) {
      const newDirection = totalDelta > 0 ? "right" : "left";
      console.log("Mouse swipe detected! Direction:", newDirection);
      this.changeDirection(newDirection);

      // Visual feedback
      this.showSwipeFeedback(newDirection);
    }

    // Reset drag state
    this.dragOffset = 0;
    this.velocity = 0;
    this.container.style.cursor = "grab";

    e.preventDefault();
  }

  showSwipeFeedback(direction) {
    const indicator = document.getElementById("statusIndicator");
    indicator.style.background =
      direction === "left"
        ? "rgba(255, 100, 100, 0.3)"
        : "rgba(100, 255, 100, 0.3)";
    indicator.textContent = `🖱️ Dragged ${direction.toUpperCase()}! Direction changed.`;

    setTimeout(() => {
      indicator.style.background = "rgba(0, 0, 0, 0.2)";
      this.updateStatus();
    }, 1500);
  }

  animate() {
    if (!this.isPaused) {
      const moveDistance =
        this.direction === "left" ? -this.currentSpeed : this.currentSpeed;
      this.position += moveDistance;

      // Reset position for infinite loop
      if (this.direction === "left" && this.position <= -this.contentWidth) {
        this.position = 0;
      } else if (this.direction === "right" && this.position >= 0) {
        this.position = -this.contentWidth;
      }

      // Apply drag offset during dragging
      const finalPosition = this.position + this.dragOffset;
      this.content.style.transform = `translateX(${finalPosition}px)`;
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  startAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.position = this.direction === "left" ? 0 : -this.contentWidth;
    this.animate();
  }

  changeDirection(dir) {
    if (this.direction === dir) return;

    this.direction = dir;
    console.log("Direction changed to:", dir);

    // Smooth transition to new direction
    if (dir === "right" && this.position < -this.contentWidth) {
      this.position =
        -this.contentWidth + (Math.abs(this.position) % this.contentWidth);
    } else if (dir === "left" && this.position > 0) {
      this.position = -(this.position % this.contentWidth);
    }

    this.updateStatus();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    const btn = document.getElementById("pauseBtn");
    btn.textContent = this.isPaused ? "▶ Play" : "⏸ Pause";
    console.log("Pause toggled:", this.isPaused);
    this.updateStatus();
  }

  changeSpeed(newSpeed) {
    this.baseSpeed = newSpeed;
    this.currentSpeed = newSpeed;
    console.log("Speed changed to:", newSpeed);
    this.updateStatus();
  }

  updateStatus() {
    const indicator = document.getElementById("statusIndicator");
    const speedText =
      this.baseSpeed === 2
        ? "Fast"
        : this.baseSpeed === 0.5
        ? "Slow"
        : "Normal";
    const statusText = this.isPaused ? "Paused" : "Playing";
    indicator.textContent = `Direction: ${
      this.direction.charAt(0).toUpperCase() + this.direction.slice(1)
    } | Speed: ${speedText} | Status: ${statusText}`;
  }
}

// Initialize marquee
let marquee;

document.addEventListener("DOMContentLoaded", () => {
  marquee = new SmoothMarquee("marqueeContainer", "marqueeContent");
  console.log("Marquee initialized successfully");
});
