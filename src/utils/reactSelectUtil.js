import { theme as appTheme } from '@/styles/Theme'

const reactSelectTheme = (theme) => ({
  ...theme,
  outline: 'none',
  borderRadius: '5px',
  colors: {
    ...theme.colors,
    primary25: `${appTheme.colors.primaryColor}25`,
    primary: appTheme.colors.primaryColor,
  },
})

const reactSelectStyles = {
  control: (provided) => ({
    ...provided,
    border: `1px solid ${appTheme.colors.inputBorder}`,
    boxShadow: 'none',
    height: '3rem',
    padding: '0.5rem 1rem',
    '&:focus-within': {
      border: `1px solid ${appTheme.colors.primaryColor}`,
    }
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    fontSize: '1rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: 0,
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    cursor: 'text',
    gridTemplateColumns: '0 max-content',
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: `${appTheme.colors.textColor}88`,
    whiteSpace: 'nowrap',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: 0,
    '& [class$="indicatorContainer"]': {
      cursor: 'pointer',
      padding: '0',
      '&:last-child': {
        marginLeft: '5px',
        position: 'relative',
        height: '20px',
        svg: {
          width: '20px',
          height: '20px',
        },
      },
    },
    '& [class$="indicatorSeparator"]': {
      display: 'none',
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '0.85rem',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: `${appTheme.colors.primaryColor}25`,
    },
  }),
}

export const reactSelectUtil = {
  theme: reactSelectTheme,
  styles: reactSelectStyles,
}

export default reactSelectUtil
