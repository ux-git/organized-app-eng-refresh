import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconLoading = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2740_38970"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2740_38970)">
          <path
            d="M11.9969 21.5C10.6964 21.5 9.4687 21.2508 8.31385 20.7525C7.159 20.2541 6.15048 19.5739 5.28828 18.7117C4.42609 17.8495 3.74583 16.841 3.2475 15.6861C2.74917 14.5313 2.5 13.3036 2.5 12.003C2.5 10.6866 2.74968 9.45349 3.24905 8.30363C3.7484 7.15378 4.4282 6.14872 5.28845 5.28845C6.14872 4.4282 7.15742 3.7484 8.31455 3.24905C9.4717 2.74968 10.7002 2.5 12 2.5C12.2125 2.5 12.3906 2.57191 12.5343 2.71573C12.6781 2.85954 12.75 3.03774 12.75 3.25033C12.75 3.46293 12.6781 3.64102 12.5343 3.7846C12.3906 3.92818 12.2125 3.99998 12 3.99998C9.78331 3.99998 7.89581 4.77914 6.33748 6.33748C4.77914 7.89581 3.99998 9.78331 3.99998 12C3.99998 14.2166 4.77914 16.1041 6.33748 17.6625C7.89581 19.2208 9.78331 20 12 20C14.2166 20 16.1041 19.2208 17.6625 17.6625C19.2208 16.1041 20 14.2166 20 12C20 11.7872 20.0719 11.609 20.2157 11.4654C20.3595 11.3218 20.5377 11.25 20.7503 11.25C20.9629 11.25 21.141 11.3219 21.2846 11.4656C21.4282 11.6094 21.5 11.7875 21.5 12C21.5 13.2998 21.2503 14.5283 20.7509 15.6854C20.2516 16.8425 19.5718 17.8512 18.7115 18.7115C17.8512 19.5718 16.8462 20.2516 15.6963 20.7509C14.5465 21.2503 13.3133 21.5 11.9969 21.5Z"
            fill={color}
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconLoading.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconLoading;
