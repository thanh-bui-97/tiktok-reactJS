import classNames from 'classnames';
import { useState } from 'react';
import images from '~/assets/images';
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

export default Image;
