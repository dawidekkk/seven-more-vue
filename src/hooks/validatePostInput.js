
import { computed } from "@vue/reactivity";
export default function useValidPostInput(entered, enteredValidity) {

  const validateInput = () => {
    entered.value === '' || 
    entered.value <= 0 || 
    entered.value.length >= 6 || 
    entered.value.length < 5 || 
    entered.value === String ? 
    enteredValidity.value = 'invalid' : 
    enteredValidity.value = 'valid';
  }

  const valid = computed(() => {
    return enteredValidity.value === 'invalid';
  })

  return [validateInput, valid]
}