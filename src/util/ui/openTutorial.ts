export const openTutorial = () => {
  ;(document.getElementById('tutorial') as HTMLDialogElement)?.showModal()
  document.getElementById('tutorial-content')?.scrollTo(0, 0)
}
