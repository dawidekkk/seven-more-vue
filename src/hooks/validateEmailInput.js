
import { computed } from "@vue/reactivity";
export default function useValidEmailInput(entered, enteredValidity) {

  const validateInput = () => {
    entered.value === '' || 
    entered.value <= 0 ||
    !entered.value.includes('@') ? 
    enteredValidity.value = 'invalid' : 
    enteredValidity.value = 'valid';
  }

  const valid = computed(() => {
    return enteredValidity.value === 'invalid';
  })

  return [validateInput, valid]
}