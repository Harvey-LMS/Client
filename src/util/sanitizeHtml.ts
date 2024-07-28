import xss from "xss";

const sanitizeHtml = (dirty: string): string => {
  return xss(dirty);
};

export default sanitizeHtml;
