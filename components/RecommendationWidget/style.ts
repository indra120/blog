const style = {
  recommendationWidget: {
    p: '2rem',
    borderRadius: '1rem',

    '.widget-title': {
      fontSize: '1.5rem',
      fontWeight: 600,
      pb: '1rem',
      mb: '2rem',
      borderBottom: '1px solid lightgray',
    },

    '.posts': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',

      '.recommendation': {
        p: '1rem',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: 'all 500ms',
        boxShadow: `0px 2px 1px -1px rgba(245, 115, 66, 0.2),
          0px 1px 1px 0px rgba(245, 115, 66, 0.14),
          0px 1px 3px 0px rgba(245, 115, 66, 0.12)`,

        ':hover': {
          boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
          cursor: 'pointer',
        },

        '.image': {
          width: '60px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '50%',
        },

        '.info': {
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 300,

          '.date': {
            opacity: '0.6',
            fontSize: '0.8rem',
          }
        }
      }
    }
  }
}

export default style