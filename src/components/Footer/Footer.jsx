import {
  FooterWrapper,
  FooterMain,
  FooterCopyright,
  FooterGroup,
  FooterTitle,
  FooterCategoryTitle,
  FooterLink,
  FooterSubtitle,
  FooterList,
  FooterIconsList,
  FooterIcon,
} from './FooterStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <FooterGroup>
          <FooterTitle>Erzy Bot</FooterTitle>
          <FooterSubtitle>
            Skyrocket your Telegram channel growth
          </FooterSubtitle>
        </FooterGroup>
        <FooterGroup>
          <FooterCategoryTitle>Erzy</FooterCategoryTitle>
          <FooterList>
            <FooterLink href="#about">About us</FooterLink>
            <FooterLink href="#questions">
              Frequently asked questions
            </FooterLink>
          </FooterList>
        </FooterGroup>
        <FooterGroup>
          {' '}
          <FooterCategoryTitle>Connect with us</FooterCategoryTitle>
          <FooterIconsList>
            <FooterIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.66699H12.5C11.395 1.66699 10.3352 2.10598 9.55376 2.88738C8.77236 3.66878 8.33337 4.72859 8.33337 5.83366V8.33366H5.83337V11.667H8.33337V18.3337H11.6667V11.667H14.1667L15 8.33366H11.6667V5.83366C11.6667 5.61265 11.7545 5.40068 11.9108 5.2444C12.0671 5.08812 12.279 5.00033 12.5 5.00033H15V1.66699Z"
                  stroke="#F8FAFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FooterIcon>
            <FooterIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1557_29008)">
                  <path
                    d="M18.7834 5.34967C18.6844 4.95418 18.4828 4.59182 18.1989 4.29918C17.915 4.00654 17.559 3.794 17.1667 3.68301C15.7334 3.33301 10 3.33301 10 3.33301C10 3.33301 4.2667 3.33301 2.83336 3.71634C2.44107 3.82733 2.08501 4.03987 1.80115 4.33251C1.51729 4.62515 1.31569 4.98752 1.2167 5.38301C0.954374 6.83764 0.826059 8.31327 0.833362 9.79134C0.824012 11.2805 0.952335 12.7674 1.2167 14.233C1.32583 14.6162 1.53195 14.9648 1.81515 15.2451C2.09835 15.5254 2.44905 15.7279 2.83336 15.833C4.2667 16.2163 10 16.2163 10 16.2163C10 16.2163 15.7334 16.2163 17.1667 15.833C17.559 15.722 17.915 15.5095 18.1989 15.2168C18.4828 14.9242 18.6844 14.5618 18.7834 14.1663C19.0437 12.7227 19.172 11.2583 19.1667 9.79134C19.176 8.30214 19.0477 6.81526 18.7834 5.34967V5.34967Z"
                    stroke="#F8FAFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.125 12.5164L12.9167 9.79141L8.125 7.06641V12.5164Z"
                    stroke="#F8FAFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1557_29008">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </FooterIcon>
            <FooterIcon>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1667 1.49959C18.3687 2.06249 17.4851 2.49302 16.55 2.77459C16.0482 2.19752 15.3812 1.7885 14.6392 1.60286C13.8973 1.41722 13.1163 1.46392 12.4018 1.73664C11.6873 2.00935 11.0737 2.49493 10.6442 3.12769C10.2146 3.76045 9.98979 4.50987 10 5.27459V6.10792C8.53557 6.1459 7.08444 5.8211 5.77588 5.16246C4.46733 4.50382 3.34197 3.53179 2.50004 2.33292C2.50004 2.33292 -0.833292 9.83292 6.66671 13.1663C4.95048 14.3312 2.906 14.9154 0.833374 14.8329C8.33337 18.9996 17.5 14.8329 17.5 5.24959C17.4993 5.01747 17.477 4.78592 17.4334 4.55792C18.2839 3.71917 18.8841 2.66018 19.1667 1.49959V1.49959Z"
                  stroke="#F8FAFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FooterIcon>
          </FooterIconsList>
        </FooterGroup>
      </FooterMain>
      <FooterCopyright>
        <p>Copyright 2022 - Erzy</p>
        <p>Erzy is the perfect solution for channel promotion.</p>
      </FooterCopyright>
    </FooterWrapper>
  )
}
