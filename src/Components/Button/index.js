// library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// SCSS module
import style from './Button.module.scss';

const cx = classNames.bind(style);

// Idea: Create a library that allow custom styles of button.
// Button will receive 02 props type: style and logical
function Button({
  primary = false,
  outline = false,
  text = false,
  router = false,
  disabled = false,
  small = false,
  large = false,
  className, //trường hợp custom riêng
  leftIcon,
  rightIcon,
  to,
  href,
  children,
  onClick,
  ...passProps
}) {
  //tag name
  let Component = 'button';
  //class name
  const classes = cx('wrapper', {
    // class 'wrapper' is default
    // primary: primary,    --> tạo ra className: primary
    [className]: className, //trường hợp custom riêng
    primary,
    outline,
    text,
    router,
    disabled,
    small,
    large,
    leftIcon,
    rightIcon,
  });

  // ----logical props----
  const props = {
    onClick,
    // trường hợp muốn các props khác vd: target='_blank'
    ...passProps,
  };
  // disabled status: phải xử lý cả logic JS vì nếu mở F12 trên web thì vẫn có thể tạm thời xóa CSS
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  // handle 02 case use button like 'a' tag: use link of react-router-dom, use href
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
