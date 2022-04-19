
import { computed } from "@vue/reactivity";
export default function useValidPhoneInput(entered, enteredValidity) {

  const validateInput = () => {
    entered.value === '' || 
    entered.value <= 0 || 
    entered.value.length >= 14 || 
    entered.value.length < 9 || 
    entered.value === String ? 
    enteredValidity.value = 'invalid' : 
    enteredValidity.value = 'valid';
  }

  const valid = computed(() => {
    return enteredValidity.value === 'invalid';
  })

  return [validateInput, valid]
}