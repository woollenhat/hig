import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography as VanillaTypography } from "hig-vanilla";
import HIGAdapter, { MapsPropToMethod } from "./HIGAdapter";

export default class TypographyAdapter extends Component {
  render() {
    return (
      <HIGAdapter
        {...this.props}
        displayName="Typography"
        HIGConstructor={VanillaTypography}
      >
        {adapterProps => (
          <div>
            <MapsPropToMethod
              setter="setType"
              value={this.props.type}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setText"
              value={this.props.text}
              {...adapterProps}
            />
            <MapsPropToMethod
              setter="setSize"
              value={this.props.size}
              {...adapterProps}
            />
            <MapsPropToMethod value={this.props.bold} {...adapterProps}>
              {(instance, value) =>
                value ? instance.setBold() : instance.unsetBold()
              }
            </MapsPropToMethod>
          </div>
        )}
      </HIGAdapter>
    );
  }
}

TypographyAdapter.defaultProps = {
  size: "medium"
};

TypographyAdapter.propTypes = {
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * One of: 'small', 'medium', 'large'
   */
  size: PropTypes.string.isRequired,
  /**
   * One of: 'h1', 'h2', 'h3', 'sub1', 'sub2', 'body', 'bold', 'disabled', 'caption'
   */
  type: PropTypes.string.isRequired,
  /**
   * Styled or unstyled text to show inside the typography
   */
  text: PropTypes.string.isRequired
};
