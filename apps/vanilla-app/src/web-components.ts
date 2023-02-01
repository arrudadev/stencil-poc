export function init () {
  let name = 'Vanilla Js';

  function changeName (event: any) {
    const value = event.detail

    document.querySelector('#my-component')?.setAttribute('name', value)
  }

  document.querySelector('#my-component')?.setAttribute('name', name)
  document.querySelector('#my-input')?.addEventListener('changeInput', changeName)
}


init()
