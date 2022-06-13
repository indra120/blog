const style = {
  comments: {
    p: '2rem',
    borderRadius: '1rem',
    mb: '2rem',

    '.widget-title': {
      fontSize: '1.5rem',
      fontWeight: '600',
      pb: '1rem',
      mb: '2rem',
      borderBottom: '1px solid lightgray',
    },

    '.content': {
      mb: '1rem',
      p: '1rem',
      borderRadius: '1rem',
      transition: 'all 500ms',
      boxShadow: `0px 2px 1px -1px rgba(245, 115, 66, 0.2),
          0px 1px 1px 0px rgba(245, 115, 66, 0.14),
          0px 1px 3px 0px rgba(245, 115, 66, 0.12)`,

      ':hover': {
        boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
      },

      '.comment-author': {
        span: {
          fontSize: '1.25rem',
          fontWeight: '600',
          mr: '0.5rem',
          color: '#f57342'
        }
      }
    }
  }
}

export default style