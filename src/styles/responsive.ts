import { css } from 'styled-components';

export const mobile = (styles: any) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

export const tablet = (styles: any) => css`
  @media (min-width: 769px) and (max-width: 1024px) {
    ${styles}
  }
`;

export const desktop = (styles: any) => css`
  @media (min-width: 1025px) {
    ${styles}
  }
`;

export const largeDesktop = (styles: any) => css`
  @media (min-width: 1440px) {
    ${styles}
  }
`;

export const mobileFirst = (styles: any) => css`
  @media (min-width: 320px) {
    ${styles}
  }
`;

export const tabletUp = (styles: any) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;

export const desktopUp = (styles: any) => css`
  @media (min-width: 1024px) {
    ${styles}
  }
`;
