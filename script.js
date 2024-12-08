// ANIMATION WHEN HOVER ON #navbarMenu

const missionOnNavbar = document.querySelector('#mission');
const mission_dropdown = document.querySelector('#mission_dropdown');
const navbar = document.querySelector('#navbar');
const studio_dropdown = document.querySelector('#studio_dropdown');
const studioOnNavbar = document.querySelector("#studio");
const community = document.querySelector('#community');
const video = document.querySelector('video');
console.log(video);
video.pause();

const missionOnNavbarGsap = gsap.to('#mission_dropdown', {
    display: "block",
    y: 20,
    opacity: 1,
    duration: 0.4,
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
    duration: 0.4,
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
    let text_split = e.textContent.split(" ");
    let text_add = "";
    text_split.forEach((x, i) => text_add += `<span>${x}</span>${i < text_split.length - 1 ? " " : ""}`);
    e.innerHTML = text_add;

};

split_text(erthos_studio_page3);

gsap.from("#texts_on_page3 p span", {
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
gsap.from('#page4_header span', {
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
gsap.from('#section_header_page5 span', {
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
gsap.from('#loading_screen_text p span', {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 2,
    ease: "elastic.out(0.1, 0.09)",
    delay: 0.3,
})

document.body.style.overflow = "hidden";
window.addEventListener("load", (e) => {
    if (e.timeStamp > 1800) {
        console.log("1");
        setTimeout(() => {
            loading_screen.remove();
        }, 500);
        gsap.to('#loading_screen', {
            opacity: 0,
            duration: 0.5
        })
        video.play();
        document.body.style.overflow = "visible";
    } else {
        console.log("2");
        setTimeout(() => {
            gsap.to('#loading_screen', {
                opacity: 0,
                duration: 1
            })
            document.body.style.overflow = "scroll";
            video.play();
        }, 1800);
        setTimeout(() => {
            loading_screen.remove();
        }, 2300);
    }
});


//MEDIA QUERRY FOR UNDER 1000PX

//FOR NAVBAR MENU LINE BAR ROTATION
const bar2lines_line1 = document.querySelector("#line1");
const bar2lines_line2 = document.querySelector("#line2");
const menu2bar = document.querySelector('#menu2bar')
let countForNavbarMenuToggleRotation = 1;

const bar2lines_line1_rotation = gsap.to(bar2lines_line1, {
    rotation: -38,
    duration: 0.3,
});
bar2lines_line1_rotation.pause();
const bar2lines_line2_rotation = gsap.to(bar2lines_line2, {
    rotation: 38,
    duration: 0.3,
})
bar2lines_line2_rotation.pause();

//FOR MENU DROP DOWN OPTION

const menu2bar_option_page = document.querySelector('#menu2bar_option_page');
const menu2bar_option_page_duplicate = document.querySelector('#menu2bar_option_page');
const menu2bar_option_page_gsap = gsap.to( menu2bar_option_page, {
    opacity: 1,
    y: 20,
    duration: 0.2
})
menu2bar_option_page_gsap.pause();

menu2bar.addEventListener('click', ()=>{
    console.log("hello");
    
    countForNavbarMenuToggleRotation++;

    if(countForNavbarMenuToggleRotation % 2 == 0){
        menu2bar_option_page.style.pointerEvents = 'auto';
        bar2lines_line2_rotation.play();
        bar2lines_line1_rotation.play();
        
        //ADDING THE menu2bar_option_page ELEMENT
        navbar.appendChild(menu2bar_option_page_duplicate);
        menu2bar_option_page_gsap.play();
        
    } else{
        menu2bar_option_page.style.pointerEvents = 'none';
        bar2lines_line1_rotation.reverse();
        bar2lines_line2_rotation.reverse();

        //REMOVE THE menu2bar_option_page ELEMENT

        setTimeout(() => {
            menu2bar_option_page.remove();
        }, 200);
        menu2bar_option_page_gsap.reverse();
    }
    
})

//FOR MENU DROP DOWN OPTION

//TO EXPAND THE MISSION & STUDIO OPTION 

//MISSION
const media_menu2bar_option_page_mission = document.querySelector('#media_menu2bar_option_page_mission');
const media_menu2bar_option_page_mission_p = document.querySelector('#media_menu2bar_option_page_mission p');

//STUDIO
const media_menu2bar_option_page_studio = document.querySelector('#media_menu2bar_option_page_studio');
const media_menu2bar_option_page_studio_p = document.querySelector('#media_menu2bar_option_page_studio p');

const media_menu2bar_option_page_mission_gsap = gsap.to(media_menu2bar_option_page_mission, {
    height: '9rem',
    duration: 0.2,
    ease: "none"
})
const media_menu2bar_option_page_studio_gsap = gsap.to(media_menu2bar_option_page_studio, {
    height: '13rem',
    duration: 0.25,
    ease: "none"
})
media_menu2bar_option_page_mission_gsap.pause();
media_menu2bar_option_page_studio_gsap.pause();

let countForMissionButtonExpansionOnTheDropDownNavbarMenu = 1;
let countForStudioButtonExpansionOnTheDropDownNavbarMenu = 1;

media_menu2bar_option_page_mission_p.addEventListener('click', ()=>{
    countForMissionButtonExpansionOnTheDropDownNavbarMenu++;
    if(countForMissionButtonExpansionOnTheDropDownNavbarMenu % 2 == 0){
        media_menu2bar_option_page_mission_gsap.play();
}
    else{
        media_menu2bar_option_page_mission_gsap.reverse();
    }
})

media_menu2bar_option_page_studio_p.addEventListener('click', ()=>{
    countForStudioButtonExpansionOnTheDropDownNavbarMenu++;
    if(countForStudioButtonExpansionOnTheDropDownNavbarMenu % 2 == 0){
        media_menu2bar_option_page_studio_gsap.play();
}
    else{
        media_menu2bar_option_page_studio_gsap.reverse();
    }
})