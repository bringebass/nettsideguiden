/* Selectors */

const showDropdownFirstBox = document.querySelector('.showDropdownFirstBox');
const DropdownFirstBox = document.querySelector('.dropdown-first-box');
const showDropdownSecondBox = document.querySelector('.showDropdownSecondBox');
const DropdownSecondBox = document.querySelector('.dropdown-second-box');
const showDropdownThirdBox = document.querySelector('.showDropdownThirdBox');
const DropdownThirdBox = document.querySelector('.dropdown-third-box');
const showDropdownFourthBox = document.querySelector('.showDropdownFourthBox');
const DropdownFourthBox = document.querySelector('.dropdown-fourth-box');
const showDropdownFiftBox = document.querySelector('.showDropdownFiftBox');
const DropdownFiftBox = document.querySelector('.dropdown-fift-box');


const ting = document.querySelector('.ting');

/*test*/



/* Show dropdowns */

function showDropdowns (c, b) {
c.addEventListener("click", () => {
    b.classList.toggle("show");
    ting.classList.toggle("rotate");

}
)};

showDropdowns (showDropdownFirstBox, DropdownFirstBox);
showDropdowns (showDropdownSecondBox, DropdownSecondBox);
showDropdowns (showDropdownThirdBox, DropdownThirdBox);
showDropdowns (showDropdownFourthBox, DropdownFourthBox);
showDropdowns (showDropdownFiftBox, DropdownFiftBox);

