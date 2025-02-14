const studentFullName="Bito Babu";
const studentNumber="1194574";
const result=`${studentFullName},${studentNumber}`;
console.log(result);
const headerContent = document.querySelector("h1");
console.log(headerContent.textContent);
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
headerContent.classList.add("headingPrimary");