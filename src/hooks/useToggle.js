export default function useToggle(toggle) {

  const toggleBox = () => {
    toggle.value = !toggle.value;
  }

  return [toggleBox]
}