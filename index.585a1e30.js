window.onload = ()=>{
    toggleNavbar();
    controlledTestimonialSlider();
    controlledWhatWeDoSlider();
    controlledOurTeamsSlider();
    infiniteSlider();
    responsingBgWithMouseMovement();
};
// Toggle Navbar
const toggleNavbar = ()=>{
    const navToggler = document.querySelector("#nav-toggler");
    const navMenu = document.querySelector("#mobile-menu");
    const navLinks = document.querySelectorAll("#mobile-menu a");
    // togglerClick function
    function togglerClick() {
        if (navMenu.classList.contains("block")) {
            navMenu.classList.remove("block");
            navMenu.classList.add("hidden");
        } else {
            navMenu.classList.remove("hidden");
            navMenu.classList.add("block");
        }
    }
    // navLinkClick function
    function navLinkClick() {
        if (navMenu.classList.contains("block")) navToggler.click();
    }
    navToggler.addEventListener("click", togglerClick);
    navLinks.forEach((elem)=>elem.addEventListener("click", navLinkClick));
};
const controlledTestimonialSlider = ()=>{
    let sliderBox = document.querySelector("#testimonial-slider");
    let tapToRightBtn = document.querySelector("#testimonial_next");
    let tapToLeftBtn = document.querySelector("#testimonial_prev");
    let tapToRightBtn_small = document.querySelector("#testimonial_next_small");
    let tapToLeftBtn_small = document.querySelector("#testimonial_prev_small");
    let testimonialGallery = document.getElementById("testimonial-gallery");
    if (!sliderBox || !tapToLeftBtn || !tapToRightBtn || !tapToLeftBtn_small || !tapToRightBtn_small || !testimonialGallery) console.warn("Some div with given Ids not found. So, couldnot initialize slider in testimonial section.");
    else {
        const childCount = sliderBox.childElementCount;
        const slideWidth = sliderBox.childNodes[1].getBoundingClientRect().width + 30;
        const containerWidth = testimonialGallery.getBoundingClientRect().width;
        const sliderWidth = childCount * slideWidth;
        sliderBox.style.width = `${sliderWidth}px`;
        sliderBox.style.left = "0px";
        function sliderNext() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            let nextLeftPosition1 = currentLeftPosition;
            let shiftValue = sliderWidth - Math.abs(currentLeftPosition) - containerWidth;
            if (sliderWidth > containerWidth && shiftValue > slideWidth) nextLeftPosition1 = currentLeftPosition - slideWidth;
            else if (sliderWidth > containerWidth) nextLeftPosition1 = currentLeftPosition - shiftValue;
            sliderBox.style.left = `${nextLeftPosition1}px`;
        }
        function sliderPrev() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            if (Math.abs(currentLeftPosition) > slideWidth) nextLeftPosition = currentLeftPosition + slideWidth;
            else nextLeftPosition = currentLeftPosition + Math.abs(currentLeftPosition);
            sliderBox.style.left = `${nextLeftPosition}px`;
        }
        tapToRightBtn.addEventListener("click", sliderNext);
        tapToLeftBtn.addEventListener("click", sliderPrev);
        tapToRightBtn_small.addEventListener("click", sliderNext);
        tapToLeftBtn_small.addEventListener("click", sliderPrev);
    }
};
const controlledWhatWeDoSlider = ()=>{
    let sliderBox = document.querySelector("#whatwedo-slider");
    let tapToRightBtn = document.querySelector("#whatwedo_next");
    let tapToLeftBtn = document.querySelector("#whatwedo_prev");
    let tapToRightBtn_small = document.querySelector("#whatwedo_next_small");
    let tapToLeftBtn_small = document.querySelector("#whatwedo_prev_small");
    let whatwedoGallery = document.getElementById("whatwedo-gallery");
    if (!sliderBox || !tapToLeftBtn || !tapToRightBtn || !tapToLeftBtn_small || !tapToRightBtn_small || !whatwedoGallery) console.warn("Some div with given Ids not found. So, couldnot initialize slider in whatwedo section.");
    else {
        const childCount = sliderBox.childElementCount;
        const slideWidth = sliderBox.childNodes[1].getBoundingClientRect().width + 30;
        const containerWidth = whatwedoGallery.getBoundingClientRect().width;
        const sliderWidth = childCount * slideWidth;
        sliderBox.style.width = `${sliderWidth}px`;
        sliderBox.style.left = "0px";
        function sliderNext() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            let nextLeftPosition1 = currentLeftPosition;
            let shiftValue = sliderWidth - Math.abs(currentLeftPosition) - containerWidth;
            if (sliderWidth > containerWidth && shiftValue > slideWidth) nextLeftPosition1 = currentLeftPosition - slideWidth;
            else if (sliderWidth > containerWidth) nextLeftPosition1 = currentLeftPosition - shiftValue;
            sliderBox.style.left = `${nextLeftPosition1}px`;
        }
        function sliderPrev() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            if (Math.abs(currentLeftPosition) > slideWidth) nextLeftPosition = currentLeftPosition + slideWidth;
            else nextLeftPosition = currentLeftPosition + Math.abs(currentLeftPosition);
            sliderBox.style.left = `${nextLeftPosition}px`;
        }
        tapToRightBtn.addEventListener("click", sliderNext);
        tapToLeftBtn.addEventListener("click", sliderPrev);
        tapToRightBtn_small.addEventListener("click", sliderNext);
        tapToLeftBtn_small.addEventListener("click", sliderPrev);
    }
};
const controlledOurTeamsSlider = ()=>{
    let sliderBox = document.querySelector("#ourteam-slider");
    let tapToRightBtn = document.querySelector("#ourteam_next");
    let tapToLeftBtn = document.querySelector("#ourteam_prev");
    let tapToRightBtn_small = document.querySelector("#ourteam_next_small");
    let tapToLeftBtn_small = document.querySelector("#ourteam_prev_small");
    let ourteamGallery = document.getElementById("ourteam-gallery");
    if (!sliderBox || !tapToLeftBtn || !tapToRightBtn || !tapToLeftBtn_small || !tapToRightBtn_small || !ourteamGallery) console.warn("Some div with given Ids not found. So, couldnot initialize slider in ourteam section.");
    else {
        const childCount = sliderBox.childElementCount;
        const slideWidth = sliderBox.childNodes[1].getBoundingClientRect().width + 30;
        const containerWidth = ourteamGallery.getBoundingClientRect().width;
        const sliderWidth = childCount * slideWidth;
        sliderBox.style.width = `${sliderWidth}px`;
        sliderBox.style.left = "0px";
        function sliderNext() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            let nextLeftPosition1 = currentLeftPosition;
            let shiftValue = sliderWidth - Math.abs(currentLeftPosition) - containerWidth;
            if (sliderWidth > containerWidth && shiftValue > slideWidth) nextLeftPosition1 = currentLeftPosition - slideWidth;
            else if (sliderWidth > containerWidth) nextLeftPosition1 = currentLeftPosition - shiftValue;
            sliderBox.style.left = `${nextLeftPosition1}px`;
        }
        function sliderPrev() {
            let currentLeftPosition = sliderBox.style.left ? parseFloat(sliderBox.style.left.replace("px", "")) : 0;
            if (Math.abs(currentLeftPosition) > slideWidth) nextLeftPosition = currentLeftPosition + slideWidth;
            else nextLeftPosition = currentLeftPosition + Math.abs(currentLeftPosition);
            sliderBox.style.left = `${nextLeftPosition}px`;
        }
        tapToRightBtn.addEventListener("click", sliderNext);
        tapToLeftBtn.addEventListener("click", sliderPrev);
        tapToRightBtn_small.addEventListener("click", sliderNext);
        tapToLeftBtn_small.addEventListener("click", sliderPrev);
    }
};
const infiniteSlider = ()=>{
    const scrollerWrapper = document.querySelector("#hire-slider");
    const scrollerInner = document.querySelector("#hire-slider-inner");
    if (!scrollerWrapper || !scrollerInner) console.warn("Some div with given Ids not found. So, couldnot initialize infinite carousel in hire us section.");
    else {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerWrapper.style.setProperty("--card-count", scrollerContent.length);
        const wrapperWidth = scrollerWrapper.getBoundingClientRect().width;
        const scrollerWidth = scrollerInner.getBoundingClientRect().width;
        if (wrapperWidth > scrollerWidth) {
            scrollerWrapper.classList.remove("gradient-hire-us");
            scrollerInner.classList.remove("animate-hire-us");
            scrollerInner.style.margin = "auto";
            scrollerInner.style.paddingLeft = "40px";
        } else {
            scrollerWrapper.classList.add("gradient-hire-us");
            scrollerInner.classList.add("animate-hire-us");
            scrollerContent.forEach((item)=>{
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }
};
const responsingBgWithMouseMovement = ()=>{
    var xpFirst = 0, mouseX = 0;
    var ypFirst = 0, mouseY = 0;
    var xpSecond = 0, mouseX = 0;
    var ypSecond = 0, mouseY = 0;
    var xpThird = 0, mouseX = 0;
    var ypThird = 0, mouseY = 0;
    const cursorFollowerFirst = document.querySelector(".cursorFollowerFirst");
    const cursorFollowerSecond = document.querySelector(".cursorFollowerSecond");
    const cursorFollowerThird = document.querySelector(".cursorFollowerThird");
    document.addEventListener("mousemove", (e)=>{
        mouseX = e.screenX;
        mouseY = e.screenY;
    });
    setInterval(function() {
        xpFirst += (mouseX - xpFirst) / 60;
        ypFirst += (mouseY - ypFirst) / 60;
        cursorFollowerFirst.style.left = xpFirst + "px";
        cursorFollowerFirst.style.top = ypFirst + "px";
    }, 20);
    setInterval(function() {
        xpSecond += (mouseX - xpSecond) / 80;
        ypSecond += (mouseY - ypSecond) / 80;
        cursorFollowerSecond.style.left = xpSecond + "px";
        cursorFollowerSecond.style.top = ypSecond + "px";
    }, 20);
    setInterval(function() {
        xpThird += (mouseX - xpThird) / 85;
        ypThird += (mouseY - ypThird) / 85;
        cursorFollowerThird.style.left = xpThird + "px";
        cursorFollowerThird.style.top = ypThird + "px";
    }, 20);
};

//# sourceMappingURL=index.585a1e30.js.map
