function globalToggle(className) {
  const elements = document.querySelectorAll(`.${className}`);

  if (elements.length === 0) {
    console.log('No elements found')
    return;
  }

  const isActiveClass = className.endsWith('_active');

  elements.forEach(element => {
    if (isActiveClass) {
      element.classList.remove(className);
      element.classList.add(className.replace('_active', ''));
    } else {
      element.classList.remove(className);
      element.classList.add(`${className}_active`);
    }
  });
}
