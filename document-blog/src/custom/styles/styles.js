import { css } from '@emotion/react';

const customStyles = css`
  .dark .sidebarTitle{
    background-color: #001934;
    color: white;
  }
  .sidebarTitle{
    background-color: white;
    color: #001934;
    box-shadow: -1px 0px 4px 1px rgb(175 158 232 / 40%);
  }
  .navBarHeader a img{
    height: 30px;
    width: 30px;
  }
  .navBarHeader .headerTitle{
    margin-top: 0;
  }
`;

export const styles = [customStyles];
