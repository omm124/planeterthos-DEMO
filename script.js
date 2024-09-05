// ANIMATION WHEN HOVER ON #navbarMenu

const missionOnNavbar = document.querySelector('#mission');
const mission_dropdown = document.querySelector('#mission_dropdown');
const navbar = document.querySelector('#navbar');
const studio_dropdown = document.querySelector('#studio_dropdown');
const studioOnNavbar = document.querySelector("#studio");
const community = document.querySelector('#community');

const missionOnNavbarGsap = gsap.to('#mission_dropdown', {
    display: "block",
    y: 20,
    opacity: 1,
    duration: 0.15,
    ease: "power3.out",
});
const blurBGon1stPage = gsap.to('#page1 video', {
    filter: "blur(6px)",
    duration: 0.2
})

blurBGon1stPage.pause();

const studioOnNavbarGsap = gsap.to('#studio_dropdown', {
    display: "block",
    y: 20,
    opacity: 1,
    duration: 0.15,
    ease: "power3.out",
});

missionOnNavbarGsap.pause();
studioOnNavbarGsap.pause();

missionOnNavbar.addEventListener('mouseenter', () => {
    blurBGon1stPage.play();
    missionOnNavbarGsap.play();
    studioOnNavbarGsap.reverse();
    studioOnNavbarBGGsap.reverse();
    studioOnNavbarColorGsap.reverse();
})
mission_dropdown.addEventListener('mouseleave', () => {
    blurBGon1stPage.reverse();
    missionOnNavbarGsap.reverse();
    studioOnNavbarBGGsap.reverse();
    studioOnNavbarColorGsap.reverse();

})
const studioOnNavbarBGGsap = gsap.to('#navbar, #mission_dropdown', {
    backgroundColor: "black",
    duration: 0.3
});

studioOnNavbarBGGsap.pause();

const studioOnNavbarColorGsap = gsap.to('#navbarMenu button, #navbarMenu svg, #logo svg', {
    color: "white",
    fill: "white",
    duration: 0.3
});

studioOnNavbarColorGsap.pause();

studioOnNavbar.addEventListener('mouseenter', () => {
    blurBGon1stPage.play();
    studioOnNavbarBGGsap.play();
    studioOnNavbarColorGsap.play();
    studioOnNavbarGsap.play();
    missionOnNavbarGsap.reverse();
});
studioOnNavbar.addEventListener('mouseleave', () => {
    blurBGon1stPage.reverse();
    studioOnNavbarBGGsap.pause();
    studioOnNavbarColorGsap.pause();
    studioOnNavbarGsap.pause();
});
studio_dropdown.addEventListener('mouseleave', () => {
    blurBGon1stPage.reverse();
    studioOnNavbarBGGsap.reverse();
    studioOnNavbarColorGsap.reverse();
    studioOnNavbarGsap.reverse();
});
community.addEventListener('mouseenter', () => {
    studioOnNavbarBGGsap.reverse();
    studioOnNavbarColorGsap.reverse();
    studioOnNavbarGsap.reverse();
    missionOnNavbarGsap.reverse();

});


// PAGE 2

//SCALING THE PAGE 2 IMAGE ON SCROLL

gsap.from('#page2_image', {
    scale: 0.6,
    duration: 5,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 100%",
        end: "top 0",
        scrub: 1
    }
});

//BUTTON ANIMATION ON PAGE 2

gsap.from('#explore_our_mission_page2_bottom', {
    y: 120,
    duration: 0.5,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 75%",
        end: "top -75%",
        toggleActions: "restart reverse restart reverse",
        onLeave: () => {
            gsap.to('#explore_our_mission_page2_bottom', {
                y: 0,
                duration: 0.5,
                ease: "steps(1)"
            });
        },
        onEnterBack: () => {
            gsap.to('#explore_our_mission_page2_bottom', {
                y: 0,
                duration: 1,
                ease: "steps(1)"
            })
        }
    }

})

gsap.from('#explore_our_mission_page2_bottom', {
    width: "3rem",
    duration: 0.5,
    delay: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 75%",
        end: "top -75%",
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.to("#explore_our_mission_page2_bottom span", {
    backgroundColor: "transparent",
    delay: 1,
    duration: 0.2,
    ease: "steps(1)",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 75%",
        end: "top -75%",
        toggleActions: "restart reverse restart reverse",
    }
})

// PAGE 3

// SPLIT TEXT ANIMATION

const erthos_studio_page3 = document.querySelector("#texts_on_page3 p");

function split_text(e) {
    let text_split =  e.textContent.split(" ");
    let text_add = "";
    text_split.forEach((x, i) => text_add += `<span>${x}</span>${i < text_split.length - 1 ? " " : ""}`);
    e.innerHTML = text_add;

};

split_text(erthos_studio_page3);

gsap.from( "#texts_on_page3 p span", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 2,
    ease: "elastic.out(0.1,0.09)",
    delay: 0.5,
    scrollTrigger: {
        trigger: "#page3",
        start: "top 50%",
        end: "top 0"
    }
})


//BUTTON ANIMATION ON PAGE3

gsap.from('#explore_our_mission_page3_bottom', {
    y: 120,
    duration: 0.5,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page3",
        start: "top 85%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
        onLeave: () => {
            gsap.to('#explore_our_mission_page3_bottom', {
                y: 0,
                duration: 0.5,
                ease: "steps(1)"
            });
        },
        onEnterBack: () => {
            gsap.to('#explore_our_mission_page3_bottom', {
                y: 0,
                duration: 1,
                ease: "steps(1)"
            })
        }
    }

})

gsap.from('#explore_our_mission_page3_bottom', {
    width: "3rem",
    duration: 0.5,
    delay: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page3",
        start: "top 85%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.to("#explore_our_mission_page3_bottom span", {
    backgroundColor: "transparent",
    delay: 1,
    duration: 0.2,
    ease: "steps(1)",
    scrollTrigger: {
        trigger: "#page3",
        start: "top 85%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

// PAGE 4
// PAGE 4 BUTTON

gsap.from('#explore_our_mission_page4_bottom', {
    y: 120,
    duration: 0.5,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: "#page4",
        start: "top 45%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
        onLeave: () => {
            gsap.to('#explore_our_mission_page4_bottom', {
                y: 0,
                duration: 0.5,
                ease: "steps(1)"
            });
        },
        onEnterBack: () => {
            gsap.to('#explore_our_mission_page4_bottom', {
                y: 0,
                duration: 1,
                ease: "steps(1)"
            })
        }
    }

})

gsap.from('#explore_our_mission_page4_bottom', {
    width: "3rem",
    duration: 0.5,
    delay: 1,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: "#page4",
        start: "top 45%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.to("#explore_our_mission_page4_bottom span", {
    backgroundColor: "transparent",
    delay: 1,
    duration: 0.2,
    ease: "steps(1)",
    scrollTrigger: {
        // markers: true,
        trigger: "#page4",
        start: "top 45%",
        end: "top -75%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

// PAGE 4 SWIPPER JS

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
      spaceBetween: 100,
  });

// PAGE 4 STAGGER ANIMATION
const our_technology_page4 = document.querySelector('#page4_header h1');

split_text(our_technology_page4);
gsap.from( '#page4_header span', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "elastic.out(0.1, 0.09)",
    delay: 0.5,
    scrollTrigger: {
        trigger: "#page4",
        start: "top 70%",
        end: "top 0",
        
    }
})


// PAGE5 STAGGER ANIMATION

const our_featured_work_page5 = document.querySelector('#section_header_page5 h2');

split_text(our_featured_work_page5);
gsap.from( '#section_header_page5 span', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "elastic.out(0.1, 0.09)",
    delay: 0.5,
    scrollTrigger: {
        trigger: "#page5",
        start: "top 70%",
        end: "top 0",
        
    }
})

// PAGE 5 BUTTON ANIMATION

gsap.from('#explore_our_mission_page5_bottom', {
    y: 120,
    duration: 0.5,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: "#page5",
        start: "top 45%",
        end: "top -190%",
        
        toggleActions: "restart reverse restart reverse",
        onLeave: () => {
            gsap.to('#explore_our_mission_page5_bottom', {
                y: 0,
                duration: 0.5,
                ease: "steps(1)"
            });
        },
        onEnterBack: () => {
            gsap.to('#explore_our_mission_page5_bottom', {
                y: 0,
                duration: 1,
                ease: "steps(1)"
            })
        }
    }

})

gsap.from('#explore_our_mission_page5_bottom', {
    width: "3rem",
    duration: 0.5,
    delay: 1,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: "#page5",
        start: "top 45%",
        end: "top -190%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.to("#explore_our_mission_page5_bottom span", {
    backgroundColor: "transparent",
    delay: 1,
    duration: 0.2,
    ease: "steps(1)",
    scrollTrigger: {
        // markers: true,
        trigger: "#page5",
        start: "top 45%",
        end: "top -190%",
        
        toggleActions: "restart reverse restart reverse",
    }
})

// STARTING LOADING ANIMATION
const loading_screen = document.querySelector("#loading_screen");
const loading_screen_text = document.querySelector("#loading_screen_text p");

split_text(loading_screen_text);
gsap.from( '#loading_screen_text p span', {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 2,
    ease: "elastic.out(0.1, 0.09)",
    delay: 0.3,
})

window.addEventListener("load", (e)=> {
    console.log(e);
    const [navigation] = performance.getEntriesByType("navigation");
    const loadTime = navigation.loadEventEnd - navigation.startTime;
    console.log(`Page load time: ${loadTime} ms`);
    setInterval(() => {
        
        loading_screen.remove();
    }, 1500);
})

