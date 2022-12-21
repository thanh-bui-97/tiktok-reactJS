// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';
// assets
import images from '~/assets/images';
// SCSS module
import styles from './Images.module.scss';

function Image({ src, alt, className, fallBack: customFallBack = images.noImages, ...props }) {
  const [fallBack, setFallback] = useState('');
  function handleError() {
    setFallback(customFallBack);
  }

  return (
    <img
      className={classNames(styles.wrapper, className)} //vừa có thể style từ ngoài, vừa có thể style trong đây
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

// set rules for props of components
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBack: PropTypes.string,
};

export default Image;
