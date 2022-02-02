/* eslint-disable react/prop-types */
// https://codesandbox.io/s/react-select-v2-required-input-3xvvb
import React from 'react'
import PropTypes from 'prop-types'

const noop = () => {
  // no operation (do nothing real quick)
}

export class FixRequiredSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value || '',
    }

    this.selectRef = null
    this.setSelectRef = (ref) => {
      this.selectRef = ref
    }

    this.onChange = (value, actionMeta) => {
      this.props.onChange(value, actionMeta)
      this.setState({ value })
    }

    this.getValue = () => {
      if (this.props.value != undefined) return this.props.value
      return this.state.value || ''
    }
  }

  render() {
    const { SelectComponent, required, ...props } = this.props
    const { isDisabled } = this.props
    const enableRequired = !isDisabled

    return (
      <div style={{ position: 'relative' }}>
        <SelectComponent {...props} ref={this.setSelectRef} onChange={this.onChange} />
        {enableRequired && (
          <input
            tabIndex={-1}
            autoComplete="off"
            style={{
              opacity: 0,
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            value={this.getValue()}
            onChange={noop}
            onFocus={() => this.selectRef.focus()}
            required={required}
          />
        )}
      </div>
    )
  }
}

FixRequiredSelect.defaultProps = {
  onChange: noop,
}

FixRequiredSelect.protoTypes = {
  // react-select component class (e.g. Select, Creatable, Async)
  SelectComponent: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}

export default FixRequiredSelect
