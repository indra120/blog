import { Typography } from '@mui/material'
import { Fragment } from 'react'

export default function getContentFragment(
  index: number,
  text: any,
  obj: {
    children: {
      text: string
    }[]
    type: string
    bold: any
    italic: any
    underline: any
    title: string
    height: string
    width: string
    src: string
  },
  type: string
) {
  let modifiedText = text

  if (obj) {
    if (obj.bold)
      modifiedText = (
        <Typography fontWeight={600} key={index}>
          {text}
        </Typography>
      )

    if (obj.italic)
      modifiedText = (
        <Typography fontStyle="italic" key={index}>
          {text}
        </Typography>
      )

    if (obj.underline)
      modifiedText = (
        <Typography sx={{ textDecoration: 'underline' }} key={index}>
          {text}
        </Typography>
      )
  }

  switch (type) {
    case 'heading-three':
      return (
        <Typography
          key={index}
          variant="h3"
          fontSize="1.75rem"
          sx={{ mb: '1rem' }}
        >
          {modifiedText.map((item: any, i: number) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </Typography>
      )

    case 'heading-four':
      return (
        <Typography key={index} variant="h4" fontSize="1.5rem" sx={{ mb: '1rem' }}>
          {modifiedText.map((item: any, i: number) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </Typography>
      )

    case 'paragraph':
      return (
        <Typography key={index} variant="body1" sx={{ mb: '1rem' }}>
          {modifiedText.map((item: any, i: number) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </Typography>
      )

    case 'image':
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      )

    default:
      return modifiedText
  }
}
