export function updateBtnContainerStyles() {
  let btnContainer = Array.from(document.getElementsByClassName("sc-carousel__arrow-container"))
  window.addEventListener('resize', updateBtnContainerStyles);
  if (window.innerWidth > 1020) {
    btnContainer[0].style.marginLeft = '10vw'
    btnContainer[1].style.marginRight = '10vw'
  } else if (window.innerWidth <= 1020) {
    btnContainer[0].style.marginLeft = '0'
    btnContainer[1].style.marginRight = '0'
  }
}