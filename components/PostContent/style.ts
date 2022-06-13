const style = {
  postContent: {
    borderRadius: '1rem',
    mb: '2rem',
    p: {
      sm: '2rem'
    },

    '.featured-image': {
      mb: '2rem',

      img: {
        borderRadius: {
          xs: '1rem 1rem 0 0',
          sm: '1rem'
        },
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        transition: 'all 500ms',
        boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
      }
    },

    '.title': {
      fontSize: '2.25rem',
      fontWeight: '600',
      mb: '1.5rem',
    }
  }
}

export default style