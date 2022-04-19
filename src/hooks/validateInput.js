
import { computed } from "@vue/reactivity";
export default function useValidateInput(entered, enteredValidity) {

  const validateInput = () => {
    entered.value.trim() === '' ? enteredValidity.value = 'invalid' : enteredValidity.value = 'valid';
  }

  const valid = computed(() => {
    return enteredValidity.value === 'invalid';
  })

  return [validateInput, valid]
}