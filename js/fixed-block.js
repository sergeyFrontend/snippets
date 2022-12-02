const fixedBlock = document.querySelector(".filters-price"),
  filters = document.querySelector(".filters"),
  container = document.querySelector(".container"),
  gutter = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--guter")),
  offetLeft = container.offsetLeft + gutter,
  filtersOffsetTop = filters.offsetTop,
  filtersWidth = filters.offsetWidth;
  smallOffset = gutter;

const fixedScrollBlock = () => {
  let scrollDistance = window.scrollY;

  if (
    scrollDistance > filtersOffsetTop - smallOffset &&
    scrollDistance <= filters.offsetHeight + filtersOffsetTop
  ) {
    fixedBlock.style.left = `${offetLeft}px`;
    fixedBlock.style.width = `${filtersWidth}px`;

    fixedBlock.classList.remove("absolue");

    fixedBlock.classList.add("fixed");
  } else {
    fixedBlock.style.left = `0px`;
    fixedBlock.style.width = `100%`;
    fixedBlock.classList.remove("fixed");
  }

  if (
    scrollDistance >=
    filtersOffsetTop -
      smallOffset +
      filters.offsetHeight -
      fixedBlock.offsetHeight
  ) {
    fixedBlock.style.width = `0px`;
    fixedBlock.classList.add("absolue");
    fixedBlock.style.left = `0px`;
    fixedBlock.classList.remove("fixed");
  }
};

window.addEventListener("scroll", fixedScrollBlock);
