function getThisProp(this: { name: string }) {
  console.log(this.name)
}

function setDisabled(this: HTMLButtonElement) {
  this.disabled = true
}
