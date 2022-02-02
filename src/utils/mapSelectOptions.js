/**
 * returns a mapped array with label and value keys
 *
 * @param {array} options an array of strings OR objects
 * @param {object} objectKeys { labelKey: string; valuekey: string }
 * @return {array} an array of objects with label and value
 */
export const mapSelectOptions = (options, objectKeys) => {
  return options.map((option) => {
    if (objectKeys) {
      const { labelKey, valuekey } = objectKeys
      return { ...option, label: option[labelKey], value: option[valuekey] }
    }
    return { label: option, value: option }
  })
}

export default mapSelectOptions
