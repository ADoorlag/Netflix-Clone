const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");
  //Grab Content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabContentItem.classList.add("show");
}

//remove border from inactive tab
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

//remove showclass from inactive tab
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

document.body.onload = trialPeriod();

function trialPeriod() {
  let today = new Date();

  let trialPeriod = new Date();
  trialPeriod.setDate(today.getDate() + 30);

  const days = trialPeriod.getDate();
  const month = trialPeriod.getMonth() + 1;
  const year = trialPeriod.getFullYear();

  const endtrialPeriod = month + "/" + days + "/" + year;

  const endTrialDate = document.getElementById("end-trial-date");
  endTrialDate.innerText = `Monthly price after free month ends on ${endtrialPeriod}`;
}
