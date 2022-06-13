const style = {
  background: '#fff',
  color: '#f42f4a',
  border: '1px solid #f42f4a',
  display: {
    xs: 'flex',
    md: 'inline-flex'
  },
  m: '0 auto',
  fontWeight: '600',
  fontSize: '1rem',
  borderRadius: '25px',
  transition: 'all 500ms',
  boxShadow: `0px 3px 1px -2px rgba(245, 115, 66, 0.2),
    0px 2px 2px 0px rgba(245, 115, 66, 0.14),
    0px 1px 5px 0px rgba(245, 115, 66, 0.12)`,

  ':hover': {
    background: 'linear-gradient(to right, #f42f4a, #f57342, #f5b139)',
    boxShadow: 'rgba(245, 115, 66, 0.2) 0px 8px 24px',
    border: '1px solid #fff',
    color: '#fff',
    '.icon-box': {
      background: '#fff',
      svg: {
        fill: '#f42f4a'
      }
    }
  },

  '.icon-box': {
    borderRadius: '50%',
    background: 'linear-gradient(to right, #f42f4a, #f57342, #f5b139)',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 500ms',
    ml: '10px',
    p: '6px',
    
    svg: {
      fill: '#fff',
    }
  }
}

export default style