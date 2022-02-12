// .dumi/theme/layout.tsx(本地主题) 或 src/layout.tsx(主题包)
import React from 'react';
import Layout from 'dumi-theme-default/es/layout';
import './layout.less';

export default Layout;

// export default ({ children, ...props }) => (
//   <Layout {...props}>
//     <>
//       <button>反馈</button>
//       {children}
//     </>
//   </Layout>
// );
