import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import SelectLevel from './SelectLevel'
import SelectPostalCode from './SelectPostalCode'
import SubmitButton from './SubmitButton'
import { addressContextPropTypes } from '../addressContainerContext'

class TwoLevels extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit && this.props.onSubmit()
  }

  render() {
    const {
      address,
      rules,
      fieldsStyleRules,
      Input,
      loading,
      onChangeAddress,
      omitContainerElement,
      onSubmit,
      submitLabel,
      Button,
    } = this.props

    if (Button && onSubmit) {
      return (
        <form
          className="vtex-address-form__twoLevels"
          onSubmit={this.handleSubmit}
        >
          <SelectLevel
            level={0}
            Input={Input}
            loading={loading}
            rules={rules}
            fieldsStyleRules={fieldsStyleRules}
            address={address}
            onChangeAddress={onChangeAddress}
          />
          <SelectPostalCode
            Input={Input}
            loading={loading}
            rules={rules}
            fieldsStyleRules={fieldsStyleRules}
            address={address}
            onChangeAddress={onChangeAddress}
          />
          <SubmitButton Button={Button} buttonLabel={submitLabel} />
        </form>
      )
    }

    const content = (
      <Fragment>
        <SelectLevel
          level={0}
          Input={Input}
          loading={loading}
          rules={rules}
          fieldsStyleRules={fieldsStyleRules}
          address={address}
          onChangeAddress={onChangeAddress}
        />
        <SelectPostalCode
          Input={Input}
          loading={loading}
          rules={rules}
          fieldsStyleRules={fieldsStyleRules}
          address={address}
          onChangeAddress={onChangeAddress}
        />
      </Fragment>
    )

    return omitContainerElement ? content : <div>{content}</div>
  }
}

TwoLevels.defaultProps = {
  omitContainerElement: false,
}

TwoLevels.propTypes = {
  ...addressContextPropTypes,
  Button: PropTypes.func,
  loading: PropTypes.bool,
  Input: PropTypes.func.isRequired,
  onChangeAddress: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  rules: PropTypes.object.isRequired,
  submitLabel: PropTypes.string,
  omitContainerElement: PropTypes.bool,
}

export default TwoLevels
