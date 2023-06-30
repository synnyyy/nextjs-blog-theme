export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Synergy Networks';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'For exploiters, by exploiters.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'ALL RIGHTS RESERVED.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
