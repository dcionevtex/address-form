import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddressShapeWithValidation from '../propTypes/AddressShapeWithValidation'
import SelectLevel from './SelectLevel'
import SelectPostalCode from './SelectPostalCode'
import SubmitButton from './SubmitButton'

class ThreeLevels extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit && this.props.onSubmit()
  }

  render() {
    const {
      address,
      Button,
      rules,
      Input,
      loading,
      onChangeAddress,
      omitContainerElement,
      onSubmit,
      submitLabel,
    } = this.props

    if (Button && onSubmit) {
      return (
        <form
          className="vtex-address-form__threeLevels"
          onSubmit={this.handleSubmit}
        >
          <SelectLevel
            level={0}
            Input={Input}
            loading={loading}
            rules={rules}
            address={address}
            onChangeAddress={onChangeAddress}
          />
          <SelectLevel
            level={1}
            Input={Input}
            loading={loading}
            rules={rules}
            address={address}
            onChangeAddress={onChangeAddress}
          />
          <SelectPostalCode
            Input={Input}
            loading={loading}
            rules={rules}
            address={address}
            onChangeAddress={onChangeAddress}
          />
          <SubmitButton Button={Button} buttonLabel={submitLabel} />
        </form>
      )
    }

    const content = (
      <>
        <SelectLevel
          level={0}
          Input={Input}
          loading={loading}
          rules={rules}
          address={address}
          onChangeAddress={onChangeAddress}
        />
        <SelectLevel
          level={1}
          Input={Input}
          loading={loading}
          rules={rules}
          address={address}
          onChangeAddress={onChangeAddress}
        />
        <SelectPostalCode
          Input={Input}
          loading={loading}
          rules={rules}
          address={address}
          onChangeAddress={onChangeAddress}
        />
      </>
    )

    return omitContainerElement ? content : <div>{content}</div>
  }
}

ThreeLevels.defaultProps = {
  omitContainerElement: false,
}

ThreeLevels.propTypes = {
  address: AddressShapeWithValidation,
  Button: PropTypes.func,
  loading: PropTypes.func,
  Input: PropTypes.func.isRequired,
  onChangeAddress: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  rules: PropTypes.object.isRequired,
  submitLabel: PropTypes.string,
  omitContainerElement: PropTypes.bool,
}

export default ThreeLevels
