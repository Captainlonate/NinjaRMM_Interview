export const validateFormData = (formData) => {
  const errors = []

  if (formData?.system_name.trim()?.length === 0) {
    errors.push('System name is required.')
  }

  if (formData?.type?.value === 'default') {
    errors.push('Type is required.')
  }

  if (formData.hdd_capacity < 1) {
    errors.push('HDD Capacity (GB) is required.')
  }

  return errors
}