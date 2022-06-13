const style = {
  comments: {
    p: '2rem',
    borderRadius: '1rem',
    mb: '2rem',
    transition: 'all 500ms',
    boxShadow: `0px 2px 1px -1px rgba(245, 115, 66, 0.2),
      0px 1px 1px 0px rgba(245, 115, 66, 0.14),
      0px 1px 3px 0px rgba(245, 115, 66, 0.12)`,

    ':hover': {
      boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
      cursor: 'pointer',
    },

    '.widget-title': {
      fontSize: '1.5rem',
      fontWeight: '600',
      pb: '1rem',
      mb: '2rem',
      borderBottom: '1px solid lightgray',
    },

    '.content': {
      mb: '1rem',

      '.comment-author': {
        span: {
          fontSize: '1.25rem',
          fontWeight: '600',
          mr: '0.5rem',
        }
      }
    }
  }
}

export default style