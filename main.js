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


const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const arrow4 = document.querySelector('.arrow4');
const arrow5 = document.querySelector('.arrow5');





/* Show dropdowns */

function showDropdowns (c, b, d) {
c.addEventListener("click", () => {
    b.classList.toggle("show");
    d.classList.toggle("rotate");

}
)};

showDropdowns (showDropdownFirstBox, DropdownFirstBox, arrow1);
showDropdowns (showDropdownSecondBox, DropdownSecondBox, arrow2);
showDropdowns (showDropdownThirdBox, DropdownThirdBox, arrow3);
showDropdowns (showDropdownFourthBox, DropdownFourthBox, arrow4);
showDropdowns (showDropdownFiftBox, DropdownFiftBox, arrow5);

