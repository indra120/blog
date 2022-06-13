const style = {
  postCard: {
    p: {
      sm: '2rem'
    },
    textAlign: 'center',
    borderRadius: '1rem',
    mb: '2rem',

    '.featured-image': {
      mb: '1rem',

      img: {
        borderRadius: {
          xs: '1rem 1rem 0 0',
          sm: '1rem'
        },
        width: '100%',
        height: '20rem',
        objectFit: 'cover',
        transition: 'all 500ms',

        ':hover': {
          cursor: 'pointer',
          boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
        },
      }
    },
    '.post-info': {
      gap: '1rem',
      p: '1rem',

      '.post-title': {
        fontSize: '2.25rem',
        fontWeight: 600
      },

      '.date-icon': {
        fill: '#f57342',
      },
      
      '.caption': {
        fontSize: '1rem',
      },
    },
  }
}

export default style